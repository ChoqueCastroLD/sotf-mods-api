/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Action_DeleteInputs */

const en_admin_action_delete = /** @type {(inputs: Admin_Action_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delete`)
};

const es_admin_action_delete = /** @type {(inputs: Admin_Action_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eliminar`)
};

const de_admin_action_delete = /** @type {(inputs: Admin_Action_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Löschen`)
};

const fr_admin_action_delete = /** @type {(inputs: Admin_Action_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supprimer`)
};

const it_admin_action_delete = /** @type {(inputs: Admin_Action_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elimina`)
};

const nl_admin_action_delete = /** @type {(inputs: Admin_Action_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verwijderen`)
};

const pl_admin_action_delete = /** @type {(inputs: Admin_Action_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usuń`)
};

const pt_admin_action_delete = /** @type {(inputs: Admin_Action_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Excluir`)
};

const ru_admin_action_delete = /** @type {(inputs: Admin_Action_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Удалить`)
};

const sv_admin_action_delete = /** @type {(inputs: Admin_Action_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta bort`)
};

const tr_admin_action_delete = /** @type {(inputs: Admin_Action_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sil`)
};

const zh_admin_action_delete = /** @type {(inputs: Admin_Action_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除`)
};

const ja_admin_action_delete = /** @type {(inputs: Admin_Action_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`削除`)
};

/**
* | output |
* | --- |
* | "Delete" |
*
* @param {Admin_Action_DeleteInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_action_delete = /** @type {((inputs?: Admin_Action_DeleteInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Action_DeleteInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_action_delete(inputs)
	if (locale === "de") return de_admin_action_delete(inputs)
	if (locale === "fr") return fr_admin_action_delete(inputs)
	if (locale === "it") return it_admin_action_delete(inputs)
	if (locale === "nl") return nl_admin_action_delete(inputs)
	if (locale === "pl") return pl_admin_action_delete(inputs)
	if (locale === "pt") return pt_admin_action_delete(inputs)
	if (locale === "ru") return ru_admin_action_delete(inputs)
	if (locale === "sv") return sv_admin_action_delete(inputs)
	if (locale === "tr") return tr_admin_action_delete(inputs)
	if (locale === "zh") return zh_admin_action_delete(inputs)
	if (locale === "ja") return ja_admin_action_delete(inputs)
	return en_admin_action_delete(inputs)
});
