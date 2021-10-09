var translate = require('translate-google');

var exp = module.exports;

exp.tran = (input) => {
    translate(input, {from:'en', to: 'vi'}).then((res)=>{
        res;
    }).catch(err => {
        console.error(err)
    })
}
