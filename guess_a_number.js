var app = new Vue({
  el: "#app",
  data: {
    message: "Please guess a number",
    correctNumber: 33,
    userGuess: 5,
  },
  methods: {
    compareNumber: function () {
      console.log('comparing number');
    }
  }
});


// What do we need to do to make guess a number work?//
// assign a correct number //
// get a number from the user //
// compare user's input with the correct number //
// let user know if number is < or > correct number //
// if user guesses correct number, tell them //

