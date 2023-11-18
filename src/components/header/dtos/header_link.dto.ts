import type { Dictionary } from "@/types/dictionary"

export default class HeaderLinkDto {
	readonly text: string
	readonly routePath: string
	readonly params?: Dictionary<any>

	constructor(text: string, routePath: string, params?: Dictionary<any>) {
		this.text = text
		this.routePath = routePath
		this.params = params
	}
}
