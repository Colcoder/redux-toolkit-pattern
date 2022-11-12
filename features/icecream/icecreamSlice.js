const createSlice = require("@reduxjs/toolkit").createSlice;

//set initial state
const initialState = {
    numOfIcecream:10
}
//create icecream slice
const icecreamSlice = createSlice({
    name: "icecream",
    initialState,
    reducers:{
        ordered: (state)=>{
            state.numOfIcecream--
        },
        restocked: (state,action)=>{
            state.numOfIcecream += action.payload
        }
    }
})

module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;