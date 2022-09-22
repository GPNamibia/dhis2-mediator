//Enter JSON response into a database table
module.exports = (sequelize, DataTypes) => {
    const log_tables = sequelize.define("log_tables", {
        _id: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
              notEmpty: true,
            },
          },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        validate: {
          notEmpty: true,
        },
      },
      type: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          notEmpty: true,
        },
      },
      response_text: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          notEmpty: true,
        },
      },
      response_status: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          notEmpty: true,
        },
      },
      last_resend_date: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        validate: {
          notEmpty: true,
        },
      },
      details: {
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
            notEmpty: true,
        },

      },
    });
    return log_tables;
  };
  
  