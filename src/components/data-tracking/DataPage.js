import React from "react";
import {getDatabase, ref, onValue} from "firebase/database";

export default function DataPage() {
    console.log("Data Page");
    const database = getDatabase();
    // const auth = getAuth()
    let date = "2021-10-10";

    const dbRef = ref(database, 'voltage/'+ date);
    let voltageKeys = [];
    let voltageData = [];

    onValue(dbRef, (snapshot) => {
        snapshot.forEach((childSnapshot) => {
            voltageKeys.concat(childSnapshot.key);
            voltageData.concat(childSnapshot.valueOf());
        });
    }, {
        onlyOnce: true
    });

    return (
        <div>

            <h1> FUCK DUDE THIS IS THE DATA PAGE</h1>

        </div>
    );
}