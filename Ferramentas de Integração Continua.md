

<br>
<br>

# DIFERENÇAS DE IMPLEMENTAÇÃO ENTRE O REACT E ASP.NET
<br>
<br>
<br>
<br>

# CONTEÚDO

<br>
<br>
<br>

* 1  VISÃO GERAL DA ESTRUTURA DO IPEA DATA 1.0
* 2  PROBLEMAS DO ASP.NET
* 3  VISÃO GERAL DO REACT
 
<br>
<br>
<br>
<br>
<br>
<br>

# VISÃO GERAL ESTRUTURA DO IPEADATA 1.0

   
   ![Ciclo Básico de integração Contínua](https://github.com/BrunoRangel30/Testes/blob/master/Organiza%C3%A7%C3%A3o%20do%20site/caso1.PNG?raw=true)
<br>
<br>
<br>
<br>


* IpeaNet e IpeaWeb.net: é o modulo de consulta;
* Ipea Carga:O módulo de carga de tempos e tempos verifica se há alguma carga de séries espaço-temporal para ser processada;
* Lançador: Executa as rotinas de ETL;

O IPEADATA 1.0 esta implementado utilizando o framework ASP.NET. A parte de consulta esta programada em C# e a view é construida utilizando o DevExpress.


<br>
<br>
<br>
<br>


   ![Ciclo Básico de integração Contínua](https://github.com/BrunoRangel30/Testes/blob/master/Organiza%C3%A7%C3%A3o%20do%20site/caso2.PNG?raw=true)
   
<br>
<br>
<br>
<br>
   
   ![Ciclo Básico de integração Contínua](https://raw.githubusercontent.com/BrunoRangel30/Testes/3ee4a61fc50f505d4fe733dc133a20829c6d2237/Organiza%C3%A7%C3%A3o%20do%20site/caso4.PNG)
   
<br>
<br>
<br>
<br>
   
   
   ![Ciclo Básico de integração Contínua](https://raw.githubusercontent.com/BrunoRangel30/Testes/3ee4a61fc50f505d4fe733dc133a20829c6d2237/Organiza%C3%A7%C3%A3o%20do%20site/caso5.PNG)
 
<br>
<br>
<br>
<br>

 # PROBLEMAS COM ASP.NET
 
* Código do lado servidor embutido com HTML;
* Difícil serapação do lado servidor e cliente;
* Dificuladade para realizar testes mas páginas. Muitas vezes a lógica do dado servidor tem que estar pronto primeiro para realizar testes, o que dificulta o rastreamento dos erros;


# VISÃO GERAL DO REACT

O React é uma biblioteca para criar interfaces, que foi idealizada pelo do Facebook e Instagram. Ele funciona como o V do MVC, permitindo criar seus próprios componentes. Numa aplicação em React, você deve quebrar os diferentes elementos dela em pequenos componentes reutilizáveis. 
   
* Facilita a escrita do JavaScript pois usa uma sintaxe especial chamada JSX , que permite que você misture HTML com JavaScript;
* E eficiente pois cria seu próprio DOM. Esta abordagem garante uma  flexibilidade e ganhos surpreendentes no desempenho, porque React calcula quais alterações precisam ser feitas no DOM de antemão e atualiza a árvore DOM em conformidade;
* O DOM virtual ajuda nos mecanisomos de busca;
   





