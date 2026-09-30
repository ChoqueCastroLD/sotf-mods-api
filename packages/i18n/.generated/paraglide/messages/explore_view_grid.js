/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_View_GridInputs */

const en_explore_view_grid = /** @type {(inputs: Explore_View_GridInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Grid`)
};

const es_explore_view_grid = /** @type {(inputs: Explore_View_GridInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cuadrícula`)
};

const de_explore_view_grid = /** @type {(inputs: Explore_View_GridInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Raster`)
};

const fr_explore_view_grid = /** @type {(inputs: Explore_View_GridInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Grille`)
};

const it_explore_view_grid = /** @type {(inputs: Explore_View_GridInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Griglia`)
};

const nl_explore_view_grid = /** @type {(inputs: Explore_View_GridInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Raster`)
};

const pl_explore_view_grid = /** @type {(inputs: Explore_View_GridInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Siatka`)
};

const pt_explore_view_grid = /** @type {(inputs: Explore_View_GridInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Grade`)
};

const ru_explore_view_grid = /** @type {(inputs: Explore_View_GridInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сетка`)
};

const sv_explore_view_grid = /** @type {(inputs: Explore_View_GridInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rutnät`)
};

const tr_explore_view_grid = /** @type {(inputs: Explore_View_GridInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Izgara`)
};

const zh_explore_view_grid = /** @type {(inputs: Explore_View_GridInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`网格`)
};

const ja_explore_view_grid = /** @type {(inputs: Explore_View_GridInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`グリッド`)
};

/**
* | output |
* | --- |
* | "Grid" |
*
* @param {Explore_View_GridInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_view_grid = /** @type {((inputs?: Explore_View_GridInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_View_GridInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_view_grid(inputs)
	if (locale === "de") return de_explore_view_grid(inputs)
	if (locale === "fr") return fr_explore_view_grid(inputs)
	if (locale === "it") return it_explore_view_grid(inputs)
	if (locale === "nl") return nl_explore_view_grid(inputs)
	if (locale === "pl") return pl_explore_view_grid(inputs)
	if (locale === "pt") return pt_explore_view_grid(inputs)
	if (locale === "ru") return ru_explore_view_grid(inputs)
	if (locale === "sv") return sv_explore_view_grid(inputs)
	if (locale === "tr") return tr_explore_view_grid(inputs)
	if (locale === "zh") return zh_explore_view_grid(inputs)
	if (locale === "ja") return ja_explore_view_grid(inputs)
	return en_explore_view_grid(inputs)
});
