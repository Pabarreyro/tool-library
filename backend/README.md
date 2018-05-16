# Simple Backend Setup

## Make suure your os already installed pip, python3.6, virtualenv

### Run below commands in terminal:

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

Please refer to their docs for more information if you get stuck. 


##  Please check [here for how to use this API](https://tools-libarary.herokuapp.com/)
