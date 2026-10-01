/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Filter_AllInputs */

const en_logs_filter_all = /** @type {(inputs: Logs_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All`)
};

const es_logs_filter_all = /** @type {(inputs: Logs_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todo`)
};

const de_logs_filter_all = /** @type {(inputs: Logs_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle`)
};

const fr_logs_filter_all = /** @type {(inputs: Logs_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tout`)
};

const it_logs_filter_all = /** @type {(inputs: Logs_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tutto`)
};

const nl_logs_filter_all = /** @type {(inputs: Logs_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alles`)
};

const pl_logs_filter_all = /** @type {(inputs: Logs_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wszystko`)
};

const pt_logs_filter_all = /** @type {(inputs: Logs_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tudo`)
};

const ru_logs_filter_all = /** @type {(inputs: Logs_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Все`)
};

const sv_logs_filter_all = /** @type {(inputs: Logs_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alla`)
};

const tr_logs_filter_all = /** @type {(inputs: Logs_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tümü`)
};

const zh_logs_filter_all = /** @type {(inputs: Logs_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`全部`)
};

const ja_logs_filter_all = /** @type {(inputs: Logs_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべて`)
};

/**
* | output |
* | --- |
* | "All" |
*
* @param {Logs_Filter_AllInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_filter_all = /** @type {((inputs?: Logs_Filter_AllInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Filter_AllInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_filter_all(inputs)
	if (locale === "de") return de_logs_filter_all(inputs)
	if (locale === "fr") return fr_logs_filter_all(inputs)
	if (locale === "it") return it_logs_filter_all(inputs)
	if (locale === "nl") return nl_logs_filter_all(inputs)
	if (locale === "pl") return pl_logs_filter_all(inputs)
	if (locale === "pt") return pt_logs_filter_all(inputs)
	if (locale === "ru") return ru_logs_filter_all(inputs)
	if (locale === "sv") return sv_logs_filter_all(inputs)
	if (locale === "tr") return tr_logs_filter_all(inputs)
	if (locale === "zh") return zh_logs_filter_all(inputs)
	if (locale === "ja") return ja_logs_filter_all(inputs)
	return en_logs_filter_all(inputs)
});
