from django.db import models
from django.db.models import Q
# from django.db.models.signals import pre_save, post_save
from django.urls import reverse


class ToolQuerySet(models.query.QuerySet):
    def active(self):
        return self.filter(active=True)

    def featured(self):
        return self.filter(featured=True, active=True)

    def search(self, query):
        lookups = (Q(title__icontains=query) | 
                  Q(description__icontains=query) |
                  Q(brand__icontains=query) |
                  Q(dueDate__icontains=query)
                  )
        return self.filter(lookups).distinct()


class ToolManager(models.Manager):
    def get_queryset(self):
        return ToolQuerySet(self.model, using=self._db)

    def all(self):
        return self.get_queryset().active()

    def featured(self): 
        return self.get_queryset().featured()

    def get_by_id(self, id):
        qs = self.get_queryset().filter(id=id) 
        if qs.count() == 1:
            return qs.first()
        return None

    def search(self, query):
        return self.get_queryset().active().search(query)


class Tool(models.Model):
  title = models.CharField(max_length=120)
  createDate = models.DateTimeField(auto_now_add=True)
  description = models.TextField(blank=True, null=True)
  brand = models.CharField(max_length=120)
  dueDate = models.DateTimeField(blank=True, null=True)
  imgUrl = models.CharField(max_length=120)
  active = models.BooleanField(default=True)
  featured = models.BooleanField(default=True)

  objects = ToolManager()

  def get_absolute_url(self):
    return reverse("Tools:detail", kwargs={"pk": self.pk})

  def __str__(self):
    return self.title

  @property
  def name(self):
    return self.title

