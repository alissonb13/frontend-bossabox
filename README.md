# VUTTR - Very Userful Tools to Remember

O VUTTR é uma aplicação SPA implementanda em Angular com a finalidade de comprovar conhecimentos no desenvolvimento de aplicações front-end. 

O objetivo principal da aplicação é servir como gerenciador e repositório de ferramentas importantes que possivelmente servirão para algum projeto futuro.

O projeto não tem o objetivo de ser uma solução pronta para usar em produção, porém não há nada que o impeça de ser utilizado com esse propósito. 

## Informações de frameworks utilizados no projeto:

Este projeto foi implementando o usando o Angular 7 e os seguintes frameworks:

* [Angular CLI](https://github.com/angular/angular-cli) - versão 7.3.5
* [NPM - Node.JS(v10.15.3)](https://nodejs.org/en/) - versão 6.4.1
* [Bootstrap](https://getbootstrap.com/) - versão 4.3.1
* [Ngx-Bootstrap](https://valor-software.com/ngx-bootstrap/#/) - versão 3.2.0

OBS: é muito recomendável, para a execução desse projeto, que o ambiente possua o Angular CLI e de extrema importância que o Node.JS esteja também instalado no ambiente.

## Como executar:

1. Faça o clone do projeto. Abra o terminal e execute o comando: `git clone https://github.com/alissonb13/frontend-bossabox.git`.

2. Ainda no terminal, navegue até o diretório do projeto e faça o download das dependências executando o comando `npm install`.

3. Após a instalação das dependências, basta executar o comando `ng serve` e então, caso tudo tenha sido instalado e configurado com sucesso, a aplicação estará disponível no endereço `http://localhost:4200/`.

## Build

Caso seja de seu interesse manter esta aplicação em produção, basta executar o comando `ng build --prod` e na pasta `dist/` se encontrarão os arquivos necessários para a execução em ambiente de produção. Se, por algum motivo, você queira buildar o projeto para outro ambiente que não seja produção basta executar somente o comando `ng build`, sem o `--prod`.

## Teste com Karma

O comando `ng test` executa os testes via [Karma](https://karma-runner.github.io).
