import axios from 'axios'

export const getTrailerData = () =>{
    return dispatch=>{
        axios.get('/api/trailers').then(response =>{
            dispatch({
                type: "GET_TRAILER_DATA",
                trailers: response.data
            })
        })
    }
}

export const editTrailer = (id, editedTrailer) => {
    const reduce = Object.keys(editedTrailer).reduce((final, key)=>{
            if(editedTrailer[key]){
                return{
                    ...final,
                    [key]: editedTrailer[key]
                }
            } else{
                return final
            }
    }, {})
    console.log(reduce)
    return dispatch => {
        axios.put(`/api/trailers/${id}`, reduce).then(() => {
            dispatch(getTrailerData());
        }).catch(err => {
            console.log(err);
        })
    }
}

export const addTrailer = addedTrailer => {
    return dispatch => {
        axios.post("/api/trailers", addedTrailer).then(() => {
            dispatch(getTrailerData());
        }).catch(err => {
            console.log(err);
        })
    }
}
export const removeTrailer = id => {
    return dispatch => {
        axios.delete(`/api/trailers/${id}`).then(() => {
            dispatch(getTrailerData());
        }).catch(err => {
            console.log(err);
        })
    }
}

const trailerReducer = (state = [], action) => {
    switch(action.type){
        case "GET_TRAILER_DATA":
            return action.trailers
        default:
            return state
    }
}


export default trailerReducer