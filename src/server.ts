import 'reflect-metadata';
import { app } from '.';
import '@dataSource//connection'
const PORT = process.env.PORT || 3333;

app.listen(PORT, () => console.log('Server is running!'));
