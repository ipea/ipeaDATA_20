

<br>
<br>

# Ferramentas de integração contínua
<br>
<br>
<br>
<br>
##Conteúdo<br>
<br>
<br>

1. Introdução
2. Ferramentas de integração contínua
 2. Jenkins
 * TeamCity
 * Travis
 * CircleCI
 * Codeship
<br>
<br>
<br>
<br>
<br>
<br>





##Introdução
  Durante  a etapa da integração do software muitos problemas surgem, dificultando assim sua entrega. Atualmente as empresas estão cada vez mais aderindo ferramentas de integração contínua para a otimizar todo o processo de criação, desenvolvimento e integração do software. O objetivo principal da  integração contínua é verificar se as alterações ou  adição de novas funcionalidades não criaram novos defeitos no projeto já existente.
   <p> As ferramentas de integração contínua permite que seja configurado o sistema, o ambiente de desenvolvimento e permite que seja configurado o sistema de build automatizado bem como a  integração com um repositório de controle de versão. Também pode ser configurado o envio de notificações. Isto é importante, pois como o sistema é automatizado, caso ocorram erros, o desenvolvedor pode ser notificado que a integração gerou falhas e assim poder efetuar a correção.</p>
   <p> A Integração contínua  seque uma pipeline . Em geral começa a partir do envio de códigos para o repositório. Qualquer membro da equipe pode ativar o fluxo de trabalho do CI, podendo ser desenvolvedores, analistas de banco de dados ou outros membros da equipe. O esquema do ciclo de trabalho clássico do servidor CI é demostrado na figura abaixo:
<br>
<br>
<br>
<br>
   
   ![Ciclo Básico de integração Contínua](https://github.com/BrunoRangel30/Testes/blob/master/ferramentas%20de%20integra%C3%A7%C3%A3o%20continua.png?raw=true")

* 1- O desenvolvedor envia o código para o repositório de controle de versão.
* 2- O CI verifica  o repositório de controle de versão em busca de  mudanças, com algum intervalo.
* 3- Quando o servidor CI detectar quaisquer alterações no repositório, o servidor CI obtém a última versão do código para o repositório de controle de versão e, em seguida, realiza a construção. O script, responsável pela integração do software, é criado.
* 4- Depois disso, o servidor CI envia feedback com o resultado da construção para os membros da equipe do projeto.
* 5. Em seguida, O servidor CI vai para o passo 2 e continua este comportamento antes de qualquer alterações no repositório.
   
   
   
## Ferramentas de integração contínua
   
## Jenkins

O Jenkins é uma ferramenta de integração contínua  open source escrita em Java. O que torna a Jenkins flexível é a extensão de recursos através de plugins. A  lista de plugins Jenkins é abrangente. Há a possibilidade de inserir plugins de autoria própria. O Jenkins pode distribuir compilações e testes de  cargas em várias máquinas. 
É publicado sob licença do MIT, portanto, é livre para usar e distribuir. 

###Vantagens
* Hospedado internamente;
* Grande variedade de plugins com boa documentação;
* Código livre hospedado no GitHub;
* Posssui uma comunidade extensa, o que o torna bastante popular;
* Multiplataforma, pode ser instalado em qualquer sistema operacioanal;
* Relatórios de teste com o JUnit /TestNG, que são ferramentas de testes bem populares;

###Desvantagens

* Apesar de possuir uma  configuração inicial fácil, é necessario um bom entendimento para utilizar plugins mais complexos. Necessita de
 alguma pré-configuração na administração;
* Documentação oficial no site é dificil de ser utilizada;
* Difícil combinação entre os plugins, principamente quando houver atualização na versão;



## TeamCity

O TeamCity  é uma ferramenta de integração contínua criada pela JetBrains. O TeamCity oferece todos os recursos em sua versão gratuita, 
mas é limitado a 20 configurações e 3 agentes de construção. Possui muitos recursos para soluções baseadas em **.NET.**Há também uma 
variedade de plugins desenvolvidos tanto pela JetBrains quanto por terceiros.

###Vantagens
* Oferece APIs bem definidas para extensão, bem como uma interface REST;
* Possui uma boa documentação;
* Boa cobertura em testes automatizados;
* Integração com uma ampla variedade de ferramentas e tecnologias, especialemte em .NET;

###Desvantagens

* Possui um limite para carga de trabalho. Após um limite deve ser pago;

##Travis
  Travis é um serviço open source para todos os projetos de código aberto hospedados no GitHub. 
Desde que é hospedado, não depende de qualquer plataforma. Ele é configurado usando arquivos .travis.yml que contêm as 
informações a serem feitas. Suporta uma variedade de linguagens de programação. Travis usa máquinas virtuais para 
construir suas aplicações. Para repositorios privados existem vários planos de assinaturas mensais .

###Vantagens
* Travis é gratuito para todos os repositórios públicos no Github;
* O Travis suporta testes para diferentes versões;
*  Travis oferece suporte para  varias linguagens C, C ++,  JavaScript....e Scala etc;

###Desvantagens

* Possui um limite para carga de trabalho. Após um limte deve ser pago;
* Travis oferece suporte somente para projetos hospedados no GitHub;



## CircleCI

  Atualmente, o CircleCI suporta apenas o GitHub. Possui suporte para **Java, Ruby / Rails, Python, Node.js, PHP, Haskell e Skala**. 
O que separa o CircleCl das outras ferramentas é a forma como o serviço é oferecido. O  preço do serviço é calculado de acordo 
com o numero de "container" utilizados. Um container é gratuito e possibilita a construção de vários projetos. Depois de começar a 
adicionar mais container (a um preço fixo cada), é possivel escolher o nível de paralelização que melhor se adapte às suas necessidades. 
Existem 5 níveis de paralelização (1x, 4x, 8x, 12x e 16x). Possui suporte para Docker.


###Vantagens
* O CircleCI detecta as configurações de teste para uma ampla gama de aplicativos da Web com um único clique;
* Quando os testes são corrompidos, CircleCI ajuda na correção. Muitos erros são detectados  automaticamente e corrigidos;
* Servidores CircleCI podem ser instalados de forma automatica;
* Fácil integração com o Github;
* Construções rápidas, fácil configuração, preço competitivo;
* O CircleCI pode paralelizar automaticamente até 4 fluxos paralelos através de múltiplas máquinas;
* Posssui um bom suporte;

###Desvantagens

* Algumas atualizações podem gerar conflito com a versão do Container (Docker);
* Os testes algumas vezes são interrompidos devido a  atualizações do CircleCI;


## Codeship

  O Codeship baseia-se no GitHub e Bitbucket e fornece uma dose de paralelização de teste com o  recurso ParallelCI . 
Possui suporte **Java, PHP, Ruby (Rails), Node.js, Python e Go**. Há a possibilidade de implantar seviços como **AWS** ou **Heroku**. 
É permitida uma compilação concorrente e um pipeline de teste paralelo, e é limitado a 100 builds por mês e 5 projetos. 
O preço  vem em vários pacotes de atualização com a opção de adicionar a plataforma docker. Há também um plano personalizado onde você pode personalizar totalmente os parâmetros que se adequar a sua equipe o melhor.

### Vantagens
* Processo de implamtação mais fácil do que os concorrentes;
* O Codeship suporta os repositórios públicos e privados GitHub e BitBucket;
* Oferece revisão de código automatizado para RoR e JavaScript;
* Permite que os desemvolvedores escrevam seus scripts para implantar e gerenciar sua infraestrutura;
* Boa integração com a Amazon Web Services;

### Desvantagens
 * Possui uma documentação pobre em relação ao seus concorrentes;
 
 ## GitLab CI
 
  A solução da GilLab para a integração contínua tem como base o GitLab CI, um serviço que gerencia projetos/builds e que é parte do **GitLab.com**. O **GitLab Runner** é responsável por processar os builds, executar os testes e fornecer acesso ao GitLab CI através de uma API. O GitLab CI fornece funcionalidades essenciais para a integração contínua, como a paralelização de build, logging em tempo real, testes versionados, etc.
  
### Vantagens

* Os testes rodam de maneira distribuída em máquina separadas e é possível adicionar quantas máquinas forem 
necessárias para o projeto.
* Cada build pode ser separada em múltiplos jobs rodando em máquinas separadas.
* Um link na solicitação de mesclagem leva ao log de compilação atual que atualiza dinamicamente;
* O arquivo **.gitlab-ci.yml** armazena os testes permitindo que todos contribuam com mudanças e garantam que todos os ramos obtenham os testes de que precisam.

### Desvantagens

*  Para usá-lo com outro serviço (como GitHub ou Bitbucket) é necessário implementar ou buscar uma solução desenvolvidas por terceiros. Isso acrescenta custo adicional e sobrecarga de manutenção.


### Arquitetura
O GitLab CI é uma parte do GitLab, um aplicativo da Web com uma API que armazena seu estado em um banco de dados. Ele gerencia projetos/ builds e fornece uma interface de usuário agradável, além de todos os recursos do GitLab. O GitLab Runner é uma aplicação que processa compilações. Ele pode ser implantado separadamente e funciona com o GitLab CI através de uma API. Para executar testes, você precisa de pelo menos uma instância do GitLab e um GitLab Runner .

![](https://github.com/ipea/ipeaDATA_20/blob/master/GitArquit.jpg?raw=true)

 ### Jenkins VS GitLab CI  
 
 Os recursos padrão que definem o processo de integração e implantação contínua, como compilações, testes e implantações automatizadas, obviamente, são suportados por ambas as soluções.
 
 * **Painel de controle**: é necessário verificar o número de compilações que tiveram sucesso ou falharam, quando a última compilação teve êxito ou falhou e, de preferência, quais partes de um pipeline tiveram êxito ou falharam. O Jenkins atende bem . O GitLab CI  só mostra a última compilação na lista de projetos.
 Integração de relatórios

* **Exibir Relatório**: informa para a equipe sobre as mudanças súbitas na qualidade do código. Portanto, os relatórios devem ser preferencialmente visíveis diretamente no ambiente do CI / CD e não em uma página separada ou como um relatório para download.
Com o GitLab esta função é bem limitada, só é possível extrair uma parte específica a partir da saída de compilação / teste do console. Em contraste, o Jenkins tem a capacidade de exibir o relatório de compilação ou teste diretamente em sua página de pipeline.

* **Gerencimento de usuário**: Um gerenciamento de permissão herdado do gerenciador de repositório é útil para grupos maiores de desenvolvedores ou organizações nos quais você não deseja definir individualmente as permissões de cada usuário para cada serviço (isto é, repositório e ferramenta CI / CD). Esse recurso é integrado ao GitLab com o GitLab CI combinado. Por outro lado, como o Jenkins não vem com um gerenciador de repositório interno e não tem a capacidade de incorporar diretamente permissões entre o gerenciador de repositórios e a plataforma CI / CD.
 
 
* **Suporte a Plugins**: são importantes quando desejamos implemetar uma funcionalidade que esta disponivel parcialmente ou mesmo totalmente ausente. Caso houver um plugin disponivel é so utiliza-lo. O Jenkins tem suporte total para plugins, escrito na linguagem Java amplamente difundida. Em contraste, GitLab CI atualmente conta com poucos plugins.
 
 ### Comparação entre as  demais ferramentas
 A tabela possui dezoito critérios para mostrar relação e comparação as CI
 
 ![Ciclo Básico de integração Contínua](https://github.com/BrunoRangel30/Testes/blob/master/tabela%20de%20compar%C3%A7%C3%A3o.PNG?raw=true")
 
 Baseado nesta comparção o Jenkins foi o  preferido em relação as outras ferramentas, uma vez que permite uma estrutura segura e fornece um conjunto de ferramentas CI. Os fatores que mais se destacaram foram:
 * É um projeto livre;
 * Oferece grande flexibilidade;
 * Suporta varias metodologias de desenvolvimento diferentes;
 * Há mais de 1200 plug-ins ;
 * Possui  a maior comunidade;

 Jenkins seria boa  escolha para começar a trablhar com integração continua por ser uma  ferramenta flexível  e bem conhecida no mercado.
 
 ##Referencias
 
 
Dr. Terhi Kilamo, “DENIS POLKHOVSKIY
COMPARISON BETWEEN CONTINUOUS
INTEGRATION TOOLS”.Faculty Council of the Faculty of
Computing and Electrical Engineering, 2016

What are the best continuous integration tools? https://www.slant.co/topics/799/~best-continuous-integration-tools
[Online; acessado FEV. 2017].
