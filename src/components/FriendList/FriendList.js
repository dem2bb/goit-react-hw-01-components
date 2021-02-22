import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';
import { clearConfigCache } from 'prettier';
import FriendListItem from './friendListItem/FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friend_list}>
      {friends.map(friend => {
        return <FriendListItem key={friend.id} {...friend} />;
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};

export default FriendList;
