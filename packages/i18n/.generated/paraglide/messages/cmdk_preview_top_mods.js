/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Preview_Top_ModsInputs */

const en_cmdk_preview_top_mods = /** @type {(inputs: Cmdk_Preview_Top_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Top mods`)
};

const es_cmdk_preview_top_mods = /** @type {(inputs: Cmdk_Preview_Top_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods destacados`)
};

const de_cmdk_preview_top_mods = /** @type {(inputs: Cmdk_Preview_Top_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beliebteste Mods`)
};

const fr_cmdk_preview_top_mods = /** @type {(inputs: Cmdk_Preview_Top_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods populaires`)
};

const it_cmdk_preview_top_mods = /** @type {(inputs: Cmdk_Preview_Top_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod principali`)
};

const nl_cmdk_preview_top_mods = /** @type {(inputs: Cmdk_Preview_Top_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Topmods`)
};

const pl_cmdk_preview_top_mods = /** @type {(inputs: Cmdk_Preview_Top_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najpopularniejsze mody`)
};

const pt_cmdk_preview_top_mods = /** @type {(inputs: Cmdk_Preview_Top_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods principais`)
};

const ru_cmdk_preview_top_mods = /** @type {(inputs: Cmdk_Preview_Top_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Популярные моды`)
};

const sv_cmdk_preview_top_mods = /** @type {(inputs: Cmdk_Preview_Top_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toppmods`)
};

const tr_cmdk_preview_top_mods = /** @type {(inputs: Cmdk_Preview_Top_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öne çıkan modlar`)
};

const zh_cmdk_preview_top_mods = /** @type {(inputs: Cmdk_Preview_Top_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`热门模组`)
};

const ja_cmdk_preview_top_mods = /** @type {(inputs: Cmdk_Preview_Top_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`人気の Mod`)
};

/**
* | output |
* | --- |
* | "Top mods" |
*
* @param {Cmdk_Preview_Top_ModsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_preview_top_mods = /** @type {((inputs?: Cmdk_Preview_Top_ModsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Preview_Top_ModsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_preview_top_mods(inputs)
	if (locale === "de") return de_cmdk_preview_top_mods(inputs)
	if (locale === "fr") return fr_cmdk_preview_top_mods(inputs)
	if (locale === "it") return it_cmdk_preview_top_mods(inputs)
	if (locale === "nl") return nl_cmdk_preview_top_mods(inputs)
	if (locale === "pl") return pl_cmdk_preview_top_mods(inputs)
	if (locale === "pt") return pt_cmdk_preview_top_mods(inputs)
	if (locale === "ru") return ru_cmdk_preview_top_mods(inputs)
	if (locale === "sv") return sv_cmdk_preview_top_mods(inputs)
	if (locale === "tr") return tr_cmdk_preview_top_mods(inputs)
	if (locale === "zh") return zh_cmdk_preview_top_mods(inputs)
	if (locale === "ja") return ja_cmdk_preview_top_mods(inputs)
	return en_cmdk_preview_top_mods(inputs)
});
