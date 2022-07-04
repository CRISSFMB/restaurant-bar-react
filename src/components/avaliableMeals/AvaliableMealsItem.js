export const AvaliableMealsItem = (props) => {
  return (
    <div className="avaliable-item">
      <div className="avaliable-item__image">
        <img src={props.image} />
      </div>
      <div className="info-meals">
        <p className="info-meals__title">{props.title}</p>
        <p className="info-meals__description">{props.description}</p>
      </div>
    </div>
  );
};
