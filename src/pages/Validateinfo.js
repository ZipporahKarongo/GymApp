export default function validatemy(values){
let errors = {};
if(!values.firstname.trim()){
    errors.firstname = 'First name required'
}
if(!values.lastname){
    errors.lastname = 'Last name required'


}
if(!values.phoneno){
    errors.lastname = 'Phone number required'


}
if(!values.idno){
    errors.lastname = 'Id no required'


}

}