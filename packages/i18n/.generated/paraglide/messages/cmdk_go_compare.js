/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Go_CompareInputs */

const en_cmdk_go_compare = /** @type {(inputs: Cmdk_Go_CompareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compare mods`)
};

const es_cmdk_go_compare = /** @type {(inputs: Cmdk_Go_CompareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comparar mods`)
};

const de_cmdk_go_compare = /** @type {(inputs: Cmdk_Go_CompareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods vergleichen`)
};

const fr_cmdk_go_compare = /** @type {(inputs: Cmdk_Go_CompareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comparer des mods`)
};

const it_cmdk_go_compare = /** @type {(inputs: Cmdk_Go_CompareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confronta mod`)
};

const nl_cmdk_go_compare = /** @type {(inputs: Cmdk_Go_CompareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods vergelijken`)
};

const pl_cmdk_go_compare = /** @type {(inputs: Cmdk_Go_CompareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Porównaj mody`)
};

const pt_cmdk_go_compare = /** @type {(inputs: Cmdk_Go_CompareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comparar mods`)
};

const ru_cmdk_go_compare = /** @type {(inputs: Cmdk_Go_CompareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сравнить моды`)
};

const sv_cmdk_go_compare = /** @type {(inputs: Cmdk_Go_CompareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jämför mods`)
};

const tr_cmdk_go_compare = /** @type {(inputs: Cmdk_Go_CompareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modları karşılaştır`)
};

const zh_cmdk_go_compare = /** @type {(inputs: Cmdk_Go_CompareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`比较模组`)
};

const ja_cmdk_go_compare = /** @type {(inputs: Cmdk_Go_CompareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod を比較`)
};

/**
* | output |
* | --- |
* | "Compare mods" |
*
* @param {Cmdk_Go_CompareInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_go_compare = /** @type {((inputs?: Cmdk_Go_CompareInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Go_CompareInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_go_compare(inputs)
	if (locale === "de") return de_cmdk_go_compare(inputs)
	if (locale === "fr") return fr_cmdk_go_compare(inputs)
	if (locale === "it") return it_cmdk_go_compare(inputs)
	if (locale === "nl") return nl_cmdk_go_compare(inputs)
	if (locale === "pl") return pl_cmdk_go_compare(inputs)
	if (locale === "pt") return pt_cmdk_go_compare(inputs)
	if (locale === "ru") return ru_cmdk_go_compare(inputs)
	if (locale === "sv") return sv_cmdk_go_compare(inputs)
	if (locale === "tr") return tr_cmdk_go_compare(inputs)
	if (locale === "zh") return zh_cmdk_go_compare(inputs)
	if (locale === "ja") return ja_cmdk_go_compare(inputs)
	return en_cmdk_go_compare(inputs)
});
