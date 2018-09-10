import axios from 'axios'

export const getBidData = () =>{
    return dispatch => {
        axios.get('/bids').then(response => {
            dispatch({
                type: 'GET_BID_DATA',
                bids: response.data
            })
        }).catch(err => {
            console.log(err)
        })
    }
}
export const addBid = addedBid => {
    return dispatch => {
        axios.post("/bids", addedBid).then(() => {
            dispatch(getBidData());
        }).catch(err => {
            console.log(err);
        })
    }
}

export const removeBid = id => {
    return dispatch => {
        axios.delete(`/bids/${id}`).then(() => {
            dispatch(getBidData());
        }).catch(err => {
            console.log(err);
        })
    }
}

export const editBid = (id, editedBid) => {
    const reduce = Object.keys(editedBid).reduce((final, key)=>{
            if(editedBid[key]){
                return{
                    ...final,
                    [key]: editedBid[key]
                }
            } else{
                return final
            }
    }, {})
    return dispatch => {
        axios.put(`/bids/${id}`, reduce).then(() => {
            dispatch(getBidData());
        }).catch(err => {
            console.log(err);
        })
    }
}



const bidReducer = (state = [], action) => {
    switch(action.type){
        case "GET_BID_DATA":
            return action.bids
        default:
            return state
    }
}


export default bidReducer;