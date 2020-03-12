
module.exports = function (sequelize, DataTypes) {
  const Artists = sequelize.define('Artists', {
    artist_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      unique: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      unique: false,
    },
  });
// artist APi
  Artists.associate = function (models) {
    // Associating Artists with Performances
    Artists.hasMany(models.Performances, {
    });
  };

  Artists.associate = function (models) {
    // Associating Artists with musicAPI
    Artists.hasMany(models.musicAPI, {
    });
  };


  return Artists;
};
