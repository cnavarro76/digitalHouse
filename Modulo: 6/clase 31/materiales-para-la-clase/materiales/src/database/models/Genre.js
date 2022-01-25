module.exports = (sequelize, DataTypes) => {
    let alias = "Genre";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        name: {
            type: DataTypes.STRING,           
        },

        ranking: {
            type: DataTypes.INTEGER,
        },

        active: {
            type: DataTypes.BOOLEAN,
        },
    };

    let config = {
        tableName: "genres",
        timestamps: false
    };

    const Genre = sequelize.define(alias, cols, config);
    return Genre;
}
