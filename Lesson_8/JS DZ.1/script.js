let ladder = {
  counter : 0,
  up: function () { 
    this.counter += 1;
    return this;
  },
  down: function () { 
    this.counter -= 1;
    return this;
  },
  showStep: function () {
    if (this.counter < 0) {
      return console.log(`Ви не можете спуститися нищє 0 поверху? В домі немає підвалу`)
    } else if (this.counter > 4) {
    return console.log(`Ви не можете піднятися вищє, бо це 4 поверховий будинок`)
    }  
   return console.log(`Ви знаходитесь на ${this.counter} поверху`)
  }
};

ladder.up().up().down().showStep(); 