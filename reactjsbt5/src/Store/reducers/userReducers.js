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
        state.userList = data;
        return {...state}
    }
    case 'SET_USER_REDUCERS':{
        return {...state, selectedUsers:payload}
    }
    case 'DELETED_USER_REDUCERS':{
        state.userList = state.userList.filter((ele)=> ele.id !== payload)
        return {...state}
    }   
    
        default:
         return state
    }
}



