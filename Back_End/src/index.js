import app from './app'
import '@babel/polyfill'
import "core-js/stable";
import "regenerator-runtime/runtime";

app.listen(3000)
console.log('Server on port 3000')