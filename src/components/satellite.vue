<template>
    <div :ref="`satellite_${el}`" class="satellite">
    </div>
</template>

<script>

import * as svg from '@/assets/icons/sputnik.svg';
import * as PIXI from 'pixi.js';
import { randomInteger } from '@/helpers/helpers';

export default {
    props: {
        el: Number,
    },
    data: () => ({
        app      : null,
        satellite: null,

    }),
    mounted() {
        const satPath = this.$refs[`satellite_${this.el}`];
        const container = document.getElementById('space');

        satPath.style.top = `${randomInteger(40, 60)}%`;
        satPath.style.left = `${randomInteger(45, 55)}%`;

        this.app = new PIXI.Application({
            transparent: true,
            autoResize : true,
        });

        this.app.renderer.resize(window.outerWidth, window.outerHeight);
        container.appendChild(this.app.view);
        this.app.loader.add(`icon_${this.el}`, svg).load((loader, resources) => {
            this.satellite = new PIXI.Sprite(resources[`icon_${this.el}`].texture);

            this.satellite.anchor.set(5.15);
            this.satellite.x = satPath.offsetLeft;
            this.satellite.y = satPath.offsetTop;

            this.app.stage.addChild(this.satellite);

            this.app.ticker.add(() => this.satellite.rotation += this.speed / 1000);
        });
    },
    beforeDestroy() {
        document.getElementById('space').removeChild(this.app.view);
    },

};
</script>

<style>

</style>
