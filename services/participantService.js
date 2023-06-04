import ParticipantModel from "../models/participantModel.js";
class ParticipantService{
    validation(data){
        try {

            let validated_data = [];
            let invalid_data = [];

            let required_keys = ['F_name', 'F_name', 'Email', 'Number'];
            data.forEach(obj => {
                const missingKeys = required_keys.filter(key => !obj.hasOwnProperty(key))
                const emptyKeys = required_keys.filter(key => obj.hasOwnProperty(key) && obj[key] === '');

                if(missingKeys.length > 0){
                    let errorMessage = `Missing keys for f_name = ${obj.f_name}, keys = ${missingKeys}`
                    invalid_data.push(errorMessage); 
                }else if(emptyKeys.length > 0){
                    let errorMessage = `Missing keys for f_name = ${obj.f_name}, keys = ${emptyKeys} is empty`
                    invalid_data.push(errorMessage);
                }else{
                    validated_data.push(obj);
                }
            });

            if(validated_data.length > 0){
                const prepared_data = this.prepareData(validated_data);
                return {success: true, data: prepared_data, errors: invalid_data}
            }else{
                return {success: false, errors: invalid_data}
            }
            
        } catch (error) {
            console.log(error);
        }
    }

    prepareData(data){
        try {
            if(data.length === 0){
                return { error: 'No data found for preparation'}
            }
            const successData = data.map((value) => ({
                    p_c_id: '10',
                    p_first_name: value.F_name,
                    p_last_name: value.L_name,
                    p_email: value.Email,
                    p_number: value.Number,
                    p_created_by: "Bishal Deb"
            }))

            return {success: true, data: successData}

        } catch (error) {
            console.log(error)
        }
    }
}
export default ParticipantService