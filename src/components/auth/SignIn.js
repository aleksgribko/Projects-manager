import React, { useState } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'

function SignIn(props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    return (
        <div className="container">
            <form onSubmit={(e) => {
                e.preventDefault()
                props.signIn({email, password})
                props.history.push('/')
            }} className="white">
                <h5 className="grey-text text-darken-3">Sign In</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="input-field">
                    <button className="btn red lighten-1 z-depth-0">Login</button>
                    <div className="red-text center">
                        { props.authError ? <p>{props.authError}</p> : null }
                    </div>
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        authError: state.auth.authError
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signIn: (credentials) => dispatch(signIn(credentials))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
