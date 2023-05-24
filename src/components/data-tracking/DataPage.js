/* eslint-disable */
import React, {useEffect, useState} from "react";
import {ref, onValue} from "firebase/database";
import {database} from "../firebase.js";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function DataPage() {
    const [voltage, setVoltage] = useState([]);
    const [voltageKeys, setVoltageKeys] = useState([]);
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedPullDate, setSelectedPullDate] = useState('');

    useEffect(() => {
        const dbRef = ref(database, 'voltage/');

        onValue(dbRef, (snapshot) => {
            const data = snapshot.val();
            setVoltage(data);
            console.log(data)
            setVoltageKeys(Object.keys(data));
        });
    }, []);

    useEffect(() => {
        const dbRef = ref(database, 'voltage/'+selectedDate);
        onValue(dbRef, (snapshot) => {
            const data = snapshot.val();
            setVoltage(data);
            setVoltageKeys(Object.keys(data));
        });
    }, [selectedPullDate]);



    return (
        <div>
            <h1>Data Page</h1>
            <select onChange={(e) => setSelectedDate(e.target.value)}>
                {voltageKeys.map((key,index) => {
                    return <option key = {index} value={key}>{key}</option>
                }   )}
            </select>


        <LineChart>

        </LineChart>

        </div>
    );
}