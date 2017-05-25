'use strict' // kötött mód, szigorúbbak a szabályok, érdemes használni

console.log("Hello bazmeg");

// globalis valtozo lesz a szoveg!!! a kódban MINDENHOL elérhető lesz a szoveg valtozo
// szoveg = "ez itt a szoveg";
// console.log("a szoveg valtozo tartalma: "+szoveg);

// újra deklarálható szöveg lesz
var szoveg2 = "ez egy uj szoveg";
szoveg2 = "uj erteket kap a szoveg2";
var szoveg2 = "ez egy uj szoveg uj ertekkel, var kulcsszóval hoztuk létre";
console.log(szoveg2);

// nem lesz ujra deklarálható
let szoveg3 = "ez egy nem ujra deklaralhato szoveg, let kulcsszóval hoztuk létre";
// ez nem mukodik mert mar deklaraltuk a szoveg3-at
// let szoveg3 = "ez egy nem ujra deklaralhato szoveg, let kulcsszóval hoztuk létre";

// uj erteket adok a szoveg3 valtozoban;
szoveg3 = "vas;aldksldkgj";
console.log(szoveg3);


// ezzel statikus szoveget és valtozo tartalamat is kiirunk:
console.log("a szoveg3 tartalma: "+szoveg3); // string osszefuzes

// a typeof fugveny kiirja a bele rakott valtozo tipusat
console.log("a szoveg3 TIPUSA: "+typeof(szoveg3) );
// string: karakterlánc (1 vagy több karakterből álló adat)

let szam = 1;
let szam2 = "1";
console.log("a szam valtozo tartalma: "+szam);
console.log("a szam TIPUSA: "+typeof(szam) );
console.log("a szam2 TIPUSA: "+typeof(szam2) );

szam = szam +1; //igy is lehet, nem fontos a szoköz a plusz jel körül
console.log("a szam valtozo tartalma: "+szam);
szam2 = szam2 + 1; // igy is lehet
console.log("a szam2 valtozo tartalma: "+szam2);

// az utasítások végére ; jelet KELL tenni, lefut ezek nélkül is a kód (semicolon insertion) 
// de hibalehetőség!!!!!

console.log("a szam2 valtozo TIPUSA: "+typeof(szam2) );

// stringet számmá alakítani:
// parseInt fugveny: számmá alakaítja azt amit beadunk neki
szam2 = parseInt(szam2);
console.log("a szam2 valtozo TIPUSA: "+typeof(szam2) );





let valami = "asadasd";
valami = parseInt(valami);
console.log(valami);
console.log(typeof(valami));

szam = 5 + 6 + 7; // szam <- 5 + 6 +7 //a szam valtozo megkapja az egyenlosegjel jobb oldalan levo eredmenyt 
// két váltzó értékét így lehet kicserélni
let a = 3;
let b = 10;
let c;
console.log("csere elott> a = "+a+" b = "+b);

c = a;
a = b;
b = c;

console.log("csere utan> a = "+a+" b = "+b);
//  változó típusok:number, string,boolean
let igazhamis = true

if ( a > 5) {
console.log ("a nagyobb mint 5");
} else {
console.log ("lofasz");
}
if ( a > 5 && a < 20 ) {
console.log("a 5 es 20 kozott van");
} else {
console.log ("lofasz");
}

let nev = "Geza";
if (nev === "Geza" ) {
console.log ("Geza ittvan");
}
// változó tipus: TÖMB(Array)
// a tombben a tobb elemet tudunk tarolni egyszerre






let tomb = [12, 32, 54, 65, 33, 66]
let tomb2 = [12, "szoveg", true, 65, 33, 66]
console.log("a tomb : "+tomb);
console.log("a tomb tipuse: "+typeof(tomb));
console.log("a tomb elemeinek szama: "+tomb.length);
// for ciklus for ( ciklusvaltozo; kezdő érték; lépték ) ...
// i ++ azt jelentu hogy egyessével
let vanbenne = false;
for ( let i = 0; i<tomb.length; i++) {
console.log("a tomb "+i+"-edik eleme: " +tomb[i]);
if ( tomb[i] === 12) {
}
}
if (vanbenne) {
console.log("van a tombben 12");
}

console.log("a gyumolcs "+gyumolcs); // undefined, mert létezik a változó csak nem kapott értéket
var gyumolcs = "alma"; // ha var-al deklaralunk arra érvényes a hoisting még strick módba is
 // hoisting: bizonyos változók vagy fügvények elöbb jönnet létre mint ahogy lefut a kód
 //semicolon insertion(automatikus pontosvwessző beillesztés)

console.log("ez egy sor\nez egy uj sor\ez egy tabbal bejebb van"); // \n: ujsor, \t:tab
console.log("XXXXXXXXXXXXXXXXXXX\rValami"); // \ r carrige return

szam++; //rovidites: szam = szam +1;
console.log("szam: "+1);
console.log("szamhoz hozzadok 1et, de elotte kiirom a szánot: ");
console.log(szam++);
console.log("szamhoz hozzadok 1et, majd kiirom az eredményt:");
console.log(++szam);

// ciklusok
let j = 0
while ( j < tomb.length) {
console.log("szia");
j++;
}

let osztalyzatok = [3,3,4,5,5,5,"2"];
let kettesek = 0;
let harmasok = 0;
let negyesek = 0;
let otosok = 0;
for( let i=0; i<osztalyzatok.length; i++){ //for-on belüli ciklus változónak lehet let i=0 több helyen is
if( osztalyzatok[i] === 2 ) {
kettesek++; //kettesek = kettesek +1;
}
if( osztalyzatok[i] === 3 ) {
harmasok++;
}
if( osztalyzatok[i] === 4 ) {
negyesek++;
}
if( osztalyzatok[i] === 5 ) {
otosok++;
}
}

console.log("a kettesek szama: "+kettesek);
console.log("a harmasok szama: "+harmasok);
console.log("a negyesek szama: "+negyesek);
console.log("a otosok szama: "+otosok);

var koszones = function(szoveg) { //function expression

console.log("hello "+szoveg+"!");  

}
let keresztnev = "Pista";
koszones(keresztnev); //ez nem hasznalhato csak miutan deklaraltuk a függvényt (not hoisted)
koszones("Laci"); //ez nem hasznalhato csak miutan deklaraltuk a fugvenyt (not hoisted)

osszegzes(4,5); // ez mar itt hasznalhato pedig csak kesobb deklaraltuk a fugvenyt (hoisted)

function osszegzes(szam1, szam2) { //function statement
if ((typeof(szam1) !== 'number)' && typeof(szam2) === 'number')) {
let eredmeny = szam1 +szam2;
console.log("a ket szam osszege: "+eredmeny);
} else {
console.log("error:nem szamokat kaptam");
}
}
//camelCasing = mindenMasodikSzotNagyBetuvelKezdek
function convertToNumber(szam1, szam2) {
szam1 = parseInt(szam1); //szammá alakítja amit beírunk
szam2 = parseInt(szam2);
if (isNaN(szam1)){ //isNan megnézi a beadot változón h nan típusú e
szam1 = 0;
}
if (isNaN(szam2)){
szam2 = 0;
}
return [szam1, szam2] // a fugveny visszateresi erteke
}

let eredmenyek = convertToNumber(2, "34");
console.log(eredmenyek)

function pontosIdo(){ //dekrarálunk egy pontosido nevu fugvenyt nincs bementi értéke
let ido = 5; //lokális változó csak a fügvényen belül van értelme
let honap = "januar"; //string
//return ido; //a fugveny a visszatérési értéke
function pontosDatum(){ //dekralálunk egy fugvenyt de nincs értéke
let datum = "hetfo";
console.log("a pontos ido: "+honap+","+datum+", "+ido+" óra");
}
pontosDatum(); // meghivjuk az elöbbi dekralált pontos fugvenyt
}
pontosIdo();
//console.log(ido); az ido valtozo itt nem letezik
// a pontosDatum();// fugveny itt nem letezik!!
// function expressiont hasznalunk:
let pontosIdo2 = function(){
let ido = 5;
let honap = "januar";
let pontosDatum3= function(){
let datum = "hetfo";
console.log("a pontos ido:"+honap+", "+datum+", "+ido+" óra");
}
pontosDatum2();
}

//CLOSURE: A function can also acces variables defined outside the fuction
//CLOSURE: egy fügvény, ha egy másik fügvényben van benne, akkor a külső fügvény változóihoz
// hozzá fér a 
let szamHozzaadas = function() {
let szam1 = 5;
return function(n) {
return szam1+5;
};
}();

console.log("Szám hozzáadás: "+szamHozzaadas(5));


//------------------------objektumok--------------------

// adattípusok: number, string, array, bool, NaN,

let myObject = {}
console.log(typeof (myObject)); // a typeof fugveny az array tipusú elemek esetén is object-et ad vissza


let player = {
"name": "John", // kulcs, érték párok (key: name, value: John)  
"health": 100,
"alive": true
}

console.log("az uj jatekos neve: "+player.name);

let shot = Math.floor((Math.random() * 200 ) +1); //egy veletleb szam 1-200 kozott
if (player.alive) {
	console.log(shot+"-al meglőttűk "+player.name+"-t");
	player.health = player.health - shot;
	if (player.health < 0){
	player.alive = false;
}
}
if(!player.alive) {
	console.log(player.name+" is dead!");
}else{
	console.log(player.name+" is alive! hurra");
}

for (let key in player) {
	console.log("checkinh : "+key+"...");
	console.log(key+" értéke: "+player[key]);
}


let animals = [
	{neve: "buffy", fajtaja:"macska"},
	{neve: "Fluffy", fajtaja:"kutya"},
	{neve: "Jago", fajtaja:"madar"},
	{neve: "Lori", fajtaja:"madar"},
	{neve: "Barna", fajtaja:"macska"},
	{neve: "Cirmi", fajtaja:"macska"},
]

console.log("========all animals======\n");
console.log(animals);

let kutyak = []
// az animals tombin vegig megyünk és a tömb aktuális eleme az animál változó lesz. NINCS INDEX.
// requires EcmaScript 2015+
for( let animal of animals) { // egy animal változó fogja tartalmazni az animals tomb aktuális elemet
// lehetne let animal, de az OBEJECTRE van, nem többre!
if ( animal.fajtaja === "kutya"){

	kutyak.push(animal) // a tomb vegére hozzáfüzzők egy elemet
	 
}
}

console.log("========all dogs========\n");
console.log(kutyak);

player.level = 1; // kibővítettük a player object-et egy propertyvel
console.log(player.name+" jatékos szintje: "+player.level);
player.levelup = function() {
	player.level = player.level + 1;
}
player.levelup()
console.log(player.name+" jatékos szintje: "+player.level);

for (let key in player) { //this is how yup loop through an object by key
	console.log("checking : "+key+" ...");
	console.log(key+" értéke: "+player[key]);
}


// functional programming
kutyak = []
kutyak = animals.filter(function(animal){
	return animal.fajtaja === "kutya" // csak akkor adom vissza a tömb elemet ha a fajtaja kutya

})

console.log("========all dogs========\n");
console.log(kutyak);

// TANULNI TE FATTY https://www.youtube.com/watch?v=BMUiFMZr7vk&index=1&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84


let kutyaE = function(animal) {
	return animal.fajtaja === "kutya";
}

kutyak = animals.filter(kutyaE)

// javascript object ES5 -- EcmaScript 2014, régi fajta


let Cat = function(name) {
	this.name = name;
	this.color = "black";
	this.walk = function () {
		return console.log(this.name+" is walking...");
	}
	this.meow = function () {
		return console.log(this.name+" says: meowww!...");
	}
	Object.defineProperty(this, 'legscount',{ // this.legscount = 4
		value: 4,
		writable: false,
		enumerable: false, //amikor végig loop-olok az objecten, akkor kiírja ezt a paramétert
		configurable: true // modosíthatóak ezek a paraméterek
	});
};
// HA A prototype-hozt adjuk hozza a fugvenyt akkor nem fogja minden objektum példányra ezt lemásolni
// ez hatékonyabb
Cat.prototype.purr = function(){
	return console.log(this.name+" says: BRERRRRRRRRWERE");
}



let cat1 = new Cat("Cirmi");
console.log(cat1.name+" szine: "+cat1.color);
cat1.color = "white";
console.log(cat1.name+" szine:"+cat1.color);
console.log(cat1.name+" lábainak száma: "+cat1.legscount);
// cat1.legscount = 5 // nem modosítható a legscount, ez a sor hibát okoz
cat1.meow();
cat1.meow = "hi"; // ez elbassza a meow fügvényt;

let cat2 = new Cat("Orbán Viktor");
cat2.meow();
cat2.purr();
cat2.purr = "h1";
cat1.purr();
console.log(Object.keys(cat1)); //purr itt azért nincs mert ez a Cat.prototype-hoz lett hozzáadva, és nem másolodik

// object inheritance: objektum öröklődés
// !!!!!!! javascript dokumenctacio: https://developer.mozilla.org/en-US/docs/Learn/JavaScript !!!!
let mutantCat = function(name) {
	Cat.call(this, name);
	Object.defineProperty(this, 'legscount',{
		value : 4,
		writable: true,
		enumerable: true,
		configurable: true
	});

};
// prototype is an encaptulation of properties that an object links to.
mutantCat.prototype = Object.create(Cat.prototype);
mutantCat.prototype.constructor = Cat;



let mutantCat1 = new mutantCat("Simicska Lajos");
mutantCat1.legscount = 6;
console.log(mutantCat1.name+" lábainak száma: "+mutantCat1.legscount);


// ------------ Object Creation ES6, EcmaScript2015------------//

class Dog {
	constructor(name){ // ez a fügvény atomatikusan lefut, amikor lértehozunk egy objektum peldányt 
		this.name = name;
		Object.defineProperty(this, 'legscount',{
			value: 4,
			writable: false,
			enumerable: true,
			configurable: true
		});
	};
	bark() { // es6-ban ez atumatikusan prototype!
		console.log(this.name+" ugat: VAU");
	}
}

let dog1 = new Dog("Max");
dog1.bark();
//dog1.legscount = 6;
console.log(dog1.name+" lábainak száma: "+dog1.legscount)

class MutantDog extends Dog {
	constructor(name){
		super(name)
			Object.defineProperty(this, 'legscount',{
			value: 4,
			writable: true,
			enumerable: true,
			configurable: true
		});
	}
	speak(){
		console.log(this.name+" Beszélni is tud");
	}
};

let mutantDog1 = new MutantDog("Mutáns Kutya");
mutantDog1.bark();
mutantDog1.legscount = 67;
console.log(mutantDog1.name+" lábainak száma: "+mutantDog1.legscount)
mutantDog1.speak();
