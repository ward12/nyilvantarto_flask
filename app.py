from flask import Flask
from flask import request, redirect, url_for
from flask import render_template
app = Flask(__name__)
app.debug = True

# az index fugveny rendeleli le az index.html file-t
# a / oldalon get és post method-okat is engedünk
# https://www.w3schools.com/tags/ref_httpmethods.asp
# EZ NEM EGY IGAZI BEJENLENTKEZŐ FELÜLET, így nem szabad csinálni rendes bejelentkezést
validuser = "ward12"

@app.route("/", methods=['GET','POST'])
def index():
	# egy error változót deklerálunk aminek a kezdő értéken None
	error = None
	# ha ez a page ugy van meghivva aminek a kezdő értékén None (azaz semmi)
	if request.method == 'POST':
		# a login.html-ben lévő form adatokat, kiszedjük a POST-bol, és betötltjük
		# két darab változó
		email = request.form.get('email')
		passwd = request.form.get('password')
		print(email)
		print(passwd)
		#a beküldött adatok közül ellenőrizzük a felhaználónevet, és ha az helyes
		if email == "ward12":
			#átirányítjuk a felhasználót a belső oldara
			return redirect(url_for('nyilvantarto'))
		else:
			# ha rossz adatokat addot meg akkor egy hibaüzenet küldünk
			error = 'Invalid Credentials. Please try again.'
	# a flask minden template a file-t a templates mappán belül keres.
	# ha nem POST a http kérés, hanem GET, akkor simán csak a login.htmlt rendeljünk:
	return render_template('login.html', error=error)


@app.route("/nyilvantarto")
def nyilvantarto():
	user = validuser
	# a user változó, az az index.html file-ban is user változóként lesz elérhető
	return render_template('index.html', user=user)

if __name__=="__main__":
	app.run(host='0.0.0.0')