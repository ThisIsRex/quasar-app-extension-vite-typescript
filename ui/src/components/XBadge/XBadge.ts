import { QBadge } from 'quasar';
import { defineComponent, h } from 'vue';

export interface Bar {
    bar: string;
}

export default defineComponent({
    name: 'XBadge',

    setup() {
        return () => h(QBadge, { label: 'xbadge typescript' });
    },
});
