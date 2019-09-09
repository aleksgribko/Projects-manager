import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
// pass them as extra arguments (catch in actions)
import { createFirestoreInstance, reduxFirestore, getFirestore } from 'redux-firestore'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'

import fbConfig from './config/fbConfig.js'


const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirestore })),
        reduxFirestore(fbConfig),
    )
  )


  // react-redux-firebase config
const rrfConfig = {   
   attachAuthIsReady: true,
   useFirestoreForProfile: true, // gives properties of the current user to firebase.access it everywhere in the app when a user is logged in
   userProfile: 'users',
    // enableClaims: true // Get custom claims along with the profile
  }
  

const rrfProps = {
    firebase: fbConfig,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance,
}

ReactDOM.render(<Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
    </ReactReduxFirebaseProvider>
</Provider>, document.getElementById('root'));
