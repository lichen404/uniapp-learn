import XtxSwiper from "./XtxSwiper.vue";
import XtxGuess from "./XtxGuess.vue";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    XtxSwiper: typeof XtxSwiper;
    XtxGuess: typeof XtxGuess;
  }
}

export type XtxGuessInstance = InstanceType<typeof XtxGuess>