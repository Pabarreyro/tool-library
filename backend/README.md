# simple backend setup

## make suure your os already installed pip, python3.6, virtualenv

### run below commands in terminal:

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

Please refer their docs for more information if you get stuck 


##  User Auth query examples

- register:

``` 
endpint: http://127.0.0.1:8000/api/auth/register/ 
type: post
data body: 
{
  username: yourusername,
  password: yourpw,
  password2: yourpw2,
  email: yourmail@mail.com(optonal)
}
response: 
{
    "username": "yourusername",
    "email": "yourmail@mail.com",
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo1LCJ1c2VybmFtZSI6ImFkcmlhbmE0IiwiZXhwIjoxNTI2NDI0MjgwLCJlbWFpbCI6ImFkcmlhbmE0QGdtYWlsLmNvbSIsIm9yaWdfaWF0IjoxNTI2NDIzOTgwfQ.6kr9BHG6pQbAZm4SB8SSWtnMEcNeVBUJqbfrCh3Uiik",
    "expires": "2018-08-23T22:36:20.948325Z",
    "message": "Thank you for registering."
}

or:
{
    "username": [
        "A user with that username already exists."
    ],
    "password": [
        "This field is required."
    ],
    "password2": [
        "This field is required."
    ]
}

```


- login

``` 
endpint: http://127.0.0.1:8000/api/auth/ 
type: post
data body: 
{
  username: yourusername,
  password: yourpw,
  email: yourmail4@mail.com(optional)
}
response: 
{
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo1LCJ1c2VybmFtZSI6ImFkcmlhbmE0IiwiZXhwIjoxNTI2NDI0Njg3LCJlbWFpbCI6ImFkcmlhbmE0QGdtYWlsLmNvbSIsIm9yaWdfaWF0IjoxNTI2NDI0Mzg3fQ.rD0Yu8tT0S29rBXLGwPAQ__g4tBaoqIlUFwR1REhS1Q",
    "user": "yourusername",
    "expires": "2018-08-23T22:43:07.624958Z"
}

or:
{
    "detail": "Invalid credentials"
}


```