import React from 'react'
import Notification from './Notifications'
import ProjectList from '../projects/ProjectList'

import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

import { connect } from 'react-redux'

const Dashboard  = props => {
    const { projects } = props

        return (
            <div className="dashboard container">                
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={projects}/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notification notifications={props.notifications}/>
                    </div>
                </div>
            </div>
        )
}

const mapStateToProps = state => { 
    //console.log(state)
    return {        
        projects: state.firestore.ordered.projects,
        notifications: state.firestore.ordered.notifications
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects', orderBy: ['createdAt', 'desc'] },
        { collection: 'notifications', limit: 3, orderBy: ['time', 'desc'] },
    ])
)(Dashboard)