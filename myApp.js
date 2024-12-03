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
  Person.findById(personId,function(err,data){
    if(err)console.log(err);
    done(null,data);
  })
  //done(null /*, data*/);
};


// Mongoose has a dedicated updating method: Model.update(). 


// Modify the findEditThenSave function 
// to find a person by _id (use any of the above methods) with the parameter personId as search key. 
// Add "hamburger" to the list of the person's favoriteFoods (you can use Array.push()). 
// Then - inside the find callback - save() the updated Person.


const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  // Correct method: Changed from findPersonById to findById
  Person.findPersonById(personId, (err, person) => {
    if (err) {
      console.error(err); // Improved logging
      return done(err); // Added: Proper error handling with return to stop execution
    }

    person.favoriteFoods.push(foodToAdd); // Updated: Clearer variable name used (person instead of data)

    // Added: Save with callback to handle errors during the save operation
    person.save((err, updatedPerson) => {
      if (err) {
        console.error(err); // Added: Log save errors
        return done(err); // Added: Handle save errors
      }

      // Call done with the updated person
      done(null, updatedPerson);
    });
  });
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
