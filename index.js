var app = new Vue({
  el: "#app",
  data: {
    message: "Hello!!",
    name: "Elton",
    display: "is a cat",
    fruits: ["bananas", "strawberries", "pears"],
    showInfo: "false",
    newFruit: "add a new fruit"
  },
  methods: {
    changeMessage: function () {
      console.log('changing message...');
      this.message = "Buh ... Bye";
    },
    toggleInfo: function () {
      console.log("togglinnnnnnng");
      this.showInfo = !this.showInfo;
    },
    addFruit: function () {
      console.log('adding a fruit');
      console.log(this.newFruit);
      this.fruits.push(this.newFruit);
    }
  }
});