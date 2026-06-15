const user1 = {
    name: "shiva ojha ",
    age: 23,
    email: "ojhashiva139@gmail.com",
    address1: "gurugram",
    address2: {
        "city": "delhi"
    }

}

const copyUser1 = { ...user1 };
copyUser1.address2.city = "mumbai";

console.log(user1.address2.city); // mumbai
console.log(copyUser1.address2.city); // mumbai