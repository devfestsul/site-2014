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
          time: "09h00"
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
          time: "10h00"
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
          time: "11h00"
        }
      },
      {
        name: "Almoço",
        time: "12h00"
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
          time: "13h30"
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
          title: "A definir",
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