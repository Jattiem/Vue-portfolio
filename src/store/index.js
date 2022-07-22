import { createStore } from 'vuex'

export default createStore({
  state: {
    mense:[
      {
        id:1,
        name: "Lecturer: Joel Mukanya",
        description: "Yaseen has exhibited a vital grasp of the HTML, CSS & Bootstrap topics we have covered in class. I see the great potential and recommend him.",
        image: `https://i.postimg.cc/bvY4yRqC/joel-1.jpg`
      },
      {
        id:2,
        name: "Collegue: Daniel Fredericks",
        description: "Yaseen is a person with great potential.I believe that he will be able to accomplish much and that he will be an asset to any company.",
        image: `https://i.postimg.cc/52kh16sn/Daniel-2.jpg`
      },
      {
        id:3,
        name: "Collegue: Clayton Adonis",
        description: "The combination of his confidence and knowledge makes a valuable asset and he brightens up every room he is in",
        image: `https://i.postimg.cc/zXcySxcW/Clay3.jpg`
      },
      {
        id:4,
        name: "Collegue: Jared Isaacs",
        description: "Yaseen is an outgoing, hardworking, creative web developer. Who sets out to achieve his goals through perseverance and determination..",
        image: `https://i.postimg.cc/d1WVXGby/Jar.jpg`
      },
      {
        id:5,
        name: "Collegue: Muddathir Dawood",
        description: "Yaseen is a developer with potential to go far in life.He will always be the underdog of the team and come with unexpected support.",
        image: `https://i.postimg.cc/T2LKS4P2/Muddathir-1.jpg`
      },
    ],
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
