class Personagem{
    constructor(nome, hp, classe){
      this.nome = nome
      this.classe = classe
      this.hp = hp
    }
  }
  
  class Mago extends Personagem {
      constructor(nome, hp, classe, mana){
        super(nome, hp, classe)
        this.mana = mana
      }
    lancarFeitico(nomeFeitico){
      console.log(this.nome+ "lançou um feitico" + nomeFeitico )
    }
  }
  
  