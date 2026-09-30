/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Action_CurrentInputs */

const en_cmdk_action_current = /** @type {(inputs: Cmdk_Action_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Current`)
};

const es_cmdk_action_current = /** @type {(inputs: Cmdk_Action_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actual`)
};

const de_cmdk_action_current = /** @type {(inputs: Cmdk_Action_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktuell`)
};

const fr_cmdk_action_current = /** @type {(inputs: Cmdk_Action_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choix actuel`)
};

const it_cmdk_action_current = /** @type {(inputs: Cmdk_Action_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Attuale`)
};

const nl_cmdk_action_current = /** @type {(inputs: Cmdk_Action_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Huidig`)
};

const pl_cmdk_action_current = /** @type {(inputs: Cmdk_Action_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obecny`)
};

const pt_cmdk_action_current = /** @type {(inputs: Cmdk_Action_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Atual`)
};

const ru_cmdk_action_current = /** @type {(inputs: Cmdk_Action_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выбрано`)
};

const sv_cmdk_action_current = /** @type {(inputs: Cmdk_Action_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuvarande`)
};

const tr_cmdk_action_current = /** @type {(inputs: Cmdk_Action_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geçerli`)
};

const zh_cmdk_action_current = /** @type {(inputs: Cmdk_Action_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`当前`)
};

const ja_cmdk_action_current = /** @type {(inputs: Cmdk_Action_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`現在`)
};

/**
* | output |
* | --- |
* | "Current" |
*
* @param {Cmdk_Action_CurrentInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_action_current = /** @type {((inputs?: Cmdk_Action_CurrentInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Action_CurrentInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_action_current(inputs)
	if (locale === "de") return de_cmdk_action_current(inputs)
	if (locale === "fr") return fr_cmdk_action_current(inputs)
	if (locale === "it") return it_cmdk_action_current(inputs)
	if (locale === "nl") return nl_cmdk_action_current(inputs)
	if (locale === "pl") return pl_cmdk_action_current(inputs)
	if (locale === "pt") return pt_cmdk_action_current(inputs)
	if (locale === "ru") return ru_cmdk_action_current(inputs)
	if (locale === "sv") return sv_cmdk_action_current(inputs)
	if (locale === "tr") return tr_cmdk_action_current(inputs)
	if (locale === "zh") return zh_cmdk_action_current(inputs)
	if (locale === "ja") return ja_cmdk_action_current(inputs)
	return en_cmdk_action_current(inputs)
});
