const functions = require('firebase-functions');
const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)

// after going to the link we will be getting a function

exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello People!");
});

const createNotification = (notification => {
    return admin.firestore().collection('notifications')
        .add(notification)
        .then(doc => console.log('notification added', doc))
})

exports.projectCreated = functions.firestore
    .document('projects/{projectId}')
    .onCreate(doc => {

        const project = doc.data();
        const notif = {
            content: 'Added a new project',
            user: `${project.authorFirstName} ${project.authorLastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }
        return createNotification(notif)
})

exports.userSignedUp = functions.auth.user()
    .onCreate(user => {
        return admin.firestore().collection('users')
        .doc(user.uid).get().then(doc => {

            const newUser = doc.data()
            const notif = {
                content: 'Joined the party',
                user: `${newUser.firstName} ${newUser.lastName}`,
                time: admin.firestore.FieldValue.serverTimestamp()
            }
            return createNotification(notif)
        })
    })  
    