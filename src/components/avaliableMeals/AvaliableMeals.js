import { dataDummy } from '../../data/data';
import { MealItem } from './MealItem';
import './avaliableMeals.css';

export const AvaliableMeals = () => {
  const mealItem = dataDummy.map((meal) => (
    <MealItem
      key={meal.id}
      image={meal.image}
      title={meal.title}
      description={meal.description}
      price={meal.price}
      id={meal.id}
      name={meal.title}
    />
  ));

  return <div className="meal-list">{mealItem}</div>;
};
