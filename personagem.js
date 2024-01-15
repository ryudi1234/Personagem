class Personagem{
    constructor(nome, idade, tipo){
      this.nome = nome
      this.tipo = tipo
      this.idade = idade
    }
  }
  
    class Mago extends Personagem {
      constructor(nome, idade, tipo, mana){
        super(nome, idade, tipo)
        this.mana = mana
      }
      ataque()
      {
        console.log(`o ${this.tipo} (usou magia)`)
      }
  }

  
  let pessoa = new Mago("siclano", 30,  "mago", 3000)

  

  class Guerreiro extends Personagem {
    constructor(nome, hp, tipo, forca){
      super(nome, hp, tipo)
      this.forca = forca
    }

    ataque()
  {
    console.log(`o ${this.tipo}  (usou espada)`)
  }
}




class Monge extends Personagem {
  constructor(nome, hp, tipo, lutador){
    super(nome, hp, tipo)
    this.lutador = lutador
  }
  ataque()
  {
    console.log(`o ${this.tipo}  (usou artes marciais)`)
  }
}



class Ninja extends Personagem {
  constructor(nome, hp, tipo, furtivo){
    super(nome, hp, tipo)
    this.furtivo = furtivo
  }
  ataque()
  {
    console.log(`o ${this.tipo} (usou shuriken)`)
  }

}


let mago = new Mago("fulano", 30,  "guerreiro", 400) 
Mago.ataque()

let guerreiro = new Guerreiro("fulano", 30,  "guerreiro", 400) 
Guerreiro.ataque()

let monge = new Monge("Okuzōin Dōei", 30, "monge", "artista marcial")
Monge.ataque()

let ninja = new Ninja("Hattori Hanzo", 30, "ninja", "furtivo")
Ninja.ataque
