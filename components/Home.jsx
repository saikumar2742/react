import React from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'

class Home extends React.Component{
    render(){
        debugger
        function Listings(total_answers) {
            debugger
            const listItems = total_answers.map((each, key)=>
                <div key={key}>
                    <span>{each.name}</span>
                    <span>{each.emp_no}</span>
                    <span>{each.sex}</span>
                    <span>{each.location}</span>
                    <span>{each.claim_type}</span>
                </div>
            )


            return (
                {listItems}
            )

        }
        return(
            <div className='home-container'>
                <label className='top-heading'>Welcome to Home</label>
                <Link to='/form'>Please the Fill Details</Link>
                {console.log("total", this.props.total_answers)}

                <div className='listings'>
                    {this.props.total_answers?
                        this.props.total_answers.map((each, key)=>
                            <div className='each-name' key={key}>
                                <div>{each.name}</div>
                                <div>{each.emp_id}</div>
                                <div>{each.sex}</div>
                                <div>{each.location}</div>
                                <div>{each.claim_type}</div>
                            </div>
                    )
                    : null}
                </div>
            </div>
        )
    }
}

const mapStatetoProps = (state)=>({
    ...state.form
})

export default connect(mapStatetoProps)(Home)

