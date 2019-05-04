<template>
    <div class="slider">
        <div class="slider__text-box">
            <p class="slider__name">
                {{ `${label} ${index ? index: ''}` }}
            </p>
            <p class="slider__label">
                {{ `v: ${speed}` }}
            </p>
        </div>
        <vue-slider :tooltip="'none'"
                    :dotSize="[11, 25]"
                    :data="data"
                    v-model="speed"
        />
    </div>
</template>

<script>
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/default.css';
import { randomInteger } from '@/helpers/helpers';

export default {
    components: {
        'vue-slider': VueSlider,
    },
    props: {
        data : Array,
        index: Number,
        label: String,
    },
    data: () => ({
        speed: 0,
    }),
    watch: {
        speed(speed) {
            if (this.index) {
                this.$emit('setNewSpeed', {
                    val  : speed,
                    index: this.index,
                });
            } else {
                this.$emit('setNewSpeed', { val: speed });
            }
        },
    },
    created() {
        this.speed = randomInteger(1, 20);
    },
};
</script>
<style lang="scss">

</style>
