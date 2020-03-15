// Creating our musicAPI model

module.exports = function (sequelize, DataTypes) {
  const MusicAPI = sequelize.define('musicAPI', {

    youtube_subscribers_timestp: {
      type: DataTypes.DATE,
      allowNull: true,
      unique: false,
    },
    youtube_subscribers: {
      type: DataTypes.BIGINT,
      allowNull: true,
      unique: false,
    },
    youtube_views_timestp: {
      type: DataTypes.DATE,
      allowNull: true,
      unique: false,
    },
    youtube_views: {
      type: DataTypes.BIGINT,
      allowNull: true,
      unique: false,
    },
    instagram_timestp: {
      type: DataTypes.DATE,
      allowNull: true,
      unique: false,
    },
    instagram_followers: {
      type: DataTypes.BIGINT,
      allowNull: true,
      unique: false,
    },
    bandsintown_followers: {
      type: DataTypes.BIGINT,
      allowNull: true,
      unique: false,
    },
    bandsintown_timestp: {
      type: DataTypes.DATE,
      allowNull: true,
      unique: false,
    },
    spotify_timestp: {
      type: DataTypes.DATE,
      allowNull: true,
      unique: false,
    },
    spotify_popularity: {
      type: DataTypes.BIGINT,
      allowNull: true,
      unique: false,
    },
    deezer_timestp: {
      type: DataTypes.DATE,
      allowNull: true,
      unique: false,
    },
    deezer_popularity: {
      type: DataTypes.BIGINT,
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
