/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Hooks_AddInputs */

const en_admin_hooks_add = /** @type {(inputs: Admin_Hooks_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add webhook`)
};

const es_admin_hooks_add = /** @type {(inputs: Admin_Hooks_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Añadir webhook`)
};

const de_admin_hooks_add = /** @type {(inputs: Admin_Hooks_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Webhook hinzufügen`)
};

const fr_admin_hooks_add = /** @type {(inputs: Admin_Hooks_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajouter un webhook`)
};

const it_admin_hooks_add = /** @type {(inputs: Admin_Hooks_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aggiungi webhook`)
};

const nl_admin_hooks_add = /** @type {(inputs: Admin_Hooks_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Webhook toevoegen`)
};

const pl_admin_hooks_add = /** @type {(inputs: Admin_Hooks_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dodaj webhook`)
};

const pt_admin_hooks_add = /** @type {(inputs: Admin_Hooks_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adicionar webhook`)
};

const ru_admin_hooks_add = /** @type {(inputs: Admin_Hooks_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Добавить вебхук`)
};

const sv_admin_hooks_add = /** @type {(inputs: Admin_Hooks_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lägg till webhook`)
};

const tr_admin_hooks_add = /** @type {(inputs: Admin_Hooks_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Webhook ekle`)
};

const zh_admin_hooks_add = /** @type {(inputs: Admin_Hooks_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`添加 Webhook`)
};

const ja_admin_hooks_add = /** @type {(inputs: Admin_Hooks_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Webhook を追加`)
};

/**
* | output |
* | --- |
* | "Add webhook" |
*
* @param {Admin_Hooks_AddInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_hooks_add = /** @type {((inputs?: Admin_Hooks_AddInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Hooks_AddInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_hooks_add(inputs)
	if (locale === "de") return de_admin_hooks_add(inputs)
	if (locale === "fr") return fr_admin_hooks_add(inputs)
	if (locale === "it") return it_admin_hooks_add(inputs)
	if (locale === "nl") return nl_admin_hooks_add(inputs)
	if (locale === "pl") return pl_admin_hooks_add(inputs)
	if (locale === "pt") return pt_admin_hooks_add(inputs)
	if (locale === "ru") return ru_admin_hooks_add(inputs)
	if (locale === "sv") return sv_admin_hooks_add(inputs)
	if (locale === "tr") return tr_admin_hooks_add(inputs)
	if (locale === "zh") return zh_admin_hooks_add(inputs)
	if (locale === "ja") return ja_admin_hooks_add(inputs)
	return en_admin_hooks_add(inputs)
});
