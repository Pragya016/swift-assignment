import React from 'react'
import ProfileDetails from '../components/ProfileDetails'
import ReplyIcon from '@mui/icons-material/Reply';
import { useNavigate } from 'react-router-dom'
import { useUserContext } from '../context/user.context';
import { IconButton } from '@mui/material';
import styles from './css/profile.module.css';

export default function ProfilePage() {
  const navigate = useNavigate();
  const userData = useUserContext();

  return (
    <div id={styles.container}>
      <div id={styles.topContainer}>
        <IconButton id={styles.backBtn} onClick={() => navigate('/')}><ReplyIcon/></IconButton>
        <span id={styles.username}>Welcome, { userData.name }</span>
      </div>
      <ProfileDetails />
    </div>
  )
}
