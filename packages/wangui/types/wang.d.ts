import { App } from "vue";
import {
	WangComponent,
	WangComponentSize,
	WangUIHorizontalAlignment,
} from "./component";
export { WIcon } from "./icon";
export interface InstallationOptions {
	size: string;
}

export const version: string;

export function install(app: App, ...options: any[]): any;

export type Component = WangComponent;

/** Component size definition for button, input, etc */
export type ComponentSize = WangComponentSize;

/** Horizontal alignment */
export type HorizontalAlignment = WangUIHorizontalAlignment;

/** set GlobalOptions */
export type GlobalOptions = {
	size?: number | string;
	zIndex?: number;
};
export function setupGlobalOptions(opts: GlobalOptions): void;
