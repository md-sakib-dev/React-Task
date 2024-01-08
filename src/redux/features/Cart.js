import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from  'axios'

export const Products=createAsyncThunk(
    "/allproduct", async(_,{rejectWithValue})=>{
        try{
            const response= await axios.get(`http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10`)
            return response.data;
        }catch(err){
            return rejectWithValue(err.response.data)
        }

    }
)

const allProduct= createSlice({
    name:"products",
    initialState:{
        loading:false,
        products:[],
        default:[],
        filterProduct:[],
        error:"", 
    },
    reducers:{
        priceListorder:(state,action)=>{
            if(action.payload=== "High to Low"){
                state.products = state.products.sort((a, b) => b.price - a.price);
            } else if(action.payload=== "Low to High"){
                state.products = state.products.sort((a, b) => a.price - b.price);
            } else {
                state.products = state.default;
            }
        },
        categoryList: (state, action) => {
        //  if (item === "Default") {
        //         state.products = state.filterProduct;}
    state.products = state. filterProduct.filter((i) => {
            return i.category === action.payload   
        })
   
        
        }
    },

    extraReducers: (builder) => {
        builder.addCase(Products.pending, (state) => {
          state.loading = true;
        });
        builder.addCase(Products.fulfilled, (state, action) => {
          state.loading = false;
          state.products = action.payload;   
          state.default = action.payload;   
          state.filterProduct = action.payload;   
          state.error = "";
        });
        builder.addCase(Products.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload.message;
        });
    }
    
})
export default  allProduct.reducer