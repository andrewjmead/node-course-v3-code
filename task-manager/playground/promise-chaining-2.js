require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('5c1a63e8f0d4c50656c5ab28').then((task) => {
    console.log(task)
    return Task.countDocuments({ completed: false })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})