/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Action_UnlistInputs */

const en_basecamp_action_unlist = /** @type {(inputs: Basecamp_Action_UnlistInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unlist`)
};

const es_basecamp_action_unlist = /** @type {(inputs: Basecamp_Action_UnlistInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ocultar de las listas`)
};

const de_basecamp_action_unlist = /** @type {(inputs: Basecamp_Action_UnlistInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aus Listen nehmen`)
};

const fr_basecamp_action_unlist = /** @type {(inputs: Basecamp_Action_UnlistInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retirer des listes`)
};

const it_basecamp_action_unlist = /** @type {(inputs: Basecamp_Action_UnlistInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Togli dagli elenchi`)
};

const nl_basecamp_action_unlist = /** @type {(inputs: Basecamp_Action_UnlistInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uit lijsten halen`)
};

const pl_basecamp_action_unlist = /** @type {(inputs: Basecamp_Action_UnlistInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ukryj na listach`)
};

const pt_basecamp_action_unlist = /** @type {(inputs: Basecamp_Action_UnlistInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tirar das listas`)
};

const ru_basecamp_action_unlist = /** @type {(inputs: Basecamp_Action_UnlistInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Убрать из списков`)
};

const sv_basecamp_action_unlist = /** @type {(inputs: Basecamp_Action_UnlistInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta bort från listor`)
};

const tr_basecamp_action_unlist = /** @type {(inputs: Basecamp_Action_UnlistInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Listelerden kaldır`)
};

const zh_basecamp_action_unlist = /** @type {(inputs: Basecamp_Action_UnlistInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`从列表中隐藏`)
};

const ja_basecamp_action_unlist = /** @type {(inputs: Basecamp_Action_UnlistInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`一覧から外す`)
};

/**
* | output |
* | --- |
* | "Unlist" |
*
* @param {Basecamp_Action_UnlistInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_action_unlist = /** @type {((inputs?: Basecamp_Action_UnlistInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Action_UnlistInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_action_unlist(inputs)
	if (locale === "de") return de_basecamp_action_unlist(inputs)
	if (locale === "fr") return fr_basecamp_action_unlist(inputs)
	if (locale === "it") return it_basecamp_action_unlist(inputs)
	if (locale === "nl") return nl_basecamp_action_unlist(inputs)
	if (locale === "pl") return pl_basecamp_action_unlist(inputs)
	if (locale === "pt") return pt_basecamp_action_unlist(inputs)
	if (locale === "ru") return ru_basecamp_action_unlist(inputs)
	if (locale === "sv") return sv_basecamp_action_unlist(inputs)
	if (locale === "tr") return tr_basecamp_action_unlist(inputs)
	if (locale === "zh") return zh_basecamp_action_unlist(inputs)
	if (locale === "ja") return ja_basecamp_action_unlist(inputs)
	return en_basecamp_action_unlist(inputs)
});
