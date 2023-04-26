import React from "react";
import {getDatabase, ref, onValue} from "firebase/database";
import { getAuth } from "firebase/auth";
export default function DataPage() {
    const database = getDatabase();
    const auth = getAuth()




    return (
        <div>
        <h1>Data Page</h1>
        </div>
    );
}