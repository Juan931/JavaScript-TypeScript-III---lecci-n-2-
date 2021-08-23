// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

//Contiene por lo menos el comportamiento de presentarse a sí mismo(introduce())Protagonista principal 
//que hereda de Character No olvides agregar algunos comportamientos propios de este personaje. (métodos)

abstract class Character <generic> {
  nameAntagonist: generic = "Jhon Martin";
  nameProtagonist: string ="Juan Casas ";
  introduced(){
  return "My name is " + this.nameProtagonist; 
  }
  introduced1(){
    return "My name is"+ this.nameAntagonist;
  }
 
}



//implementar metodo en protagonista principal
class ProtagonistaP extends Character <string>{
    protagonist(){
        return "Y yo soy el protagonista,y soy el heroe "
      }
    }

const protagonist= new ProtagonistaP();
console.log(protagonist.introduced())
console.log(protagonist.protagonist())

//Antagonista principal que hereda de Character. No olvides agregar algunos 
//comportamientos propios de este personaje. (métodos)

class antagonistaP extends Character<string>{
  antagonist(){
    return "Yo soy el antagonista, y soy el malo."
  }
}
const antagonist= new antagonistaP();
console.log(antagonist.introduced1())
console.log(antagonist.antagonist());



