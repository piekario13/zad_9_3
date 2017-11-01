var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.'
console.log(text);
var dinosaur = 'Triceratops'
var dinosaurUpperCased = dinosaur.toUpperCase();
console.log(dinosaurUpperCased);
var dinoCharsAfter = text.replace('Velociraptor', dinosaurUpperCased);
console.log(dinoCharsAfter);
console.log(dinoCharsAfter.substr(0, dinoCharsAfter.length/2));