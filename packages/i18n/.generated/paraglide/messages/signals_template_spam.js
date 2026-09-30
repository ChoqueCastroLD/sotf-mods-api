/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_Template_SpamInputs */

const en_signals_template_spam = /** @type {(inputs: Signals_Template_SpamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spam or advertising.`)
};

const es_signals_template_spam = /** @type {(inputs: Signals_Template_SpamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spam o publicidad.`)
};

const de_signals_template_spam = /** @type {(inputs: Signals_Template_SpamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spam oder Werbung.`)
};

const fr_signals_template_spam = /** @type {(inputs: Signals_Template_SpamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spam ou publicité.`)
};

const it_signals_template_spam = /** @type {(inputs: Signals_Template_SpamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spam o pubblicità.`)
};

const nl_signals_template_spam = /** @type {(inputs: Signals_Template_SpamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spam of reclame.`)
};

const pl_signals_template_spam = /** @type {(inputs: Signals_Template_SpamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spam lub reklama.`)
};

const pt_signals_template_spam = /** @type {(inputs: Signals_Template_SpamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spam ou publicidade.`)
};

const ru_signals_template_spam = /** @type {(inputs: Signals_Template_SpamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Спам или реклама.`)
};

const sv_signals_template_spam = /** @type {(inputs: Signals_Template_SpamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spam eller reklam.`)
};

const tr_signals_template_spam = /** @type {(inputs: Signals_Template_SpamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spam veya reklam.`)
};

const zh_signals_template_spam = /** @type {(inputs: Signals_Template_SpamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`垃圾信息或广告。`)
};

const ja_signals_template_spam = /** @type {(inputs: Signals_Template_SpamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`スパムまたは広告です。`)
};

/**
* | output |
* | --- |
* | "Spam or advertising." |
*
* @param {Signals_Template_SpamInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_template_spam = /** @type {((inputs?: Signals_Template_SpamInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Template_SpamInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_template_spam(inputs)
	if (locale === "de") return de_signals_template_spam(inputs)
	if (locale === "fr") return fr_signals_template_spam(inputs)
	if (locale === "it") return it_signals_template_spam(inputs)
	if (locale === "nl") return nl_signals_template_spam(inputs)
	if (locale === "pl") return pl_signals_template_spam(inputs)
	if (locale === "pt") return pt_signals_template_spam(inputs)
	if (locale === "ru") return ru_signals_template_spam(inputs)
	if (locale === "sv") return sv_signals_template_spam(inputs)
	if (locale === "tr") return tr_signals_template_spam(inputs)
	if (locale === "zh") return zh_signals_template_spam(inputs)
	if (locale === "ja") return ja_signals_template_spam(inputs)
	return en_signals_template_spam(inputs)
});
