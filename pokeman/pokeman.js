//alert('HOLA');
class Pokeman {
  constructor(name, type, life, attack) {
    alert('Im alive');
    this.name = name;
    this.type = type;
    this.life = life;
    this.atack = attack
  }
  talk () {
    alert(this.nombre);
  }
}

var picowyou = new Pokeman('Picowyou', 'ground','100','30');
var kichenin = new Pokeman('Kichenin', 'flying', '80','50');
var pigmalion = new Pokeman('Pigmalion', 'fire', '120','40');
console.log(picowyou, kichenin, pigmalion);
