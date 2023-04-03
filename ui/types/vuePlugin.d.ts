import { App } from 'vue';
import { XButton } from './components/XButton';
import { XBadge } from './components/XBadge';
declare module '@vue/runtime-core' {
    interface GlobalComponents {
        XBadge: typeof XBadge;
        XButton: typeof XButton;
    }
}
export declare const version = "0.0.1";
export declare function install(app: App): void;
export * from './components/XButton/XButton.vue';
export * from './components/XBadge/XBadge';
export { XBadge, XButton };
