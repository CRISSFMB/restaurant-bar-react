import { AmountForm } from '../FormOrder.js/AmountForm';
import { AvaliableMealsItem } from './AvaliableMealsItem';
import './avaliableMeals.css';

export const AvaliableMeals = () => {
  const dataDummy = [
    {
      image:
        'https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_960_720.jpg',
      title: 'JOKER PIZZA & BURGER',
      description: 'italienische piyya burger grieschish',
      price: '22.99',
      id: '1',
    },

    {
      image:
        'https://cdn.pixabay.com/photo/2017/10/09/19/29/eat-2834549_960_720.jpg',
      title: 'carne',
      description: 'italienische piyya burger grieschish',
      price: '10.99',
      id: '2',
    },

    {
      image:
        'https://cdn.pixabay.com/photo/2017/09/22/19/05/casserole-dish-2776735_960_720.jpg',
      title: 'burger',
      description: 'italienische piyya burger grieschish',
      price: '8.99',
      id: '3',
    },
    {
      image:
        'https://cdn.pixabay.com/photo/2015/07/12/14/26/coffee-842020_960_720.jpg',
      title: 'otra cosa',
      description: 'italienische piyya burger grieschish',
      price: '2.99',
      id: '4',
    },
  ];

  const handlerAddToCart = (amount) => {
    console.log(amount);
  };

  return (
    <div className="meal-list">
      {dataDummy.map((meal) => {
        return (
          <div className="avaliable-meals" key={meal.id}>
            <AvaliableMealsItem
              image={meal.image}
              title={meal.title}
              description={meal.description}
              price={meal.price}
            />

            <AmountForm onAddToCart={handlerAddToCart} />
            <hr />
          </div>
        );
      })}
    </div>
  );
};
