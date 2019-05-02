<template>
    <div class="space">
        <sidebar />
        <earth />
        <moon />
        <satellite />
    </div>
</template>

<script>
import sidebar from './sidebar.vue';
import earth from './earth.vue';
import moon from './moon.vue';
import satellite from './satellite.vue';

export default {
    components: {
        sidebar,
        earth,
        moon,
        satellite,
    },
};

</script>

