import superagent from 'superagent';
import baseConfig from './base.config';

const responseBody = res => res.body;

const requests = {
    del: url =>
        superagent.del(`${url}`).then(responseBody),
    get: url =>
        superagent.get(`${url}`).then(responseBody),
    put: (url, body) =>
        superagent.put(`${url}`, body).then(responseBody),
    post: (url, body) =>
        superagent.post(`${url}`, body).type('form').then(responseBody),
    postMandrill: (url, body) =>
        superagent.post(`${url}`, body).then(responseBody)
};

const Message = {
    create: (data) =>
        requests.post(`./mailto`, data)
};

const Mandrill = {
    create: (url,data) =>
        requests.postMandrill(url, data)
};

const Tracking = {
    create: (data) =>
        requests.get(`${baseConfig.trackUrl}${data}`)
};

export default { Message, Tracking, Mandrill };
