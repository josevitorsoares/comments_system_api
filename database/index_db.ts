(async () =>{
     try{
        const sequelize = require('../database/db.ts');
        const result = await sequelize.sync();
        
      //   console.log(result)
     } catch (error){
        console.log(error);
     }
})();