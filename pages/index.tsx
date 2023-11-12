import React, {useEffect, useState} from 'react';
import {fetchData} from '../services/apiService';
import { ApiResponse } from '../types/apiTypes';

export default function HomePage(){
    const [data, setData] = useState<ApiResponse | null> (null);

    useEffect(() => {
        fetchData()
        .then(apiData => {
            setData(apiData);
        });
    }, []);

    if (!data){
        return <div>Loading...</div>
    }

    return (
        <div>
            <h1>Data from Spring Boot</h1>
            <p>Name: {data.name}</p>
              {/* Render other fields as needed */}
            <h2>Products</h2>
            <ul>
                {data.products.map(product => (
                <li key={product.id}>{product.name} - {product.sizeUnit}</li>
                ))}
            </ul>
            <h2>Principals</h2>
            <ul>
                {data.principals.map(principal => (
                <li key={principal.id}>{principal.name} - {principal.role}</li>
                ))}
            </ul>
        </div>
    )
}