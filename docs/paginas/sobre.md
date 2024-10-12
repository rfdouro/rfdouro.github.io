# Sobre mim

Aqui são listados alguns projetos feitos em Java. 

O estudo da linguagem, sua evolução e aplicações Orientadas a Objetos faz parte da minha natureza.

## Projetos intrínsecos

Um Tipo Abstrato de Dados (TAD) pode facilmente ser entendido como a representação de um objeto o que é intrínseco à linguagem Java.

Quando desejamos abstrair o comportamento e propriedades inerentes a um determinado conjunto de indivíduos concordamos em implementar a classe desses indivíduos que são então denominados objetos.

```java
public class Pessoa {
 private String nome;
 private int idade;
 public String getNome() {
  return nome;
 }
 public void setNome(String nome) {
  this.nome = nome;
 }
 public int getIdade() {
  return idade;
 }
 public void setIdade(int idade) {
  this.idade = idade;
 }
 public void anda() {
  // ...
 }
 public void fala() {
  // ...
 }
}

```