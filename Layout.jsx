import React from 'react';

class Layout extends React.Component {
    constructor(props){
        super(props);
        this.store = this.props.store
    }
    handleClick(e){
        this.store.dispatch({
            type: 'VOTE_ANGULAR'
        })
    };
    render() {
        console.log(this)
       console.log(this.store)
      return (
         <div>
            Hello World!!!
            <button onClick={(e)=>this.handleClick(e)}>submit</button>
         </div>
      );
    }
} 
export default Layout;