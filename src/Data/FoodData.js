export const foodItems = [
    {
      name: 'Cheese Pizza',
      image: '/img/pizza.png',
      section: 'Pizza',
      price: 1.2,
    },
    {
      name: 'Pepperoni Pizza',
      image: '/img/pizza2.jpeg',
      section: 'Pizza',
      price: 1.1,
    },
    {
      name: 'Chicken Pizza',
      image: '/img/chicken-pizza.jpeg',
      section: 'Pizza',
      price: 1.5,
    },
    {
      name: 'Veggie Pizza',
      image: '/img/healthy-pizza.jpeg',
      section: 'Pizza',
      price: 1.2,
    },
    {
      name: 'Burger',
      image: '/img/burger.jpeg',
      section: 'Sandwiches',
      price: 2.5,
    },
    {
      name: 'Gyro',
      image: '/img/gyro.jpeg',
      section: 'Sandwiches',
      price: 4.5,
    },
    {
      name: 'Shrimp PoBoy',
      image: '/img/sandwich.jpeg',
      section: 'Sandwiches',
      price: 6,
    },
    {
      name: 'French Fries',
      image: '/img/fries.jpeg',
      section: 'Sides',
      price: 0.5,
    }
  ]


  export const foods=foodItems.reduce((result, current)=>{
        if(!result[current.section]){
            result[current.section]=[];
        }
        result[current.section].push(current);

        return result;
  }, {})

  
  export const formatPrice=(price)=> {
    return price.toLocaleString("en-GB", {
      style: "currency",
      currency: "GBP"
    });
  }
  
