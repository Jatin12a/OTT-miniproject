const mongoose = require('mongoose');
const Movie = require('./models/movies');

mongoose.connect('mongodb://127.0.0.1:27017/OTT', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const dummyMovies = [
  {
    title: "The Shawshank Redemption",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2vEJLIcAlbcZ8oIDJpgytGnQ80_yKhBpOZPH2KcZFO54yG-gw8gBFYJ4TnDc6WgF65sE&usqp=CAU",
    release_year: 1994,
    description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    director_name: "Frank Darabont",
    main_lead_name: "Tim Robbins, Morgan Freeman",
    genre: ["Drama"],
    video: "https://www.youtube.com/embed/6hB3S9bIaco",
    like: []
  },
  {
    title: "The Godfather",
    poster: "https://imgs.search.brave.com/fNTDGwrMOnzsnZzoURJ4oC2WCSjbeC_lEor8XW7uFQg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hY2Fk/ZW15bXVzZXVtc3Rv/cmUub3JnL2Nkbi9z/aG9wL3Byb2R1Y3Rz/L21vdmllcG9zdGVy/cmVkbzQxLmpwZz92/PTE2NjY5Mzc3MTM",
    release_year: 1972,
    description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    director_name: "Francis Ford Coppola",
    main_lead_name: "Marlon Brando, Al Pacino, James Caan",
    genre: ["Crime", "Drama"],
    video: "https://www.youtube.com/embed/sY1S34973zA",
    like: []
  },
  {
    title: "The Dark Knight",
    poster: "https://imgs.search.brave.com/mo8W8Sz9UXm17ZMgHpzePFtgz9XZcbyTQPVzDX4lsck/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pcnMu/d3d3Lndhcm5lcmJy/b3MuY29tL2tleWFy/dC1qcGVnL21vdmll/cy9tZWRpYS9icm93/c2VyL3RoZV9kYXJr/X2tuaWdodF9rZXlf/YXJ0LmpwZw",
    release_year: 2008,
    description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    director_name: "Christopher Nolan",
    main_lead_name: "Christian Bale, Heath Ledger, Aaron Eckhart",
    genre: ["Action", "Crime", "Drama"],
    video: "https://www.youtube.com/embed/EXeTwQWrcwY",
    like: []
  },
  {
    title: "Pulp Fiction",
    poster: "https://imgs.search.brave.com/vJF_WABlwzovjHp9Td67zprRStJhaD45TWxOYUqYqrM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzYxOTV2S1Q2NmVM/LmpwZw",
    release_year: 1994,
    description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    director_name: "Quentin Tarantino",
    main_lead_name: "John Travolta, Uma Thurman, Samuel L. Jackson",
    genre: ["Crime", "Drama"],
    video: "https://www.youtube.com/embed/s7EdQ4FqbhY",
    like: []
  },
  {
    title: "Forrest Gump",
    poster: "https://imgs.search.brave.com/V8jR0ZjBZkks_BvKm7ZEXdbnUQnhSTwwqRyr9ZjLvcM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2JlLzgz/L2UyL2JlODNlMjc5/YjMzMzg3YzJjYzJh/NmE5NDE4MzUyZjc2/LmpwZw",
    release_year: 1994,
    description: "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
    director_name: "Robert Zemeckis",
    main_lead_name: "Tom Hanks, Robin Wright, Gary Sinise",
    genre: ["Drama", "Romance"],
    video: "https://www.youtube.com/embed/bLvqoHBptjg",
    like: []
  },
  {
    title: "Inception",
    poster: "https://imgs.search.brave.com/rfLlz8adTYV7r_ULmGj3O5mcvaEOVcbeOBHnqjThX0M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pcnMu/d3d3Lndhcm5lcmJy/b3MuY29tL2tleWFy/dC1qcGVnL2luY2Vw/dGlvbl9rZXlhcnQu/anBn",
    release_year: 2010,
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    director_name: "Christopher Nolan",
    main_lead_name: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page",
    genre: ["Action", "Adventure", "Sci-Fi"],
    video: "https://www.youtube.com/embed/YoHD9XEInc0",
    like: []
  },
  {
    title: "The Matrix",
    poster: "https://example.com/posters/the_matrix.jpg",
    release_year: 1999,
    description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    director_name: "Lana Wachowski, Lilly Wachowski",
    main_lead_name: "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss",
    genre: ["Action", "Sci-Fi"],
    video: "https://www.youtube.com/embed/vKQi3bBA1y8",
    like: []
  },
  {
    title: "Interstellar",
    poster: "https://example.com/posters/interstellar.jpg",
    release_year: 2014,
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    director_name: "Christopher Nolan",
    main_lead_name: "Matthew McConaughey, Anne Hathaway, Jessica Chastain",
    genre: ["Adventure", "Drama", "Sci-Fi"],
    video: "https://www.youtube.com/embed/zSWdZVtXT7E",
    like: []
  },
  {
    title: "Fight Club",
    poster: "https://example.com/posters/fight_club.jpg",
    release_year: 1999,
    description: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
    director_name: "David Fincher",
    main_lead_name: "Brad Pitt, Edward Norton, Helena Bonham Carter",
    genre: ["Drama"],
    video: "https://www.youtube.com/embed/SUXWAEX2jlg",
    like: []
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    poster: "https://example.com/posters/lotr_fellowship.jpg",
    release_year: 2001,
    description: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    director_name: "Peter Jackson",
    main_lead_name: "Elijah Wood, Ian McKellen, Orlando Bloom",
    genre: ["Action", "Adventure", "Drama"],
    video: "https://www.youtube.com/embed/V75dMMIW2B4",
    like: []
  },
  {
    title: "The Silence of the Lambs",
    poster: "https://example.com/posters/the_silence_of_the_lambs.jpg",
    release_year: 1991,
    description: "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
    director_name: "Jonathan Demme",
    main_lead_name: "Jodie Foster, Anthony Hopkins, Lawrence A. Bonney",
    genre: ["Crime", "Drama", "Thriller"],
    video: "https://www.youtube.com/embed/W6Mm8Sbe__o",
    like: []
  },
  {
    title: "Schindler's List",
    poster: "https://example.com/posters/schindlers_list.jpg",
    release_year: 1993,
    description: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
    director_name: "Steven Spielberg",
    main_lead_name: "Liam Neeson, Ben Kingsley, Ralph Fiennes",
    genre: ["Biography", "Drama", "History"],
    video: "https://www.youtube.com/embed/gG22XNhtnoY",
    like: []
  },
  {
    title: "Gladiator",
    poster: "https://example.com/posters/gladiator.jpg",
    release_year: 2000,
    description: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    director_name: "Ridley Scott",
    main_lead_name: "Russell Crowe, Joaquin Phoenix, Connie Nielsen",
    genre: ["Action", "Adventure", "Drama"],
    video: "https://www.youtube.com/embed/owK1qxDselE",
    like: []
  },
  {
    title: "Titanic",
    poster: "https://example.com/posters/titanic.jpg",
    release_year: 1997,
    description: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
    director_name: "James Cameron",
    main_lead_name: "Leonardo DiCaprio, Kate Winslet, Billy Zane",
    genre: ["Drama", "Romance"],
    video: "https://www.youtube.com/embed/kVrqfYjkTdQ",
    like: []
  },
  {
    title: "The Departed",
    poster: "https://example.com/posters/the_departed.jpg",
    release_year: 2006,
    description: "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
    director_name: "Martin Scorsese",
    main_lead_name: "Leonardo DiCaprio, Matt Damon, Jack Nicholson",
    genre: ["Crime", "Drama", "Thriller"],
    video: "https://www.youtube.com/embed/auYbpnEwBBg",
    like: []
  }
];





async function insertDummyMovies() {
  try {
    await Movie.insertMany(dummyMovies, { timeout: 30000 });
    console.log('Dummy movies inserted successfully!');
  } catch (error) {
    console.error('Error inserting dummy movies:', error);
  } finally {
    mongoose.connection.close();
  }
}

insertDummyMovies();
