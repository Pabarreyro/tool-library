"""
Django settings for toollibrary project.

Generated by 'django-admin startproject' using Django 1.11.

For more information on this file, see
https://docs.djangoproject.com/en/1.11/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.11/ref/settings/
"""

import os

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.11/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'f2ya6!v4c7l*-u41uw%=#n18642=!h=z@gj3*tm8kg@11vqm0c'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

# https://tools-libarary.herokuapp.com/ | https://git.heroku.com/tools-libarary.git

ALLOWED_HOSTS = ['tools-libarary.herokuapp.com', 'localhost:4200', '127.0.0.1']

# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'corsheaders',

    'storages',
    'accounts',
    'tools',

]

MIDDLEWARE = [
  'django.middleware.common.BrokenLinkEmailsMiddleware',  # Emails 404 errors
  'corsheaders.middleware.CorsMiddleware',  # Must be first; handles CORS
  'django.middleware.common.CommonMiddleware',  # Generates response
  'django.middleware.security.SecurityMiddleware',
  'whitenoise.middleware.WhiteNoiseMiddleware',
  'django.contrib.sessions.middleware.SessionMiddleware',
  'django.middleware.csrf.CsrfViewMiddleware',
  'django.contrib.auth.middleware.AuthenticationMiddleware',
  'django.contrib.messages.middleware.MessageMiddleware',
  'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'toollibrary.urls'

TEMPLATES = [
  {
    'BACKEND': 'django.template.backends.django.DjangoTemplates',
    'DIRS': [],
    'APP_DIRS': True,
    'OPTIONS': {
      'context_processors': [
        'django.template.context_processors.debug',
        'django.template.context_processors.request',
        'django.contrib.auth.context_processors.auth',
        'django.contrib.messages.context_processors.messages',
      ],
    },
  },
]

WSGI_APPLICATION = 'toollibrary.wsgi.application'

# Database
# https://docs.djangoproject.com/en/1.11/ref/settings/#databases

DATABASES = {
  'default': {
    'ENGINE': 'django.db.backends.sqlite3',
    'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
  }
}

import dj_database_url

db_from_env = dj_database_url.config()
DATABASES['default'].update(db_from_env)

# Password validation
# https://docs.djangoproject.com/en/1.11/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
  {
    'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
  },
  {
    'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
  },
  {
    'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
  },
  {
    'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
  },
]

# Internationalization
# https://docs.djangoproject.com/en/1.11/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.11/howto/static-files/


# STATIC_URL = '/static/'
#
# STATICFILES_DIRS = (
#     os.path.join(BASE_DIR, "static"),
# )
#
# STATIC_ROOT = os.path.join(BASE_DIR, "live-static-files", "static-root")
#
# STATICFILES_STORAGE = 'whitenoise.django.GzipManifestStaticFilesStorage'

# Static file storage with S3
# Easy guide: https://simpleisbetterthancomplex.com/tutorial/2017/08/01/how-to-setup-amazon-s3-in-a-django-project.html#working-with-static-assets-only
# Documentation: http://django-storages.readthedocs.io/en/latest/backends/amazon-S3.html#usage

AWS_ACCESS_KEY_ID = os.environ.get(ACCESS_KEY_ID)
AWS_SECRET_ACCESS_KEY = os.environ.get(SECRET_ACCESS_KEY)
AWS_STORAGE_BUCKET_NAME = 'tool-lib-static'
AWS_S3_CUSTOM_DOMAIN = '%s.s3.amazonaws.com' % AWS_STORAGE_BUCKET_NAME
AWS_S3_OBJECT_PARAMETERS = {
    'CacheControl': 'max-age=86400',
}
AWS_LOCATION = 'static'


STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'live-static-files'),
]
STATIC_URL = 'https://%s/%s/' % (AWS_S3_CUSTOM_DOMAIN, AWS_LOCATION)
STATICFILES_STORAGE = 'storages.backends.s3boto3.S3Boto3Storage'

DEFAULT_FILE_STORAGE = 'toollibrary.storage_backends.MediaStorage'

MEDIA_URL = "/media/"

MEDIA_ROOT = os.path.join(BASE_DIR, "live-static-files", "media-root")

from toollibrary.tlrestconf.main import *
from toollibrary.corsconf import *
