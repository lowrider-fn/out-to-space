<template>
    <div class="sidebar">
        <div class="sidebar__count-control">
            <p class="sidebar__count-label">
                Спутники
            </p>
            <button class="sidebar__count-btn"
                    :disabled="satellites.length < 3 || isStart"
                    v
                    @click="removeSatellite()"
            >
                <img :src="btnMinus">
            </button>
            <button class="sidebar__count-btn"
                    :disabled="satellites.length >= 4 || isStart"
                    @click="addSatellite()"
            >
                <img :src="btnPlus">
            </button>
        </div>
        <div class="slider" v-for="(satellite, i) in satellites"
             :key="i"
        >
            <c-range :data="data"
                     :index="satellite"
                     :label="'Спутник'"
                     @setNewSpeed="$emit('setNewSpeed',$event )"
            />
        </div>
        <c-range class="sidebar__bottom-range"
                 :data="data"
                 :label="'Луна'"
                 @setNewSpeed="$emit('setNewSpeed', $event)"
        />
    </div>
</template>

<script>
import cRange from './c-range';
import btnMinus from '@/assets/icons/btn-minus.svg';
import btnPlus from '@/assets/icons/btn-plus.svg';

export default {
    components: {
        'c-range': cRange,
    },
    props: {
        satellites     : Array,
        data           : Array,
        addSatellite   : Function,
        removeSatellite: Function,
        isStart        : Boolean,
    },
    data: () => ({
        btnMinus,
        btnPlus,
    }),
};
</script>
<style lang="scss">

</style>

