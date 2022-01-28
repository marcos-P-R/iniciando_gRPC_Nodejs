const clientgRPC = require('./clientApp');
const getId = {id:2}

clientgRPC.find(getId, (err, tasks) => {
    if (err) {
        console.log("ERROR");
    }

    console.log("task successfully inserted -> ", tasks);
})