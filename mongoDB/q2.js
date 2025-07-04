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




db.comments.insertMany([
    {
        _id:"c1",
        pid:"p1",
        name:"comment1"
    },
    {
        _id:"c2",
        pid:"p1",
        name:"comment2"
    },
    {
        _id:"c3",
        pid:"p2",
        name:"comment3"
    },
    {
        _id:"c4",
        pid:"p2",
        name:"comment4"
    },
    {
        _id:"c5",
        pid:"p2",
        name:"comment5"
    }
]);



db.posts.aggregate([
  {
    $lookup: {
      from: "comments",
      localField: "_id",
      foreignField: "pid",
      as: "comments",
    },
  },
  {$unwind:"$comments"},
  {$project: {_id:0,post:1,"comments.comment":1}}
]);


db.marks.insertMany([
    {name:"John", term: "t1", subject: "maths", score:"98"},
    {name:"John", term: "t2", subject: "maths", score:"90"},
    {name:"John", term: "t3", subject: "maths", score:"88"},
    {name:"John", term: "t1", subject: "science", score:"92"},
    {name:"John", term: "t2", subject: "science", score:"82"},
    {name:"John", term: "t3", subject: "science", score:"82"},
    {name:"Cathy", term: "t1", subject: "maths", score:"92"},
    {name:"Cathy", term: "t2", subject: "maths", score:"92"},
    {name:"Cathy", term: "t3", subject: "maths", score:"82"},
    {name:"Cathy", term: "t1", subject: "science", score:"92"},
    {name:"Cathy", term: "t2", subject: "science", score:"82"},
    {name:"Cathy", term: "t3", subject: "science", score:"80"},
]);


db.marks.aggregate([
    {$group:{_id:"$name",AvgScore:{$avg:"$score"}}}
]);