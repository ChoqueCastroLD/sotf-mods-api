/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Action_ContinueInputs */

const en_social_action_continue = /** @type {(inputs: Social_Action_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Continue`)
};

const es_social_action_continue = /** @type {(inputs: Social_Action_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Continuar`)
};

const de_social_action_continue = /** @type {(inputs: Social_Action_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Weiter`)
};

const fr_social_action_continue = /** @type {(inputs: Social_Action_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Continuer`)
};

const it_social_action_continue = /** @type {(inputs: Social_Action_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Continua`)
};

const nl_social_action_continue = /** @type {(inputs: Social_Action_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Doorgaan`)
};

const pl_social_action_continue = /** @type {(inputs: Social_Action_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dalej`)
};

const pt_social_action_continue = /** @type {(inputs: Social_Action_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Continuar`)
};

const ru_social_action_continue = /** @type {(inputs: Social_Action_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Продолжить`)
};

const sv_social_action_continue = /** @type {(inputs: Social_Action_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fortsätt`)
};

const tr_social_action_continue = /** @type {(inputs: Social_Action_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Devam et`)
};

const zh_social_action_continue = /** @type {(inputs: Social_Action_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`继续`)
};

const ja_social_action_continue = /** @type {(inputs: Social_Action_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`続ける`)
};

/**
* | output |
* | --- |
* | "Continue" |
*
* @param {Social_Action_ContinueInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_action_continue = /** @type {((inputs?: Social_Action_ContinueInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Action_ContinueInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_action_continue(inputs)
	if (locale === "de") return de_social_action_continue(inputs)
	if (locale === "fr") return fr_social_action_continue(inputs)
	if (locale === "it") return it_social_action_continue(inputs)
	if (locale === "nl") return nl_social_action_continue(inputs)
	if (locale === "pl") return pl_social_action_continue(inputs)
	if (locale === "pt") return pt_social_action_continue(inputs)
	if (locale === "ru") return ru_social_action_continue(inputs)
	if (locale === "sv") return sv_social_action_continue(inputs)
	if (locale === "tr") return tr_social_action_continue(inputs)
	if (locale === "zh") return zh_social_action_continue(inputs)
	if (locale === "ja") return ja_social_action_continue(inputs)
	return en_social_action_continue(inputs)
});
