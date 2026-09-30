/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Act_CompareInputs */

const en_cmdk_act_compare = /** @type {(inputs: Cmdk_Act_CompareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compare`)
};

const es_cmdk_act_compare = /** @type {(inputs: Cmdk_Act_CompareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comparar`)
};

const de_cmdk_act_compare = /** @type {(inputs: Cmdk_Act_CompareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vergleichen`)
};

const fr_cmdk_act_compare = /** @type {(inputs: Cmdk_Act_CompareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comparer`)
};

const it_cmdk_act_compare = /** @type {(inputs: Cmdk_Act_CompareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confronta`)
};

const nl_cmdk_act_compare = /** @type {(inputs: Cmdk_Act_CompareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vergelijken`)
};

const pl_cmdk_act_compare = /** @type {(inputs: Cmdk_Act_CompareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Porównaj`)
};

const pt_cmdk_act_compare = /** @type {(inputs: Cmdk_Act_CompareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comparar`)
};

const ru_cmdk_act_compare = /** @type {(inputs: Cmdk_Act_CompareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сравнить`)
};

const sv_cmdk_act_compare = /** @type {(inputs: Cmdk_Act_CompareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jämför`)
};

const tr_cmdk_act_compare = /** @type {(inputs: Cmdk_Act_CompareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Karşılaştır`)
};

const zh_cmdk_act_compare = /** @type {(inputs: Cmdk_Act_CompareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`比较`)
};

const ja_cmdk_act_compare = /** @type {(inputs: Cmdk_Act_CompareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`比較`)
};

/**
* | output |
* | --- |
* | "Compare" |
*
* @param {Cmdk_Act_CompareInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_act_compare = /** @type {((inputs?: Cmdk_Act_CompareInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Act_CompareInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_act_compare(inputs)
	if (locale === "de") return de_cmdk_act_compare(inputs)
	if (locale === "fr") return fr_cmdk_act_compare(inputs)
	if (locale === "it") return it_cmdk_act_compare(inputs)
	if (locale === "nl") return nl_cmdk_act_compare(inputs)
	if (locale === "pl") return pl_cmdk_act_compare(inputs)
	if (locale === "pt") return pt_cmdk_act_compare(inputs)
	if (locale === "ru") return ru_cmdk_act_compare(inputs)
	if (locale === "sv") return sv_cmdk_act_compare(inputs)
	if (locale === "tr") return tr_cmdk_act_compare(inputs)
	if (locale === "zh") return zh_cmdk_act_compare(inputs)
	if (locale === "ja") return ja_cmdk_act_compare(inputs)
	return en_cmdk_act_compare(inputs)
});
