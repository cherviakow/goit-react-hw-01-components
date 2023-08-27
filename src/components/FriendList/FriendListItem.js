import PropTypes from 'prop-types';


export default function FriendList({avatar, name, isOnline}){
return (
    <li className={item}>
        <span className={isOnline ? isOnline : isOnline}></span>
        <img className={avatar} src={avatar} alt={name} width='48' />
        <p className={name}>{name}</p>
    </li>
);
};


FriendList.PropTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
};
