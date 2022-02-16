var mongoose = require('mongoose')


var PersonSchema = new mongoose.Schema(
    {
        "index":Number,
        "name": String,
        "isActive": Boolean,
        "registered": Date,
        "age": Number,
        "gender": String,
        "eyeColor": String,
        "favoriteFruit": String,
        "company": {
          "title": String,
          "email": String,
          "phone": String,
          "location": {
            "country":String,
            "address": String
          }
        },
        "tags": Array
      }
)

var PersonModel = mongoose.model('person' , PersonSchema)

module.exports = PersonModel