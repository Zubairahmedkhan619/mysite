"use client";

import React from "react";
import NewNavbar from "../navbar";
import Footer from "../footer";


export default function Providers({children}:{children: React.ReactNode}){
    return(
        <>
        <NewNavbar/>
        {children}
        <Footer/>
        </>
    )
}