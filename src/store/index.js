import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    // Testimonial
    mense: [{
        id: 1,
        name: "Lecturer: Joel Mukanya",
        description: "Yaseen has exhibited a vital grasp of the HTML, CSS & Bootstrap topics we have covered in class. I see the great potential and recommend him.",
        image: `https://i.postimg.cc/bvY4yRqC/joel-1.jpg`
      },
      {
        id: 2,
        name: "Collegue: Daniel Fredericks",
        description: "Yaseen is a person with great potential.I believe that he will be able to accomplish much and that he will be an asset to any company.",
        image: `https://i.postimg.cc/52kh16sn/Daniel-2.jpg`
      },
      {
        id: 3,
        name: "Collegue: Clayton Adonis",
        description: "The combination of his confidence and knowledge makes a valuable asset and he brightens up every room he is in",
        image: `https://i.postimg.cc/zXcySxcW/Clay3.jpg`
      },
      {
        id: 4,
        name: "Collegue: Jared Isaacs",
        description: "Yaseen is an outgoing, hardworking, creative web developer. Who sets out to achieve his goals through perseverance and determination..",
        image: `https://i.postimg.cc/d1WVXGby/Jar.jpg`
      },
      {
        id: 5,
        name: "Collegue: Muddathir Dawood",
        description: "Yaseen is a developer with potential to go far in life.He will always be the underdog of the team and come with unexpected support.",
        image: `https://i.postimg.cc/T2LKS4P2/Muddathir-1.jpg`
      },
    ],
    // Resume
    resume:{
      resume1:[
        {
          id:1,
          title:"Lotus High School:2017:",
          par:"This is the first school attented where I was first introduced to high school."
        },
        {
          id:2,
          title:"LifeChoice Academy: 2022Present:",
          par:"A Bootcamp program that provides you with the core fundamentals of Web Development, learning coding languages such as HTML, CSS, JavaScript, and more coding techniques. We taught interpersonal and self-development skills to take us further in life."
        },
        {
          id:3,
          title:"Lentegeur HighSchool: 2018-2021:",
          par:"I went to Lentegeur High School in Lentegeur,Where I was always doing my work and attenting class regulary. I was always the one that kept to himself and did my work diligently."
        }
      ],
      resume2:[
        {
          id:1,
          title:"Home Preparation: 2021:",
          par:"I worked for my aunt for a month where I had to prepare a home for someone that was going to rent. "
        }
      ]
    },
    // Projects
    project: [{
        id: 1,
        image: `https://i.postimg.cc/NfxRRhh0/Naruto.jpg`,
        name: "Html Website",
        github: "https://github.com/Jattiem/name",
        netlify: "https://flourishing-pony-1a9a82.netlify.app/"
      },
      {
        id: 2,
        image: `https://i.postimg.cc/SNmMSZXb/Css-Html-Portfolio.png`,
        name: "Css&Html",
        github: "https://github.com/Jattiem/portfolio",
        netlify: "https://jovial-centaur-5b5cac.netlify.app/"
      },
      {
        id: 3,
        image: `https://i.postimg.cc/T2JK4rt7/Calculator.png`,
        name: "Calculator",
        github: "https://github.com/Jattiem/jsscalculator",
        netlify: "https://sweet-longma-3e1f27.netlify.app/"
      },
      {
        id: 4,
        image: `https://i.postimg.cc/t4Y7J8pw/Rainbow.png`,
        name: "Rainbow",
        github: "https://github.com/Jattiem/Rainbow",
        netlify: "https://meek-paprenjak-f44d29.netlify.app/"
      },
      {
        id: 5,
        image: `https://i.postimg.cc/Dz1vbTDj/img.png`,
        name: "Vue project",
        github: "https://github.com/Jattiem/Property-listing",
        netlify: "https://monumental-dasik-d637e3.netlify.app/"
      },
      {
        id: 6,
        image: `https://i.postimg.cc/zXM8tvY2/BodyMass.png`,
        name: "Body Mass",
        github: "https://github.com/Jattiem/BMI-calculator",
        netlify: "https://tiny-pegasus-052ed2.netlify.app/"
      }
    ]
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {}
})