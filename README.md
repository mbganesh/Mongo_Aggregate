# Mongo_Aggregate

### Import Data : [Json](https://github.com/mbganesh/Mongo_Aggregate/blob/main/person.json)


## Match

```
router.get('/match/:index' , async(req , res) => {
  let id = req.params.index
  let foundOne = await PersonModel.aggregate([
    {'$match':{'index':+id}}
  ])
  res.json(foundOne)
})

```
