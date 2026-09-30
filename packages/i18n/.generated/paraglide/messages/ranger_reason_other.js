/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Reason_OtherInputs */

const en_ranger_reason_other = /** @type {(inputs: Ranger_Reason_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Other`)
};

const es_ranger_reason_other = /** @type {(inputs: Ranger_Reason_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otro`)
};

const de_ranger_reason_other = /** @type {(inputs: Ranger_Reason_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sonstiges`)
};

const fr_ranger_reason_other = /** @type {(inputs: Ranger_Reason_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autre`)
};

const it_ranger_reason_other = /** @type {(inputs: Ranger_Reason_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Altro`)
};

const nl_ranger_reason_other = /** @type {(inputs: Ranger_Reason_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anders`)
};

const pl_ranger_reason_other = /** @type {(inputs: Ranger_Reason_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inne`)
};

const pt_ranger_reason_other = /** @type {(inputs: Ranger_Reason_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Outro`)
};

const ru_ranger_reason_other = /** @type {(inputs: Ranger_Reason_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Другое`)
};

const sv_ranger_reason_other = /** @type {(inputs: Ranger_Reason_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annat`)
};

const tr_ranger_reason_other = /** @type {(inputs: Ranger_Reason_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diğer`)
};

const zh_ranger_reason_other = /** @type {(inputs: Ranger_Reason_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`其他`)
};

const ja_ranger_reason_other = /** @type {(inputs: Ranger_Reason_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`その他`)
};

/**
* | output |
* | --- |
* | "Other" |
*
* @param {Ranger_Reason_OtherInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_reason_other = /** @type {((inputs?: Ranger_Reason_OtherInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Reason_OtherInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_reason_other(inputs)
	if (locale === "de") return de_ranger_reason_other(inputs)
	if (locale === "fr") return fr_ranger_reason_other(inputs)
	if (locale === "it") return it_ranger_reason_other(inputs)
	if (locale === "nl") return nl_ranger_reason_other(inputs)
	if (locale === "pl") return pl_ranger_reason_other(inputs)
	if (locale === "pt") return pt_ranger_reason_other(inputs)
	if (locale === "ru") return ru_ranger_reason_other(inputs)
	if (locale === "sv") return sv_ranger_reason_other(inputs)
	if (locale === "tr") return tr_ranger_reason_other(inputs)
	if (locale === "zh") return zh_ranger_reason_other(inputs)
	if (locale === "ja") return ja_ranger_reason_other(inputs)
	return en_ranger_reason_other(inputs)
});
