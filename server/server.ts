import App from './app';

App.app.listen(3000, () => console.log('Servidor está rodando na porta 3000'));

process.once('SIGUSR2', () => App.closeDataBaseConnection('nodemon restart', () => process.kill(process.pid, 'SIGUSR2')));
process.on('SIGINT', () => App.closeDataBaseConnection('execução interrompida', () => process.exit(0)));