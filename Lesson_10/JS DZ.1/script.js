const user =  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
},
getUserInfo() {
    return {
      name: this.name,
      username: this.username,
      email: this.email
    };
  },

displayUserInfo() {
    const info = this.getUserInfo();
    for (const key in info) {
        console.log(`${key}: ${info[key]}`);
      }
  }
}

user.displayUserInfo();

