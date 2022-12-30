export const projects = () => {
  return [
    {
      name: 'AmazIn',
      images: [
        '/images/AmazIn/desktop1.png',
        '/images/AmazIn/desktop2.png',
        '/images/AmazIn/desktop3.png',
        '/images/AmazIn/desktop4.png',
        '/images/AmazIn/desktop5.png',
      ],
      skills: [
        'Html',
        'CSS',
        'JS',
        'React.js',
        'Sass',
        'Express.js',
        'MongoDB',
      ],
      descriptions: {
        short: 'Full-Stack Ecommerce Web Application',
        long: 'Full-stack ecommerce application. Users, Orders, and Products data saved in MongoDb with Node.js/Express server implemetation for API calls and communication between the frontend and backend.',
      },
      links: {
        github: 'https://github.com/Tymibl05/AmazIn',
        live: 'https://amazin-ecom.onrender.com',
      },
    },
    {
      name: 'Tunes',
      images: [
        '/images/Music Player/desktop1.png',
        '/images/Music Player/mobile1.png',
        '/images/Music Player/mobile2.png',
      ],
      skills: ['Html', 'CSS', 'JS', 'React.js', 'Sass'],
      descriptions: {
        short: 'Music Player Application',
        long: 'Fully functional music player application with song controls (pause, skip, etc.). Also includes animations and fully responsive from large desktop monitors to mobile phones. ',
      },
      links: {
        github: 'https://github.com/Tymibl05/MusicPlayer-demo',
        live: 'https://tymibl05.github.io/MusicPlayer-demo/',
      },
    },
    {
      name: 'To-Dos',
      images: [
        '/images/Todo List/mobile1.png',
        '/images/Todo List/mobile2.png',
        '/images/Todo List/mobile3.png',
      ],
      skills: ['Html', 'CSS', 'JS', 'React.js', 'Sass'],
      descriptions: {
        short: 'CRUD Todo List App',
        long: 'Fully functional CRUD (Create, Read, Update, Delete) application that allows users to add, edit, and delete items in the todo list. Items can also be marked as completed and the renedered list can be filtered by "Active", "Completed", and "All". The app also implements LocalStorage, allowing the user\'s list to be saved between refreshes and closing and reopening the application.',
      },
      links: {
        github: 'https://github.com/Tymibl05/Todo-demo',
        live: 'https://tymibl05.github.io/Todo-demo/',
      },
    },
    {
      name: 'Eco-Bright',
      images: [
        '/images/Eco-Bright/desktop1.png',
        '/images/Eco-Bright/desktop2.png',
        '/images/Eco-Bright/desktop3.png',
        '/images/Eco-Bright/desktop4.png',
      ],
      skills: ['Html', 'CSS', 'JS'],
      descriptions: {
        short: 'Static Cleaning Company Webpage',
        long: 'Static cleaning company informational webpage with modern styling and animations.',
      },
      links: {
        github: 'https://github.com/Tymibl05/EcoBright-demo',
        live: 'https://tymibl05.github.io/EcoBright-demo/',
      },
    },
    {
      name: 'Admin Dashboard',
      images: ['/images/Admin Dashboard/desktop-full.png'],
      skills: ['Html', 'CSS'],
      descriptions: {
        short: 'Static Administrator Dashboard ',
        long: 'Static admin dashboard that was created to practice CSS styling and grid layouts. ',
      },
    },
  ];
};
