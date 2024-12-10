export interface Question {
    text: string;
    options: string[];
    correctAnswer: string;
  }
  
  const questions: Question[] = [
    {
      text: "O que é o Front-End em um site ou aplicativo?",
      options: [
        "(A) O lugar onde as informações do site são armazenadas.",
        "(B) A interface visível e interativa, como botões e imagens.",
        "(C) Uma ferramenta para gerenciar APIs.",
        "(D) O sistema de segurança do site.",
      ],
      correctAnswer: "(B) A interface visível e interativa, como botões e imagens.",
    },
    {
      text: "Qual das linguagens abaixo é usada no desenvolvimento Front-End?",
      options: [
        "(A) Python",
        "(B) Node.js",
        "(C) HTML",
        "(D) PHP",
      ],
      correctAnswer: "(C) HTML",
    },
    {
      text: "O que o Back-End faz em um site ou aplicativo?",
      options: [
        "(A) Mostra imagens e textos para o usuário.",
        "(B) Processa e armazena informações, como login e dados de usuários.",
        "(C) Cria efeitos visuais e animações.",
        "(D) Apenas conecta o site à internet.",
      ],
      correctAnswer: "(B) Processa e armazena informações, como login e dados de usuários.",
    },
    {
      text: "Qual das opções é uma analogia correta para explicar o Front-End e o Back-End?",
      options: [
        "(A) O front-end é o estoque e o back-end é o vendedor.",
        "(B) O front-end é o garçom e o back-end é o cliente.",
        "(C) O front-end é a vitrine e o back-end é o estoque.",
        "(D) O front-end é a cozinha e o back-end é a mesa do cliente.",
      ],
      correctAnswer: "(C) O front-end é a vitrine e o back-end é o estoque.",
    },
    {
      text: "O que é uma API no contexto de Front-End e Back-End?",
      options: [
        "(A) Uma linguagem de programação para sites.",
        "(B) Uma ferramenta para criar interfaces bonitas.",
        "(C) Um intermediário que conecta o Front-End ao Back-End.",
        "(D) Um banco de dados avançado.",
      ],
      correctAnswer: "(C) Um intermediário que conecta o Front-End ao Back-End.",
    },
    {
      text: "Qual exemplo prático foi dado para demonstrar a conexão entre Front-End e Back-End?",
      options: [
        "(A) Cadastro de um produto.",
        "(B) Simulação de um pedido de login.",
        "(C) Design de um site.",
        "(D) Criação de um banco de dados.",
      ],
      correctAnswer: "(B) Simulação de um pedido de login.",
    },
  ];
  
  export default questions;
  
  