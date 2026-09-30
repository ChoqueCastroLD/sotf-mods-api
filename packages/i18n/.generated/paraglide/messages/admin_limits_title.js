/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Limits_TitleInputs */

const en_admin_limits_title = /** @type {(inputs: Admin_Limits_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rate limits`)
};

const es_admin_limits_title = /** @type {(inputs: Admin_Limits_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Límites de uso`)
};

const de_admin_limits_title = /** @type {(inputs: Admin_Limits_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ratenlimits`)
};

const fr_admin_limits_title = /** @type {(inputs: Admin_Limits_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Limites de débit`)
};

const it_admin_limits_title = /** @type {(inputs: Admin_Limits_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Limiti di frequenza`)
};

const nl_admin_limits_title = /** @type {(inputs: Admin_Limits_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rate limits`)
};

const pl_admin_limits_title = /** @type {(inputs: Admin_Limits_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Limity żądań`)
};

const pt_admin_limits_title = /** @type {(inputs: Admin_Limits_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Limites de requisições`)
};

const ru_admin_limits_title = /** @type {(inputs: Admin_Limits_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Лимиты запросов`)
};

const sv_admin_limits_title = /** @type {(inputs: Admin_Limits_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Begränsningar`)
};

const tr_admin_limits_title = /** @type {(inputs: Admin_Limits_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İstek sınırları`)
};

const zh_admin_limits_title = /** @type {(inputs: Admin_Limits_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请求限制`)
};

const ja_admin_limits_title = /** @type {(inputs: Admin_Limits_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リクエスト制限`)
};

/**
* | output |
* | --- |
* | "Rate limits" |
*
* @param {Admin_Limits_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_limits_title = /** @type {((inputs?: Admin_Limits_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Limits_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_limits_title(inputs)
	if (locale === "de") return de_admin_limits_title(inputs)
	if (locale === "fr") return fr_admin_limits_title(inputs)
	if (locale === "it") return it_admin_limits_title(inputs)
	if (locale === "nl") return nl_admin_limits_title(inputs)
	if (locale === "pl") return pl_admin_limits_title(inputs)
	if (locale === "pt") return pt_admin_limits_title(inputs)
	if (locale === "ru") return ru_admin_limits_title(inputs)
	if (locale === "sv") return sv_admin_limits_title(inputs)
	if (locale === "tr") return tr_admin_limits_title(inputs)
	if (locale === "zh") return zh_admin_limits_title(inputs)
	if (locale === "ja") return ja_admin_limits_title(inputs)
	return en_admin_limits_title(inputs)
});
