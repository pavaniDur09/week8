mongoose = require('mongoose');
//app = express();
const MONGO_URI = 'mongodb://localhost:27017/Week8';
mongoose.connect(MONGO_URI, {useNewUrlParser: true}); 
const db = mongoose.connection;

db.on('error', function(err){
    console.log("Error occured during connection"+err)
});

db.once('connected', function() {
    console.log(`Connected to ${MONGO_URI}`);
});

// creating the scheme
const PersonScheme = new mongoose.Schema({ 
    name: {type: String, required: true},
    age: Number, 
    Gender: String, 
    Salary: Number
});

// creating model named as modelname with collection named as personCollection
const person_doc = mongoose.model('modelname', PersonScheme,'personCollection');

const manypersons=[{ name: 'Simon',age:42,Gender:"Male",Salary:3456 },
        { name: 'Neesha',age:23,Gender:"Female",Salary:1000 },
        { name: 'Mary',age:27,Gender:"Female",Salary:5402 },
        { name: 'Mike',age:40,Gender:"Male",Salary:4519 },
        { name: 'Yousuf',age:36,Gender:"Male",Salary:3456 },
        { name: 'jacky',age:32,Gender:"Male",Salary:4520 }
]
       
/*person_doc.insertMany(manypersons).then(function(){
        console.log("Data inserted") // Success
}).catch(function(error){
        console.log(error) // Failure
});

// task 3 finding all documents
person_doc.find({})
          .sort({Salary: 1})
          .select('name Salary age')
          .limit(10)
          .exec()
          .then(docs =>{
            console.log("showing multiple documents")
            docs.forEach(function(Doc){
            console.log(Doc.age.Doc.name);})
          })
          .catch(err =>{
            console.log(err)
          })*/
var givenage=30;
person_doc.find({Gender:"male",age:{$gte:givenage}})
//4 find all users
          .sort({Salary:1})
          .select('name Salary age')
          .limit(10)
          .exec()
          .then(doc =>{
            console.log("showing age greater than ",givenage)
            doc.forEach(function(Doc){
                console.log(Doc.age, Doc.name);
            })
          })
          .catch(err =>{
            console.error(err)
          })
person_doc.countDocuments().exec()
          .then(count=>{
            console.log("Total documents count: ", count)
          })
          .catch(err =>{
            console.log(err)
          })

person_doc.deleteMany({age: {$gte: 25}})
          .exec()
          .then(docs =>{
            console.log('deleted documents are:',docs);
          })
          .catch(function(error){
            console.log(error);
          })
person_doc.updateMany({Gender:"female"},{Salary:1000})
          .exec()
          .then(docs =>{
            console.log("update")
            console.log(docs);
          })
          .catch(function(error){
            console.log(error)
          })*/
