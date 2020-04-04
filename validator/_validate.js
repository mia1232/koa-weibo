const Ajv = require('ajv');
const ajv = new Ajv({});

function validate(scheme, data={}) {
    const valid = ajv.validate(scheme, data);
    if(!valid) {
        console.log(ajv.errors[0]);
        return ajv.errors[0];
    }
}

module.exports = validate