class Pokeman {
  constructor(name, type, life, attack) {
    //alert('Im alive');
    this.image = new Image();
    this.name = name;
    this.type = type;
    this.life = life;
    this.attack = attack;
    
    this.image.src = myImages[this.name];
  }
  talk () {
    alert(this.name);
  }
  showImage (){
    document.body.appendChild(this.image);
    document.write('<p>');
    document.write('<strong>' + this.name + '</strong><br/>');

    document.write('Type: ');
    document.write('<strong>' + this.type + '</strong><br/>');

    document.write('Life: ');
    document.write('<strong>' + this.life + '</strong><br/>');

    document.write('Attack: ');
    document.write('<strong>' + this.attack + '</strong><br/>');
    document.write('</p>');
    document.write('<hr/>')
  }
}
