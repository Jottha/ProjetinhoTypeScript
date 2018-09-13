import * as express from 'express';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';

class App {
    public app: express.Application;
    private morgan: morgan.Morgan;
    private bodyPaser;

    constructor(){
        this.app = express();
        this.middleware();
        this.routes();
    }

    middleware(){
        this.app.use(morgan('dev'));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }

    routes() {
        this.app.route('/').get((req, res) => res.status(200).json({'message': 'Hello, world!'}));
        this.app.route('/test').get((req, res) => res.status(200).json({ 'message': 'Rota /test está funcionando' }));
    }
};

export default new App();