const Responses = require('../common/API_Responses');

exports.handler = async event => {
    console.log('event = ', event);

    if (!event.pathParameters || !event.pathParameters.ID) {
        console.log('missing an ID')
        return Responses._400({});
    }

    const ID = event.pathParameters.ID;
    if (userData[ID]){
        return Responses._200(userData[ID]);
    }

    return Responses._400({message: 'no user found for that ID'});
};

const userData = {
    111: { name: 'Bob Bobberly', age: 40, job: 'professor' },
    222: { name: 'Jessie Jordan', age: 24, job: 'writer' },
    333: { name: 'Tommy Thompson', age: 30, job: 'plastic surgeon' },
}