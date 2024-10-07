## Gestão Senai - projeto de conclusão de curso.

 ### 1. **Visão Geral do Projeto** 
  - **Resumo**: Esse software é feito para a organização do uso dos armários presentes na escola e gerencia todos os alunos do Senai com as seguintes informações: Carômetro, nome completo, idade, turma, se é aprendiz ou estagiário e se é contribuinte da AAPM . Temos como principal objetivo facilitar o acesso dessas informações e tornar o processo de uso dos armários mais tecnológico.
  - **Recursos principais**:
    - Permissões e Controle de Acesso.
    - Filtro pré- estabelecido dos alunos cadastrados por itinerário formativo, curso técnico e  curso de aprendizagem industrial, para facilitar a localização rápida das informações.
    - Poder editar e atualizar os dados dos alunos já cadastrados, para que eu possa manter as informações sempre corretas e atualizadas.
    - Tela para selecionar aluno e vincular armário. Capacidade de verificar a disponibilidade de armários. 
    - Visualizar um relatório com a lista de alunos que possuem armário e aqueles que estão sem armário, para que eu possa gerenciar a distribuição de forma eficiente.
    - Poder remover a atribuição de armários aos alunos que não necessitam mais, para liberar armários para outros
    - Como administrador, eu quero visualizar um relatório com os alunos que são membros da APM, para que eu possa gerenciar quem está incluído.
 ### 2. **Guia de Instalação**
  - **Pré-requisitos**: Para utilizar este software, é essencial ter o ambiente NodeJS/React Native já configurado. Caso ainda não tenha realizado essa configuração, siga as orientações disponíveis neste link para preparar seu ambiente.

  - **Configuração e Instalação**:
    - Fork do Repositório: Primeiramente, faça um fork deste repositório para sua conta no GitHub.
    - Clone Local: Depois, clone o repositório forkado para sua máquina.
    - Instale as Dependências: Entre na pasta do projeto e instale as dependências necessárias.
    - Inicie o Projeto: Com as dependências instaladas, inicie o projeto.
    - Dispositivo ou Emulador: Finalmente, abra o projeto em seu dispositivo físico ou em um emulador.
    
 ### 3. **Arquitetura do Sistema** 
  - **Diagrama de arquitetura**: Descrição gráfica da arquitetura, como a interação entre componentes (microserviços, banco de dados, APIs, etc.).
  - **Camadas do sistema**: Descrição das camadas da aplicação (frontend, backend, banco de dados, etc.) e como elas se comunicam.
  - **Escolhas de design**: Justificativas das principais decisões de design, como escolha de padrões arquiteturais (MVC, Event-Driven, etc.).
 ### 4. **Documentação de API** 
  - **Endpoints**: Lista de todos os endpoints disponíveis (ex.: `/users`, `/login`), com descrições detalhadas.
  - **Métodos HTTP**: Para cada endpoint, especifique se é `GET`, `POST`, `PUT`, `DELETE`, etc.
  - **Parâmetros**: Defina parâmetros obrigatórios e opcionais (tanto da URL quanto do corpo da requisição).
  - **Exemplos de requisições e respostas**: Exemplos de payloads de requisição e suas respectivas respostas.
  - **Códigos de status HTTP**: Indique os possíveis códigos de retorno e seus significados (200, 404, 500, etc.).
 ### 5. **Guia de Desenvolvimento** 
  - **Estrutura do projeto**: Explicação da organização de diretórios e arquivos. 
  - **Padrões de código**: Indicar guias de estilo, padrões de nomenclatura, boas práticas de versionamento e convenções seguidas no projeto.
  - **Contribuição**: Instruções sobre como contribuir para o projeto, como enviar pull requests, padrões de commit, e como configurar o ambiente de desenvolvimento local.
  - **Testes**: Como rodar os testes, quais frameworks de teste são usados, e exemplos de como criar novos testes. 
 ### 6. **Documentação de Banco de Dados** 
  - **Modelo de dados**: Diagrama de entidade-relacionamento (ERD) ou outro modelo que ilustre o banco de dados.
  - **Descrição das tabelas**: Defina cada tabela, colunas e seus tipos de dados.
  - **Migrações e scripts de banco de dados**: Como criar ou aplicar migrações, ou executar scripts.
 ### 7. **Guia de Deploy** 
  - **Processo de deploy**: Passos para realizar o deploy em produção (ferramentas usadas, scripts, comandos).
  - **Ambientes de deploy**: Detalhar diferenças entre o ambiente de desenvolvimento e produção (ex.: variáveis de ambiente, configurações específicas).
  - **Monitoramento e logs**: Como monitorar a aplicação em produção e verificar logs de erros ou desempenho. 
 ### 8. **Manutenção e Suporte** 
  - **Planos de atualização**: Como gerenciar atualizações e versões do software.
  - **Problemas conhecidos**: Lista de bugs ou limitações conhecidas, com soluções alternativas, se houver.
  - **Contato**: Informações sobre como obter suporte ou reportar problemas. 
 ### 9. **Licença** 
  - Detalhar os termos de uso e licença do projeto, como uma licença MIT, GPL, ou outra. 
 ### 10. **Histórico de Versões (Changelog)** 
  - **Mudanças entre versões**: Registre as mudanças entre versões, melhorias, correções de bugs e novos recursos.
  - **Formato de versionamento**: Utilize práticas de versionamento semântico (ex.: `v2.1.0`). ### Ferramentas Úteis para Documentação
  - **Markdown**: Formato simples para documentação, comum em arquivos README.
  - **Swagger/OpenAPI**: Ferramenta para gerar documentação de APIs de forma interativa.
  - **Docusaurus** ou **GitBook**: Ferramentas para criar portais de documentação.
  - **Sphinx**: Para documentação de projetos Python. 
