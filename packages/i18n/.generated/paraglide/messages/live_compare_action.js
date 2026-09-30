/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Live_Compare_ActionInputs */

const en_live_compare_action = /** @type {(inputs: Live_Compare_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compare`)
};

const es_live_compare_action = /** @type {(inputs: Live_Compare_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comparar`)
};

const de_live_compare_action = /** @type {(inputs: Live_Compare_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vergleichen`)
};

const fr_live_compare_action = /** @type {(inputs: Live_Compare_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comparer`)
};

const it_live_compare_action = /** @type {(inputs: Live_Compare_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confronta`)
};

const nl_live_compare_action = /** @type {(inputs: Live_Compare_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vergelijken`)
};

const pl_live_compare_action = /** @type {(inputs: Live_Compare_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Porównaj`)
};

const pt_live_compare_action = /** @type {(inputs: Live_Compare_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comparar`)
};

const ru_live_compare_action = /** @type {(inputs: Live_Compare_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сравнить`)
};

const sv_live_compare_action = /** @type {(inputs: Live_Compare_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jämför`)
};

const tr_live_compare_action = /** @type {(inputs: Live_Compare_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Karşılaştır`)
};

const zh_live_compare_action = /** @type {(inputs: Live_Compare_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`对比`)
};

const ja_live_compare_action = /** @type {(inputs: Live_Compare_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`比較`)
};

/**
* | output |
* | --- |
* | "Compare" |
*
* @param {Live_Compare_ActionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const live_compare_action = /** @type {((inputs?: Live_Compare_ActionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Live_Compare_ActionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_live_compare_action(inputs)
	if (locale === "de") return de_live_compare_action(inputs)
	if (locale === "fr") return fr_live_compare_action(inputs)
	if (locale === "it") return it_live_compare_action(inputs)
	if (locale === "nl") return nl_live_compare_action(inputs)
	if (locale === "pl") return pl_live_compare_action(inputs)
	if (locale === "pt") return pt_live_compare_action(inputs)
	if (locale === "ru") return ru_live_compare_action(inputs)
	if (locale === "sv") return sv_live_compare_action(inputs)
	if (locale === "tr") return tr_live_compare_action(inputs)
	if (locale === "zh") return zh_live_compare_action(inputs)
	if (locale === "ja") return ja_live_compare_action(inputs)
	return en_live_compare_action(inputs)
});
