import PropTypes from 'prop-types';

function Food({name, foodImage, rating}) {
  return (
    <>
    <h2>I love { name }</h2>
    <h4>{rating}/5.0</h4>
    <img src={ foodImage } alt={ name }/>
    </>
  );
}

const foodILike = [
  {
    id: 1,
    name: 'pizza', 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOu966OtyyOj-T02fw8WFGOUkO_z3-VT9Fjg&usqp=CAU', 
    rating: 5
  }, 
  {
    id: 2,
    name: 'pasta', 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTYd3lhb0zk8CZNRdg6vmQMQCFakxvM0xQwg&usqp=CAU', 
    rating: 4.9
  }, 
  {
    id: 3,
    name: 'chicken', 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxfklzFxLgelpnuAcY9CYM-HF1hxl7iMtNTA&usqp=CAU', 
    rating: 3.7
  }, 
  {
    id: 4,
    name: 'water', 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvagv6vjYrWtFL0n4JiURvntsp4migzxvtJg&usqp=CAU', 
    rating: 1
  }
];

function App() {
  return (
    <div>
      <h1>Hello</h1>
      {foodILike.map(dish => (<Food key={dish.id} name={dish.name} foodImage={dish.image} rating={dish.rating}/>))}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired, 
  picture: PropTypes.string.isRequired, 
  rating: PropTypes.string.isRequired
};

export default App;
