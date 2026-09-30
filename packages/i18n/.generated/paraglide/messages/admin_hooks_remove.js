/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Hooks_RemoveInputs */

const en_admin_hooks_remove = /** @type {(inputs: Admin_Hooks_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remove webhook`)
};

const es_admin_hooks_remove = /** @type {(inputs: Admin_Hooks_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quitar webhook`)
};

const de_admin_hooks_remove = /** @type {(inputs: Admin_Hooks_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Webhook entfernen`)
};

const fr_admin_hooks_remove = /** @type {(inputs: Admin_Hooks_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retirer le webhook`)
};

const it_admin_hooks_remove = /** @type {(inputs: Admin_Hooks_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rimuovi webhook`)
};

const nl_admin_hooks_remove = /** @type {(inputs: Admin_Hooks_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Webhook verwijderen`)
};

const pl_admin_hooks_remove = /** @type {(inputs: Admin_Hooks_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usuń webhook`)
};

const pt_admin_hooks_remove = /** @type {(inputs: Admin_Hooks_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remover webhook`)
};

const ru_admin_hooks_remove = /** @type {(inputs: Admin_Hooks_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Удалить вебхук`)
};

const sv_admin_hooks_remove = /** @type {(inputs: Admin_Hooks_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta bort webhook`)
};

const tr_admin_hooks_remove = /** @type {(inputs: Admin_Hooks_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Webhook’u kaldır`)
};

const zh_admin_hooks_remove = /** @type {(inputs: Admin_Hooks_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`移除 Webhook`)
};

const ja_admin_hooks_remove = /** @type {(inputs: Admin_Hooks_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Webhook を削除`)
};

/**
* | output |
* | --- |
* | "Remove webhook" |
*
* @param {Admin_Hooks_RemoveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_hooks_remove = /** @type {((inputs?: Admin_Hooks_RemoveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Hooks_RemoveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_hooks_remove(inputs)
	if (locale === "de") return de_admin_hooks_remove(inputs)
	if (locale === "fr") return fr_admin_hooks_remove(inputs)
	if (locale === "it") return it_admin_hooks_remove(inputs)
	if (locale === "nl") return nl_admin_hooks_remove(inputs)
	if (locale === "pl") return pl_admin_hooks_remove(inputs)
	if (locale === "pt") return pt_admin_hooks_remove(inputs)
	if (locale === "ru") return ru_admin_hooks_remove(inputs)
	if (locale === "sv") return sv_admin_hooks_remove(inputs)
	if (locale === "tr") return tr_admin_hooks_remove(inputs)
	if (locale === "zh") return zh_admin_hooks_remove(inputs)
	if (locale === "ja") return ja_admin_hooks_remove(inputs)
	return en_admin_hooks_remove(inputs)
});
