import React from 'react'
import profileIcon from '../assets/profile-icon.webp';
import styles from './css/profile.details.module.css';
import { useUserContext } from '../context/user.context';

export default function ProfileDetails() {
    const userData = useUserContext();

    return (
        <div id={styles.container}>
            <div id={styles.topContainer}>
                    <img src={profileIcon} alt="profile-img" id={styles.profileImg} />
                <div>
                    <p id={styles.userName}>{ userData.name }</p>
                    <p id={styles.userEmail}>{ userData.email }</p>
                </div>
            </div>
            {/* Readonly input fields displaying user details */}
        <div id={styles.bottomContainer}>
            {/* <div className={styles.inputContainer}> */}
                <div className={styles.box}>
                    <label htmlFor="userId" className={styles.label}>User ID</label>
                    <input type="text" id="userId" value={userData?.id} disabled className={styles.input} />
                </div>
                <div className={styles.box}>
                    <label htmlFor="name" className={styles.label}>Name</label>
                    <input className={styles.input} type="text" id="name" value={userData?.name} disabled/>
                </div>
            {/* </div> */}
            {/* <div className={styles.inputContainer}> */}
                <div className={styles.box}>
                    <label htmlFor="emailId" className={styles.label}>Email Id</label>
                    <input className={styles.input} type="text" id="emailId" value={userData?.email} disabled/>
                </div>
                <div className={styles.box}>
                    <label htmlFor="adress" className={styles.label}>Address</label>
                    <input className={styles.input} type="text" id="address" value={`${userData?.address?.street}, ${userData?.address?.city}`} disabled/>
                </div>
            {/* </div> */}
            <div className={styles.box}>
                <label htmlFor="phone" className={styles.label}>Phone</label>
                <input className={styles.input} type="text" id="phone" value={userData?.phone} disabled />
            </div>
        </div>
        </div>
    )
}
