import {configureStore} from '@reduxjs/toolkit'
import allproduct from '../features/Cart'


const store= configureStore({
    reducer:{
         allproducts: allproduct
    }
})

export default store