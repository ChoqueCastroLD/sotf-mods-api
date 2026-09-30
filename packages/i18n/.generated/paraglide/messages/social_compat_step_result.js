/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Compat_Step_ResultInputs */

const en_social_compat_step_result = /** @type {(inputs: Social_Compat_Step_ResultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Result`)
};

const es_social_compat_step_result = /** @type {(inputs: Social_Compat_Step_ResultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resultado`)
};

const de_social_compat_step_result = /** @type {(inputs: Social_Compat_Step_ResultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ergebnis`)
};

const fr_social_compat_step_result = /** @type {(inputs: Social_Compat_Step_ResultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Résultat`)
};

const it_social_compat_step_result = /** @type {(inputs: Social_Compat_Step_ResultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Risultato`)
};

const nl_social_compat_step_result = /** @type {(inputs: Social_Compat_Step_ResultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resultaat`)
};

const pl_social_compat_step_result = /** @type {(inputs: Social_Compat_Step_ResultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wynik`)
};

const pt_social_compat_step_result = /** @type {(inputs: Social_Compat_Step_ResultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resultado`)
};

const ru_social_compat_step_result = /** @type {(inputs: Social_Compat_Step_ResultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Результат`)
};

const sv_social_compat_step_result = /** @type {(inputs: Social_Compat_Step_ResultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resultat`)
};

const tr_social_compat_step_result = /** @type {(inputs: Social_Compat_Step_ResultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sonuç`)
};

const zh_social_compat_step_result = /** @type {(inputs: Social_Compat_Step_ResultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`结果`)
};

const ja_social_compat_step_result = /** @type {(inputs: Social_Compat_Step_ResultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`結果`)
};

/**
* | output |
* | --- |
* | "Result" |
*
* @param {Social_Compat_Step_ResultInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_compat_step_result = /** @type {((inputs?: Social_Compat_Step_ResultInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Compat_Step_ResultInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_compat_step_result(inputs)
	if (locale === "de") return de_social_compat_step_result(inputs)
	if (locale === "fr") return fr_social_compat_step_result(inputs)
	if (locale === "it") return it_social_compat_step_result(inputs)
	if (locale === "nl") return nl_social_compat_step_result(inputs)
	if (locale === "pl") return pl_social_compat_step_result(inputs)
	if (locale === "pt") return pt_social_compat_step_result(inputs)
	if (locale === "ru") return ru_social_compat_step_result(inputs)
	if (locale === "sv") return sv_social_compat_step_result(inputs)
	if (locale === "tr") return tr_social_compat_step_result(inputs)
	if (locale === "zh") return zh_social_compat_step_result(inputs)
	if (locale === "ja") return ja_social_compat_step_result(inputs)
	return en_social_compat_step_result(inputs)
});
