module.exports = function(sequelize, DataTypes) {
    var burger = sequelize.define("Burger", {
        burger_name: DataTypes.STRING,
        devoured: DataTypes.BOOLEAN,
        date: DataTypes.DATE
    });
    return burger;
}