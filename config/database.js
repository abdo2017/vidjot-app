if(process.env.NODE_ENV === 'production'){
  module.exports = {mongoURI: process.env.mongoURI}
} else {
  module.exports = {mongoURI: 'mongodb://abdo:abdo.esam3@ds163694.mlab.com:63694/my-test'}
}