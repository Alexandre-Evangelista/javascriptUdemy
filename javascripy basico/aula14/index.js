const alunos=['maria','joao','pedro'];
alunos[3]= 'eduardo';
//adicionar no final
alunos.push('otavio');
//adiciona no começo
alunos.unshift('marcos');
//removendo do final
//alunos.pop();
//remove do comeco
//alunos.shift();
console.log(alunos.slice(0,3));
console.log(alunos.length);
console.log(alunos[0]);
console.log (alunos);
console.log(typeof alunos);
console.log( alunos instanceof Array);