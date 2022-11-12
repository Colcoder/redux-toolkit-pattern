const createSlice = require("@reduxjs/toolkit").createSlice;

//set the initial state
const initialState = {
    numOfCakes: 20
}
//create cake slice
const cakeSlice = createSlice({
    name: "cake",
    initialState,
    reducers: {
        ordered: (state)=>{
           state.numOfCakes--
        },
        restocked: (state,action)=>{
            state.numOfCakes += action.payload 
        }
    }

})

module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;