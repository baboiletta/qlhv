import React from 'react';
import  Cookie  from 'universal-cookie'
import { Redirect} from 'react-router-dom'
class Auth extends React.Component{
    constructor(props){
        super(props)
        const cookies = new Cookie()
        this.state = {
            logined: cookies.get('islogin')
        }
        console.log(this.state)

    }

    renderRedirectTo(){
        if ( this.state.logined === 'true'){
            return this.props.orRender

        }
        else {
            return <Redirect to = {this.props.orRedirectTo}></Redirect>
        }
    }
        
    
    render(){
        return(
            <React.Fragment>
                {this.renderRedirectTo()}
            </React.Fragment>
        )
    }
}
export default Auth