import './scss/app.scss';
import Header from './components/Header';
import Sort from './components/Sort';
import Categories from './components/Categories';
import PizzaBlock from './components/PizzaBlock';
import preparations from "./assets/preparations.json";




function App() {
  return (
    <div className="wrapper">
    <Header />
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories/>
          <Sort/>
        </div>
        <h2 className="content__title">Все препараты</h2>
        <div className="content__items">
            {preparations.map((obj) => (<PizzaBlock key={ obj.id } {...obj}  />))}
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
