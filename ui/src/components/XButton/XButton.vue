<template>
    <button class="btn" :class="{ primary }">
        <slot />
    </button>
</template>

<script lang="ts">
export interface Foo {
    foo: string;
    a: number;
}

export default {
    name: 'XButton',
};
</script>

<script setup lang="ts">
import { reactive } from 'vue';

export interface Props {
    primary?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    primary: false,
});

const { primary } = reactive(props);
</script>

<style scoped>
button {
    padding: 0.6rem 1.25rem;
    background-color: #747bff;
    border: 0;
}

button:hover {
    background-color: #535bf2;
}
</style>
