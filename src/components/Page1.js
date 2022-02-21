import React from 'react'
import { Link } from 'react-router-dom'
import { urlVegetales } from '../helpers/urls'
import Page2 from './Page2'
import { useState, useEffect } from 'react'
import axios from 'axios'


const Page1 = () => {

    const [data, setData] = useState([]);


    const getData = () => {
        axios.get(urlVegetales)
            .then(response => {
                setData(response.data)
            }).catch(error => {
                console.log(error);
            })
    };
    //AIzaSyA1l17RicjE_GRFAjaajK675WQXDUVtg0M api key
    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            {
                data.map(d => (
                    <Page2 key={d.id}
                        {...d} />

                ))
            }
        </div>
    )
}

export default Page1