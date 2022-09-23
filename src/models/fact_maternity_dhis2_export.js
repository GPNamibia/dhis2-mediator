//defining the table  structure
module.exports = (sequelize, DataTypes) => {
    const fact_maternity_dhis2_export = sequelize.define("fact_maternity_dhis2_export", {
      data_element: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          notEmpty: true,
        },
      },
      period: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          notEmpty: true,
        },
      },
      org_unit_uid: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          notEmpty: true,
        },
      },
      COCUID: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          notEmpty: true,
        },
      },
      AOCUID: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          notEmpty: true,
        },
      },
      datavalue: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
          notEmpty: true,
        },
      },
    });
    return fact_maternity_dhis2_export;
  };
  
  
  
  
  
  
  




