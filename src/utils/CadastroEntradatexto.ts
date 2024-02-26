const Secoes = [
  {
    id: 1,
    Titulo: "Login",
    BotaoVoltar:false,
    EntradaTexto: [
      {
        id: 1,
        Label: "Email",
        Placeholder: "Insira seu endereço de email"
      },
      {
        id: 2,
        Label: "Senha",
        Placeholder: "Insira sua senha"
      }
    ]
  },

  {

    id: 2,
    Titulo: "Insira alguns dados básicos:",
    BotaoVoltar:true,
    EntradaTexto: [
      {
        id: 1,
        Label: "Nome",
        Placeholder: "Insira seu nome completo"
      },
      {
        id: 2,
        Label: "Email",
        Placeholder: "Insira seu endereço de email"
      }, {
        id: 3,
        Label: "Senha",
        Placeholder: "Insira sua senha"
      },
      {
        id: 4,
        Label: "Confirmar senha",
        Placeholder: "Insira sua senha novamente"
      }
    ]
  },
  {
    id: 3,
    Titulo: "Agora, mais alguns dados sobre você:",
    EntradaTexto: [
      {
        id: 1,
        Label: "CEP",
        Placeholder: "Insira seu CEP"
      },
      {
        id: 2,
        Label: "Endereço",
        Placeholder: "Insira seu endereço"
      }, {
        id: 3,
        Label: "Número",
        Placeholder: "Insira seu número"
      },
      {
        id: 4,
        Label: "Complemento",
        Placeholder: "Insira seu complemento"
      },
      {
        id: 5,
        Label: "Telefone",
        Placeholder: "(00) 00000-0000"
      }
    ]
  },
  {
    id: 4,
    Titulo: "Para finalizar, qual o seu plano de saúde?",
    Checkbox:[
      {
        id:1,
        value:"Sulamerica"
      },
      {
        id:2,
        value:"Unimed"
      },
      {
        id:3,
        value:"Bradesco"
      },
      {
        id:4,
        value:"Amil"
      },
      {
        id:5,
        value:"Biosaúde"
      },
      {
        id:6,
        value:"Outros"
      },
      {
        id:7,
        value:"Não tenho plano"
      }
    ]
  }
]

export { Secoes };