const express = require('express');
const app = express();
const userModel = require('./models/user');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt')
const jwt =require('jsonwebtoken')
const path = require('path')
const Moviemodel = require('./models/movies')

const flash = require('connect-flash')
const session = require('express-session');
// const ejsMate = require('ejs-mate');

app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true
}));
app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(flash());

// app.engine('ejs',ejsMate);


app.get('/', (req, res) => {
  res.render('./pages/index');
});

app.get('/login', (req, res) => {
  res.render('./pages/login', { message: req.flash('error') });
});

// app.get('/home',isLoggedin,async (req, res) => {
//   let moviedata =await Moviemodel.find({})
//   console.log(moviedata);
//   res.render('./pages/home',{
//     moviedata});
// });

app.get('/home', isLoggedin, async (req, res) => {
  const page = parseInt(req.query.page) || 1; 
  const limit = 6;
  const skip = (page - 1) * limit;

  
      const totalMovies = await Moviemodel.countDocuments();
      const totalPages = Math.ceil(totalMovies / limit);

   
      const moviedata = await Moviemodel.find({}).skip(skip).limit(limit);

      res.render('./pages/home', {
          moviedata,
          currentPage: page,
          totalPages,
          hasNextPage: page < totalPages
      });
   
});

app.get('/home/:id' ,async (req,res)=>{
  let {id} = req.params
  let movie = await Moviemodel.findById(id)
  
  const genre = movie.genre;
  console.log(genre);
  const recommendedMovies = await Moviemodel.find({ genre: genre }).limit(5); 

  res.render('./pages/movie', { movie: movie, recommendedMovies: recommendedMovies });
})

app.get('/movie/video/:id',async (req,res)=>{
  let {id} = req.params;
  let videodata = await Moviemodel.findById(id)
  console.log(videodata);
    res.render('pages/video',{
      videodata
    })
})

app.get('/favorite',isLoggedin ,async (req, res) => {
  const userId = req.user.userid; // Assuming user is logged in and user ID is available in the request
  const user = await userModel.findById(userId).populate('likes');
  const likes = user.likes
    res.render('pages/fav',{likes});
});


app.post('/like/:movieId',isLoggedin, async (req, res) => {
  
      const userId = req.user.userid; // Assuming user is logged in and user ID is available in the request
      const movieId = req.params.movieId;

      await userModel.findByIdAndUpdate(userId, { $addToSet: { likes: movieId } });

      res.redirect('back');
  
});

app.post('/Unlike/:movieId', isLoggedin, async (req, res) => {
  try {
      const userId = req.user.userid; // Assuming user is logged in and user ID is available in the request
      const movieId = req.params.movieId;

      // Find the user by ID and update their likes array to remove the movieId
      await userModel.findByIdAndUpdate(userId, { $pull: { likes: movieId } });

      // Redirect the user back to the previous page
      res.redirect('back');
  } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Internal Server Error');
  }
});

app.get('/genre/:genre', async (req, res) => {
  let genre = req.params.genre;
  genre = genre.replace(':', '');
  
  console.log(genre);

      const movies = await Moviemodel.find({genre:genre});
   
      console.log(movies);
      res.render('pages/genre', { movie: movies,genre:genre }); 

     
  
});



app.post('/register',async (req, res) => {
  let {email,password,name,username,age} = req.body;

  let user = await userModel.findOne({email});
  if(user){
   return res.status(500).send('User already exists');
  }
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash (password, salt,async (err, hash) => {
      let user = await userModel.create({
        email,
        password:hash,
        name,
        username,
        age
      })
     let token = jwt.sign({email:email , userid: user._id},"xoxoxo")
      res.cookie('token',token)
      res.redirect('/login')
    })

  })    

});

app.post('/login', async (req, res) => {
  
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      req.flash('error', 'Email or password is incorrect');
      return res.redirect('/login');
    }
    bcrypt.compare(password, user.password, (err, result) => {
      if (result) {
        const token = jwt.sign({ email: email, userid: user._id }, "xoxoxo");
        res.cookie('token', token);
        return res.redirect('/home');
      } else {
        req.flash('error', 'Email or password is incorrect');
        return res.redirect('/login');
      }
    });
  
});


app.get('/logout',(req,res)=>{
  res.cookie('token','')
  res.redirect('/login')
})

function isLoggedin(req,res,next){
    if(req.cookies.token === "") res.redirect('/login')
    else{
      let data = jwt.verify(req.cookies.token, "xoxoxo")
      req.user = data;
      next();
    }
    
}

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});