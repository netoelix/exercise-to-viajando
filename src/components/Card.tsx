type CardProps = {
  cityInfo: {
    city: string,
    country: string,
    imageUrl: string,
    visited?: boolean
  }
};

function Card({ cityInfo }: CardProps) {
  const { city, country, imageUrl, visited } = cityInfo;
  return (
    <div className="card">
      <h2>{ city }</h2>
      <h3>{ country }</h3>
      <img src={ imageUrl } alt={ city } />
      {visited ? <p>Já Fui!</p> : <p>Não Fui.</p>}
    </div>
  );
}

export default Card;
