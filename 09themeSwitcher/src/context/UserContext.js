import { useContext,useState } from "react";
import React from "react";

export const UserContext = React.createContext({
    themeMode:"light",
    darkTheme : ()=>{},
    lightTheme :()=>{},
}) 

export const ThemeProvider = UserContext.Provider;

export default function useTheme(){
    return useContext(UserContext);
}