// "use server"
import React, { useEffect } from 'react';
// import jwt from 'jsonwebtoken'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();

    async function populateQuote() {
        try {
            const response = await fetch('http://localhost:3000/api/quote', {
                headers: {
                    'x-access-token': localStorage.getItem('token'),
                },
            });

            if (!response.ok) {
                if (response.status === 401) {
                    localStorage.removeItem('token');
                    navigate('/login');
                } else {
                    console.error('Error fetching quote:', response.statusText);
                }
            } else {
                const data = await response.json(); // Await the json() method
                console.log(data);
            }
        } catch (error) {
            console.error('Error fetching quote:', error);
        }
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const user = jwt.decode(token);
            if (!user) {
                localStorage.removeItem('token');
                // navigate('/login');
            } else {
                populateQuote();
            }
        } else {
            navigate('/login');
        }
    }, [navigate]);

    return <div>Dashboard</div>;
};

export default Dashboard;
