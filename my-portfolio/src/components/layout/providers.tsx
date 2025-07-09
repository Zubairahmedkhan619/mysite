"use client";

import React from "react";
import NewNavbar from "../navbar";


export default function Providers({children}:{children: React.ReactNode}){
    return(
        <>
        <NewNavbar/>
        {children}
        </>
    )
}