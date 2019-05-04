<template>
    <div id="space" class="space">
        <sidebar :data="setSpeeds"
                 :satellites="satellites"
                 :addSatellite="addSatellite"
                 :removeSatellite="removeSatellite"
                 @setNewSpeed="setNewSpeed($event)"
        />
        <earth />
        <moon ref="moon" />
        <satellite :ref="`satellite_${i+1}`"
                   v-for="(satellite, i ) in satellites"
                   :key="i"
                   :el="satellite"
        />
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
    data: () => ({
        satellites: [1, 2],
    }),
    computed: {
        setSpeeds() {
            const arr = [];
            for (let i = 0; i < 21; i++) arr.push(i);
            return arr;
        },
    },
    methods: {
        addSatellite() {
            const el = this.satellites[this.satellites.length - 1] + 1;
            this.satellites.push(el);
        },
        removeSatellite() {
            this.satellites.pop();
        },
        setNewSpeed(e) {
            if (e.index) this.$refs[`satellite_${e.index}`][0].speed = e.val;
            else this.$refs.moon.speed = e.val;
        },

    },
};

</script>

