const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// can be destructered as seen on line 4
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String
});

// tells mongoose to create a new model class (~collection) for users
mongoose.model('users', userSchema);

// model classes (such as users) create model instances (collection entries)
