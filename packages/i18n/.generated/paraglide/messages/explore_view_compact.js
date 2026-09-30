/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_View_CompactInputs */

const en_explore_view_compact = /** @type {(inputs: Explore_View_CompactInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compact`)
};

const es_explore_view_compact = /** @type {(inputs: Explore_View_CompactInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compacta`)
};

const de_explore_view_compact = /** @type {(inputs: Explore_View_CompactInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kompakt`)
};

const fr_explore_view_compact = /** @type {(inputs: Explore_View_CompactInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compact`)
};

const it_explore_view_compact = /** @type {(inputs: Explore_View_CompactInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compatta`)
};

const nl_explore_view_compact = /** @type {(inputs: Explore_View_CompactInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compact`)
};

const pl_explore_view_compact = /** @type {(inputs: Explore_View_CompactInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kompaktowy`)
};

const pt_explore_view_compact = /** @type {(inputs: Explore_View_CompactInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compacta`)
};

const ru_explore_view_compact = /** @type {(inputs: Explore_View_CompactInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Компактный`)
};

const sv_explore_view_compact = /** @type {(inputs: Explore_View_CompactInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kompakt`)
};

const tr_explore_view_compact = /** @type {(inputs: Explore_View_CompactInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sıkışık`)
};

const zh_explore_view_compact = /** @type {(inputs: Explore_View_CompactInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`紧凑`)
};

const ja_explore_view_compact = /** @type {(inputs: Explore_View_CompactInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コンパクト`)
};

/**
* | output |
* | --- |
* | "Compact" |
*
* @param {Explore_View_CompactInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_view_compact = /** @type {((inputs?: Explore_View_CompactInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_View_CompactInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_view_compact(inputs)
	if (locale === "de") return de_explore_view_compact(inputs)
	if (locale === "fr") return fr_explore_view_compact(inputs)
	if (locale === "it") return it_explore_view_compact(inputs)
	if (locale === "nl") return nl_explore_view_compact(inputs)
	if (locale === "pl") return pl_explore_view_compact(inputs)
	if (locale === "pt") return pt_explore_view_compact(inputs)
	if (locale === "ru") return ru_explore_view_compact(inputs)
	if (locale === "sv") return sv_explore_view_compact(inputs)
	if (locale === "tr") return tr_explore_view_compact(inputs)
	if (locale === "zh") return zh_explore_view_compact(inputs)
	if (locale === "ja") return ja_explore_view_compact(inputs)
	return en_explore_view_compact(inputs)
});
