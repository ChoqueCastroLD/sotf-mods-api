/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Hooks_UntitledInputs */

const en_admin_hooks_untitled = /** @type {(inputs: Admin_Hooks_UntitledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New webhook`)
};

const es_admin_hooks_untitled = /** @type {(inputs: Admin_Hooks_UntitledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Webhook nuevo`)
};

const de_admin_hooks_untitled = /** @type {(inputs: Admin_Hooks_UntitledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neuer Webhook`)
};

const fr_admin_hooks_untitled = /** @type {(inputs: Admin_Hooks_UntitledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nouveau webhook`)
};

const it_admin_hooks_untitled = /** @type {(inputs: Admin_Hooks_UntitledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuovo webhook`)
};

const nl_admin_hooks_untitled = /** @type {(inputs: Admin_Hooks_UntitledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuwe webhook`)
};

const pl_admin_hooks_untitled = /** @type {(inputs: Admin_Hooks_UntitledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nowy webhook`)
};

const pt_admin_hooks_untitled = /** @type {(inputs: Admin_Hooks_UntitledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Novo webhook`)
};

const ru_admin_hooks_untitled = /** @type {(inputs: Admin_Hooks_UntitledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Новый вебхук`)
};

const sv_admin_hooks_untitled = /** @type {(inputs: Admin_Hooks_UntitledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ny webhook`)
};

const tr_admin_hooks_untitled = /** @type {(inputs: Admin_Hooks_UntitledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeni webhook`)
};

const zh_admin_hooks_untitled = /** @type {(inputs: Admin_Hooks_UntitledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新 Webhook`)
};

const ja_admin_hooks_untitled = /** @type {(inputs: Admin_Hooks_UntitledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新しい Webhook`)
};

/**
* | output |
* | --- |
* | "New webhook" |
*
* @param {Admin_Hooks_UntitledInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_hooks_untitled = /** @type {((inputs?: Admin_Hooks_UntitledInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Hooks_UntitledInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_hooks_untitled(inputs)
	if (locale === "de") return de_admin_hooks_untitled(inputs)
	if (locale === "fr") return fr_admin_hooks_untitled(inputs)
	if (locale === "it") return it_admin_hooks_untitled(inputs)
	if (locale === "nl") return nl_admin_hooks_untitled(inputs)
	if (locale === "pl") return pl_admin_hooks_untitled(inputs)
	if (locale === "pt") return pt_admin_hooks_untitled(inputs)
	if (locale === "ru") return ru_admin_hooks_untitled(inputs)
	if (locale === "sv") return sv_admin_hooks_untitled(inputs)
	if (locale === "tr") return tr_admin_hooks_untitled(inputs)
	if (locale === "zh") return zh_admin_hooks_untitled(inputs)
	if (locale === "ja") return ja_admin_hooks_untitled(inputs)
	return en_admin_hooks_untitled(inputs)
});
