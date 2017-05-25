# nyilvantarto_flask
school assignment, no guarantes
#Telepítés:
Python3 környezet:
````

sudo apt install python3; sudo apt install python3-pip
````
Virtualenv környezet:
````
sudo pip install virtualenv
````
#Használat
Clone-ozzuk ezt a repot:
````
git clone https://github.com/ward12/nyilvantarto_flask.git
````
Készítsünk virtualenv-et:
````
virtualenv -p python3 ~/virtualenv/nyilvantarto_flask
````
Aktiváljuk a virtualenv-et: 
````
source ~/virtualenv/nyilvantarto_flask/bin/activate
````
Telepítsük a python csomagokat:
````
pip install -r requirements.txt
````
A clone-ozott nyilvantarto_flask mappán belül telepítsük a bower csomagokat:
````
bower install
````

#futattás
A nyilvantarto_flask a mappán belül futtasuk az appot:
````
python app.py
````

