<template>
    <div class="sidebar">
        <div class="sidebar__count-control">
            <p class="sidebar__count-label">
                Спутники
            </p>
            <button class="sidebar__count-btn"
                    :disabled="satellites.length < 3"
                    v
                    @click="removeSatellite()"
            >
                <svg width="32"
                     height="32"
                     xmlns="http://www.w3.org/2000/svg"
                >
                    <g fill="none" fill-rule="evenodd">
                        <circle fill="#5A2E9B"
                                cx="16"
                                cy="16"
                                r="16"
                        />
                        <rect fill="#FFF"
                              x="10"
                              y="15"
                              width="12"
                              height="2"
                              rx="1"
                        />
                    </g>
                </svg>
            </button>
            <button class="sidebar__count-btn"
                    :disabled="satellites.length >= 4"
                    @click="addSatellite()"
            >
                <svg width="32"
                     height="32"
                     xmlns="http://www.w3.org/2000/svg"
                >
                    <g fill="none" fill-rule="evenodd">
                        <circle fill="#19BB4F"
                                cx="16"
                                cy="16"
                                r="16"
                        />
                        <rect fill="#FFF"
                              x="15" y="10"
                              width="2"
                              height="12"
                              rx="1"
                        />
                        <rect fill="#FFF"
                              x="10" y="15"
                              width="12"
                              height="2"
                              rx="1"
                        />
                    </g>
                </svg>
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

export default {
    components: {
        'c-range': cRange,
    },
    props: {
        satellites     : Array,
        data           : Array,
        addSatellite   : Function,
        removeSatellite: Function,
    },
};
</script>
<style lang="scss">

</style>

