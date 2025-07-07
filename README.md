# ✍️ Blog Pessoal: Backend Completo com NestJS, TypeORM e Segurança (JWT, Bcrypt)

Este repositório contém o **backend robusto** de uma aplicação de blog pessoal, desenvolvida com o framework **NestJS**. Este projeto representa um marco significativo na minha jornada de desenvolvimento, pois integra de forma avançada **APIs RESTful**, **Programação Orientada a Objetos (POO)**, **interação com banco de dados via TypeORM** e, crucialmente, uma **camada de segurança completa (autenticação com JWT e criptografia de senha com Bcrypt)**.

O sistema foi projetado para gerenciar postagens, temas e usuários, com todas as funcionalidades de CRUD e relacionamentos bem definidos, preparando o terreno para uma futura integração com um frontend completo e interativo.

## ✨ Destaques e Aprendizados Principais

* **Desenvolvimento de APIs RESTful Completas:** Implementação de endpoints claros e funcionais para gerenciar `Postagens`, `Temas` e `Usuários`, com todas as operações CRUD (`GET`, `POST`, `PUT`, `DELETE`).
* **NestJS Framework:** Utilização avançada do NestJS para construir uma aplicação backend escalável, modular e com base em boas práticas de design de software.
    * **Módulos (`@Module`):** Organização lógica da aplicação, encapsulando funcionalidades relacionadas em `PostagemModule`, `TemaModule`, `UsuarioModule` e `AuthModule`.
    * **Controladores (`@Controller`):** Responsáveis por receber requisições HTTP e roteá-las para os serviços apropriados.
    * **Serviços (`@Injectable`):** Contêm a lógica de negócio principal e a comunicação com a camada de persistência (TypeORM).
    * **Pipes (`ParseIntPipe`, `ValidationPipe`):** Para validação e transformação de dados de entrada, garantindo a integridade dos dados.
* **Programação Orientada a Objetos (POO):**
    * **Modelagem de Entidades Complexas:** Definição detalhada de classes `Postagem`, `Tema` e `Usuario` com suas propriedades, validações e tipos de dados.
    * **Relacionamentos de Banco de Dados (`TypeORM`):**
        * **`ManyToOne` (Postagem -> Tema):** Uma postagem pertence a um único tema.
        * **`ManyToOne` (Postagem -> Usuario):** Uma postagem é criada por um único usuário.
        * **`OneToMany` (Tema -> Postagem):** Um tema pode ter muitas postagens associadas.
        * **`OneToMany` (Usuario -> Postagem):** Um usuário pode ter muitas postagens criadas por ele.
    * **`onDelete: "CASCADE"`:** Configuração importante nos relacionamentos para garantir que, ao deletar um tema ou usuário, suas postagens associadas também sejam automaticamente removidas do banco de dados, mantendo a consistência.
* **TypeORM:** ORM (Object-Relational Mapper) robusto para abstrair a interação com o banco de dados.
    * **Decorações de Entidade (`@Entity`, `@PrimaryGeneratedColumn`, `@Column`, `@UpdateDateColumn`):** Mapeamento direto de classes TypeScript para tabelas e colunas do banco de dados.
    * **`@UpdateDateColumn`:** Gerenciamento automático de timestamps para a coluna `data` da postagem, registrando a última atualização.
* **Camada de Segurança Completa (Autenticação e Autorização):** **Este é um grande diferencial do projeto!**
    * **Módulo `Auth`:** Implementação de um sistema de autenticação e autorização para proteger a API.
    * **Criptografia de Senha com BCrypt:** Utilização da biblioteca `bcryptjs` para armazenar senhas de usuários de forma segura no banco de dados (hashing unidirecional).
    * **Guards (`AuthGuard`):** Proteção de rotas da API, garantindo que apenas usuários autenticados (com um token JWT válido) e/ou autorizados possam acessá-las.
    * **Estratégias de Autenticação JWT:** Geração e validação de JSON Web Tokens para gerenciar sessões de usuários de forma stateless.
* **Validação de Dados:** Uso extensivo da biblioteca `class-validator` com decorators como `@IsNotEmpty`, `@IsEmail`, `@MinLength` para validar os dados de entrada das requisições HTTP, assegurando a qualidade e segurança das informações.

## 🚀 Funcionalidades da API

A API do Blog Pessoal oferece os seguintes endpoints RESTful, organizados por suas respectivas entidades e módulos:

### **Endpoints de Tema (`/temas`)**

* `GET /temas`: Retorna uma lista de todos os temas cadastrados no blog.
* `GET /temas/:id`: Retorna os detalhes de um tema específico, buscando-o pelo seu ID.
* `GET /temas/descricao/:descricao`: Retorna temas que contêm a string fornecida na sua descrição.
* `POST /temas`: Cria um novo tema.
* `PUT /temas`: Atualiza um tema existente.
* `DELETE /temas/:id`: Exclui um tema pelo ID, com exclusão em cascata das postagens associadas.

### **Endpoints de Postagem (`/postagens`)**

* `GET /postagens`: Retorna uma lista de todas as postagens do blog.
* `GET /postagens/:id`: Retorna os detalhes de uma postagem específica, buscando-a pelo seu ID.
* `GET /postagens/titulo/:titulo`: Retorna postagens que contêm a string fornecida no seu título.
* `POST /postagens`: Cria uma nova postagem, associando-a a um tema e um usuário existentes.
* `PUT /postagens`: Atualiza uma postagem existente.
* `DELETE /postagens/:id`: Exclui uma postagem pelo ID.

### **Endpoints de Usuário (`/usuarios`)**

* `GET /usuarios`: Retorna uma lista de todos os usuários cadastrados (geralmente uma rota protegida).
* `GET /usuarios/:id`: Retorna os detalhes de um usuário específico pelo ID.
* `GET /usuarios/usuario/:usuario`: Retorna um usuário específico pelo seu username/email.
* `POST /usuarios/cadastrar`: Realiza o registro de um novo usuário na plataforma, criptografando a senha.
* `PUT /usuarios/atualizar`: Atualiza os dados de um usuário existente (requer autenticação).

### **Endpoints de Autenticação (`/auth`)**

* `POST /auth/logar`: Permite que um usuário faça login com suas credenciais, retornando um token de autenticação (JWT) se as credenciais forem válidas.

## 🛠️ Tecnologias Utilizadas

* **NestJS:** Framework progressivo de Node.js para construção de APIs RESTful eficientes e escaláveis.
* **TypeScript:** Linguagem de programação principal, que oferece tipagem estática, interfaces e outros recursos avançados, aprimorando a segurança e manutenibilidade do código.
* **TypeORM:** ORM (Object-Relational Mapper) que facilita a interação com o banco de dados relacional (compatível com PostgreSQL, MySQL, SQL Server, etc.).
* **`bcryptjs`:** Biblioteca para criptografia (hashing) de senhas, garantindo que elas não sejam armazenadas em texto simples.
* **`class-validator`:** Utilizado para aplicar validações declarativas nos DTOs (Data Transfer Objects) e entidades, garantindo a integridade dos dados.
* **`@nestjs/passport` / `passport-jwt`:** Bibliotecas essenciais para a implementação da estratégia de autenticação baseada em JWT.
* **Node.js:** Ambiente de execução.

## 📁 Estrutura do Projeto

O projeto segue uma arquitetura modular e bem definida, baseada nas boas práticas do NestJS, promovendo a separação de responsabilidades e a escalabilidade:
