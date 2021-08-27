import { App } from "vue";

/** ElementUI component common definition */
export interface WangComponent {
	install: (app: App, ...options: any[]) => any;
}

/** Component size definition for button, input, etc */
export type WangComponentSize = "large" | "medium" | "small" | "mini";

/** Horizontal alignment */
export type WangUIHorizontalAlignment = "left" | "center" | "right";
