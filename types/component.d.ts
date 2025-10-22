import Vue from 'vue';

/** MeeUI component common definition */
export declare class MeeUIComponent extends Vue {
  /** Install component into Vue */
  static install(vue: typeof Vue): void;
}

/** Component size definition */
export type MeeUIComponentSize = 'large' | 'normal' | 'small' | 'mini';

/** Horizontal alignment */
export type MeeUIHorizontalAlignment = 'left' | 'center' | 'right';
