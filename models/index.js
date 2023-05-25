const mongoose = require('mongoose')
const {DATABASE_URL} = process.env

// * DATABASE CONNECTION *
    // ? Estabish Connection ?
mongoose.connect(DATABASE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
    // ? Connection Events ?
mongoose.connection
    .on('open', () => console.log(`You're connected to Mongoose!`))
    .on('close', () => console.log(`You've disconnected from Mongoose!`))
    .on('error', (error) => console.log(error))

module.exports = {
    Services: require('./services.js'),
    Products: require('./products.js'),
    Courses: require('./courses.js'),
    Gallery: require('./gallery.js')
}