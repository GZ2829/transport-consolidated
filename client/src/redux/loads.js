import axios from 'axios'


export const getLoadData = () =>{

    return dispatch => {

        axios.get('/api/loads').then(response => {

            dispatch({
                type: 'GET_LOAD_DATA',
                loads: response.data
            })

        }).catch(err => {

            console.log(err)
        })
    }
}

export const addLoad = addedLoad => {

    return dispatch => {

        axios.post("/api/loads", addedLoad).then(() => {

            dispatch(getLoadData());

        }).catch(err => {

            console.log(err);
        })
    }
}

export const removeLoad = id => {

    return dispatch => {

        axios.delete(`/api/loads/${id}`).then(() => {

            dispatch(getLoadData());

        }).catch(err => {

            console.log(err);
        })
    }
}

export const editLoad = (id, editedLoad) => {

    const reduce = Object.keys(editedLoad).reduce((final, key)=>{

            if(editedLoad[key]){

                return{
                    ...final,
                    [key]: editedLoad[key]
                }

            } else{

                return final

            }
    }, {})

    return dispatch => {

        axios.put(`/api/loads/${id}`, reduce).then(() => {dispatch(getLoadData());
        
        }).catch(err => {

            console.log(err);

        })
    }
}



const loadReducer = (state = [], action) => {

    switch(action.type){

        case "GET_LOAD_DATA":
            return action.loads

        default:
            return state
    }

}


export default loadReducer;