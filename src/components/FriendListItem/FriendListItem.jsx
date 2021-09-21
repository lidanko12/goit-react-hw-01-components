import PropTypes from 'prop-types'
import style from '../FriendListItem/FriendListItem.module.css'
 
function FriendsListItem({ avatar, name, isOnline = false }) {
    return (
          <li className={style.item}>
      <span className={isOnline ? style.online : style.offline}></span>
      <img className={style.avatar} src={avatar} alt={`Аватар ${name}`} width="48" />
      <p className={style.name}>{name}</p>
    </li>
    )
}

FriendsListItem.propTypes = {
    name: PropTypes.string,
    avatar: PropTypes.string,
    isOnline: PropTypes.bool,
}


export default FriendsListItem;