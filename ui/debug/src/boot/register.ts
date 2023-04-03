import { boot } from 'quasar/wrappers';
import VuePlugin from 'ui'; // "ui" is aliased in quasar.conf.js

console.log('boot register');

export default boot(({ app }) => {
    console.log(VuePlugin);

    app.use(VuePlugin);
});
