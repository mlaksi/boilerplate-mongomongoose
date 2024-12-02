require('dotenv').config();
let mongoose=require("mongoose");
const person = require('./src/models/person');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const Schema = mongoose.Schema;
const personSchema = new Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String]
});
let Person = mongoose.model("Person", personSchema);

console.log(Person);

const createAndSavePerson = (done) => {
  const person=new Person({name:"Mladenka",age:26,favoriteFoods:["apples","cheeseburgers"]});
  console.log(person);
  person.save(function(err,data){
    if (err) return console.error(err);
    done(null, data)
  });
};


const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople,function (err, people) {
    if (err) return console.log(err);
    done(null, people);
  });
  //done(null /*, data*/);
};

const findPeopleByName = (personName, done) => {
  Person.find({"name":personName},function(err,match){
    if(err) return console.log(err);
    done(null,match);
  })
  //done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods:food},function(err,match){
    if(err)console.log(err);
    done(null,match);
  });
  //done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  Person.findById({_id:personId},function(err,match){
    if(err)console.log(err);
    done(null,match);
  });
 // done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
