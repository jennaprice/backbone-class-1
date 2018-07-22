var Vehicle = Backbone.Model.extend({
  initialize: function(){
    console.log('Vehicle created');
  },
  urlRoot: '/api/vehicles',
  idAttribute: 'uuid',
  start: function() {
    console.log('Vehicle started');
  },
  validate: function(attributes) {
    if(!attributes.registrationNumber) 
      return 'Registration Number required';
  }
});

var Car = Vehicle.extend({
  start: function() {
    console.log('Car with', this.get("registrationNumber"), 'started.');
  }
});

var myCar = new Car();
myCar.set({
  color: 'Blue',
  registrationNumber: 'XLI88'
});



// // In the first few sections, we do all the coding here.
// // Later, you'll see how to organize your code into separate
// // files and modules.

// var Song = Backbone.Model.extend({
//     initialize: function () {
//       console.log("A new song is created");
//     },
//     validate: function(attributes){
//       if(!attributes.title)
//         return 'Title is required';
//     }
// });

// var Animal = Backbone.Model.extend({
//   walk: function(){
//     console.log('Animal walking...');
//   }
// });

// var song = new Song();
// //song.set("title", '21');
// song.set({
//   author: 'Taylor Swift',
// });

// var lastError = song.validationError;

// var Dog = Animal.extend({
//   walk: function(){
//     Animal.prototype.walk.apply(this);
//     console.log('Dog walking...')
//   }
// });

// var dog = new Dog ();
// dog.walk();