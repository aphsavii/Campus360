const mongoose = require('mongoose');

const collegeSchema = new mongoose.Schema({
  clgName: String,
  shortName: String
});

const College = mongoose.model('College', collegeSchema, 'collegeData');
module.exports = College;
