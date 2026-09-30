/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Hooks_SavedInputs */

const en_admin_hooks_saved = /** @type {(inputs: Admin_Hooks_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Webhooks saved`)
};

const es_admin_hooks_saved = /** @type {(inputs: Admin_Hooks_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Webhooks guardados`)
};

const de_admin_hooks_saved = /** @type {(inputs: Admin_Hooks_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Webhooks gespeichert`)
};

const fr_admin_hooks_saved = /** @type {(inputs: Admin_Hooks_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Webhooks enregistrés`)
};

const it_admin_hooks_saved = /** @type {(inputs: Admin_Hooks_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Webhook salvati`)
};

const nl_admin_hooks_saved = /** @type {(inputs: Admin_Hooks_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Webhooks opgeslagen`)
};

const pl_admin_hooks_saved = /** @type {(inputs: Admin_Hooks_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zapisano webhooki`)
};

const pt_admin_hooks_saved = /** @type {(inputs: Admin_Hooks_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Webhooks salvos`)
};

const ru_admin_hooks_saved = /** @type {(inputs: Admin_Hooks_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вебхуки сохранены`)
};

const sv_admin_hooks_saved = /** @type {(inputs: Admin_Hooks_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Webhooks sparade`)
};

const tr_admin_hooks_saved = /** @type {(inputs: Admin_Hooks_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Webhook’lar kaydedildi`)
};

const zh_admin_hooks_saved = /** @type {(inputs: Admin_Hooks_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Webhook 已保存`)
};

const ja_admin_hooks_saved = /** @type {(inputs: Admin_Hooks_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Webhook を保存しました`)
};

/**
* | output |
* | --- |
* | "Webhooks saved" |
*
* @param {Admin_Hooks_SavedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_hooks_saved = /** @type {((inputs?: Admin_Hooks_SavedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Hooks_SavedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_hooks_saved(inputs)
	if (locale === "de") return de_admin_hooks_saved(inputs)
	if (locale === "fr") return fr_admin_hooks_saved(inputs)
	if (locale === "it") return it_admin_hooks_saved(inputs)
	if (locale === "nl") return nl_admin_hooks_saved(inputs)
	if (locale === "pl") return pl_admin_hooks_saved(inputs)
	if (locale === "pt") return pt_admin_hooks_saved(inputs)
	if (locale === "ru") return ru_admin_hooks_saved(inputs)
	if (locale === "sv") return sv_admin_hooks_saved(inputs)
	if (locale === "tr") return tr_admin_hooks_saved(inputs)
	if (locale === "zh") return zh_admin_hooks_saved(inputs)
	if (locale === "ja") return ja_admin_hooks_saved(inputs)
	return en_admin_hooks_saved(inputs)
});
