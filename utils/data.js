import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'John',
      email: 'admin@test.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Jane',
      email: 'user@test.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Sample1',
      slug: '1',
      category: 'Red',
      image: '/images/ex.jpg',
      price: 70,

      rating: 4.5,
      numReviews: 8,
      countInStock: 4,
      description: 'A popular sample',
      isFeatured: true,
      banner: '/images/ex2.jpg',
    },
    {
      name: 'red-gold sample',
      slug: '2',
      category: 'red',
      image: '/images/ex.jpg',
      price: 80,

      rating: 3.2,
      numReviews: 10,
      countInStock: 20,
      description: 'nice',
      isFeatured: true,
      banner: '/images/ex.jpg',
    },
    {
      name: 'lovely-statue',
      slug: '3',
      category: 'gold',
      image: '/images/ex.jpg',
      price: 90,

      rating: 4.5,
      numReviews: 3,
      countInStock: 20,
      description: 'very cute',
    },
    {
      name: 'dog',
      slug: '4',
      category: 'blue',
      image: '/images/ex.jpg',
      price: 90,
      rating: 2.9,
      numReviews: 13,
      countInStock: 20,
      description: 'biggie',
    },
    {
      name: 'cat',
      slug: '5',
      category: 'red',
      image: '/images/ex.jpg',
      price: 95,
      rating: 3.5,
      numReviews: 7,
      countInStock: 20,
      description: 'Description...',
    },
    {
      name: 'Sample',
      slug: '6',
      category: 'Gold',
      image: '/images/ex.jpg',
      price: 75,
      rating: 2.4,
      numReviews: 14,
      countInStock: 20,
      description: 'Description...',
    },
  ],
};

export default data;
