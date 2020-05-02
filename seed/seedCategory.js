
const Category = require('../models/category');
const mongoose = require('mongoose');



const seedCategory = () => {
    const categories = [
        { title: 'primary'},
        { title: 'jss' },
        { title: 'sss' }
    ]

    categories.forEach(data => {
        Category.findOne({title: data.title})
        .then(foundCategory => {
            if(!foundCategory) {
                const newCategory = new Category(data);
            
                newCategory.save()

                console.log('Seeded ' + newCategory.title);
            }
        })
    });
}

mongoose
  .connect(
    "mongodb://localhost:27017/expressapp",
    { useNewUrlParser: true, useUnifiedTopology: true }
  ).then(result => {
    seedCategory();
  })
  .catch(err => console.log(err));