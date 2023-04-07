// import express
const express = require("express");
const app = express();
const port = 8000;
const { faker } = require("@faker-js/faker");

// express configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

class User {
    constructor() {
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.number();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor() {
        this.name = faker.company.name();
        this.address = {
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country(),
        };
    }
}

// api routes
app.get("/api/users/new", (req, res) => {
    const newUser = new User();
    res.json(newUser);
});

app.get("/api/companies/new", (req, res) => {
    const newCompany = new Company();
    res.json(newCompany);
});

app.get("/api/user/company", (req, res) => {
    const newUser = new User();
    const newCompany = new Company();
    res.json({ user: newUser, company: newCompany });
});

// start the server
app.listen(port, () =>
    console.log(`Server listening on http://localhost:${port}`)
);
