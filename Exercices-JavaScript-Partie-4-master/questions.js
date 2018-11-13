/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
var tailleString = function (texte) {
    return texte.length;
}
var remplaceECar = function (texte) {
    return texte.replace('e', ' ');
}
var concatString = function (texte1, texte2) {
    return texte1 + texte2;
}
var afficherCar5 = function (texte) {
    return texte.charAt(4);//ou texte[4]
}
var afficher9Car = function (texte) {
    return texte.substring(0, 9);//0: début de la chaine et 9 : nombre de caractère
}
var majusculeString = function (texte) {
    return texte.toUpperCase();
}
var minusculeString = function (texte) {
    return texte.toLowerCase();
}
var SupprEspaceString = function (texte) {
    return texte.trim();//trim sert à supprimmer les espaces en début et fin de chaine
}
var IsString = function (texte) {
  if(typeof texte == 'string'){
    var result = true;
  }
  return result;
  //  return texte.includes(texte);//pas bien compris : à voir, car vu fonction typeof mais pas réussi à la faire fonctionnée.
}
var AfficherExtensionString = function (texte) {
    return texte.split('.').pop();
}
var NombreEspaceString = function (texte) {
    return texte.split(' ').length -1;
}
var InverseString = function (texte) {
    return texte.split('').reverse().join('');//à voir
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {
    return Math.pow(x, y);//Math.pow(x, y)= x puissance y
}
var valeurAbsolue = function (nombre) {
    return Math.abs(nombre);
}
var valeurAbsolueArray = function (array) {

    return  array.map(Math.abs);
}
var sufaceCercle = function (rayon) {
    return Math.round(Math.PI * (Math.pow(rayon, 2)));
}
var hypothenuse = function (ab, ac) {
    return Math.hypot(ab, ac);
}
var calculIMC = function (poids, taille) {
  //  return Math.round((poids/Math.pow(taille, 2)*100))/100 ;
  var calcul = poids/Math.pow(taille, 2);
  calcul = calcul.toFixed(2);//réduit à 2 chiffre après la virgule , tiFixed : convertit en chaine de caractère!
  var result = parseFloat(calcul);//permet de convertir la chaine de caractère en nombre à virgule
  return result
}
