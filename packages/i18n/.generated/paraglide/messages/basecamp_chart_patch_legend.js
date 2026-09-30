/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Chart_Patch_LegendInputs */

const en_basecamp_chart_patch_legend = /** @type {(inputs: Basecamp_Chart_Patch_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Game patch`)
};

const es_basecamp_chart_patch_legend = /** @type {(inputs: Basecamp_Chart_Patch_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Parche del juego`)
};

const de_basecamp_chart_patch_legend = /** @type {(inputs: Basecamp_Chart_Patch_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spiel-Patch`)
};

const fr_basecamp_chart_patch_legend = /** @type {(inputs: Basecamp_Chart_Patch_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Patch du jeu`)
};

const it_basecamp_chart_patch_legend = /** @type {(inputs: Basecamp_Chart_Patch_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Patch del gioco`)
};

const nl_basecamp_chart_patch_legend = /** @type {(inputs: Basecamp_Chart_Patch_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gamepatch`)
};

const pl_basecamp_chart_patch_legend = /** @type {(inputs: Basecamp_Chart_Patch_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Łatka gry`)
};

const pt_basecamp_chart_patch_legend = /** @type {(inputs: Basecamp_Chart_Patch_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Patch do jogo`)
};

const ru_basecamp_chart_patch_legend = /** @type {(inputs: Basecamp_Chart_Patch_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Патч игры`)
};

const sv_basecamp_chart_patch_legend = /** @type {(inputs: Basecamp_Chart_Patch_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spelpatch`)
};

const tr_basecamp_chart_patch_legend = /** @type {(inputs: Basecamp_Chart_Patch_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oyun yaması`)
};

const zh_basecamp_chart_patch_legend = /** @type {(inputs: Basecamp_Chart_Patch_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`游戏补丁`)
};

const ja_basecamp_chart_patch_legend = /** @type {(inputs: Basecamp_Chart_Patch_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ゲームのパッチ`)
};

/**
* | output |
* | --- |
* | "Game patch" |
*
* @param {Basecamp_Chart_Patch_LegendInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_chart_patch_legend = /** @type {((inputs?: Basecamp_Chart_Patch_LegendInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Chart_Patch_LegendInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_chart_patch_legend(inputs)
	if (locale === "de") return de_basecamp_chart_patch_legend(inputs)
	if (locale === "fr") return fr_basecamp_chart_patch_legend(inputs)
	if (locale === "it") return it_basecamp_chart_patch_legend(inputs)
	if (locale === "nl") return nl_basecamp_chart_patch_legend(inputs)
	if (locale === "pl") return pl_basecamp_chart_patch_legend(inputs)
	if (locale === "pt") return pt_basecamp_chart_patch_legend(inputs)
	if (locale === "ru") return ru_basecamp_chart_patch_legend(inputs)
	if (locale === "sv") return sv_basecamp_chart_patch_legend(inputs)
	if (locale === "tr") return tr_basecamp_chart_patch_legend(inputs)
	if (locale === "zh") return zh_basecamp_chart_patch_legend(inputs)
	if (locale === "ja") return ja_basecamp_chart_patch_legend(inputs)
	return en_basecamp_chart_patch_legend(inputs)
});
