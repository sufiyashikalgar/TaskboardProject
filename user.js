import { Sequelize } from "sequelize";

export const userModel=(sequelize)=>{

    const{DataTypes}=Sequelize;

    return sequelize.define("user",{
        user:{
            type:DataTypes.TEXT,},
        name:{
                type:DataTypes.TEXT,},


    });
};