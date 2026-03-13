const user = {
  name: "Test User",
  age: 20,
  city: "Kyiv",
  country: "Ukraine",
  email: "testuser@gmail.com",
  getUserInfo() {
    return `User name: ${this.name}, user age: ${this.age}, user city: ${this.city}, user country: ${this.country}, user email: ${this.email}.`;
  },
};

console.log(user.getUserInfo());
