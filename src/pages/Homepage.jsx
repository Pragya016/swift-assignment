import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './css/home.module.css';

export default function Homepage() {
    const navigate = useNavigate();

    return (
        <div id={styles.container}>
            <h1 id={styles.heading1}>Assignment for Frontend Developer's Postition</h1>
            <h3 id={styles.heading2}>View features</h3>
            <div>
                <Button id={styles.profileBtn} variant='contained' onClick={() => navigate('/profile')}>Profile</Button>
                <Button id={styles.dashboardBtn} variant='contained' onClick={() => navigate('/dashboard')}>Dashboard</Button>
            </div>
        </div>
    )
}
