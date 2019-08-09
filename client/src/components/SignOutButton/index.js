import React from 'react'

class SignOutButton extends React.Component {
    handleLogout=()=>{
        {localStorage.clear()}
        
    }
    render(){
        return (
            <div>
                
                 <button className="navbutton btn btn-warning my-2 btn-sm" onClick={this.handleLogout} >
                    Log Out
                </button>
            </div>
        )
    }
    
}
export default SignOutButton;