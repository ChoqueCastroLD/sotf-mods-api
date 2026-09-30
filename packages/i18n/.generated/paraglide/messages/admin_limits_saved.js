/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Limits_SavedInputs */

const en_admin_limits_saved = /** @type {(inputs: Admin_Limits_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rate limits saved`)
};

const es_admin_limits_saved = /** @type {(inputs: Admin_Limits_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Límites de uso guardados`)
};

const de_admin_limits_saved = /** @type {(inputs: Admin_Limits_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ratenlimits gespeichert`)
};

const fr_admin_limits_saved = /** @type {(inputs: Admin_Limits_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Limites de débit enregistrées`)
};

const it_admin_limits_saved = /** @type {(inputs: Admin_Limits_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Limiti di frequenza salvati`)
};

const nl_admin_limits_saved = /** @type {(inputs: Admin_Limits_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rate limits opgeslagen`)
};

const pl_admin_limits_saved = /** @type {(inputs: Admin_Limits_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zapisano limity żądań`)
};

const pt_admin_limits_saved = /** @type {(inputs: Admin_Limits_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Limites de requisições salvos`)
};

const ru_admin_limits_saved = /** @type {(inputs: Admin_Limits_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Лимиты запросов сохранены`)
};

const sv_admin_limits_saved = /** @type {(inputs: Admin_Limits_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Begränsningar sparade`)
};

const tr_admin_limits_saved = /** @type {(inputs: Admin_Limits_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İstek sınırları kaydedildi`)
};

const zh_admin_limits_saved = /** @type {(inputs: Admin_Limits_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请求限制已保存`)
};

const ja_admin_limits_saved = /** @type {(inputs: Admin_Limits_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リクエスト制限を保存しました`)
};

/**
* | output |
* | --- |
* | "Rate limits saved" |
*
* @param {Admin_Limits_SavedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_limits_saved = /** @type {((inputs?: Admin_Limits_SavedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Limits_SavedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_limits_saved(inputs)
	if (locale === "de") return de_admin_limits_saved(inputs)
	if (locale === "fr") return fr_admin_limits_saved(inputs)
	if (locale === "it") return it_admin_limits_saved(inputs)
	if (locale === "nl") return nl_admin_limits_saved(inputs)
	if (locale === "pl") return pl_admin_limits_saved(inputs)
	if (locale === "pt") return pt_admin_limits_saved(inputs)
	if (locale === "ru") return ru_admin_limits_saved(inputs)
	if (locale === "sv") return sv_admin_limits_saved(inputs)
	if (locale === "tr") return tr_admin_limits_saved(inputs)
	if (locale === "zh") return zh_admin_limits_saved(inputs)
	if (locale === "ja") return ja_admin_limits_saved(inputs)
	return en_admin_limits_saved(inputs)
});
