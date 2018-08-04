import React from 'react';
import { connect} from 'react-redux'
class Results extends React.Component {
    constructor(props){
        super(props);
        // console.log(this.props,'props')
    }
    
    render() {
       console.log("this props",this.props)
    //    console.log("this.store",this.store)
    //    console.log(this.store.getState())
      return (
         <div>
            Hello World!!!-------------{this.props.angular}
            <button onClick={(e)=>this.props.handleClick(e)}>submit</button>
         </div>
      );
    }
}

const handleClick=e=>{
    return {
        type: 'VOTE_ANGULAR'        
    }
}

const mapStateToProps = state => {
    console.log("state",state)
    debugger
    return {
        ...state.results
    }
}

const mapDispatchToProps = dispatch => ({
    handleClick: e => dispatch(handleClick(e))
})

 
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Results)