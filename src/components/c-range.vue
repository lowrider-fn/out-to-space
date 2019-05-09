<template>
    <div class="slider">
        <div class="slider__text-box">
            <p class="slider__name">
                {{ `${label} ${index ? index: ''}` }}
            </p>
            <p class="slider__label">
                {{ `v: ${range}` }}
            </p>
        </div>
        <vue-slider :tooltip="'none'"
                    :dotSize="[11, 25]"
                    :data="data"
                    v-model="range"
                    @change="$emit('change', $event)"
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
        data : Array,
        index: Number,
        label: String,
        value: [String, Number],
    },
    data: () => ({
        range: 10,
    }),
    created() {
        this.range = this.value;
        this.$emit('change', this.range);
    },
};
</script>
