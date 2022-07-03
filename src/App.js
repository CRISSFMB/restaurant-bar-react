import { useContext } from 'react';
import { OrderForm } from './components/order-food/OrderForm';
import { DataContext } from './context/DataContext';
import { Header } from './layout/Header';
import { Main } from './layout/Main';

function App() {
  const { isOrder } = useContext(DataContext);

  return (
    <div className="container-custom">
      <Header />
      <Main />
      {isOrder && <OrderForm />}
    </div>
  );
}

export default App;
