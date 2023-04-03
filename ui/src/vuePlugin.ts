import { App } from 'vue';
import { XButton } from './components/XButton';
import { XBadge } from './components/XBadge';

declare module '@vue/runtime-core' {
    export interface GlobalComponents {
        XBadge: typeof XBadge;
        XButton: typeof XButton;
    }
}

export const version = '0.0.1';

//prettier-ignore
//Установка компонентов, не забываем добавлять сюда
const components = [
    XButton,
    XBadge,
];

export function install(app: App) {
    for (const component of components) {
        app.component(component.name, component);
    }
}

//Экспорт всех типов, кроме default
export * from '@/components/XButton/XButton.vue';
export * from '@/components/XBadge/XBadge';

//Экспорт дефолта как недефолт :)
export { XBadge, XButton };
