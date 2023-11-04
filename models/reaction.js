const { Schema, Types } = require('mongoose');
// import moment module to format the timestamp
const moment = require('moment')

//reaction schema
const reactionSchema = new Schema (
    {
       reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
       },
       reactionBody: {
        type: String,
        required: true,
        maxlength: 280
       },
       username: {
        type: String,
        required: true,
       },
       createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => moment(createdAtVal).format("MMM DD, YYYY [at] hh:mm a"),
       },
    },
    {
        toJSON: {
            getters: true
        },
        id: false,
    }
)

const Reaction = model('Reaction', reactionSchema);
// export the Reaction model
module.exports = Reaction;