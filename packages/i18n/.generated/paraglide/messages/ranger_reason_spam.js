/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Reason_SpamInputs */

const en_ranger_reason_spam = /** @type {(inputs: Ranger_Reason_SpamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spam`)
};

const es_ranger_reason_spam = /** @type {(inputs: Ranger_Reason_SpamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spam`)
};

const de_ranger_reason_spam = /** @type {(inputs: Ranger_Reason_SpamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spam`)
};

const fr_ranger_reason_spam = /** @type {(inputs: Ranger_Reason_SpamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spam`)
};

const it_ranger_reason_spam = /** @type {(inputs: Ranger_Reason_SpamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spam`)
};

const nl_ranger_reason_spam = /** @type {(inputs: Ranger_Reason_SpamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spam`)
};

const pl_ranger_reason_spam = /** @type {(inputs: Ranger_Reason_SpamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spam`)
};

const pt_ranger_reason_spam = /** @type {(inputs: Ranger_Reason_SpamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spam`)
};

const ru_ranger_reason_spam = /** @type {(inputs: Ranger_Reason_SpamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Спам`)
};

const sv_ranger_reason_spam = /** @type {(inputs: Ranger_Reason_SpamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spam`)
};

const tr_ranger_reason_spam = /** @type {(inputs: Ranger_Reason_SpamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spam`)
};

const zh_ranger_reason_spam = /** @type {(inputs: Ranger_Reason_SpamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`垃圾信息`)
};

const ja_ranger_reason_spam = /** @type {(inputs: Ranger_Reason_SpamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`スパム`)
};

/**
* | output |
* | --- |
* | "Spam" |
*
* @param {Ranger_Reason_SpamInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_reason_spam = /** @type {((inputs?: Ranger_Reason_SpamInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Reason_SpamInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_reason_spam(inputs)
	if (locale === "de") return de_ranger_reason_spam(inputs)
	if (locale === "fr") return fr_ranger_reason_spam(inputs)
	if (locale === "it") return it_ranger_reason_spam(inputs)
	if (locale === "nl") return nl_ranger_reason_spam(inputs)
	if (locale === "pl") return pl_ranger_reason_spam(inputs)
	if (locale === "pt") return pt_ranger_reason_spam(inputs)
	if (locale === "ru") return ru_ranger_reason_spam(inputs)
	if (locale === "sv") return sv_ranger_reason_spam(inputs)
	if (locale === "tr") return tr_ranger_reason_spam(inputs)
	if (locale === "zh") return zh_ranger_reason_spam(inputs)
	if (locale === "ja") return ja_ranger_reason_spam(inputs)
	return en_ranger_reason_spam(inputs)
});
