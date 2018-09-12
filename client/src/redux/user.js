import axios from 'axios'


const initialState = {
    userInfo: {

    },
    accountType: '',
    loggedIn: false,
    loginfail: false
}

let parsedLocal = JSON.parse(localStorage.user)

if(localStorage.token){
     initialState.loggedIn = true
     initialState.userInfo = parsedLocal
     initialState.accountType = parsedLocal.accountType
}else{
     initialState.loggedIn = false
}
    

export const signup = newUser =>{
        return dispatch =>{
            axios.post('/user/signup', newUser).then(response=>{
                localStorage.token = response.data
                dispatch({
                    type: "SIGN_UP",
                    user: newUser
                })
            })
            .catch(err =>{
                console.error(err)
            })
        }
}

export function login(credentials) {  
    return dispatch => {
        axios.post("/user/login", credentials)
            .then(response => {
                localStorage.token = response.data.token
                 localStorage.user = JSON.stringify(response.data.user);
                dispatch({
                    type: "LOGIN",
                    user: response.data.user
                })
            })
            .catch((err) => {
                dispatch({
                    type: 'LOGIN_FAIL'
                })
                console.error(err);
            });
    }
}

export function logout(){
    return dispatch =>{
        localStorage.token = null
        dispatch({
            type: "LOGOUT",
        })
    }
}

export const editUser = (id, editedUser) => {

    const reduce = Object.keys(editedUser).reduce((final, key)=>{

            if(editedUser[key]){

                return{
                    ...final,
                    [key]: editedUser[key]
                }

            } else{

                return final

            }
    }, {})

    return dispatch => {

        axios.put(`/users/${id}`, reduce).then(() => {dispatch();
        
        }).catch(err => {

            console.log(err);

        })
    }
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
            case "SIGN_UP" :
            return {
                userInfo: action.user,
                accountType: action.user.accountType,
                loggedIn: true,
                loginfail: false
            }
            case "LOGIN" :
            return {
                userInfo: action.user,
                accountType: action.user.accountType,
                loggedIn: true,
                loginfail: false
            }
            case "LOGOUT" : 
            return {
                userInfo: {},
                accountType: '',
                loggedIn: false,
                loginfail: false
            }
            case "LOGIN_FAIL":
            return{
                loginfail: true,
                loggedIn: false
            }
        default:
            return state
    }
}

export default userReducer