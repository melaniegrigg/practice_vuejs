var app = new Vue({
  el: "#app",
  data: {
    message: "Hello!!",
    name: "Elton",
    display: "is a cat"
  },
  methods: {
    changeMessage: function () {
      console.log('changing message...');
      this.message = "Buh ... Bye";
    }
  }
});