/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Action_ContinueInputs */

const en_common_action_continue = /** @type {(inputs: Common_Action_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Continue`)
};

const es_common_action_continue = /** @type {(inputs: Common_Action_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Continuar`)
};

const de_common_action_continue = /** @type {(inputs: Common_Action_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Weiter`)
};

const fr_common_action_continue = /** @type {(inputs: Common_Action_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Continuer`)
};

const it_common_action_continue = /** @type {(inputs: Common_Action_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Continua`)
};

const nl_common_action_continue = /** @type {(inputs: Common_Action_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Doorgaan`)
};

const pl_common_action_continue = /** @type {(inputs: Common_Action_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dalej`)
};

const pt_common_action_continue = /** @type {(inputs: Common_Action_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Continuar`)
};

const ru_common_action_continue = /** @type {(inputs: Common_Action_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Продолжить`)
};

const sv_common_action_continue = /** @type {(inputs: Common_Action_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fortsätt`)
};

const tr_common_action_continue = /** @type {(inputs: Common_Action_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Devam et`)
};

const zh_common_action_continue = /** @type {(inputs: Common_Action_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`继续`)
};

const ja_common_action_continue = /** @type {(inputs: Common_Action_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`続ける`)
};

/**
* | output |
* | --- |
* | "Continue" |
*
* @param {Common_Action_ContinueInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_action_continue = /** @type {((inputs?: Common_Action_ContinueInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Action_ContinueInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_action_continue(inputs)
	if (locale === "de") return de_common_action_continue(inputs)
	if (locale === "fr") return fr_common_action_continue(inputs)
	if (locale === "it") return it_common_action_continue(inputs)
	if (locale === "nl") return nl_common_action_continue(inputs)
	if (locale === "pl") return pl_common_action_continue(inputs)
	if (locale === "pt") return pt_common_action_continue(inputs)
	if (locale === "ru") return ru_common_action_continue(inputs)
	if (locale === "sv") return sv_common_action_continue(inputs)
	if (locale === "tr") return tr_common_action_continue(inputs)
	if (locale === "zh") return zh_common_action_continue(inputs)
	if (locale === "ja") return ja_common_action_continue(inputs)
	return en_common_action_continue(inputs)
});
