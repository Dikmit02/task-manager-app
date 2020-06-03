require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('5c1a5a34d5a2ec046ca8f6bc', { age: 1 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const finduserAndUpdate=async (id,name)=>{
    const user=await User.findByIdAndUpdate(id,{name});
    const count=await  User.countDocuments({ name })
    return count;
}

finduserAndUpdate('5ed429a22f8985025b7e1db6',"mahira").then((count)=>{
    console.log(count+" count ");
}).catch((e)=>{
    console.log(e);
})