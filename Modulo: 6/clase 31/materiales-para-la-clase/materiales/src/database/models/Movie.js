module.exports = (sequelize, DataTypes) => {
    let alias = "Movie";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
        },
        rating: {
            type: DataTypes.FLOAT,
        },
        lenght: {
            type: DataTypes.INTEGER,
        },
        awards: {
            type: DataTypes.INTEGER,
        },
        release_date: {
            type: DataTypes.DATE,
        },
        genre_id: {
            type: DataTypes.INTEGER,
        },

    };
    let config = {
            tableName: "movies",
            timestamps: false,
    };

    const Movie = sequelize.define(alias, cols, config);
        
        return Movie
}