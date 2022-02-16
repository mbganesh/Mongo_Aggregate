var express = require('express');
var router = express.Router();
var PersonModel = require('../Models/PersonModel')
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/practice')
  
router.get('/' , async (req , res) => {
  var allData = await PersonModel.find({})
  console.log(allData.length);
  res.json(allData)
})


// params
// in express --> get ('/path/:id') -> in link --> path/<Num>(10)

router.get('/match/:index' , async(req , res) => {
  let id = req.params.index
  let foundOne = await PersonModel.aggregate([
    {'$match':{'index':+id}}
  ])
  res.json(foundOne)
})


router.get('/match' , async (req , res) => {
  let data = await PersonModel.aggregate([
    {
      // $match:{age:{$gt:20}}
      $match:{$and:[{age:21} , {gender:"male"},{isActive:false} , {tags:{$size:2}}]}
    }
  ])

  console.log(data.length)

  res.json(data)
})




module.exports = router;
