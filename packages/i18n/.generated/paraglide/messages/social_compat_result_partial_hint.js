/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Compat_Result_Partial_HintInputs */

const en_social_compat_result_partial_hint = /** @type {(inputs: Social_Compat_Result_Partial_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`It loads, but something is broken.`)
};

const es_social_compat_result_partial_hint = /** @type {(inputs: Social_Compat_Result_Partial_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Carga, pero algo falla.`)
};

const de_social_compat_result_partial_hint = /** @type {(inputs: Social_Compat_Result_Partial_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Es lädt, aber etwas ist kaputt.`)
};

const fr_social_compat_result_partial_hint = /** @type {(inputs: Social_Compat_Result_Partial_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il se charge, mais quelque chose ne marche pas.`)
};

const it_social_compat_result_partial_hint = /** @type {(inputs: Social_Compat_Result_Partial_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Si carica, ma qualcosa non va.`)
};

const nl_social_compat_result_partial_hint = /** @type {(inputs: Social_Compat_Result_Partial_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Het laadt, maar er is iets stuk.`)
};

const pl_social_compat_result_partial_hint = /** @type {(inputs: Social_Compat_Result_Partial_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ładuje się, ale coś nie działa.`)
};

const pt_social_compat_result_partial_hint = /** @type {(inputs: Social_Compat_Result_Partial_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Carrega, mas algo quebrou.`)
};

const ru_social_compat_result_partial_hint = /** @type {(inputs: Social_Compat_Result_Partial_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загружается, но что-то сломано.`)
};

const sv_social_compat_result_partial_hint = /** @type {(inputs: Social_Compat_Result_Partial_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den laddas, men något är trasigt.`)
};

const tr_social_compat_result_partial_hint = /** @type {(inputs: Social_Compat_Result_Partial_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yükleniyor ama bir şey bozuk.`)
};

const zh_social_compat_result_partial_hint = /** @type {(inputs: Social_Compat_Result_Partial_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`能加载，但有问题。`)
};

const ja_social_compat_result_partial_hint = /** @type {(inputs: Social_Compat_Result_Partial_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`読み込めるが何かが壊れている。`)
};

/**
* | output |
* | --- |
* | "It loads, but something is broken." |
*
* @param {Social_Compat_Result_Partial_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_compat_result_partial_hint = /** @type {((inputs?: Social_Compat_Result_Partial_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Compat_Result_Partial_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_compat_result_partial_hint(inputs)
	if (locale === "de") return de_social_compat_result_partial_hint(inputs)
	if (locale === "fr") return fr_social_compat_result_partial_hint(inputs)
	if (locale === "it") return it_social_compat_result_partial_hint(inputs)
	if (locale === "nl") return nl_social_compat_result_partial_hint(inputs)
	if (locale === "pl") return pl_social_compat_result_partial_hint(inputs)
	if (locale === "pt") return pt_social_compat_result_partial_hint(inputs)
	if (locale === "ru") return ru_social_compat_result_partial_hint(inputs)
	if (locale === "sv") return sv_social_compat_result_partial_hint(inputs)
	if (locale === "tr") return tr_social_compat_result_partial_hint(inputs)
	if (locale === "zh") return zh_social_compat_result_partial_hint(inputs)
	if (locale === "ja") return ja_social_compat_result_partial_hint(inputs)
	return en_social_compat_result_partial_hint(inputs)
});
