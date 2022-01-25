const db = require('../database/models');
const sequelize = db.sequelize;

//Otra forma de llamar a los modelos
const Movies = db.Movie;

const moviesController = {
    'list': (req, res) => {
        db.Movie.findAll()
            .then(movies => {
                res.render('moviesList.ejs', {movies})
            })
    },
    'detail': (req, res) => {
        db.Movie.findByPk(req.params.id)
            .then(movie => {
                res.render('moviesDetail.ejs', {movie});
            });
    },
    'new': (req, res) => {
        db.Movie.findAll({
            order : [
                ['release_date', 'DESC']
            ],
            limit: 5
        })
            .then(movies => {
                res.render('newestMovies', {movies});
            });
    },
    'recomended': (req, res) => {
        db.Movie.findAll({
            where: {
                rating: {[db.Sequelize.Op.gte] : 8}
            },
            order: [
                ['rating', 'DESC']
            ]
        })
            .then(movies => {
                res.render('recommendedMovies.ejs', {movies});
            });
    }, //Aqui debemos modificar y completar lo necesario para trabajar con el CRUD
    
    add: (req, res) => {
        res.render('moviesAdd.ejs');
    },
    
    create: function(req,res){
        db.Movie.create({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date:req.body.release_date,
            length: req.body.length,
    })
        .then( () => {  
        return res.redirect('/movies');
        })

        .catch(error => {
            return res.send(error);
    })
    },

    edit: function (req,res) {
        db.Movie.findByPk(req.params.id)
        .then( function(pelicula){
            res.render('editarPelicula',
            {pelicula : pelicula});
        })
    },

    update: function (req,res) {
        
            const{title, rating, awards, release_date, length} = req.body;
            const {id} = req.params;
            db.Movie.update({
            title,
            rating,
            awards,
            release_date,
            length,
    }, {
        where: {
            id: req.params.id
        }
    })

    res.direct('/movies/edit/' + req.params.id)
    },

    delete: function(req,res){
        db.Movies.destroy({
            where: {
                id: req.params.id
            }
        })

        res.redirect('/movies');
    },
}

module.exports = moviesController;
