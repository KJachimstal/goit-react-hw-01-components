export const FriendList = ({ friends }) => {
  return (
    <ul class="friend-list">
      {friends.map(({ avatar, name, isOnline }) => {
        return (
          <li class="item">
            {isOnline ? (
              <span class="status online"></span>
            ) : (
              <span class="status offline"></span>
            )}
            <img class="avatar" src={avatar} alt="User avatar" width="48" />
            <p class="name">{name}</p>
          </li>
        );
      })}
    </ul>
  );
};
