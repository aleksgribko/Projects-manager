const initiState = {
    projects: [
        {id:'1', title: 'help', content: 'hep blah'},
        {id:'2', title: 'help2', content: 'hep blah2'},
        {id:'3', title: 'help3', content: 'hep blah3'}
    ]
}

const projectReducer = (state = initiState, action) => {
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('created project:', action.project)
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('created project error:', action.err)
            return state;
        default:
            return state;
    }
}

export default projectReducer