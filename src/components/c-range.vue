<template>
    <div class="slider">
        <div class="slider__text-box">
            <p class="slider__name">
                {{ `${label} ${index ? index : ''}` }}
            </p>
            <p class="slider__label">
                {{ `${labelSpeed} ${range}` }}
            </p>
        </div>
        <vue-slider :tooltip="'none'"
                    :dotSize="[11, 25]"
                    :data="data"
                    v-model="range"
        />
    </div>
</template>

<script>
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/default.css';

export default {
    components: {
        'vue-slider': VueSlider,
    },
    props: {
        data      : Array,
        index     : Number,
        label     : String,
        labelSpeed: String,
    },
    data: () => ({
        range: 0,
    }),
    created() {
        this.range = this.randomInteger(1, 20);
    },
    methods: {
        randomInteger(min, max) {
            return Math.floor(min + Math.random() * (max + 1 - min));
        },
    },
};
</script>
<style lang="scss">

</style>
