/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Action_RetryInputs */

const en_common_action_retry = /** @type {(inputs: Common_Action_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Try again`)
};

const es_common_action_retry = /** @type {(inputs: Common_Action_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reintentar`)
};

const de_common_action_retry = /** @type {(inputs: Common_Action_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erneut versuchen`)
};

const fr_common_action_retry = /** @type {(inputs: Common_Action_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Réessayer`)
};

const it_common_action_retry = /** @type {(inputs: Common_Action_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Riprova`)
};

const nl_common_action_retry = /** @type {(inputs: Common_Action_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opnieuw proberen`)
};

const pl_common_action_retry = /** @type {(inputs: Common_Action_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spróbuj ponownie`)
};

const pt_common_action_retry = /** @type {(inputs: Common_Action_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tentar de novo`)
};

const ru_common_action_retry = /** @type {(inputs: Common_Action_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Повторить`)
};

const sv_common_action_retry = /** @type {(inputs: Common_Action_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Försök igen`)
};

const tr_common_action_retry = /** @type {(inputs: Common_Action_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tekrar dene`)
};

const zh_common_action_retry = /** @type {(inputs: Common_Action_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重试`)
};

const ja_common_action_retry = /** @type {(inputs: Common_Action_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`再試行`)
};

/**
* | output |
* | --- |
* | "Try again" |
*
* @param {Common_Action_RetryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_action_retry = /** @type {((inputs?: Common_Action_RetryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Action_RetryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_action_retry(inputs)
	if (locale === "de") return de_common_action_retry(inputs)
	if (locale === "fr") return fr_common_action_retry(inputs)
	if (locale === "it") return it_common_action_retry(inputs)
	if (locale === "nl") return nl_common_action_retry(inputs)
	if (locale === "pl") return pl_common_action_retry(inputs)
	if (locale === "pt") return pt_common_action_retry(inputs)
	if (locale === "ru") return ru_common_action_retry(inputs)
	if (locale === "sv") return sv_common_action_retry(inputs)
	if (locale === "tr") return tr_common_action_retry(inputs)
	if (locale === "zh") return zh_common_action_retry(inputs)
	if (locale === "ja") return ja_common_action_retry(inputs)
	return en_common_action_retry(inputs)
});
