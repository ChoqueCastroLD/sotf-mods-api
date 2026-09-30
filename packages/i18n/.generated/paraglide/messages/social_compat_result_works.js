/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Compat_Result_WorksInputs */

const en_social_compat_result_works = /** @type {(inputs: Social_Compat_Result_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Works`)
};

const es_social_compat_result_works = /** @type {(inputs: Social_Compat_Result_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Funciona`)
};

const de_social_compat_result_works = /** @type {(inputs: Social_Compat_Result_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Funktioniert`)
};

const fr_social_compat_result_works = /** @type {(inputs: Social_Compat_Result_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fonctionne`)
};

const it_social_compat_result_works = /** @type {(inputs: Social_Compat_Result_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Funziona`)
};

const nl_social_compat_result_works = /** @type {(inputs: Social_Compat_Result_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Werkt`)
};

const pl_social_compat_result_works = /** @type {(inputs: Social_Compat_Result_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Działa`)
};

const pt_social_compat_result_works = /** @type {(inputs: Social_Compat_Result_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Funciona`)
};

const ru_social_compat_result_works = /** @type {(inputs: Social_Compat_Result_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Работает`)
};

const sv_social_compat_result_works = /** @type {(inputs: Social_Compat_Result_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fungerar`)
};

const tr_social_compat_result_works = /** @type {(inputs: Social_Compat_Result_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çalışıyor`)
};

const zh_social_compat_result_works = /** @type {(inputs: Social_Compat_Result_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`可用`)
};

const ja_social_compat_result_works = /** @type {(inputs: Social_Compat_Result_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`動く`)
};

/**
* | output |
* | --- |
* | "Works" |
*
* @param {Social_Compat_Result_WorksInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_compat_result_works = /** @type {((inputs?: Social_Compat_Result_WorksInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Compat_Result_WorksInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_compat_result_works(inputs)
	if (locale === "de") return de_social_compat_result_works(inputs)
	if (locale === "fr") return fr_social_compat_result_works(inputs)
	if (locale === "it") return it_social_compat_result_works(inputs)
	if (locale === "nl") return nl_social_compat_result_works(inputs)
	if (locale === "pl") return pl_social_compat_result_works(inputs)
	if (locale === "pt") return pt_social_compat_result_works(inputs)
	if (locale === "ru") return ru_social_compat_result_works(inputs)
	if (locale === "sv") return sv_social_compat_result_works(inputs)
	if (locale === "tr") return tr_social_compat_result_works(inputs)
	if (locale === "zh") return zh_social_compat_result_works(inputs)
	if (locale === "ja") return ja_social_compat_result_works(inputs)
	return en_social_compat_result_works(inputs)
});
