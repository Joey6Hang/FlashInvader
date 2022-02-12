const User = require('./User.model');

const projectSchema = new Schema({
  idName: String,
  point: String,
  tasks: [{ type: Schema.Types.ObjectId, ref: 'Task' }],
  owner: { type: Schema.Types.ObjectId, ref: 'User' } // <== !!!
});
