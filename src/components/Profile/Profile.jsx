import PropTypes from 'prop-types';
import style from './profile.module.css';

const Profile = ({ name, tag, location, avatar, stats }) => {
    return (
        
        <div className={style.profile}>
            <div className={style.description}>
                <img className ={style.avatar}
                    src={avatar}
                    alt="Аватар пользователя"
                   
                />
                <p className={style.name}>{name}</p>
                <p className={style.tag}>@{tag}</p>
                <p className={style.location}>{location}</p>
            </div>

            <ul className={style.stats}>
                <li className = {style.item}>
                    <span className={style.label}>Followers</span>
                    <span className={style.quantity}>{stats.followers}</span>
                </li>
                <li className = {style.item}>
                    <span className={style.label}>Views</span>
                    <span className={style.quantity}>{stats.views}</span>
                </li>
                <li className = {style.item}>
                    <span className={style.label}>Likes</span>
                    <span className={style.quantity}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
}


 Profile.defaultProps = {
  avatar: 'https://www.flaticon.com/ru/free-icon/boy_5615699?related_id=5615699&origin=pack',
};
Profile.propTypes = {
    name: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.object,
}

export default Profile
