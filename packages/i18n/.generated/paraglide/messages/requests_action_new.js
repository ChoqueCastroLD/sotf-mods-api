/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_Action_NewInputs */

const en_requests_action_new = /** @type {(inputs: Requests_Action_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ask for a mod`)
};

const es_requests_action_new = /** @type {(inputs: Requests_Action_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pedir un mod`)
};

const de_requests_action_new = /** @type {(inputs: Requests_Action_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod wünschen`)
};

const fr_requests_action_new = /** @type {(inputs: Requests_Action_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Demander un mod`)
};

const it_requests_action_new = /** @type {(inputs: Requests_Action_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chiedi un mod`)
};

const nl_requests_action_new = /** @type {(inputs: Requests_Action_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod aanvragen`)
};

const pl_requests_action_new = /** @type {(inputs: Requests_Action_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Poproś o moda`)
};

const pt_requests_action_new = /** @type {(inputs: Requests_Action_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pedir um mod`)
};

const ru_requests_action_new = /** @type {(inputs: Requests_Action_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Запросить мод`)
};

const sv_requests_action_new = /** @type {(inputs: Requests_Action_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Önska en mod`)
};

const tr_requests_action_new = /** @type {(inputs: Requests_Action_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod iste`)
};

const zh_requests_action_new = /** @type {(inputs: Requests_Action_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请求模组`)
};

const ja_requests_action_new = /** @type {(inputs: Requests_Action_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD をリクエスト`)
};

/**
* | output |
* | --- |
* | "Ask for a mod" |
*
* @param {Requests_Action_NewInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_action_new = /** @type {((inputs?: Requests_Action_NewInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_Action_NewInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_action_new(inputs)
	if (locale === "de") return de_requests_action_new(inputs)
	if (locale === "fr") return fr_requests_action_new(inputs)
	if (locale === "it") return it_requests_action_new(inputs)
	if (locale === "nl") return nl_requests_action_new(inputs)
	if (locale === "pl") return pl_requests_action_new(inputs)
	if (locale === "pt") return pt_requests_action_new(inputs)
	if (locale === "ru") return ru_requests_action_new(inputs)
	if (locale === "sv") return sv_requests_action_new(inputs)
	if (locale === "tr") return tr_requests_action_new(inputs)
	if (locale === "zh") return zh_requests_action_new(inputs)
	if (locale === "ja") return ja_requests_action_new(inputs)
	return en_requests_action_new(inputs)
});
