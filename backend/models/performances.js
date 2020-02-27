// Creating our User model
module.exports = function (sequelize, DataTypes) {
  const Performances = sequelize.define('Performances', {
    // Table for Performances Data Entry
    performance: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      unique: false,
    },
    total_sold: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    spotify_reach: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    instagram_following: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: false,
    },
    total_money: {
      type: DataTypes.DECIMAL(13, 4),
      allowNull: false,
      unique: false,
    },
    total_attendance: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false,
    },
    average_ticket_price: {
      type: DataTypes.DECIMAL(13, 4),
      allowNull: false,
      unique: false,
    },
    percent_sold: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: false,
    },
    show_success: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      unique: false,
    },
    fiscal_year: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: false,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    spotify_popularity: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: false,
    },
    instagram_strength: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: false,
    },
    average_strength: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: false,
    },
    projected_success: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    actual_success: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    predictability: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: false,
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
    }
  });
  return Performances;
};
