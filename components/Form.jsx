import React from 'react';
import { connect} from 'react-redux'

class Form extends React.Component{
    constructor(props){
        super(props)

    }    
    render(){
        console.log("this props",this.props)
        return(
            <div className='employee-form'>
                {this.props.error_message!=null ? <span className='text-danger'>{this.props.error_message}</span> : null}
                {console.log("hi")}
                {this.props.success ? this.props.router.push('/') : null}
                {console.log("sai")}
                <legend className='form-legend'>Please fill your details</legend>
                <div className='form-group'>
                    <label>Name <span className='text-danger'>*</span></label>
                    <input className='form-control' type='text' name='name' onChange={(e)=>this.props.handleChange(e)}/>
                </div>
                <div className='form-group'>
                    <label>Employee ID</label>
                    <input className='form-control' type='text' name='emp_id' onChange={(e)=>this.props.handleChange(e)}/>
                </div>
                <div className='form-group'>
                    <label>Sex</label>
                    <div className="form-check">
                        <label>
                            <input type="radio" name='sex' value='male' onChange={(e)=>this.props.handleChange(e)}/>
                            Male
                        </label>
                    </div>
                    <div className="form-check">
                        <label>
                            <input type="radio" name='sex' value='female' onChange={(e)=>this.props.handleChange(e)}/>
                            Female
                        </label>
                    </div>
                </div>
                <div></div>
                <div className='form-group'>
                    <label>Location</label>
                    <select className='form-control' name='location' onChange={(e)=>this.props.handleChange(e)}>
                        <option value="">select</option>
                        <option value="upl">UPL</option>
                        <option value="wr">WR</option>
                        <option value="jh">JH</option>
                        <option value="kp">KP</option>
                    </select>
                </div>
                <div className='form-group'>
                    <label>ClaimType</label>
                    <select className='form-control' name='claim_type' onChange={(e)=>this.props.handleChange(e)}>
                        <option value="">select</option>
                        <option value="reimbursement">reimbursement</option>
                        <option value="cashless">cashless</option>
                    </select>
                </div>
                {/* <div className='form-group'>
                    <label>Document</label>
                    <input type='file' className='form-control-file'/>
                </div> */}

                <button className='btn btn-success' onClick={this.props.handleSubmit}>submit</button>
            </div>
        )    
    }
    componentWillUnmount(){
        this.props.clearSuccess();
    }
}

const handleChange=event=>{
    return {
        type: 'HANDLE_CHANGE',
        payload: event
    }
}

const handleSubmit=()=>({
    type: 'HANDLE_SUBMIT'
})

const clearSuccess=()=>{
    return {
        type: 'CLEAR_DATA'
    }
}

const mapStateToProps = state => {
    return {
        ...state.form
    }
}

const mapDispatchToProps = dispatch => ({
    handleChange: e => dispatch(handleChange(e)),
    handleSubmit: ()=>dispatch(handleSubmit()),
    clearSuccess: ()=>dispatch(clearSuccess())
})

 
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Form)