let varA ='A';
let varB ='B';
let varC ='C';
let aux= varA;
varA=varB;
varB=varC;
varC=aux;
//pode ser assim tbm [varA,varB,varC]=[varB,varC,varA];
console.log(varA,varB,varC);