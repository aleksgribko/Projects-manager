import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'


const Navbar = (props) => {

    const renderNavbarAfterAuth = () => {
        if (props.auth.isLoaded ) {
            return (
               <div className="container">
               <Link to='/' className='brand-logo'>AleksPlan</Link>
               {props.auth.uid ? <SignedInLinks profile={props.profile}/> : <SignedOutLinks />}          
           </div>
            )       
        } else {
            return null
        }
    }

    return (
     <nav className="nav-wrapper grey darken-3">
         { renderNavbarAfterAuth() }
         
     </nav>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar)
