const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
    const task = await Task.findById('5ed78f1739eae2768382ac9e')
    await task.populate('owner').execPopulate()
    console.log(task.owner)

    // const user = await User.findById('5ed78a4472dc8f6ff0ebda9b')
    // await user.populate('tasks').execPopulate()
    // console.log(user.tasks)
}

main()
app.listen(port, () => {
    console.log('Server is up on port ' + port)
})



