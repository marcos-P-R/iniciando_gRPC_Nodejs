const clientgRPC = require('./clientApp');
const newTask = {id:4, title:"task 4"}

clientgRPC.insert(newTask, (err) => {
    if (err) {
        console.log("ERROR");
    }

    console.log("task successfully inserted -> ", newTask);
});