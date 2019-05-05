<template>
    <div ref="moon" class="moon">
    </div>
</template>

<script>

import svg from '@/assets/icons/moon.svg';
import * as PIXI from 'pixi.js';

export default {
    props: {
        isStart: Boolean,
    },
    data: () => ({
        app : null,
        moon: null,
    }),
    watch: {
        isStart(val) {
            val ? this.app.start() : this.app.stop();
        },
    },
    mounted() {
        const orbit = this.$refs.moon;
        const container = document.getElementById('space');

        this.app = new PIXI.Application({
            transparent: true,
            autoResize : true,
        });
        this.app.renderer.resize(window.outerWidth, window.outerHeight);

        container.appendChild(this.app.view);

        this.app.loader.add('icon', svg).load((loader, resources) => {
            this.moon = new PIXI.Sprite(resources.icon.texture);
            console.log(this.moon);
            this.moon.height = 30;
            this.moon.width = 30;
            this.moon.anchor.set(7.2);
            this.moon.x = orbit.offsetLeft;
            this.moon.y = orbit.offsetTop;

            this.app.stage.addChild(this.moon);

            this.app.ticker.add(() => this.moon.rotation += this.speed / 1800);
        });
        this.app.stop();
    },
};
</script>

<style>

</style>
