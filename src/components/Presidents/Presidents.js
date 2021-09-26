import React, { useEffect, useState } from 'react';
import President from '../President/President';
import Total from '../Total/Total';
import './Presidents.css'

const Presidents = () => {
    const [presidents, setPresidents] = useState([]);
    useEffect( () => {
        fetch('./output.json')
                .then(res => res.json())
                .then(data => setPresidents(data))
    }, [])
    return (
        <div className="presidents-container">
            <div className="presidents">
            {
                presidents.map(president => <President president={president}></President>)
            }
            </div>
            <div className="total">
                <Total></Total>
            </div>
        </div>
    );
};

export default Presidents;