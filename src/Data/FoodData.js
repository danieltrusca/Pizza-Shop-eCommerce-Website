export const foodItems = [
    {
      name: 'Cheese Pizza',
      image: '/img/pizza.png',
      section: 'Pizza',
    },
    {
      name: 'Pepperoni Pizza',
      image: '/img/pizza2.jpeg',
      section: 'Pizza',
    },
    {
      name: 'Chicken Pizza',
      image: '/img/chicken-pizza.jpeg',
      section: 'Pizza',
    },
    {
      name: 'Veggie Pizza',
      image: '/img/healthy-pizza.jpeg',
      section: 'Pizza',
    },
    {
      name: 'Burger',
      image: '/img/burger.jpeg',
      section: 'Sandwiches',
    },
    {
      name: 'Gyro',
      image: '/img/gyro.jpeg',
      section: 'Sandwiches',
    },
    {
      name: 'Shrimp PoBoy',
      image: '/img/sandwich.jpeg',
      section: 'Sandwiches',
    },
    {
      name: 'French Fries',
      image: '/img/fries.jpeg',
      section: 'Sides',
    }
  ]


  export const foods=foodItems.reduce((result, current)=>{
        if(!result[current.section]){
            result[current.section]=[];
        }
        result[current.section].push(current);

        return result;
  }, {})

  
// //   export function formatPrice(price) {
// //     return new Intl.NumberFormat('zh-CN', {
// //       style: 'currency',
// //       currency: 'CNY'
// //     }).format(price)
// //   }
  
