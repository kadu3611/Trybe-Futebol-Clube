module.exports = {
    up: async  (queryInterface, Sequelize) => {
      const User = await queryInterface.createTable('users', {
        id: { 
          type: Sequelize.INTEGER,
          allowNull: false, 
          primaryKey: true,
          autoIncrement: true,
        },
        username: {
          type: Sequelize.STRING,
          allowNull: false, 
        },
        role: {
            type: Sequelize.STRING,
            allowNull: false, 
          },
        email: {
         type: Sequelize.STRING,
          allowNull: false, 
         },
        password: {
         type: Sequelize.STRING,
         allowNull: false, 
        },
      })
      return User;
    },
  
down: async (queryInterface, Sequelize) => queryInterface.dropTable("users"),
    
};