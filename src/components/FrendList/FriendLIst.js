import {FriendListItem} from './FriendListItem';
import PropTypes from 'prop-types';

export const FriendList = ({friends}) => {
    return (
        <ul className={list}>
            {friends.map(friend =>{
                <FriendListItem 
                key={friend.id}
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
                />
            })}
        </ul>
    );
};

FriendList.PropTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number,
            avatar: PropTypes.string,
            name: PropTypes.string,
            isOnline: PropTypes.bool,
        })
    ).isRequired,
};

