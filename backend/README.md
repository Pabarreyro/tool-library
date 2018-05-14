# simple backend setup

## make suure your os already installed pip, python3.6, virtualenv

## run below commands in terminal:

- `git clone https://github.com/m-chu/tool-library.git`
- `cd tool-libarary/`
- `virturalenv backend -p python3.6`
- `cd backend`
- `source bin/activate`
- `cd src`
- `pip install requirements.txt`
- `python manage.py migrate`
- `python manage.py createsuperuser` follow step by step to create the user
- `python manage.py runserver`
- login to admin with the superuser created above if it is necessary  

Please check their docs for more information if you get stuck 