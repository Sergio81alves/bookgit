let amigo = {nome:'jose', sexo:"M",
 peso:85.4,
engordar(p=0){
    console.log("Engordou")
    this.peso += p
}
}
amigo.engordar(2)//vai engordar quanto? o que tiver no ()
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)
/*estou colocando funcionalidades dentro da função*/ 