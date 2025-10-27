<template name="skeleton">
    <div class="sk-container">
        <div class="viewport viewport">
            <div class="search search">
                <div class="input input">
                    <text class="icon-search sk-transparent sk-text-14-2857-590 sk-text">女靴</text>
                </div>
            </div>
            <div class="categories categories">
                <scroll-div :scroll-y="true" class="primary primary">
                    <div class="item active sk-transparent sk-text-36-4583-773 sk-text sk-pseudo sk-pseudo-circle"
                        style="background-position-x: 50%;">居家</div>
                    <div class="item sk-transparent sk-text-36-4583-864 sk-text sk-pseudo sk-pseudo-circle"
                        style="background-position-x: 50%;">美食</div>
                    <div class="item sk-transparent sk-text-36-4583-997 sk-text sk-pseudo sk-pseudo-circle"
                        style="background-position-x: 50%;">服饰</div>
                    <div class="item sk-transparent sk-text-36-4583-353 sk-text sk-pseudo sk-pseudo-circle"
                        style="background-position-x: 50%;">母婴</div>
                    <div class="item sk-transparent sk-text-36-4583-225 sk-text sk-pseudo sk-pseudo-circle"
                        style="background-position-x: 50%;">个护</div>
                    <div class="item sk-transparent sk-text-36-4583-844 sk-text sk-pseudo sk-pseudo-circle"
                        style="background-position-x: 50%;">严选</div>
                    <div class="item sk-transparent sk-text-36-4583-391 sk-text sk-pseudo sk-pseudo-circle"
                        style="background-position-x: 50%;">数码</div>
                    <div class="item sk-transparent sk-text-36-4583-991 sk-text sk-pseudo sk-pseudo-circle"
                        style="background-position-x: 50%;">运动</div>
                    <div class="item sk-transparent sk-text-36-4583-798 sk-text sk-pseudo sk-pseudo-circle"
                        style="background-position-x: 50%;">杂项</div>
                </scroll-div>
                <scroll-div :scroll-y="true" class="secondary secondary">
                    <div is="components/XtxSwiper" class="banner banner">
                        <div class="carousel XtxSwiper--carousel">
                            <swiper :circular="true" :interval="3000" :current="0" :autoplay="false">
                                <swiper-item
                                    style="position: absolute; width: 100%; height: 100%; transform: translate(0%, 0px) translateZ(0px);">
                                    <navigator class="navigator XtxSwiper--navigator" hover-class="none">
                                        <image class="image XtxSwiper--image sk-image" mode="aspectFill"></image>
                                    </navigator>
                                </swiper-item>
                                <swiper-item
                                    style="position: absolute; width: 100%; height: 100%; transform: translate(100%, 0px) translateZ(0px);">
                                    <navigator class="navigator XtxSwiper--navigator" hover-class="none">
                                        <image class="image XtxSwiper--image sk-image" mode="aspectFill"></image>
                                    </navigator>
                                </swiper-item>
                            </swiper>
                            <div class="indicator XtxSwiper--indicator">
                                <text class="dot XtxSwiper--dot active XtxSwiper--active"></text>
                                <text class="dot XtxSwiper--dot"></text>
                                <text class="dot XtxSwiper--dot"></text>
                                <text class="dot XtxSwiper--dot"></text>
                                <text class="dot XtxSwiper--dot"></text>
                            </div>
                        </div>
                    </div>
                    <div class="panel panel">
                        <div class="title title">
                            <text class="name sk-transparent sk-text-26-6667-95 sk-text">居家生活用品</text>
                            <navigator class="more sk-transparent sk-text-30-0000-311 sk-text sk-pseudo sk-pseudo-circle"
                                hover-class="none">全部</navigator>
                        </div>
                        <div class="section section">
                            <navigator class="goods goods" hover-class="none">
                                <image class="image sk-image"></image>
                                <div class="name ellipsis sk-transparent sk-text-14-2857-785 sk-text">法国年份雅文邑700毫升</div>
                                <div class="price price">
                                    <text class="symbol sk-transparent sk-opacity">¥</text>
                                    <text class="number sk-transparent sk-text-14-2857-64 sk-text">1480.00</text>
                                </div>
                            </navigator>
                            <navigator class="goods goods" hover-class="none">
                                <image class="image sk-image"></image>
                                <div class="name ellipsis sk-transparent sk-text-14-2857-949 sk-text">梅乃宿梅酒720毫升</div>
                                <div class="price price">
                                    <text class="symbol sk-transparent sk-opacity">¥</text>
                                    <text class="number sk-transparent sk-text-14-2857-136 sk-text">168.00</text>
                                </div>
                            </navigator>
                            <navigator class="goods goods" hover-class="none">
                                <image class="image sk-image"></image>
                                <div class="name ellipsis sk-transparent sk-text-14-2857-218 sk-text">多米尼加陈年朗姆酒700毫升</div>
                                <div class="price price">
                                    <text class="symbol sk-transparent sk-opacity">¥</text>
                                    <text class="number sk-transparent sk-text-14-2857-835 sk-text">238.00</text>
                                </div>
                            </navigator>
                            <navigator class="goods goods" hover-class="none">
                                <image class="image sk-image"></image>
                                <div class="name ellipsis sk-transparent sk-text-14-2857-726 sk-text">川味牛肉辣椒酱190克</div>
                                <div class="price price">
                                    <text class="symbol sk-transparent sk-opacity">¥</text>
                                    <text class="number sk-transparent sk-text-14-2857-734 sk-text">38.00</text>
                                </div>
                            </navigator>
                            <navigator class="goods goods" hover-class="none">
                                <image class="image sk-image"></image>
                                <div class="name ellipsis sk-transparent sk-text-14-2857-950 sk-text">全新升级，四川酸辣粉195克*6杯
                                </div>
                                <div class="price price">
                                    <text class="symbol sk-transparent sk-opacity">¥</text>
                                    <text class="number sk-transparent sk-text-14-2857-125 sk-text">69.00</text>
                                </div>
                            </navigator>
                            <navigator class="goods goods" hover-class="none">
                                <image class="image sk-image"></image>
                                <div class="name ellipsis sk-transparent sk-text-14-2857-437 sk-text">极光限定 珠光蓝珐琅锅</div>
                                <div class="price price">
                                    <text class="symbol sk-transparent sk-opacity">¥</text>
                                    <text class="number sk-transparent sk-text-14-2857-265 sk-text">199.00</text>
                                </div>
                            </navigator>
                            <navigator class="goods goods" hover-class="none">
                                <image class="image sk-image"></image>
                                <div class="name ellipsis sk-transparent sk-text-14-2857-789 sk-text">钻石陶瓷涂层多用锅18cm 小奶锅
                                </div>
                                <div class="price price">
                                    <text class="symbol sk-transparent sk-opacity">¥</text>
                                    <text class="number sk-transparent sk-text-14-2857-795 sk-text">149.00</text>
                                </div>
                            </navigator>
                            <navigator class="goods goods" hover-class="none">
                                <image class="image sk-image"></image>
                                <div class="name ellipsis sk-transparent sk-text-14-2857-309 sk-text">智利老牌名庄，梅洛干红750毫升
                                </div>
                                <div class="price price">
                                    <text class="symbol sk-transparent sk-opacity">¥</text>
                                    <text class="number sk-transparent sk-text-14-2857-523 sk-text">98.00</text>
                                </div>
                            </navigator>
                            <navigator class="goods goods" hover-class="none">
                                <image class="image sk-image"></image>
                                <div class="name ellipsis sk-transparent sk-text-14-2857-665 sk-text">原产兰州，气清味美，甜百合干168克
                                </div>
                                <div class="price price">
                                    <text class="symbol sk-transparent sk-opacity">¥</text>
                                    <text class="number sk-transparent sk-text-14-2857-412 sk-text">42.80</text>
                                </div>
                            </navigator>
                            <navigator class="goods goods" hover-class="none">
                                <image class="image sk-image"></image>
                            </navigator>
                        </div>
                    </div>
                </scroll-div>
            </div>
        </div>
    </div>
</template>
<style scoped>
/*
此文件为开发者工具生成，生成时间: 2024/1/18下午4:37:10

在 C:\Users\lichen\Desktop\uniapp-learn\dist\dev\mp-weixin\pages\category\index.wxss 中引入样式
```
@import "./index.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
*/
.sk-transparent {
    color: transparent !important;
}

.sk-text-14-2857-590 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 39.2000rpx;
    position: relative !important;
}

.sk-text {
    background-origin: content-box !important;
    background-clip: content-box !important;
    background-color: transparent !important;
    color: transparent !important;
    background-repeat: repeat-y !important;
}

.sk-text-36-4583-773 {
    background-image: linear-gradient(transparent 36.4583%, #EEEEEE 0%, #EEEEEE 63.5417%, transparent 0%) !important;
    background-size: 100% 96.0000rpx;
    position: relative !important;
}

.sk-text-36-4583-864 {
    background-image: linear-gradient(transparent 36.4583%, #EEEEEE 0%, #EEEEEE 63.5417%, transparent 0%) !important;
    background-size: 100% 96.0000rpx;
    position: relative !important;
}

.sk-text-36-4583-997 {
    background-image: linear-gradient(transparent 36.4583%, #EEEEEE 0%, #EEEEEE 63.5417%, transparent 0%) !important;
    background-size: 100% 96.0000rpx;
    position: relative !important;
}

.sk-text-36-4583-353 {
    background-image: linear-gradient(transparent 36.4583%, #EEEEEE 0%, #EEEEEE 63.5417%, transparent 0%) !important;
    background-size: 100% 96.0000rpx;
    position: relative !important;
}

.sk-text-36-4583-225 {
    background-image: linear-gradient(transparent 36.4583%, #EEEEEE 0%, #EEEEEE 63.5417%, transparent 0%) !important;
    background-size: 100% 96.0000rpx;
    position: relative !important;
}

.sk-text-36-4583-844 {
    background-image: linear-gradient(transparent 36.4583%, #EEEEEE 0%, #EEEEEE 63.5417%, transparent 0%) !important;
    background-size: 100% 96.0000rpx;
    position: relative !important;
}

.sk-text-36-4583-391 {
    background-image: linear-gradient(transparent 36.4583%, #EEEEEE 0%, #EEEEEE 63.5417%, transparent 0%) !important;
    background-size: 100% 96.0000rpx;
    position: relative !important;
}

.sk-text-36-4583-991 {
    background-image: linear-gradient(transparent 36.4583%, #EEEEEE 0%, #EEEEEE 63.5417%, transparent 0%) !important;
    background-size: 100% 96.0000rpx;
    position: relative !important;
}

.sk-text-36-4583-798 {
    background-image: linear-gradient(transparent 36.4583%, #EEEEEE 0%, #EEEEEE 63.5417%, transparent 0%) !important;
    background-size: 100% 96.0000rpx;
    position: relative !important;
}

.sk-text-26-6667-95 {
    background-image: linear-gradient(transparent 26.6667%, #EEEEEE 0%, #EEEEEE 73.3333%, transparent 0%) !important;
    background-size: 100% 60.0000rpx;
    position: relative !important;
}

.sk-text-30-0000-311 {
    background-image: linear-gradient(transparent 30.0000%, #EEEEEE 0%, #EEEEEE 70.0000%, transparent 0%) !important;
    background-size: 100% 60.0000rpx;
    position: relative !important;
}

.sk-text-14-2857-785 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 30.8000rpx;
    position: relative !important;
}

.sk-opacity {
    opacity: 0 !important;
}

.sk-text-14-2857-64 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
}

.sk-text-14-2857-949 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 30.8000rpx;
    position: relative !important;
}

.sk-text-14-2857-136 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
}

.sk-text-14-2857-218 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 30.8000rpx;
    position: relative !important;
}

.sk-text-14-2857-835 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
}

.sk-text-14-2857-726 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 30.8000rpx;
    position: relative !important;
}

.sk-text-14-2857-734 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
}

.sk-text-14-2857-950 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 30.8000rpx;
    position: relative !important;
}

.sk-text-14-2857-125 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
}

.sk-text-14-2857-437 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 30.8000rpx;
    position: relative !important;
}

.sk-text-14-2857-265 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
}

.sk-text-14-2857-789 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 30.8000rpx;
    position: relative !important;
}

.sk-text-14-2857-795 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
}

.sk-text-14-2857-309 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 30.8000rpx;
    position: relative !important;
}

.sk-text-14-2857-523 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
}

.sk-text-14-2857-665 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 30.8000rpx;
    position: relative !important;
}

.sk-text-14-2857-412 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
}

.sk-image {
    background: #EFEFEF !important;
}

.sk-pseudo::before,
.sk-pseudo::after {
    background: #EFEFEF !important;
    background-image: none !important;
    color: transparent !important;
    border-color: transparent !important;
}

.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
    border-radius: 0 !important;
}

.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
    border-radius: 50% !important;
}

.sk-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: transparent;
}</style>