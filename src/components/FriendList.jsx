export const FriendList = ({ friends }) => {
  return (
    <ul class="friend-list">
      {friends.map(({ avatar, name, isOnline }) => {
        return (
          <li class="friend-item">
            {isOnline ? (
              <span class="friend-status online"></span>
            ) : (
              <span class="friend-status offline"></span>
            )}
            <img
              class="friend-avatar"
              src={avatar}
              alt="User avatar"
              width="48"
            />
            <p class="friend-name">{name}</p>
          </li>
        );
      })}
    </ul>
  );
};
