<template>
    <div ref="moon" class="moon">
    </div>
</template>

<script>

import * as svg from '@/assets/icons/moon.svg';
import * as PIXI from 'pixi.js';

export default {
    data: () => ({
        app : null,
        moon: null,

    }),
    mounted() {
        const orbit = this.$refs.moon;
        const container = document.getElementById('space');

        this.app = new PIXI.Application({
            transparent: true,
            top        : '0',
            left       : '0',
            autoResize : true,
            antialias  : true,

        });
        this.app.renderer.view.style.position = 'absolute';

        this.app.renderer.resize(window.outerWidth, window.outerHeight);
        container.appendChild(this.app.view);
        this.app.loader.add('icon', svg).load((loader, resources) => {
            this.satellite = new PIXI.Sprite(resources.icon.texture);

            this.satellite.anchor.set(5.45);
            this.satellite.x = orbit.offsetLeft;
            this.satellite.y = orbit.offsetTop;

            this.app.stage.addChild(this.satellite);
            this.app.ticker.add(() => this.satellite.rotation += this.speed / 1500);
        });
    },
    methods: {
        randomInteger(min, max) {
            return Math.floor(min + Math.random() * (max + 1 - min));
        },
    },

};
</script>

<style>

</style>
