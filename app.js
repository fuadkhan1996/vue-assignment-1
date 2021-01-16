const app = Vue.createApp({
  data() {
    return {
      name: 'Fuad Khan',
      age: 23,
      imageURL: 'https://media.istockphoto.com/photos/pakistan-monument-islamabad-picture-id535695503?k=6&m=535695503&s=612x612&w=0&h=uP8aDK4xlfjk3kEiyr9wwUiuh80UwAiICweFpiBDosk=',
    }
  },
  methods: {
    calculateAge() {
      return this.age + 5;
    }
  }
})

app.mount('#assignment')
