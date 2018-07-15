import axios from 'axios'


const initialState = {
    userInfo: {

    },
    accountType: '',
    loggedIn: false,
    loginfail: false
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
                initialState.user = JSON.stringify(response.data.user);
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
                loginfail: true
            }
        default:
            return state
    }
}

export default userReducer