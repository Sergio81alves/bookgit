/*o fatorial de um número é ele fatorial vezes o anbtecessor dele fatorial
ex: 5! == 5x4x3x2x1
5! = 5x4!
//
n! == n x (n-1)!
só não no caso do 1
porque matematicamente o 0 não é compativel
1! = 1
*/ 
//recursividade uma função chamando ela mesma
function fatorial(n){
    if (n==1){
        return 1
    }else {
        return n * fatorial(n-1)
    }
}
console.log(fatorial(5))