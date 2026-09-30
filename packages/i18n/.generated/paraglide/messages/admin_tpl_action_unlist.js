/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Tpl_Action_UnlistInputs */

const en_admin_tpl_action_unlist = /** @type {(inputs: Admin_Tpl_Action_UnlistInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unlist`)
};

const es_admin_tpl_action_unlist = /** @type {(inputs: Admin_Tpl_Action_UnlistInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ocultar`)
};

const de_admin_tpl_action_unlist = /** @type {(inputs: Admin_Tpl_Action_UnlistInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nicht listen`)
};

const fr_admin_tpl_action_unlist = /** @type {(inputs: Admin_Tpl_Action_UnlistInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retirer de la liste`)
};

const it_admin_tpl_action_unlist = /** @type {(inputs: Admin_Tpl_Action_UnlistInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Togli dall’elenco`)
};

const nl_admin_tpl_action_unlist = /** @type {(inputs: Admin_Tpl_Action_UnlistInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niet meer vermelden`)
};

const pl_admin_tpl_action_unlist = /** @type {(inputs: Admin_Tpl_Action_UnlistInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ukryj z list`)
};

const pt_admin_tpl_action_unlist = /** @type {(inputs: Admin_Tpl_Action_UnlistInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deixar de listar`)
};

const ru_admin_tpl_action_unlist = /** @type {(inputs: Admin_Tpl_Action_UnlistInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скрыть из списков`)
};

const sv_admin_tpl_action_unlist = /** @type {(inputs: Admin_Tpl_Action_UnlistInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avlista`)
};

const tr_admin_tpl_action_unlist = /** @type {(inputs: Admin_Tpl_Action_UnlistInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Listeden kaldır`)
};

const zh_admin_tpl_action_unlist = /** @type {(inputs: Admin_Tpl_Action_UnlistInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`取消列出`)
};

const ja_admin_tpl_action_unlist = /** @type {(inputs: Admin_Tpl_Action_UnlistInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`一覧から外す`)
};

/**
* | output |
* | --- |
* | "Unlist" |
*
* @param {Admin_Tpl_Action_UnlistInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_tpl_action_unlist = /** @type {((inputs?: Admin_Tpl_Action_UnlistInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tpl_Action_UnlistInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_tpl_action_unlist(inputs)
	if (locale === "de") return de_admin_tpl_action_unlist(inputs)
	if (locale === "fr") return fr_admin_tpl_action_unlist(inputs)
	if (locale === "it") return it_admin_tpl_action_unlist(inputs)
	if (locale === "nl") return nl_admin_tpl_action_unlist(inputs)
	if (locale === "pl") return pl_admin_tpl_action_unlist(inputs)
	if (locale === "pt") return pt_admin_tpl_action_unlist(inputs)
	if (locale === "ru") return ru_admin_tpl_action_unlist(inputs)
	if (locale === "sv") return sv_admin_tpl_action_unlist(inputs)
	if (locale === "tr") return tr_admin_tpl_action_unlist(inputs)
	if (locale === "zh") return zh_admin_tpl_action_unlist(inputs)
	if (locale === "ja") return ja_admin_tpl_action_unlist(inputs)
	return en_admin_tpl_action_unlist(inputs)
});
