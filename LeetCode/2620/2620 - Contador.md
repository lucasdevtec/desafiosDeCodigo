# 2620 - Contador

## Enunciado

Dado um inteiro n, retorna uma counterfunção. Esta counterfunção inicialmente retorna n e então retorna 1 a mais que o valor anterior toda vez subsequente que é chamada ( n, n + 1, n + 2, etc).

Exemplo 1:

Entrada:
n = 10
["chamar","chamar","chamar"]
Saída: [10,11,12]
Explicação:
counter() = 10 // A primeira vez que counter() é chamado, ele retorna n.
counter() = 11 // Retorna 1 a mais que a vez anterior.
counter() = 12 // Retorna 1 a mais que o tempo anterior.
Exemplo 2:

Entrada:
n = -2
["chamar","chamar","chamar","chamar","chamar"]
Saída: [-2,-1,0,1,2]
Explicação: counter() inicialmente retorna -2. Então aumenta após cada chamada subsequente.

Restrições:

-1000 <= n <= 1000
0 <= calls.length <= 1000
calls[i] === "call"

## Como chegar na solução

Clousures

Visão geral
Esta questão pretende ser uma introdução aos closures . Em JavaScript, funções têm uma referência a todas as variáveis ​​declaradas no mesmo escopo, bem como a quaisquer escopos externos. Esses escopos são conhecidos como o ambiente léxico da função . A combinação da função e seu ambiente é conhecida como um closure .

Exemplo de fechamento
Em Javascript, você pode declarar funções dentro de outras funções e retorná-las. A função interna tem acesso a quaisquer variáveis ​​declaradas acima dela.

function createAdder(a) {
return function add(b) {
const sum = a + b;
return sum;
}
}
const addTo2 = createAdder(2);
addTo2(5); // 7
A função interna addtem acesso a a. Isso permite que a função externa sirva como uma fábrica de novas funções, cada uma com comportamento diferente.

Fechamentos versus classes
Você pode notar que o exemplo acima createAdderé muito semelhante a um construtor de classe.

class Adder {
constructor(a) {
this.a = a;
}

add(b) {
const sum = this.a + b;
return sum;
}
}
const addTo2 = new Adder(2);
addTo2.add(5); // 7

Além das diferenças na sintaxe, ambos os exemplos de código servem essencialmente ao mesmo propósito. Ambos permitem que você passe algum estado em um "construtor" e têm "métodos" que acessam esse estado.

Uma diferença fundamental é que os closures permitem o encapsulamento verdadeiro . No exemplo da classe, não há nada que o impeça de escrever addTo2.a = 3;e quebrar seu comportamento esperado. No entanto, no exemplo do closure, é teoricamente impossível acessar a. Observe que, a partir de 2022, o encapsulamento verdadeiro é atingível em classes com sintaxe de prefixo # .

Outra diferença é como as funções são armazenadas na memória. Se você criar muitas instâncias de uma classe, cada instância armazena uma única referência ao objeto protótipo onde todos os métodos são armazenados. Enquanto para fechamentos, todos os "métodos" são gerados e uma "cópia" de cada um é armazenada na memória cada vez que a função externa é chamada. Por esse motivo, as classes podem ser mais eficientes, particularmente no caso em que há muitos métodos.

Ao contrário de linguagens como Java, você tenderá a ver código escrito com funções em vez de classes. Mas como JavaScript é uma linguagem multiparadigma, isso dependerá do projeto específico em que você está trabalhando.
