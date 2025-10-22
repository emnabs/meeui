/**
 * MeeUI TypeScript Definitions
 * Compatible with Element-UI v2.15.8 type structure
 */

import Vue from 'vue';
import { MeeUIComponent, MeeUIComponentSize } from './component';

/** Alert Component */
export class Alert extends MeeUIComponent {
  /** Alert type */
  type: string;
  /** Alert title */
  title: string;
  /** Alert description */
  description: string;
  /** Whether closable */
  closable: boolean;
}

/** Avatar Component */
export class Avatar extends MeeUIComponent {
  /** Avatar size */
  size: MeeUIComponentSize | number;
  /** Avatar shape */
  shape: 'circle' | 'square';
  /** Avatar src */
  src: string;
  /** Avatar alt */
  alt: string;
}

/** Button Component */
export class Button extends MeeUIComponent {
  /** Button size */
  size: MeeUIComponentSize;
  /** Button type */
  type: string;
  /** Whether button is plain */
  plain: boolean;
  /** Whether button is round */
  round: boolean;
  /** Whether button is loading */
  loading: boolean;
  /** Whether button is disabled */
  disabled: boolean;
  /** Button icon */
  icon: string;
  /** Button native type */
  nativeType: 'button' | 'submit' | 'reset';
}

/** Card Component */
export class Card extends MeeUIComponent {
  /** Card title */
  title: string;
  /** Card description */
  desc: string;
  /** Card thumb */
  thumb: string;
}

/** Cell Component */
export class Cell extends MeeUIComponent {
  /** Cell title */
  title: string | number;
  /** Cell value */
  value: string | number;
  /** Cell label */
  label: string;
  /** Whether clickable */
  clickable: boolean;
  /** Whether show arrow */
  isLink: boolean;
}

/** CellGroup Component */
export class CellGroup extends MeeUIComponent {
  /** Group title */
  title: string;
}

/** Image Component */
export class Image extends MeeUIComponent {
  /** Image source */
  src: string;
  /** Image fit mode */
  fit: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
  /** Image lazy load */
  lazy: boolean;
}

/** Icon Component */
export class Icon extends MeeUIComponent {
  /** Icon name */
  name: string;
  /** Icon color */
  color: string;
  /** Icon size */
  size: string | number;
}

/** Tag Component */
export class Tag extends MeeUIComponent {
  /** Tag type */
  type: string;
  /** Tag size */
  size: MeeUIComponentSize;
  /** Tag color */
  color: string;
  /** Whether closable */
  closable: boolean;
}

/** Progress Component */
export class Progress extends MeeUIComponent {
  /** Progress percentage */
  percentage: number;
  /** Progress color */
  color: string;
  /** Whether inactive */
  inactive: boolean;
}

/** NavBar Component */
export class NavBar extends MeeUIComponent {
  /** NavBar title */
  title: string;
  /** Left text */
  leftText: string;
  /** Right text */
  rightText: string;
  /** Left arrow */
  leftArrow: boolean;
}

/** Tab Component */
export class Tab extends MeeUIComponent {
  /** Tab title */
  title: string;
  /** Tab name */
  name: string | number;
  /** Whether disabled */
  disabled: boolean;
}

/** Tabs Component */
export class Tabs extends MeeUIComponent {
  /** Active tab name */
  active: string | number;
  /** Tabs type */
  type: 'line' | 'card';
  /** Whether animated */
  animated: boolean;
  /** Whether swipeable */
  swipeable: boolean;
}

/** Field Component */
export class Field extends MeeUIComponent {
  /** Field value */
  value: string | number;
  /** Field label */
  label: string;
  /** Field placeholder */
  placeholder: string;
  /** Field type */
  type: 'text' | 'number' | 'tel' | 'password' | 'textarea';
  /** Whether disabled */
  disabled: boolean;
  /** Whether readonly */
  readonly: boolean;
  /** Whether required */
  required: boolean;
  /** Whether clearable */
  clearable: boolean;
}

/** Swipe Component */
export class Swipe extends MeeUIComponent {
  /** Auto play duration */
  autoplay: number;
  /** Whether show indicators */
  showIndicators: boolean;
  /** Initial swipe index */
  initialSwipe: number | string;
}

/** SwipeItem Component */
export class SwipeItem extends MeeUIComponent {}

/** Grid Component */
export class Grid extends MeeUIComponent {
  /** Column number */
  columnNum: number;
  /** Icon size */
  iconSize: string | number;
  /** Whether square */
  square: boolean;
  /** Whether show border */
  border: boolean;
}

/** GridItem Component */
export class GridItem extends MeeUIComponent {
  /** Item text */
  text: string;
  /** Item icon */
  icon: string;
}

/** Install function */
export function install(vue: typeof Vue, options?: any): void;

/** MeeUI version */
export const version: string;
