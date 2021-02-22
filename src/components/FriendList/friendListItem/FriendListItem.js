import React from 'react';
import PropTypes from 'prop-types';
import notfoundImage from './not-found.png';
import styles from './FriendListItem.module.css';

export default function FriendListItem({ isOnline, avatar, name }) {
  return (
    <li className={styles.item}>
      {isOnline ? (
        <span className={styles.status_online}></span>
      ) : (
        <span className={styles.status_offline}></span>
      )}
      <img src={avatar} alt="" width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

FriendListItem.defaultProps = {
  avatar: notfoundImage,
  name: 'User',
};

FriendListItem.propTypes = {
  isOnline: PropTypes.bool,
  name: PropTypes.string,
  avatar: PropTypes.string,
};
