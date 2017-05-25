

git beallitasa:
#git telepitése:
apt install git
````
#git beallitása:
git config --global user.email "sajat@email.com"
git config --global user.name "sajatuserem"
#git push config:
git config --global push.default matching
````

gitigonre file tartalmazza azokat a mappákat vagy filelokat amiket a git nem kell hogy figyelmbe vegyen

#git használta 

Első lépés hogy csinálunk egy üres repository-t, vagy a clone-ozunk vagy meglévőt...
Új üres repo készítése:
````
git init
````
Meglévő klónozása
````
git clone /path/to/repo
````
Munka után, a változásokat az alábbi paranccsal tudjuk megnézni:
````
git status
````

Előszőr hozzáadjuk a commithoz azokat a fileokat amiket fel szeretnék push-olni:
pl a gitigonre file-t:
````
	git add .gitinogre
````
pl ha az egész mappát hozzá akarjuk adni (minden file-t, ehhez benne kell lennünk abban a mappában amelyikeben a git repository található) :
````
	git add .
````
Commit-oljuk azokat a fájlokat amelykeket hozzáadtuk az add paranccsal:
````
git commit -m "commit üzenetem"
````
A commitot pusholni kell, ekkor adódik hozzá a távoli repo-hoz
````
git push
````

