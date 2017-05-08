![alt text](https://i2.wp.com/codeforgeek.com/wp-content/uploads/2016/04/banner-1.png?zoom=2&resize=770%2C385&ssl=1 "react+jenkins") 

# Integração continua do React com o Jenkins

Este é um tutorial de como fazer a integração contínua de um projeto **React** com o **Jenkins**.

## Table of Contents

- [Ambiente](#ambiente)
- [Instalação Apache](#instalação-apache)
- [Instalação Jenkins](#instalação-jenkins)
- [Configurando Permissões](#configurando-permissões)
- [Configurando um Job React/NodeJS](#configurando-um-job-reactnodejs)
- [Erros Comuns](#erros-comuns)


## Ambiente
> **Infraestrutura:**
> - `Máquina 1`: Apache Web Server; [54.207.111.184/build/](http://54.207.111.184/build/)
> - `Máquina 2`: CI Jenkins; [54.94.242.231:8080](http://54.94.242.231:8080)

> **Detalhes:**
> - **Sistema Operacional:** Amazon Linux 2013.03.01;
> - **AMI-ID:** ami-3ffed17a;
> - **Security Groups Ports:** 8080

## Instalação Apache
![alt text](https://www.librebyte.net/wp-content/uploads/2012/08/apache_log.png "Apache") 

1. Primeiramente faça a atualização do apt-get: 
```shell
$ sudo apt-get update 
```

2. Em seguida instale os seguintes programas: 
```shell
$ sudo apt-get install apache2
$ sudo apt-get install php5
$ sudo apt-get install phpmyadmin
$ sudo apt-get install nmap 
```
     
Esses são os programas necessários para rodar um servidor web. 

3. Após a instalação, reinicie o Apache com o comando: 
```shell
$ sudo /etc/init.d/apache2 restart
```
## Instalação Jenkins
![alt text](http://thedeveloperworldisyours.com/wp-content/uploads/jenkins_logo.png "Jenkins") 

1. Primeiramente torne-se root `sudo su`

2. Atualize seu repositório
```shell
$ yum update
```

3. Adicione o repositório do Jenkins
```shell
$ wget -O /etc/yum.repos.d/jenkins.repo http://pkg.jenkins-ci.org/redhat-stable/jenkins.repo
```

4. Obtenha a chave do repositório
```shell
$ rpm --import http://pkg.jenkins-ci.org/redhat-stable/jenkins-ci.org.key
```

5. Instale o Jenkins
```shell
$ yum install jenkins
```

6. Inicie o Jenkins
```shell
$ service jenkins start
$ chkconfig jenkins on
```

6. Abra o Jenkins em http://Server-IP:8080

**Pronto!** você tem agora o Jenkins funcionando!!

## Configurando Permissões
### Fazendo SCP sem passwd
Na máquina `Maquina 2` execute o comando

```shell
$ ssh-keygen -t rsa
```
será salvo uma chave publica no diretório 
your_home_dir/.ssh/id_rsa.pub

Transfira o arquivo `id_rsa.pub` para o destino usando scp

Na máquina `Maquina 1` copie o conteudo de `id_rsa.pub` para `~/.ssh/authorized_keys`

```shell
$ cat id_rsa.pub >>~/.ssh/authorized_keys
$ chmod 700 ~/.ssh/authorized_keys
```


### Liberação do usuário jenkins para executar scripts
Primeiramente é preciso informar ao linux que o usuário jenkins não precisa de senha para executar scripts. Na máquina `Maquina 2` execute o comando:

```shell
$ sudo su    
$ visudo -f /etc/sudoers
```
Adicione a seguinte linha no final

```shell
jenkins ALL= NOPASSWD: ALL
```

Caso não deseje liberar para o jenkins executar qualquer comando você deve explicitamente dizer qual comando você deseja executar

```shell
jenkins ALL=(ALL)NOPASSWD:/home/me/dir/script.sh
```

## Configurando um Job React/NodeJS
![alt text](http://coenraets.org/blog/wp-content/uploads/2014/12/react-node.png "Apache") 


1. Criando Job
No Clique no item em `New Item` do menu lateral

2. Escolha o tipo de Job
Insira o nome do job no campo `Enter an item name`
Escolha o tipo `Freestyle project`

3. Adicionando código Fonte
No menu `Source Code Management` escolha a opção `Git`
Em `Repositories` adicione a url do projeto Git em `Repository URL`
Caso seja nescessário adicione um Breach específica em `Branches to build`

4. Gatilhos de Build
`TODO!`

5. Build
Neste passo é onde "compilamos" o projeto React
Clique em `Add build step` e escolha a opção `execute shell`
Adicione o código abaixo:

```shell
$ sudo npm install
$ sudo npm run build
$ sudo scp  `-i chave.pem` -r build/ `user`@`dest-server-ip`:/var/www/html
```
`-i chave.pem`: Caso esteja utilizando uma máquina virtual, na amazon por exemplo, sua chave deve estar na pasta do projeto;

`user`: Usuario com permissão sudo;

`dest-server-ip`: Ip do servidor destino.

**Pronto!** agora você integrou seu projeto React com o Jenkins e suas builds serão feitas automaticamente.

## Erros Comuns!!

> **npm: not found**
>
> Este erro acentece porque o pacote npm não está instalado
>
> execute o comando:
> ```shell
> $ curl -sL https://deb.nodesource.com/setup | sudo bash -
> $ sudo apt-get install -y nodejs
> ```

> **sudo: sorry, you must have a tty to run sudo**
>
> Este erro acentece porque o o usuário jenkins que está tentando executar o script do passo da build não tem autorização
>
> execute o comando:
> ```shell
> $ sudo su 
> $ visudo -f /etc/sudoers
> ```
> inclua a linha:
> ```shell
> Defaults requiretty
> ```

> **sudo: no tty present and no askpass program specified**
>
> Este erro acentece porque você não configurou direito a parmissão do jenkins executar scritps
>
> execute o comando:
> ```shell
> $ sudo su 
> $ visudo -f /etc/sudoers
> ```
> inclua a linha:
> ```shell
> jenkins ALL= NOPASSWD: ALL
> ```

















