import _ from 'lodash';

const form = (state = initialState, action) => {
    switch (action.type) {
      case 'HANDLE_CHANGE':
        event = action.payload
        var answers = state.answers ? Object.assign({},state.answers) : {}
        var field_name = event.target.name
        var value = event.target.value
        answers[field_name] = value

        return Object.assign({}, state, {
          answers: answers
        })

      case 'HANDLE_SUBMIT':
        var error_message = null
        var success = false
        var answers = Object.assign({}, state.answers)
        var fields = ['name', 'sex', 'location', 'claim_type', 'emp_id']
        if (!_.isEmpty(_.difference(fields, _.keys(answers)))){
          error_message = 'Fill required fields'
        }
        if (_.some(answers, _.isEmpty)){
          error_message = 'Fill required fields'
        }
        if (!error_message){
          if(!parseInt(answers['emp_id'])){
            error_message = "Employee Id should be integer"
          }
        }
        if (error_message == null){
          success = true
        }
        return Object.assign({}, state, {
          error_message,
          success          
        })
      case 'CLEAR_DATA':
        debugger
        var total_answers =  state.total_answers ? state.total_answers.slice() : []
        total_answers.push(Object.assign({}, state.answers))
        return Object.assign({}, state,{
          success: false,
          total_answers,
          answers: {}
        })

      case 'VOTE_REACT':
        console.log("Your choice is React!")
        return Object.assign({}, state, {
          react: state.react + 1
        })
      case 'VOTE_VUEJS':
        console.log("Your choice is Vue.js")
        return Object.assign({}, state, {
          vuejs: state.vuejs + 1
        })
      default:
        return state
    }
}
const initialState = {}

export default form;