/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_Badge_Name_TranslatorInputs */

const en_signals_badge_name_translator = /** @type {(inputs: Signals_Badge_Name_TranslatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Translator`)
};

const es_signals_badge_name_translator = /** @type {(inputs: Signals_Badge_Name_TranslatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Traductor`)
};

const de_signals_badge_name_translator = /** @type {(inputs: Signals_Badge_Name_TranslatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Übersetzer`)
};

const fr_signals_badge_name_translator = /** @type {(inputs: Signals_Badge_Name_TranslatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Traducteur`)
};

const it_signals_badge_name_translator = /** @type {(inputs: Signals_Badge_Name_TranslatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Traduttore`)
};

const nl_signals_badge_name_translator = /** @type {(inputs: Signals_Badge_Name_TranslatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vertaler`)
};

const pl_signals_badge_name_translator = /** @type {(inputs: Signals_Badge_Name_TranslatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tłumacz`)
};

const pt_signals_badge_name_translator = /** @type {(inputs: Signals_Badge_Name_TranslatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tradutor`)
};

const ru_signals_badge_name_translator = /** @type {(inputs: Signals_Badge_Name_TranslatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Переводчик`)
};

const sv_signals_badge_name_translator = /** @type {(inputs: Signals_Badge_Name_TranslatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Översättare`)
};

const tr_signals_badge_name_translator = /** @type {(inputs: Signals_Badge_Name_TranslatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çevirmen`)
};

const zh_signals_badge_name_translator = /** @type {(inputs: Signals_Badge_Name_TranslatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`译者`)
};

const ja_signals_badge_name_translator = /** @type {(inputs: Signals_Badge_Name_TranslatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`翻訳者`)
};

/**
* | output |
* | --- |
* | "Translator" |
*
* @param {Signals_Badge_Name_TranslatorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_badge_name_translator = /** @type {((inputs?: Signals_Badge_Name_TranslatorInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Badge_Name_TranslatorInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_badge_name_translator(inputs)
	if (locale === "de") return de_signals_badge_name_translator(inputs)
	if (locale === "fr") return fr_signals_badge_name_translator(inputs)
	if (locale === "it") return it_signals_badge_name_translator(inputs)
	if (locale === "nl") return nl_signals_badge_name_translator(inputs)
	if (locale === "pl") return pl_signals_badge_name_translator(inputs)
	if (locale === "pt") return pt_signals_badge_name_translator(inputs)
	if (locale === "ru") return ru_signals_badge_name_translator(inputs)
	if (locale === "sv") return sv_signals_badge_name_translator(inputs)
	if (locale === "tr") return tr_signals_badge_name_translator(inputs)
	if (locale === "zh") return zh_signals_badge_name_translator(inputs)
	if (locale === "ja") return ja_signals_badge_name_translator(inputs)
	return en_signals_badge_name_translator(inputs)
});
