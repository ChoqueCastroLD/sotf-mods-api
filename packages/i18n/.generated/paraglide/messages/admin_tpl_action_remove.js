/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Tpl_Action_RemoveInputs */

const en_admin_tpl_action_remove = /** @type {(inputs: Admin_Tpl_Action_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remove`)
};

const es_admin_tpl_action_remove = /** @type {(inputs: Admin_Tpl_Action_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retirar`)
};

const de_admin_tpl_action_remove = /** @type {(inputs: Admin_Tpl_Action_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entfernen`)
};

const fr_admin_tpl_action_remove = /** @type {(inputs: Admin_Tpl_Action_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supprimer`)
};

const it_admin_tpl_action_remove = /** @type {(inputs: Admin_Tpl_Action_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rimuovi`)
};

const nl_admin_tpl_action_remove = /** @type {(inputs: Admin_Tpl_Action_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verwijderen`)
};

const pl_admin_tpl_action_remove = /** @type {(inputs: Admin_Tpl_Action_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usuń`)
};

const pt_admin_tpl_action_remove = /** @type {(inputs: Admin_Tpl_Action_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remover`)
};

const ru_admin_tpl_action_remove = /** @type {(inputs: Admin_Tpl_Action_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Удалить`)
};

const sv_admin_tpl_action_remove = /** @type {(inputs: Admin_Tpl_Action_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta bort`)
};

const tr_admin_tpl_action_remove = /** @type {(inputs: Admin_Tpl_Action_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kaldır`)
};

const zh_admin_tpl_action_remove = /** @type {(inputs: Admin_Tpl_Action_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`移除`)
};

const ja_admin_tpl_action_remove = /** @type {(inputs: Admin_Tpl_Action_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`削除`)
};

/**
* | output |
* | --- |
* | "Remove" |
*
* @param {Admin_Tpl_Action_RemoveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_tpl_action_remove = /** @type {((inputs?: Admin_Tpl_Action_RemoveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tpl_Action_RemoveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_tpl_action_remove(inputs)
	if (locale === "de") return de_admin_tpl_action_remove(inputs)
	if (locale === "fr") return fr_admin_tpl_action_remove(inputs)
	if (locale === "it") return it_admin_tpl_action_remove(inputs)
	if (locale === "nl") return nl_admin_tpl_action_remove(inputs)
	if (locale === "pl") return pl_admin_tpl_action_remove(inputs)
	if (locale === "pt") return pt_admin_tpl_action_remove(inputs)
	if (locale === "ru") return ru_admin_tpl_action_remove(inputs)
	if (locale === "sv") return sv_admin_tpl_action_remove(inputs)
	if (locale === "tr") return tr_admin_tpl_action_remove(inputs)
	if (locale === "zh") return zh_admin_tpl_action_remove(inputs)
	if (locale === "ja") return ja_admin_tpl_action_remove(inputs)
	return en_admin_tpl_action_remove(inputs)
});
