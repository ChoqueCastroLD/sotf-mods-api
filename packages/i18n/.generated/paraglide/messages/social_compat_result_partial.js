/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Compat_Result_PartialInputs */

const en_social_compat_result_partial = /** @type {(inputs: Social_Compat_Result_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Partly`)
};

const es_social_compat_result_partial = /** @type {(inputs: Social_Compat_Result_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A medias`)
};

const de_social_compat_result_partial = /** @type {(inputs: Social_Compat_Result_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Teilweise`)
};

const fr_social_compat_result_partial = /** @type {(inputs: Social_Compat_Result_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En partie`)
};

const it_social_compat_result_partial = /** @type {(inputs: Social_Compat_Result_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In parte`)
};

const nl_social_compat_result_partial = /** @type {(inputs: Social_Compat_Result_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gedeeltelijk`)
};

const pl_social_compat_result_partial = /** @type {(inputs: Social_Compat_Result_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Częściowo`)
};

const pt_social_compat_result_partial = /** @type {(inputs: Social_Compat_Result_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Em parte`)
};

const ru_social_compat_result_partial = /** @type {(inputs: Social_Compat_Result_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Частично`)
};

const sv_social_compat_result_partial = /** @type {(inputs: Social_Compat_Result_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delvis`)
};

const tr_social_compat_result_partial = /** @type {(inputs: Social_Compat_Result_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kısmen`)
};

const zh_social_compat_result_partial = /** @type {(inputs: Social_Compat_Result_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`部分可用`)
};

const ja_social_compat_result_partial = /** @type {(inputs: Social_Compat_Result_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`一部動く`)
};

/**
* | output |
* | --- |
* | "Partly" |
*
* @param {Social_Compat_Result_PartialInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_compat_result_partial = /** @type {((inputs?: Social_Compat_Result_PartialInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Compat_Result_PartialInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_compat_result_partial(inputs)
	if (locale === "de") return de_social_compat_result_partial(inputs)
	if (locale === "fr") return fr_social_compat_result_partial(inputs)
	if (locale === "it") return it_social_compat_result_partial(inputs)
	if (locale === "nl") return nl_social_compat_result_partial(inputs)
	if (locale === "pl") return pl_social_compat_result_partial(inputs)
	if (locale === "pt") return pt_social_compat_result_partial(inputs)
	if (locale === "ru") return ru_social_compat_result_partial(inputs)
	if (locale === "sv") return sv_social_compat_result_partial(inputs)
	if (locale === "tr") return tr_social_compat_result_partial(inputs)
	if (locale === "zh") return zh_social_compat_result_partial(inputs)
	if (locale === "ja") return ja_social_compat_result_partial(inputs)
	return en_social_compat_result_partial(inputs)
});
