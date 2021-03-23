const Card = ({ user}) => {
    return (
      <div className="card">
        <h2>{`${user.name.first} ${user.name.last}`}</h2>
        <img src={user.picture.large} alt="random avatar" />
      </div>
    );
};

export default Card;