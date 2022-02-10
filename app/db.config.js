module.exports = {
    HOST: "ec2-34-205-46-149.compute-1.amazonaws.com",
    USER: "iiyxcpjgtksomo",
    PASSWORD: "7d49c451210f656fa7a7267156902764d56fd4f1551e345b8a0c144c682a0439",
    DB: "d6bb7pipsu54at",
    dialect: "postgres",
    ssl: true,
    dialectOptions: {
    ssl: {
      rejectUnauthorized: false
    }
  }
};
  
//run 
//heroku config:set PGSSLMODE=no-verify --app dash-nodejs-mysql
//test