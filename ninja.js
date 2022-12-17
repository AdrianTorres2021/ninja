class Ninja{
    constructor(nombre, salud){    
    this.nombre = nombre;
    this.salud = salud;
    this.velocidad = 3;
    this.fuerza = 3;
}
    
    sayName(){
        console.log(`Me llamo ${this.nombre}`);
    }
    showStats(){
        console.log(`nombre: ${this.nombre}, salud: ${this.salud}, velocidad: ${this.velocidad}, fuerza: ${this.fuerza}`)
    }
    drinkSake(){
        this.salud += 10;
        console.log(`Salud aumentada a ${this.salud}`)
    }
}

const ninja1 = new Ninja("Hyabusa", 100);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

