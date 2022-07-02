import { ButtonOrder } from './components/order-food/ButtonOrderFood';
import { Header } from './layout/Header';
import { Main } from './layout/Main';

function App() {
  return (
    <>
      <div className="container-custom">
        <ButtonOrder />
        <Header />
        <Main />
      </div>
    </>
  );
}

export default App;
