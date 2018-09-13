import * as express from 'express';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
import DataBase from './config/db';
import UserRoutes from './modules/user/routes';

class App {
    public app: express.Application;
    private morgan: morgan.Morgan;
    private bodyPaser;
    private database: DataBase;

    constructor(){
        this.app = express();
        this.middleware();
        this.routes();
        this.database = new DataBase();
        this.dataBaseConnection();
    }

    dataBaseConnection() {
        this.database.createConnnection();
    };

    closeDataBaseConnection(message, callback) {
        this.database.closeConnection(message, () => callback());
    };

    middleware(){
        this.app.use(morgan('dev'));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }

    routes() {
        this.app.route('/').get((req, res) => res.status(200).json({'message': 'Hello, world!'}));
        this.app.route('/test').get((req, res) => res.status(200).json({ 'message': 'Rota /test está funcionando' }));
        this.app.route('/api/v1/users').get(UserRoutes.getAll);
        this.app.route('/api/v1/users/:id').get(UserRoutes.getById);
        this.app.route('/api/v1/users').post(UserRoutes.create);
        this.app.route('/api/v1/users/:id').put(UserRoutes.update);
        this.app.route('/api/v1/users').delete(UserRoutes.delete);
    }
};

export default new App();