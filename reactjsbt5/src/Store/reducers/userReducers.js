const DEFAULT_STATE = {
    userList: [{
        id: '1',
        hoTen: 'Thanh Dat Le',
        phoneNumber: '085512123123',
        email: 'Datle@gmail.com',
    },
    {
        id: '2',
        hoTen: 'Yume Nishimiya',
        phoneNumber: '09004111996',
        email: 'yumeNishi04111996@gmailcom',
    },
    ],
    selectedUsers: null,
};




export const userReducers = (state = DEFAULT_STATE, {type, payload})=>{
    switch(type){
    case 'ADD_USERS': {
        const data = [...state.userList];
        data.push({...payload,  id: Date.now()});
        return {...state}
    }
    case 'SET_USER_REDUCERS':{
        return {...state, selectedUser:payload}
    }    
    
        default:
         return state
    }
}



