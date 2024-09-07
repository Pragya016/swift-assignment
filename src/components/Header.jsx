import React from 'react'
import companyLogo from '../assets/swift-logo.svg'
import profileIcon from '../assets/profile-icon.webp'
import styles from './css/header.module.css';
import { useUserContext } from '../context/user.context';

export default function Header() {
  const userData = useUserContext();

  return (
    <div id={styles.container}>
        <img src={companyLogo} alt="company-logo" id={styles.logo}/>
          <div id={styles.box}>
          <img src={profileIcon} alt="profile-icon" id={styles.profileIcon}/>
        <p id={styles.profileName}>{ userData.name }</p>
        </div>  
    </div>
  )
}
