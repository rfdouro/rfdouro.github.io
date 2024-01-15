# Análise de Algoritmos - Básico

A Análise de Algoritmos é um ramo da ciência da computação que trata do desempenho de algoritmos levando em conta recursos computacionais tais como ciclos de processamento e memória utilizada.

:::tip Atenção
Um ótimo conteúdo de leitura e pesquisa é gentilmente disponibilizado pelo professor Paulo Feolifoff em seu “livrinho” do Minicurso de Análise de Algoritmos (facilmente obtido em [https://www.ime.usp.br/~pf/livrinho-AA/downloads/AA-BOOKLET.pdf](https://www.ime.usp.br/~pf/livrinho-AA/downloads/AA-BOOKLET.pdf)). 
:::

Aqui trataremos da análise de complexidade de algoritmos – há também a questão da análise de corretude, a qual não será tratada aqui – onde o que se espera é a obtenção de uma previsão do tempo de execução de um algoritmo em termos de alguma função matemática.

A velocidade ou tempo de execução de um algoritmo tenta prever em quanto tempo um algoritmo executa dado o tamanho da entrada de dados que ele deve computar.

Esse tempo de execução é então denotado tendo em vista o tamanho da entrada do algoritmo (geralmente utilizando a letra n para representar o tamanho da entrada).

Por exemplo, tomando o caso da obtenção da soma dos elementos de um vetor, poderíamos ter o seguinte algoritmo:

```java
public double soma(double[] vetor) {
 double soma = 0;
 for (int i = 0; i < vetor.length; i++) {
  soma = soma + vetor[i];
 }
 return soma;
}
```

Levando em consideração a operação essencial do algoritmo que é a operação de soma (na linha 4), pode-se observar que a quantidade de operações que é executada é dada pelo tamanho do vetor (sendo seu tamanho igual a n) então podemos dizer que o algoritmo executa em um tempo computacional igual a $f(n) = n$, onde f(n) é a função matemática que calcula o tempo de execução do algoritmo. 

Vale lembrar que esse tempo é dado como o número de ciclos usado para se processar o algoritmo até seu final. 

Ou seja, se o vetor tiver tamanho:
- 1, 	o algoritmo leva 1 ciclo	f(n) = 1
- 2,	o algoritmo leva 2 ciclos	f(n) = 2
- 10, 					f(n) = 10
- 1000,					f(n) = 1000
- n-1,					f(n) = n - 1
- n,					f(n) = n

Podemos observar o exemplo do algoritmo a seguir:
 ```java
public double soma(double x, double y){
 return x + y;
}
 ```

Para esse caso o tempo é linear e $f(n) = 1$ pois só é necessária uma única execução para se obter a resposta final do algoritmo.

## Pior caso de execução

Com os exemplos dados anteriormente conceituamos que a complexidade de um algoritmo (ou seu tempo de execução) é mensurada através da análise da execução dada pelo tamanho da sua entrada de dados a ser processada. Não obstante, ocorre que, diferentes entradas podem gerar diferentes tempos de execução.

Imagine o seguinte algoritmo que busca responder se um determinado número existe ou não em um vetor:

```java
public boolean existe(double[] vetor, double x) {
 for (int i = 0; i < vetor.length; i++) {
  if (x == vetor[i]) {
   return true;
  }
 }
 return false;
}
```
