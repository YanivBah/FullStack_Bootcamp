const Card = ({people}) => {
  return people.map(({ name, birthday, favoriteFoods}) => {
    return (
      <div className="card">
        <h2>{name}</h2>
        <h4>Birthday: {birthday.replaceAll('-','/')}</h4>
        <p>Favorite Foods:</p>
        <p>Meats: {favoriteFoods.meats.join(' ,')}</p>
        <p>Fish: {favoriteFoods.fish.join(' ,')}</p>
      </div>
    );
  })
}

export default Card;