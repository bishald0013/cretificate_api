import ParticipantService from "../services/participantService.js";
import ParticipantModel from "../models/participantModel.js";


class ParticipantController{
    constructor(){
        this.participantService = new ParticipantService();
    }

    addParticipant = async(req, res)=> {
        try {
            const participant_data = req.body
            const valid_data = this.participantService.validation(participant_data);

            const {success, data, errors} = valid_data
            if(success === true) {
                const saved_participants = await this.createParticipant(data.data);
                res.send(saved_participants)

            }else{
                res.send({error:errors})
            }
        } catch (error) {
            console.log(error);
        }
    }

    createParticipant = async (data) => {
        try {
            const email = data.map(value => value.p_email)
            const query =  { p_email: {$in: email} }
            const available_participants = await ParticipantModel.find(query, 'p_first_name p_email')

            const emails = available_participants.map(emails => emails.p_email)
            const save_participant = data.filter(participant => !emails.includes(participant.p_email))

            const participants = await ParticipantModel.insertMany(save_participant)
                    
            return {participants_saved: participants, available_participants: available_participants}

        } catch (error) {
            console.log(error);
        }
    }

}

export default ParticipantController;