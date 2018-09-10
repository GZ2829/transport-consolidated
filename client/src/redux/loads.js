import axios from 'axios'


export const getLoadData = () =>{

    return dispatch => {

        axios.get('/loads').then(response => {

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

        axios.post("mongodb://heroku_j1rwws92:dpabuds5c35vl2s5curi40qg7s@ds251622.mlab.com:51622/heroku_j1rwws92/loads", addedLoad).then(() => {

            dispatch(getLoadData());

        }).catch(err => {

            console.log(err);
        })
    }
}

export const removeLoad = id => {

    return dispatch => {

        axios.delete(`mongodb://heroku_j1rwws92:dpabuds5c35vl2s5curi40qg7s@ds251622.mlab.com:51622/heroku_j1rwws92/loads/${id}`).then(() => {

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

        axios.put(`mongodb://heroku_j1rwws92:dpabuds5c35vl2s5curi40qg7s@ds251622.mlab.com:51622/heroku_j1rwws92/loads/${id}`, reduce).then(() => {dispatch(getLoadData());
        
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