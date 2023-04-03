import { boot } from 'quasar/wrappers';
import VuePlugin from 'quasar-ui-vite-typescript';
import 'quasar-ui-vite-typescript/dist/index.css';

export default boot(({ app }) => {
    app.use(VuePlugin);
});
