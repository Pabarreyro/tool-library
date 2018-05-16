from decimal import Decimal
import datetime

from django.db import models
from django.contrib.auth import get_user_model
from django.db.models.signals import pre_save, m2m_changed

from tools.models import Tool

User = get_user_model()


class CartManager(models.Manager):
  def new(self, user=None):
    user_obj = None
    if user is not None:
      if user.is_authenticated():
        user_obj = user
    return self.model.objects.create(user=user_obj)


class Cart(models.Model):
  user = models.ForeignKey(User, blank=True, null=True)
  tools = models.ManyToManyField(Tool, blank=True, null=True)
  created = models.DateTimeField(auto_now_add=True, blank=True, null=True)
  updated = models.DateTimeField(auto_now=True, blank=True, null=True)
  fine_total = models.DecimalField(default=0.00, max_digits=100, decimal_places=2)

  objects = CartManager()

  def __str__(self):
    return self.user.username


def m2m_changed_cart_receiver(sender, instance, action, *args, **kwargs):
  if action == 'post_add' or action == 'post_remove' or action == 'post_clear':
    tools = instance.tools.all()
    total = 0
    for x in tools:
      now = int(datetime.datetime.now().strftime("%s")) * 1000
      due = int(x.dueDate.strftime("%s")) * 1000
      if(due < now):
        total += x.late_fine
    if instance.fine_total != total:
      instance.fine_total = total
      instance.save()


m2m_changed.connect(m2m_changed_cart_receiver, sender=Cart.tools.through)


def pre_save_cart_receiver(sender, instance, *args, **kwargs):
  if instance.fine_total > 0:
    instance.fine_total = Decimal(instance.fine_total)
  else:
    instance.fine_total = 0.00


pre_save.connect(pre_save_cart_receiver, sender=Cart)
