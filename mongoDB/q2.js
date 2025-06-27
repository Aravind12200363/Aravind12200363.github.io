db.employees.insertOne({
    name: "John Doe",
    email:"johndoe@gmail.com",
    department: "IT",
    salary: 50000,
    location: ["FL","OH"],
    date: Date(),
});
db.employees.insertMany([
    {
       name:"Mike Joseph",
       email:"mike@gmail.com",
       department: "IT",
       salary: 3456,
       location: ["AZ","TX"],
       date: Date(),
    }
]);
db.employees.find();
db.employees.find({},{_id:0,nmae:1,salary:1});