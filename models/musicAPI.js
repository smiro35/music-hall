// Creating our musicAPI model

module.exports = function (sequelize, DataTypes) {
  const MusicAPI = sequelize.define('musicAPI', {

    spotify: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: false,
    },
    youtube: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: false,
    },
    instagram: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: false,
    },
    bandsintown: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: false,
    },
    timestp: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    daily_diff: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: false,
    },
    spotify_timestp: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    spotify_popularity: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: false,
    },
  });
  MusicAPI.associate = function (models) {
    // We're saying that a musicAPI call should belong to an Artist
    // A musicAPI entry can't be created without an Artist due to the foreign key constraint
    MusicAPI.belongsTo(models.Artists, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return MusicAPI;
};


// CREATE TABLE musicAPIs (
//     id Int AUTO_INCREMENT NOT NULL,
//     artistID INT NOT NULL,
//     spotify INTEGER NOT NULL,
//     youtube INTEGER NOT NULL,
//     instagram INTEGER NOT NULL,
// 	createdAt TIMESTAMP NOT NULL DEFAULT current_timestamp,
//     updatedAt TIMESTAMP NOT NULL DEFAULT current_timestamp,
//     /* Set ID as primary key */
//     PRIMARY KEY (id),
//     FOREIGN KEY (artistID) references artists(id)
// );
