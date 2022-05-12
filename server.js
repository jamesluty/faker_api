const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');
const { application } = require("express");

// Middleware
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

// we can create a function to return a random / fake "Product"
// const createProduct = () => {
//   const newFake = {
//       name: faker.commerce.productName(),
//       price: faker.commerce.price(),
//       department: faker.commerce.department()
//   };

//   return newFake;
// };

const userObj = () => {
  const user = {
    password: faker.internet.password(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.phoneNumber(),
    lastName: faker.name.firstName(),
    firstName: faker.name.lastName(),
    _id: 1
  };

  return user;
}

const companyObj = () => {
  const company = {
    _id: 2,
    name: faker.company.companyName(),
    address: {
      street: faker.address.streetName(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country()
    }
  }

  return company;
}

// const newFakeProduct = createProduct();
// console.log(newFakeProduct);
const user = userObj();
console.log(user);
const company = companyObj();
console.log(company);

app.get("/api/users/new", (req, res) =>{
  res.json(user)
})

app.get("/api/companies/new", (req, res) => {
  res.json(company)
})

app.get("/api/user/company", (req, res) => {
  res.json({user, company})
})

/*
* The output of the above console log will look like this
* {
*   name: 'Anime Figure',
*   price: '$568.00
*   department: 'Tools' 
* }
*/

// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.send("Our express api server is now sending this over to the browser");
});

app.listen(8000, () => {
  console.log(`Server is locked and loaded on port ${port}!`)
})
