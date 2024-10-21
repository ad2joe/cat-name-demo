import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App: React.FC = () => {
    const [catName, setCatName] = useState<string>('');

    useEffect(() => {
        fetchCatName();
    }, []);

    const fetchCatName = async () => {
        try {
            const response = await axios.get('/api/randomCatName');
            setCatName(response.data);
        } catch (error) {
            console.error('Error fetching cat name:', error);
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#ffeb3b' }}>
            <h1 style={{ fontSize: '4em', color: '#3f51b5' }}>Random Cat Name: {catName}</h1>
        </div>
    );
};

export default App;
