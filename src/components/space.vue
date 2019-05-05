<template>
    <div id="space" class="space">
        <sidebar :data="setSpeeds"
                 :satellites="satellites"
                 :addSatellite="addSatellite"
                 :removeSatellite="removeSatellite"
                 @setNewSpeed="setNewSpeed($event)"
                 :isStart="isStart"
        />
        <earth />
        <moon ref="moon"
              :isStart="isStart"
        />
        <satellite :ref="`satellite_${satellite}`"
                   v-for="(satellite, i ) in satellites"
                   :key="i"
                   :isStart="isStart"
                   :el="satellite"
        />
        <div class="space__control-game">
            <button class="space_btn-start"
                    :disabled="isStart"
                    @click="isStart = true"
            >
                Вперед!
            </button>
        </div>
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
        isStart   : false,
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

