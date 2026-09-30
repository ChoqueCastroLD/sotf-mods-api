/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ date: NonNullable<unknown> }} Settings_Export_ExpiresInputs */

const en_settings_export_expires = /** @type {(inputs: Settings_Export_ExpiresInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`link valid until ${i?.date}`)
};

const es_settings_export_expires = /** @type {(inputs: Settings_Export_ExpiresInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`enlace válido hasta el ${i?.date}`)
};

const de_settings_export_expires = /** @type {(inputs: Settings_Export_ExpiresInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Link gültig bis ${i?.date}`)
};

const fr_settings_export_expires = /** @type {(inputs: Settings_Export_ExpiresInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`lien valable jusqu’au ${i?.date}`)
};

const it_settings_export_expires = /** @type {(inputs: Settings_Export_ExpiresInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`link valido fino al ${i?.date}`)
};

const nl_settings_export_expires = /** @type {(inputs: Settings_Export_ExpiresInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`link geldig tot ${i?.date}`)
};

const pl_settings_export_expires = /** @type {(inputs: Settings_Export_ExpiresInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`link ważny do ${i?.date}`)
};

const pt_settings_export_expires = /** @type {(inputs: Settings_Export_ExpiresInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`link válido até ${i?.date}`)
};

const ru_settings_export_expires = /** @type {(inputs: Settings_Export_ExpiresInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`ссылка действует до ${i?.date}`)
};

const sv_settings_export_expires = /** @type {(inputs: Settings_Export_ExpiresInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`länken gäller till ${i?.date}`)
};

const tr_settings_export_expires = /** @type {(inputs: Settings_Export_ExpiresInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`bağlantı ${i?.date} tarihine kadar geçerli`)
};

const zh_settings_export_expires = /** @type {(inputs: Settings_Export_ExpiresInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`链接有效期至 ${i?.date}`)
};

const ja_settings_export_expires = /** @type {(inputs: Settings_Export_ExpiresInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`リンクの有効期限：${i?.date}`)
};

/**
* | output |
* | --- |
* | "link valid until {date}" |
*
* @param {Settings_Export_ExpiresInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_export_expires = /** @type {((inputs: Settings_Export_ExpiresInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Export_ExpiresInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_export_expires(inputs)
	if (locale === "de") return de_settings_export_expires(inputs)
	if (locale === "fr") return fr_settings_export_expires(inputs)
	if (locale === "it") return it_settings_export_expires(inputs)
	if (locale === "nl") return nl_settings_export_expires(inputs)
	if (locale === "pl") return pl_settings_export_expires(inputs)
	if (locale === "pt") return pt_settings_export_expires(inputs)
	if (locale === "ru") return ru_settings_export_expires(inputs)
	if (locale === "sv") return sv_settings_export_expires(inputs)
	if (locale === "tr") return tr_settings_export_expires(inputs)
	if (locale === "zh") return zh_settings_export_expires(inputs)
	if (locale === "ja") return ja_settings_export_expires(inputs)
	return en_settings_export_expires(inputs)
});
