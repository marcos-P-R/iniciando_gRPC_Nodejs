const clientgRPC = require('./clientApp');

clientgRPC.findAll({}, (err, tasks) => {
    if (err) {
        console.log("ERROR");
    }

    console.log("Sucess -> ", tasks);
})