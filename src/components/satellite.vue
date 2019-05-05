<template>
    <div :ref="`satellite_${el}`" class="satellite">
    </div>
</template>

<script>

import svg from '@/assets/icons/sputnik.svg';
import * as PIXI from 'pixi.js';
import { randomInteger } from '@/helpers/helpers';

export default {
    props: {
        el     : Number,
        isStart: Boolean,
    },
    data: () => ({
        app      : null,
        satellite: null,

    }),
    watch: {
        isStart(val) {
            val ? this.app.start() : this.app.stop();
        },
    },
    mounted() {
        const satPath = this.$refs[`satellite_${this.el}`];
        const container = document.getElementById('space');

        satPath.style.top = `${randomInteger(45, 60)}%`;
        satPath.style.left = `${randomInteger(45, 55)}%`;

        this.app = new PIXI.Application({
            transparent: true,
            autoResize : true,
        });

        this.app.renderer.resize(window.outerWidth, window.outerHeight);
        container.appendChild(this.app.view);

        this.app.loader.add(`icon_${this.el}`, svg).load((loader, resources) => {
            this.satellite = new PIXI.Sprite(resources[`icon_${this.el}`].texture);

            this.satellite.height = 30;
            this.satellite.width = 21;
            this.satellite.anchor.set(5.15);
            this.satellite.x = satPath.offsetLeft;
            this.satellite.y = satPath.offsetTop;

            this.app.stage.addChild(this.satellite);

            this.app.ticker.add(() => this.satellite.rotation += this.speed / 800);
        });
        this.app.stop();
    },
    beforeDestroy() {
        document.getElementById('space').removeChild(this.app.view);
    },

};
</script>

<style>

</style>
