/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Compat_Result_BrokenInputs */

const en_social_compat_result_broken = /** @type {(inputs: Social_Compat_Result_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Broken`)
};

const es_social_compat_result_broken = /** @type {(inputs: Social_Compat_Result_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Roto`)
};

const de_social_compat_result_broken = /** @type {(inputs: Social_Compat_Result_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kaputt`)
};

const fr_social_compat_result_broken = /** @type {(inputs: Social_Compat_Result_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cassé`)
};

const it_social_compat_result_broken = /** @type {(inputs: Social_Compat_Result_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non funziona`)
};

const nl_social_compat_result_broken = /** @type {(inputs: Social_Compat_Result_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kapot`)
};

const pl_social_compat_result_broken = /** @type {(inputs: Social_Compat_Result_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie działa`)
};

const pt_social_compat_result_broken = /** @type {(inputs: Social_Compat_Result_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quebrado`)
};

const ru_social_compat_result_broken = /** @type {(inputs: Social_Compat_Result_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не работает`)
};

const sv_social_compat_result_broken = /** @type {(inputs: Social_Compat_Result_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trasig`)
};

const tr_social_compat_result_broken = /** @type {(inputs: Social_Compat_Result_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bozuk`)
};

const zh_social_compat_result_broken = /** @type {(inputs: Social_Compat_Result_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不可用`)
};

const ja_social_compat_result_broken = /** @type {(inputs: Social_Compat_Result_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`動かない`)
};

/**
* | output |
* | --- |
* | "Broken" |
*
* @param {Social_Compat_Result_BrokenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_compat_result_broken = /** @type {((inputs?: Social_Compat_Result_BrokenInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Compat_Result_BrokenInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_compat_result_broken(inputs)
	if (locale === "de") return de_social_compat_result_broken(inputs)
	if (locale === "fr") return fr_social_compat_result_broken(inputs)
	if (locale === "it") return it_social_compat_result_broken(inputs)
	if (locale === "nl") return nl_social_compat_result_broken(inputs)
	if (locale === "pl") return pl_social_compat_result_broken(inputs)
	if (locale === "pt") return pt_social_compat_result_broken(inputs)
	if (locale === "ru") return ru_social_compat_result_broken(inputs)
	if (locale === "sv") return sv_social_compat_result_broken(inputs)
	if (locale === "tr") return tr_social_compat_result_broken(inputs)
	if (locale === "zh") return zh_social_compat_result_broken(inputs)
	if (locale === "ja") return ja_social_compat_result_broken(inputs)
	return en_social_compat_result_broken(inputs)
});
