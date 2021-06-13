# Exercício de Sockets com calculadora
  
Exercício voltado para a criação de uma calculadora em TCP e UDP.  

Requisitos:  
a. Usar UDP.  
b. Criar uma calculadora com funções de adição, subtração, multiplicação e divisão.  
c. Cliente vai enviar 2 inteiros e o parâmetro.  
d. Implementar em UDP e TCP.

## Quais as principais diferenças entre TCP e UDP?  
UDP é connectionless.  

## Quais as principais diferenças entre a implementação TCP e UDP?  
Para o usuário a conexão parece constante em ambos os casos, mas a implementação TCP tem uma conexão contínua, enquanto a UDP não.  

## Quais as principais dificuldades nas implementações UDP?  
Lidar com o estado connectionless do UDP.    

## Quando faz sentido usar TCP ou UDP? 
Se existe necessidade de uma conexão contínua, TCP é mais prático. Caso não, UDP é mais simples já que não é necessário gerenciar as conexões.
