/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Action_DismissInputs */

const en_common_action_dismiss = /** @type {(inputs: Common_Action_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dismiss`)
};

const es_common_action_dismiss = /** @type {(inputs: Common_Action_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descartar`)
};

const de_common_action_dismiss = /** @type {(inputs: Common_Action_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ausblenden`)
};

const fr_common_action_dismiss = /** @type {(inputs: Common_Action_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Masquer`)
};

const it_common_action_dismiss = /** @type {(inputs: Common_Action_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ignora`)
};

const nl_common_action_dismiss = /** @type {(inputs: Common_Action_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sluiten`)
};

const pl_common_action_dismiss = /** @type {(inputs: Common_Action_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odrzuć`)
};

const pt_common_action_dismiss = /** @type {(inputs: Common_Action_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dispensar`)
};

const ru_common_action_dismiss = /** @type {(inputs: Common_Action_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скрыть`)
};

const sv_common_action_dismiss = /** @type {(inputs: Common_Action_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stäng`)
};

const tr_common_action_dismiss = /** @type {(inputs: Common_Action_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kapat`)
};

const zh_common_action_dismiss = /** @type {(inputs: Common_Action_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`忽略`)
};

const ja_common_action_dismiss = /** @type {(inputs: Common_Action_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`非表示`)
};

/**
* | output |
* | --- |
* | "Dismiss" |
*
* @param {Common_Action_DismissInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_action_dismiss = /** @type {((inputs?: Common_Action_DismissInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Action_DismissInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_action_dismiss(inputs)
	if (locale === "de") return de_common_action_dismiss(inputs)
	if (locale === "fr") return fr_common_action_dismiss(inputs)
	if (locale === "it") return it_common_action_dismiss(inputs)
	if (locale === "nl") return nl_common_action_dismiss(inputs)
	if (locale === "pl") return pl_common_action_dismiss(inputs)
	if (locale === "pt") return pt_common_action_dismiss(inputs)
	if (locale === "ru") return ru_common_action_dismiss(inputs)
	if (locale === "sv") return sv_common_action_dismiss(inputs)
	if (locale === "tr") return tr_common_action_dismiss(inputs)
	if (locale === "zh") return zh_common_action_dismiss(inputs)
	if (locale === "ja") return ja_common_action_dismiss(inputs)
	return en_common_action_dismiss(inputs)
});
