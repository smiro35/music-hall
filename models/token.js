module.exports = function (sequelize, DataTypes) {
  const Token = sequelize.define('Token', {
    // The email cannot be null, and must be a proper email before creation
    token: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      required: true,
      default: Date.now,
      expires: 43200,
    },
  });
  Token.associate = function (models) {
    // We're saying that a Performance should belong to an Artist
    // A Performance can't be created without an Artist due to the foreign key constraint
    Token.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Token;
};
