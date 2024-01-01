import { Sequelize } from "sequelize";
import { userModel } from "./model/user.js";

export const connection =async()=>{
    const sequelize = new Sequelize('postgres', 'postgres', 'sufiya0016', {
        host: 'localhost',
        dialect:  'postgres' ,
      });

      let User=null;

      try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
     
        User=userModel(sequelize);
      await sequelize.sync();
      console.log("table created successfully.");
      } 
      catch (error) {
        console.error('Unable to connect to the database:', error);
      }

}
