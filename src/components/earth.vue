<template>
    <div ref="earth" class="earth">
        <img class="earth__img"
             :src="earth"
             alt="Земля"
        >
    </div>
</template>

<script>
import svg from '@/assets/icons/ship.svg';
import earth from '@/assets/icons/earth.svg';
import * as PIXI from 'pixi.js';
import { randomInteger } from '@/helpers/helpers';

export default {
    props: {
        el: Number,
    },
    data: () => ({
        earth,
        app : null,
        ship: null,

    }),
    mounted() {
        const satPath = this.$refs.earth;
        const container = document.getElementById('space');

        this.app = new PIXI.Application({
            transparent: true,
            autoResize : true,
        });

        this.app.renderer.resize(window.outerWidth, window.outerHeight);
        container.appendChild(this.app.view);

        this.app.loader.add('ship', svg).load((loader, resources) => {
            this.ship = new PIXI.Sprite(resources.ship.texture);
            this.ship.height = 30;
            this.ship.width = 20;
            this.ship.anchor.set(5.15);
            this.ship.x = satPath.offsetLeft + 420 / 4.4;
            this.ship.y = satPath.offsetTop + 420 / 7;

            this.app.stage.addChild(this.ship);

            this.app.ticker.add(() => this.ship.speed = 0);
        });
    },

};
</script>
<style lang="scss">

</style>
