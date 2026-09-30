/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_Filter_My_ModsInputs */

const en_signals_filter_my_mods = /** @type {(inputs: Signals_Filter_My_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`My mods`)
};

const es_signals_filter_my_mods = /** @type {(inputs: Signals_Filter_My_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mis mods`)
};

const de_signals_filter_my_mods = /** @type {(inputs: Signals_Filter_My_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meine Mods`)
};

const fr_signals_filter_my_mods = /** @type {(inputs: Signals_Filter_My_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mes mods`)
};

const it_signals_filter_my_mods = /** @type {(inputs: Signals_Filter_My_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le mie mod`)
};

const nl_signals_filter_my_mods = /** @type {(inputs: Signals_Filter_My_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mijn mods`)
};

const pl_signals_filter_my_mods = /** @type {(inputs: Signals_Filter_My_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moje mody`)
};

const pt_signals_filter_my_mods = /** @type {(inputs: Signals_Filter_My_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meus mods`)
};

const ru_signals_filter_my_mods = /** @type {(inputs: Signals_Filter_My_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Мои моды`)
};

const sv_signals_filter_my_mods = /** @type {(inputs: Signals_Filter_My_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mina moddar`)
};

const tr_signals_filter_my_mods = /** @type {(inputs: Signals_Filter_My_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modlarım`)
};

const zh_signals_filter_my_mods = /** @type {(inputs: Signals_Filter_My_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`我的模组`)
};

const ja_signals_filter_my_mods = /** @type {(inputs: Signals_Filter_My_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自分のMOD`)
};

/**
* | output |
* | --- |
* | "My mods" |
*
* @param {Signals_Filter_My_ModsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_filter_my_mods = /** @type {((inputs?: Signals_Filter_My_ModsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Filter_My_ModsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_filter_my_mods(inputs)
	if (locale === "de") return de_signals_filter_my_mods(inputs)
	if (locale === "fr") return fr_signals_filter_my_mods(inputs)
	if (locale === "it") return it_signals_filter_my_mods(inputs)
	if (locale === "nl") return nl_signals_filter_my_mods(inputs)
	if (locale === "pl") return pl_signals_filter_my_mods(inputs)
	if (locale === "pt") return pt_signals_filter_my_mods(inputs)
	if (locale === "ru") return ru_signals_filter_my_mods(inputs)
	if (locale === "sv") return sv_signals_filter_my_mods(inputs)
	if (locale === "tr") return tr_signals_filter_my_mods(inputs)
	if (locale === "zh") return zh_signals_filter_my_mods(inputs)
	if (locale === "ja") return ja_signals_filter_my_mods(inputs)
	return en_signals_filter_my_mods(inputs)
});
