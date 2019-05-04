<template>
    <div id="space" class="space">
        <sidebar :satellites="satellites"
                 :addSatellite="addSatellite"
                 :removeSatellite="removeSatellite"
                 @changeSatelliteSpeed="changeSatelliteSpeed($event)"
                 @changeMoonSpeed="changeMoonSpeed($event)"
        />
        <earth />
        <moon ref="moon" />
        <satellite :ref="`satellite_${i+1}`" v-for="(satellite, i ) in satellites"
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
        setSpeed() {
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
        changeSatelliteSpeed(e) {
            const el = this.$refs[`satellite_${e.index}`];
            if (el) el[0].speed = e.val;
        },
        changeMoonSpeed(e) {
            this.$refs.moon.speed = e;
        },
    },
};

</script>

