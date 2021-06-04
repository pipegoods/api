import app from './app';
import './database';

app.listen(app.get('port'), () => {
    console.log('Servidor ejecutandose en ', app.get('port'));
    
});