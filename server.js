const express = require('express');
const app = express();
const port = 3001;

const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
  res.send('Su nombre, que se traduce como “cerdo saltarín”, se eligió en una encuesta realizada en la página de Facebook del zoológico; votaron unas 20.000 personas. Había tres opciones: Moo Deng, Moo Sap (cerdo picado) y Moo Daeng (cerdo rojo). Moo Deng ganó fácilmente.');
});

app.get('/mensaje2', (req, res) => {
    res.send('El personal de los zoológicos confía en que los protagonismos de Moo Deng y Toni tengan un efecto positivo a largo plazo para otros hipopótamos pigmeos.');
  });

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

