/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Action_UnlistInputs */

const en_ranger_action_unlist = /** @type {(inputs: Ranger_Action_UnlistInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unlist`)
};

const es_ranger_action_unlist = /** @type {(inputs: Ranger_Action_UnlistInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ocultar del listado`)
};

const de_ranger_action_unlist = /** @type {(inputs: Ranger_Action_UnlistInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nicht mehr listen`)
};

const fr_ranger_action_unlist = /** @type {(inputs: Ranger_Action_UnlistInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retirer des listes`)
};

const it_ranger_action_unlist = /** @type {(inputs: Ranger_Action_UnlistInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Togli dagli elenchi`)
};

const nl_ranger_action_unlist = /** @type {(inputs: Ranger_Action_UnlistInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uit de lijsten halen`)
};

const pl_ranger_action_unlist = /** @type {(inputs: Ranger_Action_UnlistInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usuń z list`)
};

const pt_ranger_action_unlist = /** @type {(inputs: Ranger_Action_UnlistInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tirar das listas`)
};

const ru_ranger_action_unlist = /** @type {(inputs: Ranger_Action_UnlistInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Убрать из списков`)
};

const sv_ranger_action_unlist = /** @type {(inputs: Ranger_Action_UnlistInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta bort ur listorna`)
};

const tr_ranger_action_unlist = /** @type {(inputs: Ranger_Action_UnlistInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Listelerden kaldır`)
};

const zh_ranger_action_unlist = /** @type {(inputs: Ranger_Action_UnlistInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`从列表隐藏`)
};

const ja_ranger_action_unlist = /** @type {(inputs: Ranger_Action_UnlistInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`一覧から外す`)
};

/**
* | output |
* | --- |
* | "Unlist" |
*
* @param {Ranger_Action_UnlistInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_action_unlist = /** @type {((inputs?: Ranger_Action_UnlistInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Action_UnlistInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_action_unlist(inputs)
	if (locale === "de") return de_ranger_action_unlist(inputs)
	if (locale === "fr") return fr_ranger_action_unlist(inputs)
	if (locale === "it") return it_ranger_action_unlist(inputs)
	if (locale === "nl") return nl_ranger_action_unlist(inputs)
	if (locale === "pl") return pl_ranger_action_unlist(inputs)
	if (locale === "pt") return pt_ranger_action_unlist(inputs)
	if (locale === "ru") return ru_ranger_action_unlist(inputs)
	if (locale === "sv") return sv_ranger_action_unlist(inputs)
	if (locale === "tr") return tr_ranger_action_unlist(inputs)
	if (locale === "zh") return zh_ranger_action_unlist(inputs)
	if (locale === "ja") return ja_ranger_action_unlist(inputs)
	return en_ranger_action_unlist(inputs)
});
