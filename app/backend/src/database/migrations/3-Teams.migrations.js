module.exports = {
    up: async  (queryInterface, Sequelize) => {
      const Teams = await queryInterface.createTable('teams', {
        id: { 
          type: Sequelize.INTEGER,
          allowNull: false, 
          primaryKey: true,
          autoIncrement: true,
        },
        team_name: {
          type: Sequelize.STRING,
          allowNull: false, 
        },
      })
      return Teams;
    },
  
down: async (queryInterface, Sequelize) => queryInterface.dropTable("teams"),
    
};