type CityInfo = {
  city: string;
  country: string;
  imageUrl: string;
  visited?: boolean;
};

function Card(props: CityInfo) {
  return (
    <div className="card">
      <h2>{props.city}</h2>
      <h3>{props.country}</h3>
      <img src={ props.imageUrl } alt={ props.city } />
      {props.visited ? <p>Já Fui!</p> : <p>Não Fui.</p>}
    </div>
  );
}

export default Card;
