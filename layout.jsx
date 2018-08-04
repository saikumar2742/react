import React from 'react'
import './layout.css'

class Layout extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <header></header>
                    {this.props.children}
                <footer></footer>
            </div>
        )
    }
}

export default Layout