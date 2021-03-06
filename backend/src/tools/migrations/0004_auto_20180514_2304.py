# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-05-14 23:04
from __future__ import unicode_literals

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tools', '0003_tool_late_fine'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tool',
            name='late_fine',
            field=models.IntegerField(default=6, help_text='In US dollars', validators=[django.core.validators.MaxValueValidator(100), django.core.validators.MinValueValidator(0)]),
        ),
    ]
