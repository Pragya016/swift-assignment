import React from 'react';
import styles from './css/table.module.css';

export default function Table({ data }) {
  
  return (
    <div id={styles.tableContainer}>
      <table border={2} id={styles.table}>
        <thead>
          <tr>
            <th className={styles.table_th}>Post ID</th>
            <th className={styles.table_th}>Name</th>
            <th className={styles.table_th}>Email</th>
            <th className={styles.table_th}>Comment</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((content, index) => (
            <tr key={index}>
              <td className={styles.table_post_id}>{content.postId}</td>
              <td className={styles.table_name}>{content.name}</td>
              <td className={styles.table_email}>{content.email}</td>
              <td className={styles.table_comment}>{content.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}