module.exports = {
    HOST: "ec2-18-215-8-186.compute-1.amazonaws.com",
    USER: "vsatvgxjdamdjn",
    PASSWORD: "36608dd165e908cbaa997e842e57cb0b80aefdb100256ca27253210d29d7107f",
    DB: "d331mc1issb880",
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
