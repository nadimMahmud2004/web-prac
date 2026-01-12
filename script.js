// options: an object containing configuration options for the

// e.g., const options = { name: "test", pointX: 5};
class Singleton {
  constructor(options = {}) {
    // set some properties for our Singleton
    this.name = "SingletonTester";
    this.pointX = options.pointX || 6;
    this.pointY = options.pointY || 10;
  }
}
// our instance holder
let instance;
// an emulation of static variables and methods
const SingletonTester = {
  name: "SingletonTester",
  // Method for getting an instance. It returns
  // a Singleton instance of a Singleton object
  getInstance(options) {
    if (instance === undefined) {
      instance = new Singleton(options);
    }
    return instance;
  },
};
const singletonTest = SingletonTester.getInstance({
  pointX: 5,
});
// Log the output of pointX just to verify it is correct
// Outputs: 5
console.log(singletonTest.pointX);
