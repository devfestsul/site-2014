module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "DevFest Sul",
      description: "DevFest é um evento mundial, realizado pela comunidade de desenvolvedores Google. Focado nas necessidades de cada comunidade local, ele tem por objetivo proporcionar a troca de conhecimento, networking e o fortalecimento dessas comunidades.",
      date: "23 de agosto",
      // If your event is free, just comment this line
      price: "R$ 50,00",
      venue: "Centro de Eventos Plaza São Rafael",
      address: "Avenida Alberto Bins, Centro Histórico",
      city: "Porto Alegre",
      state: "Rio Grande do Sul"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    callToAction: {
        text: "Garanta seu ingresso!",
        link: "http://www.eventick.com.br/devfestsul"
    },

    call4Papers: {
      text: "Quer palestrar?",
      link: "https://docs.google.com/a/agtlucas.com/forms/d/1_CLjZYcd9LGUJlFgNxX7DZgCyIQZKZNuW0ZB-1KTCeU/viewform"
    },

    // "Fork me on GitHub", if you don't want this, just remove the forkButton property
    // forkButton: {
    //     repository: "https://github.com/devfestsul/site-2014"
    // },

    // Site info
    site: {
      theme: "yellow-swan",
      url: "http://devfestsul.com.br",
      googleanalytics: ""
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'location',
      'speakers',
      'schedule',
      'sponsors',
      // 'partners'
      // 'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "Sobre",
      location: "Localização",
      speakers: "Palestrantes",
      schedule: "Agenda",
      sponsors: "Patrocínio",
      partners: "Parceiros",
      contact: "Contato"
    },

    // The entire schedule
    schedule: [
      {
        name: "Check-in / Credenciamento",
        time: "08h00"
      },
      {
        name: "Jackson F. Mafra",
        photo: "themes/yellow-swan/img/speakers/jackson-mafra.jpg",
        bio: "Instrutor de tecnologias mobile na Targettrust.",
        company: "TargetTrust",
        link: {
          href: "http://twitter.com/jacksonfdam",
          text: "@jacksonfdam"
        },
        presentation: {
          title: "Android para Desenvolvedores iOS",
          description: "Uma ambientação para quem está migrando do iOS ou pretende se aventurar no desenvolvimento em android. Aprenda sem sofrimento (ou pelo menos pouco) as diferenças das plataformas.",
          time: "09h00 - Sala Cambará"
        }
      },
      {
        name: "Lucas Montano",
        photo: "themes/yellow-swan/img/speakers/lucas-montano.jpg",
        bio: "Desenvolvedor desde 2002, com experiência em PHP, JAVA, JS e Android. Depois de ter trabalhado como líder de equipe e desenvolvedor sênior, eu comecei a minha própria empresa em 2012, aprendendo muito sobre Lean Startup e análise de Lean. ",
        company: "Moolab",
        link: {
          href: "",
          text: ""
        },
        presentation: {
          title: "Gradle com Android Studio",
          description: "Iniciando um projeto android com Android Studio e utilizando o Gradle para automatizar builds.",
          time: "09h00 - Sala Cambará"
        }
      },
      {
        name: "Felipe Lima",
        photo: "themes/yellow-swan/img/speakers/felipe-lima.jpeg",
        bio: "Felipe Lima é engenheiro de software há mais de 10 anos e atualmente trabalha com desenvolvimento Android na startup We Heart It. Já passou por empresas como HP e ThoughtWorks, atuando em variados tipos de projetos e tecnologias diferentes. Contribui ativamente em projetos Open Source, além de ter publicado no GitHub algumas bibliotecas bastante utilizadas pela comunidade.",
        company: "We Heart It",
        link: {
          href: "http://twitter.com/felipecsl",
          text: "@felipecsl"
        },
        presentation: {
          title: "Unit Testing Android Apps",
          description: "Como aplicar TDD para apps Android e construir uma suite de testes robusta e confiável.",
          time: "10h00 - Sala Cambará"
        }
      },
      {
        name: "Thayse dos Santos Severiano",
        photo: "themes/yellow-swan/img/speakers/thayse-severiano.jpg",
        bio: "Thayse dos Santos Severiano, analista de Testes na HB.SIS, em Blumenau. Está na área de TI a nove anos e atuando a quatro anos somente com testes, e nesse período, adquiriu a certificação CBTS. É organizadora do GDG Blumenau. No tempo livre, dedica-se a família, aos estudos de novas tecnologias, ferramentas e práticas de testes, atualização do seu blog, patinação e pintura em tela.",
        company: "HB.SIS",
        link: {
          href: "http://twitter.com/Thayse_ss",
          text: "@Thayse_ss"
        },
        presentation: {
          title: "Automatizando testes em aplicações para Android com Robotium",
          description: "Robotium é uma ferramenta que permite automação de testes para aplicações Android, que simula as ações de um usuário. Essa palestra visa apresentar o que é a ferramenta e mostrar o uso em uma aplicaçao simples, fazendo alguns testes básicos para demonstrar a simplicidade dela.",
          time: "10h00 - Sala Painera"
        }
      },
      {
        name: "Lucio Maciel",
        photo: "themes/yellow-swan/img/speakers/lucio-maciel.jpg",
        bio: "Desenvolvedor com mais de 13 anos de experiencia, tendo dedicado os últimos três exclusivamente ao desenvolvimento Android. Atualmente trabalha na We Heart It e mantém o site Muambator Android. Antes de entrar de cabeça no mundo da mobilidade foi desenvolvedor C/C++ para Linux e Unixes em geral por mais de dez anos.",
        company: "We Heart It",
        link: {
          href: "http://twitter.com/luciofm",
          text: "@luciofm"
        },
        presentation: {
          title: "Se eu posso, você també pode - Animações para Desenvolvedores",
          description: "Nessa palestra eu demostro quando e porque utilizar animações em aplicativos Android, como por exemplo para chamar a atenção do usuário, passar algum feedback, ou simplesmente ter uma transição de estados/telas mais suave, além de apresentar conceitos dos Frameworks de Animação e como utiliza-los para criar as animações apresentadas, na perspectiva do desenvolvedor.",
          time: "11h00 - Sala Cambará"
        }
      },
      {
        name: "Eduardo Costa",
        photo: "themes/yellow-swan/img/speakers/eduardo-costa.jpg",
        bio: "Co-fundador da Craftbox, organizer do GDG POA e agnóstico a tecnologia ",
        company: "Craftbox",
        link: {
          href: "http://twitter.com/eduardoscosta",
          text: "@eduardoscosta"
        },
        presentation: {
          title: "Integrando Android com Windows Azure",
          description: "Crie um backend para sua app na nuvem sem se preocupar com a infraestrutura, e ainda por cima de graça.",
          time: "11h00 - Sala Painera"
        }
      },
      {
        name: "Almoço",
        time: "12h00"
      },
      {
        name: "Leo Balter",
        photo: "themes/yellow-swan/img/speakers/leo-balter.jpeg",
        bio: "Leo Balter acredita que a Open Web torna o mundo um lugar melhor para todos. Colaborador de projetos open source, divide o tempo escrevendo códigos e testes - principalmente em JS, luta pela privacidade e direitos dos usuários na internet, e acredita que nada disso é possível sem a força da comunidades organicas de colaboração. Engenheiro de Software por profissão, também curte um bom Blues boa guitarra, video games, e long board. Em um momento da vida resolveu também ser advogado.",
        company: "",
        link: {
          href: "http://twitter.com/leobalter",
          text: "@leobalter"
        },
        presentation: {
          title: "Carreira de Sucesso no mundo Open Source",
          description: "Sua vida profissional pode passar por uma revolução à medida em que você se imerge no mundo Open Source. Veja como pequenos atos geram grandes revoluções, além de ver como seguir esse longo caminho e fugir dos perigos ao longo dele. Vamos abordar também histórias de empreendedorismo de sucesso com as comunidades open source.",
          time: "13h30 - Sala Cambará"
        }
      },
      {
        name: "A definir",
        photo: "themes/yellow-swan/img/icognito.png",
        bio: "---",
        company: "",
        link: {
          href: "",
          text: ""
        },
        presentation: {
          title: "Palestra - A definir",
          description: "---",
          time: "14h30"
        }
      },
      {
        name: "A definir",
        photo: "themes/yellow-swan/img/icognito.png",
        bio: "---",
        company: "",
        link: {
          href: "",
          text: ""
        },
        presentation: {
          title: "Palestra - A definir",
          description: "---",
          time: "15h30"
        }
      },
      {
        name: "Coffee-break",
        time: "15h30"
      },
      {
        name: "A definir",
        photo: "themes/yellow-swan/img/icognito.png",
        bio: "---",
        company: "",
        link: {
          href: "",
          text: ""
        },
        presentation: {
          title: "Palestra - A definir",
          description: "---",
          time: "16h00"
        }
      },
      {
        name: "A definir",
        photo: "themes/yellow-swan/img/icognito.png",
        bio: "---",
        company: "",
        link: {
          href: "A definir",
          text: ""
        },
        presentation: {
          title: "Palestra - A definir",
          description: "---",
          time: "17h00"
        }
      }
    ],

    // List of Sponsors
    sponsors: {
      adamantium: [
        {
          name: "Google",
          logo: "themes/yellow-swan/img/google.png",
          url: "http://google.com"
        }
      ],
      diamond: [
        {
          name: "GDG",
          logo: "themes/yellow-swan/img/your-logo.jpg",
          url: "mailto:contato@devfestsul.com.br"
        },
        {
          name: "GDG",
          logo: "themes/yellow-swan/img/your-logo.jpg",
          url: "mailto:contato@devfestsul.com.br"
        }
      ],
      gold: [
        {
          name: "GDG",
          logo: "themes/yellow-swan/img/your-logo.jpg",
          url: "mailto:contato@devfestsul.com.br"
        },
        {
          name: "GDG",
          logo: "themes/yellow-swan/img/your-logo.jpg",
          url: "mailto:contato@devfestsul.com.br"
        },
        {
          name: "GDG",
          logo: "themes/yellow-swan/img/your-logo.jpg",
          url: "mailto:contato@devfestsul.com.br"
        }
      ],
      silver: [
        {
          name: "Bludata Software",
          logo: "themes/yellow-swan/img/bludata.png",
          url: "http://www.bludata.com.br/"
        },
        {
          name: "GDG",
          logo: "themes/yellow-swan/img/your-logo.jpg",
          url: "mailto:contato@devfestsul.com.br"
        },
        {
          name: "GDG",
          logo: "themes/yellow-swan/img/your-logo.jpg",
          url: "mailto:contato@devfestsul.com.br"
        },
        {
          name: "GDG",
          logo: "themes/yellow-swan/img/your-logo.jpg",
          url: "mailto:contato@devfestsul.com.br"
        }
      ],
      support: [
        {
          name: "GDG",
          logo: "themes/yellow-swan/img/your-logo.jpg",
          url: "mailto:contato@devfestsul.com.br"
        },
        {
          name: "GDG",
          logo: "themes/yellow-swan/img/your-logo.jpg",
          url: "mailto:contato@devfestsul.com.br"
        },
        {
          name: "GDG",
          logo: "themes/yellow-swan/img/your-logo.jpg",
          url: "mailto:contato@devfestsul.com.br"
        },
        {
          name: "GDG",
          logo: "themes/yellow-swan/img/your-logo.jpg",
          url: "mailto:contato@devfestsul.com.br"
        },
        {
          name: "GDG",
          logo: "themes/yellow-swan/img/your-logo.jpg",
          url: "mailto:contato@devfestsul.com.br"
        }
      ],
    },

    // List of Partners
    partners: [
      {
        name: "BrazilJS",
        logo: "themes/yellow-swan/img/partner.png",
        url: "http://braziljs.org"
      }
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    },

    // Site Path
    getUrl: function() {
    	return this.site.url;
    }
  }
};