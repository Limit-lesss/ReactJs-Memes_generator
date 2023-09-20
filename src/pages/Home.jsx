import React, { useEffect, useState } from 'react';
import { MemeCard } from '../components/Card';
import { getMemeData } from '../api';

export const HomePage = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        getMemeData().then((data) => setData(data));
    },[]);
    return(
        <div className='row'>
            {
                data?.data?.memes?.map((e) => <MemeCard key={e.id} title={e.name} img={e.url}/>)
            }
        </div>
    );
}