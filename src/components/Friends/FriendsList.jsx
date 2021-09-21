import style from '../Friends/Friends.module.css';
import PropTypes from 'prop-types';
import FriendsListItem from '../FriendListItem/FriendListItem'


const FriensdList = ({ friends }) => {
    return (
        <ul className={style['friend-list']}>
            {friends.map(({ avatar, name, id, isOnline }) => (
                <FriendsListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
            ))}
        </ul>
    );
};

FriensdList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriensdList;

