/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Scout_Error_RateInputs */

const en_cmdk_scout_error_rate = /** @type {(inputs: Cmdk_Scout_Error_RateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Too many questions.`)
};

const es_cmdk_scout_error_rate = /** @type {(inputs: Cmdk_Scout_Error_RateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Demasiadas preguntas.`)
};

const de_cmdk_scout_error_rate = /** @type {(inputs: Cmdk_Scout_Error_RateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zu viele Fragen.`)
};

const fr_cmdk_scout_error_rate = /** @type {(inputs: Cmdk_Scout_Error_RateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trop de questions.`)
};

const it_cmdk_scout_error_rate = /** @type {(inputs: Cmdk_Scout_Error_RateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Troppe domande.`)
};

const nl_cmdk_scout_error_rate = /** @type {(inputs: Cmdk_Scout_Error_RateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Te veel vragen.`)
};

const pl_cmdk_scout_error_rate = /** @type {(inputs: Cmdk_Scout_Error_RateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zbyt wiele pytań.`)
};

const pt_cmdk_scout_error_rate = /** @type {(inputs: Cmdk_Scout_Error_RateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Demasiadas perguntas.`)
};

const ru_cmdk_scout_error_rate = /** @type {(inputs: Cmdk_Scout_Error_RateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Слишком много вопросов.`)
};

const sv_cmdk_scout_error_rate = /** @type {(inputs: Cmdk_Scout_Error_RateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`För många frågor.`)
};

const tr_cmdk_scout_error_rate = /** @type {(inputs: Cmdk_Scout_Error_RateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çok fazla soru.`)
};

const zh_cmdk_scout_error_rate = /** @type {(inputs: Cmdk_Scout_Error_RateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`提问过多。`)
};

const ja_cmdk_scout_error_rate = /** @type {(inputs: Cmdk_Scout_Error_RateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`質問が多すぎます。`)
};

/**
* | output |
* | --- |
* | "Too many questions." |
*
* @param {Cmdk_Scout_Error_RateInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_scout_error_rate = /** @type {((inputs?: Cmdk_Scout_Error_RateInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Scout_Error_RateInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_scout_error_rate(inputs)
	if (locale === "de") return de_cmdk_scout_error_rate(inputs)
	if (locale === "fr") return fr_cmdk_scout_error_rate(inputs)
	if (locale === "it") return it_cmdk_scout_error_rate(inputs)
	if (locale === "nl") return nl_cmdk_scout_error_rate(inputs)
	if (locale === "pl") return pl_cmdk_scout_error_rate(inputs)
	if (locale === "pt") return pt_cmdk_scout_error_rate(inputs)
	if (locale === "ru") return ru_cmdk_scout_error_rate(inputs)
	if (locale === "sv") return sv_cmdk_scout_error_rate(inputs)
	if (locale === "tr") return tr_cmdk_scout_error_rate(inputs)
	if (locale === "zh") return zh_cmdk_scout_error_rate(inputs)
	if (locale === "ja") return ja_cmdk_scout_error_rate(inputs)
	return en_cmdk_scout_error_rate(inputs)
});
