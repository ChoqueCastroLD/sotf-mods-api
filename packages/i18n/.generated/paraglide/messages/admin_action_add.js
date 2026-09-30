/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Action_AddInputs */

const en_admin_action_add = /** @type {(inputs: Admin_Action_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add`)
};

const es_admin_action_add = /** @type {(inputs: Admin_Action_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Añadir`)
};

const de_admin_action_add = /** @type {(inputs: Admin_Action_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hinzufügen`)
};

const fr_admin_action_add = /** @type {(inputs: Admin_Action_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajouter`)
};

const it_admin_action_add = /** @type {(inputs: Admin_Action_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aggiungi`)
};

const nl_admin_action_add = /** @type {(inputs: Admin_Action_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toevoegen`)
};

const pl_admin_action_add = /** @type {(inputs: Admin_Action_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dodaj`)
};

const pt_admin_action_add = /** @type {(inputs: Admin_Action_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adicionar`)
};

const ru_admin_action_add = /** @type {(inputs: Admin_Action_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Добавить`)
};

const sv_admin_action_add = /** @type {(inputs: Admin_Action_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lägg till`)
};

const tr_admin_action_add = /** @type {(inputs: Admin_Action_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ekle`)
};

const zh_admin_action_add = /** @type {(inputs: Admin_Action_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`添加`)
};

const ja_admin_action_add = /** @type {(inputs: Admin_Action_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`追加`)
};

/**
* | output |
* | --- |
* | "Add" |
*
* @param {Admin_Action_AddInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_action_add = /** @type {((inputs?: Admin_Action_AddInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Action_AddInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_action_add(inputs)
	if (locale === "de") return de_admin_action_add(inputs)
	if (locale === "fr") return fr_admin_action_add(inputs)
	if (locale === "it") return it_admin_action_add(inputs)
	if (locale === "nl") return nl_admin_action_add(inputs)
	if (locale === "pl") return pl_admin_action_add(inputs)
	if (locale === "pt") return pt_admin_action_add(inputs)
	if (locale === "ru") return ru_admin_action_add(inputs)
	if (locale === "sv") return sv_admin_action_add(inputs)
	if (locale === "tr") return tr_admin_action_add(inputs)
	if (locale === "zh") return zh_admin_action_add(inputs)
	if (locale === "ja") return ja_admin_action_add(inputs)
	return en_admin_action_add(inputs)
});
