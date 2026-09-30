/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Rum_Low_SamplesInputs */

const en_admin_rum_low_samples = /** @type {(inputs: Admin_Rum_Low_SamplesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`few`)
};

const es_admin_rum_low_samples = /** @type {(inputs: Admin_Rum_Low_SamplesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`pocas`)
};

const de_admin_rum_low_samples = /** @type {(inputs: Admin_Rum_Low_SamplesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`wenige`)
};

const fr_admin_rum_low_samples = /** @type {(inputs: Admin_Rum_Low_SamplesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`peu`)
};

const it_admin_rum_low_samples = /** @type {(inputs: Admin_Rum_Low_SamplesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`poche`)
};

const nl_admin_rum_low_samples = /** @type {(inputs: Admin_Rum_Low_SamplesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`weinig`)
};

const pl_admin_rum_low_samples = /** @type {(inputs: Admin_Rum_Low_SamplesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`mało`)
};

const pt_admin_rum_low_samples = /** @type {(inputs: Admin_Rum_Low_SamplesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`poucas`)
};

const ru_admin_rum_low_samples = /** @type {(inputs: Admin_Rum_Low_SamplesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`мало`)
};

const sv_admin_rum_low_samples = /** @type {(inputs: Admin_Rum_Low_SamplesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`få`)
};

const tr_admin_rum_low_samples = /** @type {(inputs: Admin_Rum_Low_SamplesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`az`)
};

const zh_admin_rum_low_samples = /** @type {(inputs: Admin_Rum_Low_SamplesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`样本少`)
};

const ja_admin_rum_low_samples = /** @type {(inputs: Admin_Rum_Low_SamplesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`少数`)
};

/**
* | output |
* | --- |
* | "few" |
*
* @param {Admin_Rum_Low_SamplesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_rum_low_samples = /** @type {((inputs?: Admin_Rum_Low_SamplesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Rum_Low_SamplesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_rum_low_samples(inputs)
	if (locale === "de") return de_admin_rum_low_samples(inputs)
	if (locale === "fr") return fr_admin_rum_low_samples(inputs)
	if (locale === "it") return it_admin_rum_low_samples(inputs)
	if (locale === "nl") return nl_admin_rum_low_samples(inputs)
	if (locale === "pl") return pl_admin_rum_low_samples(inputs)
	if (locale === "pt") return pt_admin_rum_low_samples(inputs)
	if (locale === "ru") return ru_admin_rum_low_samples(inputs)
	if (locale === "sv") return sv_admin_rum_low_samples(inputs)
	if (locale === "tr") return tr_admin_rum_low_samples(inputs)
	if (locale === "zh") return zh_admin_rum_low_samples(inputs)
	if (locale === "ja") return ja_admin_rum_low_samples(inputs)
	return en_admin_rum_low_samples(inputs)
});
