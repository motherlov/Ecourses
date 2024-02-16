import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../AuthSlice/AuthSlice";
// import ProductSlice from "./ProductSlice";
 import CrudSlice from "../CrudSlice/CrudSlice";

const Store =configureStore({
    reducer: {
       
        Auth:AuthSlice.reducer,
        Crud: CrudSlice.reducer,
        // Crud:productSlice.reducer
        // Product:ProductSlice.reducer,
       
      },
})
export default Store