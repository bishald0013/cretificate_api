import mongoose from "mongoose";

const participantSchema = mongoose.Schema({
    p_c_id: {type: 'string'},
    p_first_name: {type: 'string', required: true},
    p_last_name: {type: 'string', required: true},
    p_email: {type: 'string', required: true},
    p_number: {type: 'string', required: true},
    p_created_by: {type: 'string'}
})

const ParticipantModel = mongoose.model('Participant', participantSchema)
export default ParticipantModel