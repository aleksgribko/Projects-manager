import firebase from '../../config/fbConfig';

export const signIn = (credentials) => {
    return (dispatch, getState) => {
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS' })
        }).catch((err)=> {
            dispatch({ type: 'LOGIN_ERROR', err})
        })
    }    
}

export const signOut = () => {
    return (dispatch, getState) => {
        firebase.auth().signOut().then(() => {
            dispatch({ type: 'SIGNOUT_SUCCESS' })
        })
    }
}

export const signUp = (newUser) => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore()
        console.log(firestore, newUser)

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((res)=> {
            console.log(res)
            return firestore.collection('users').doc(res.user.uid).set({
                firstName: newUser.userFirstName,
                lastName: newUser.userLastName,
                initials: newUser.userFirstName[0] + newUser.userLastName[0]
            })
        }).then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS'})
        }).catch(err => {
            dispatch({ type: 'SIGNUP_ERROR', err })
        })
    }
}