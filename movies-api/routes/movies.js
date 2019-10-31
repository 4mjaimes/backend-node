const express = require('express');
const { moviesMock } = require('../utils/mocks/movies');

const moviesApi = (app) => {
    const router = express.Router();
    app.use('/api/movies/', router);
    router.get('/', async (request, response, next) => {
        try {
            const movies = await Promise.resolve(moviesMock);
            response.status(200).json({
                data: movies,
                message: 'Movies listed'
            })
        } catch (error) {
            next(error);
        }
    });
}
  // "husky": {
  //   "hooks": {
  //     "pre-commit": "lint-staged"
  //   }
  // },
export default moviesApi;