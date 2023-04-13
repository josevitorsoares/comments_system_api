(async () =>{
     try{
        const sequelize = require('../database/db.ts');
        const result = await sequelize.sync();

     } catch (error){
        console.log(error);
     }
})();