export const createProject = project => {
    // since we use thunk in the store, we can return a function
    return (dispatch, getState, { getFirebase, getFirestore }) =>{
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        console.log(profile, authorId)
        firestore.collection('projects').add({ 
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project })
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err })
        })
        
    }    
}