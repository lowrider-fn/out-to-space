<template>
    <div id="app">
        <div id="space" class="space">
            <canvas ref="canvas"></canvas>

            <sidebar :setSpeed="setSpeed"
                     :satellites="satellites"
                     @add="addSatellite()"
                     @remove="removeSatellite()"
                     @setNewSpeed="setNewSpeed($event)"
                     :isStart="isStart"
            />

            <div class="space__satellite"
                 v-for="(satellite, i ) in satellites"
                 :key="i"
                 :ref="`satellite${satellite}`"
            ></div>

            <div ref="moon" class="space__moon"></div>

            <div class="space__control" v-if="!isStart">
                <button class="space__control-btn"
                        @click="start()"
                >
                    Вперед!
                </button>
            </div>

            <modal
                v-if="!isInit || isShow"
                :title="isInit && 'Игровое сообщение' || '3 2 1 ...'"
                :text="isInit && gameMsg || ''"
                :btnText="!isInit && 'Поехали!' || ''"
                @close="isInit && modalsControls()"
            />
            <a target="_blank" class="link" href="https://vk.com/oxwavemusic">Sound: Oxwave - Cosmic Appeasement</a>
        </div>
    </div>
</template>

<script>
import sidebar from './components/sidebar.vue';
import modal from './components/modal.vue';

import earthIcon from './assets/icons/earth.svg';
import shipIcon from './assets/icons/ship.svg';
import satelliteIcon from './assets/icons/sputnik.svg';
import moonIcon from './assets/icons/moon.svg';
import music from './assets/OxwaveCosmicAppeasement.mp3';

import * as PIXI from 'pixi.js';
import { randomInteger } from './helpers';

export default {
    components: {
        sidebar,
        modal,
    },
    data: () => ({
        app       : null,
        satellites: [1, 2, 3, 4],
        shipSpeed : 0,
        moonSpeed : 0,
        wWidth    : window.innerWidth,
        wHeight   : window.innerHeight,
        isStart   : false,
        isShow    : false,
        gameMsg   : '',
        isInit    : false,
    }),
    mounted() {
        this.initPixi();
        this.initSprites();
        this.initAudio();
    },
    methods: {
        initPixi() {
            const { canvas } = this.$refs;
            this.app = new PIXI.Application({
                view       : canvas,
                transparent: true,
                antialias  : true,
                forceCanvas: true,
                width      : this.wWidth,
                height     : this.wHeight,
            });
        },
        initSprites() {
            this.app.loader
                .add('earth', earthIcon)
                .add('ship', shipIcon)
                .add('moon', moonIcon);
            this.satellites.forEach((el) => {
                this.app.loader.add(`satellite${el}`, satelliteIcon);
            });

            this.app.loader.load((loader, resources) => {
                this.tuneEarth(resources);
                this.tuneShip(resources);
                this.tuneMoon(resources);
                this.satellites.forEach((el) => {
                    this.tuneSatellite(resources, el);
                });
            });
        },
        tuneEarth(resources) {
            const earth = new PIXI.Sprite(resources.earth.texture);
            earth.width = 210;
            earth.height = 210;
            earth.x = (this.wWidth - earth.width) / 2;
            earth.y = (this.wHeight - earth.height) / 2;
            earth.anchor.set(0);
            this.app.stage.addChild(earth);
        },
        initAudio() {
            document.getElementById('app').addEventListener('click', () => {
                const audio = new Audio(music);

                audio.setAttribute('loop', true);

                audio.play();

                this.isInit = true;
            }, { once: true });
        },
        tuneShip(resources) {
            const ship = new PIXI.Sprite(resources.ship.texture);
            ship.width = 20;
            ship.height = 30;
            ship.x = (this.wWidth - ship.width) / 2;
            ship.y = this.wHeight / 2 - this.app.stage.children[0].height / 2.26;
            ship.anchor.set(0);
            this.app.stage.addChild(ship);
            this.app.ticker.add(() => {
                ship.vy = this.shipSpeed;
                ship.y -= ship.vy;
                this.gameControl(ship);
            });
        },
        tuneMoon(resources) {
            const orbit = this.$refs.moon;
            const moon = new PIXI.Sprite(resources.moon.texture);
            moon.id = 'moon';
            moon.width = 40;
            moon.height = 40;
            moon.x = orbit.offsetLeft;
            moon.y = orbit.offsetTop;
            moon.anchor.set(5.5);
            this.app.stage.addChild(moon);
            this.app.ticker.add(() => moon.rotation += this.moonSpeed / 1800);
        },
        tuneSatellite(resources, el) {
            const orbit = this.$refs[`satellite${el}`][0];
            orbit.style.top = `${randomInteger(40, 55)}%`;
            orbit.style.left = `${randomInteger(48, 55)}%`;
            const satellite = new PIXI.Sprite(resources[`satellite${el}`].texture);
            satellite.id = `satellite${el}`;
            satellite.height = 30;
            satellite.width = 21;
            satellite.anchor.set(5.15);
            satellite.x = orbit.offsetLeft;
            satellite.y = orbit.offsetTop;
            this.app.stage.addChild(satellite);
            this.app.ticker.add(() => satellite.rotation += this[`satellite${el}Speed`] / 800);
        },
        chekHit(el1, el2) {
            el1.halfWidth = el1.width / 2;
            el1.halfHeight = el1.height / 2;
            el2.halfWidth = el2.width / 2;
            el2.halfHeight = el2.height / 2;

            el1.centerX = el1.x + el1.halfWidth;
            el1.centerY = el1.y + el1.halfHeight;
            el2.centerX = el2.getBounds().x + el2.halfWidth;
            el2.centerY = el2.getBounds().y + el2.halfHeight;

            const vx = el1.centerX - el2.centerX;
            const vy = el1.centerY - el2.centerY;
            const sumHalfWidths = el1.halfWidth + el2.halfWidth;
            const sumHalfHeights = el1.halfHeight + el2.halfHeight;

            if (Math.abs(vx) < sumHalfWidths && Math.abs(vy) < sumHalfHeights) return true;
            return false;
        },
        gameControl(gameObj) {
            if (gameObj.centerY < -30) {
                this.gameMsg = 'Ракета вышла в космос';
                this.endGame();
            }
            this.app.stage.children.forEach((el) => {
                if (el.id !== undefined) {
                    if (this.chekHit(gameObj, el)) {
                        this.gameMsg = 'Вы потерпели неудачу, попробуйте снова';
                        this.endGame();
                    }
                }
            });
        },
        start() {
            this.setIsStart();
            this.shipSpeed = 1;
        },
        endGame() {
            this.app.ticker.stop();
            this.modalsControls();
            this.setIsStart();
            this.shipSpeed = 0;
            this.app.destroy();
            this.initPixi();
            this.initSprites();
        },
        addSatellite() {
            const satellite = this.satellites.length + 1;
            const id = `satellite${satellite}`;
            this.satellites.push(satellite);
            this.app.stage.children.forEach((el) => {
                if (el.id === id) {
                    el.visible = true;
                    setTimeout(() => {
                        this.$refs[id][0].style.left = `${el.x}px`;
                        this.$refs[id][0].style.top = `${el.y}px`;
                    });
                }
            });
        },
        removeSatellite() {
            const id = `satellite${this.satellites.length}`;
            this.app.stage.children.forEach((el) => {
                if (el.id === id) el.visible = false;
            });
            this.satellites.pop();
        },
        setSpeed(max) {
            const arr = [];
            for (let i = 0; i < max; i++) arr.push(i);
            return arr;
        },
        setNewSpeed(e) {
            if (e.index) this[`satellite${e.index}Speed`] = e.val;
            else this.moonSpeed = e.val;
        },
        setIsStart() {
            this.isStart = !this.isStart;
        },
        modalsControls() {
            this.isShow = !this.isShow;
        },
    },
};

</script>

