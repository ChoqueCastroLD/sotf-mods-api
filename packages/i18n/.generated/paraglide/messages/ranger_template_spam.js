/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Template_SpamInputs */

const en_ranger_template_spam = /** @type {(inputs: Ranger_Template_SpamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spam or advertising.`)
};

const es_ranger_template_spam = /** @type {(inputs: Ranger_Template_SpamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spam o publicidad.`)
};

const de_ranger_template_spam = /** @type {(inputs: Ranger_Template_SpamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spam oder Werbung.`)
};

const fr_ranger_template_spam = /** @type {(inputs: Ranger_Template_SpamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spam ou publicité.`)
};

const it_ranger_template_spam = /** @type {(inputs: Ranger_Template_SpamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spam o pubblicità.`)
};

const nl_ranger_template_spam = /** @type {(inputs: Ranger_Template_SpamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spam of reclame.`)
};

const pl_ranger_template_spam = /** @type {(inputs: Ranger_Template_SpamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spam lub reklama.`)
};

const pt_ranger_template_spam = /** @type {(inputs: Ranger_Template_SpamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spam ou publicidade.`)
};

const ru_ranger_template_spam = /** @type {(inputs: Ranger_Template_SpamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Спам или реклама.`)
};

const sv_ranger_template_spam = /** @type {(inputs: Ranger_Template_SpamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spam eller reklam.`)
};

const tr_ranger_template_spam = /** @type {(inputs: Ranger_Template_SpamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spam veya reklam.`)
};

const zh_ranger_template_spam = /** @type {(inputs: Ranger_Template_SpamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`垃圾信息或广告。`)
};

const ja_ranger_template_spam = /** @type {(inputs: Ranger_Template_SpamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`スパムまたは広告です。`)
};

/**
* | output |
* | --- |
* | "Spam or advertising." |
*
* @param {Ranger_Template_SpamInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_template_spam = /** @type {((inputs?: Ranger_Template_SpamInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Template_SpamInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_template_spam(inputs)
	if (locale === "de") return de_ranger_template_spam(inputs)
	if (locale === "fr") return fr_ranger_template_spam(inputs)
	if (locale === "it") return it_ranger_template_spam(inputs)
	if (locale === "nl") return nl_ranger_template_spam(inputs)
	if (locale === "pl") return pl_ranger_template_spam(inputs)
	if (locale === "pt") return pt_ranger_template_spam(inputs)
	if (locale === "ru") return ru_ranger_template_spam(inputs)
	if (locale === "sv") return sv_ranger_template_spam(inputs)
	if (locale === "tr") return tr_ranger_template_spam(inputs)
	if (locale === "zh") return zh_ranger_template_spam(inputs)
	if (locale === "ja") return ja_ranger_template_spam(inputs)
	return en_ranger_template_spam(inputs)
});
