import React, { useState } from 'react'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions'

function SignUp(props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userFirstName, setUserFirstName] = useState('')
    const [userLastName, setUserLastName] = useState('')    
    return (
        <div className="container">
            <form onSubmit={(e) => {
                e.preventDefault()                
                props.signUp({email, password, userFirstName, userLastName})
                props.history.push('/')
            }} className="white">
                <h5 className="grey-text text-darken-3">Sign Up</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="input-field">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id='firstName' onChange={(e) => setUserFirstName(e.target.value)}/>
                </div>
                <div className="input-field">
                    <label htmlFor="lastName">First Name</label>
                    <input type="text" id='lastName' onChange={(e) => setUserLastName(e.target.value)}/>
                </div>
                <div className="input-field">
                    <button className="btn red lighten-1 z-depth-0">Sign Up</button>
                </div>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispath => {
    return {
        signUp: (newUser) => dispath(signUp(newUser))
    }
}

export default connect(null, mapDispatchToProps)(SignUp)
