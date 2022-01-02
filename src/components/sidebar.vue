<template>
    <div class="sidebar">
        <div class="sidebar__count-control">
            <p class="sidebar__count-label">
                Спутники
            </p>
            <button class="sidebar__count-btn"
                    :disabled="satellites.length < 3 || isStart"
                    v
                    @click="$emit('remove')"
            >
                <img :src="btnMinus">
            </button>
            <button class="sidebar__count-btn"
                    :disabled="satellites.length >= 4 || isStart"
                    @click="$emit('add')"
            >
                <img :src="btnPlus">
            </button>
        </div>
        <div class="slider" v-for="(satellite, i) in satellites"
             :key="i"
        >
            <range :value="randomInteger(1, 25)"
                   :data="setSpeed(26)"
                   :index="satellite"
                   :label="'Спутник'"
                   @change="$emit('setNewSpeed',{ val : $event, index : satellite } )"
            />
        </div>
        <range class="sidebar__bottom-range"
               :value="randomInteger(1, 20)"
               :data="setSpeed(21)"
               :label="'Луна'"
               @change="$emit('setNewSpeed',{ val: $event })"
        />
    </div>
</template>

<script>
import Range from './range';
import btnMinus from '@/assets/icons/btn-minus.svg';
import btnPlus from '@/assets/icons/btn-plus.svg';
import { randomInteger } from '@/helpers';

export default {
    components: {
        range: Range,
    },
    props: {
        satellites: Array,
        setSpeed  : Function,
        isStart   : Boolean,
    },
    data: () => ({
        randomInteger,
        btnMinus,
        btnPlus,
    }),
};
</script>
