const connection = require('../database/connection');

module.exports = {
    async index(request, response) {

    },

    async create(request, response) {
        const { title, description, value } = request.body;

    }
}