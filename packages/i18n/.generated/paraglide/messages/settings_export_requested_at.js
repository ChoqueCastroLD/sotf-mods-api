/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ date: NonNullable<unknown> }} Settings_Export_Requested_AtInputs */

const en_settings_export_requested_at = /** @type {(inputs: Settings_Export_Requested_AtInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Requested ${i?.date}`)
};

const es_settings_export_requested_at = /** @type {(inputs: Settings_Export_Requested_AtInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Solicitada el ${i?.date}`)
};

const de_settings_export_requested_at = /** @type {(inputs: Settings_Export_Requested_AtInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Angefordert am ${i?.date}`)
};

const fr_settings_export_requested_at = /** @type {(inputs: Settings_Export_Requested_AtInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Demandé le ${i?.date}`)
};

const it_settings_export_requested_at = /** @type {(inputs: Settings_Export_Requested_AtInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Richiesta il ${i?.date}`)
};

const nl_settings_export_requested_at = /** @type {(inputs: Settings_Export_Requested_AtInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Aangevraagd op ${i?.date}`)
};

const pl_settings_export_requested_at = /** @type {(inputs: Settings_Export_Requested_AtInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zamówiono ${i?.date}`)
};

const pt_settings_export_requested_at = /** @type {(inputs: Settings_Export_Requested_AtInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Solicitada em ${i?.date}`)
};

const ru_settings_export_requested_at = /** @type {(inputs: Settings_Export_Requested_AtInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Запрошен ${i?.date}`)
};

const sv_settings_export_requested_at = /** @type {(inputs: Settings_Export_Requested_AtInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Begärd ${i?.date}`)
};

const tr_settings_export_requested_at = /** @type {(inputs: Settings_Export_Requested_AtInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date} tarihinde istendi`)
};

const zh_settings_export_requested_at = /** @type {(inputs: Settings_Export_Requested_AtInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`请求于 ${i?.date}`)
};

const ja_settings_export_requested_at = /** @type {(inputs: Settings_Export_Requested_AtInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date} にリクエスト`)
};

/**
* | output |
* | --- |
* | "Requested {date}" |
*
* @param {Settings_Export_Requested_AtInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_export_requested_at = /** @type {((inputs: Settings_Export_Requested_AtInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Export_Requested_AtInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_export_requested_at(inputs)
	if (locale === "de") return de_settings_export_requested_at(inputs)
	if (locale === "fr") return fr_settings_export_requested_at(inputs)
	if (locale === "it") return it_settings_export_requested_at(inputs)
	if (locale === "nl") return nl_settings_export_requested_at(inputs)
	if (locale === "pl") return pl_settings_export_requested_at(inputs)
	if (locale === "pt") return pt_settings_export_requested_at(inputs)
	if (locale === "ru") return ru_settings_export_requested_at(inputs)
	if (locale === "sv") return sv_settings_export_requested_at(inputs)
	if (locale === "tr") return tr_settings_export_requested_at(inputs)
	if (locale === "zh") return zh_settings_export_requested_at(inputs)
	if (locale === "ja") return ja_settings_export_requested_at(inputs)
	return en_settings_export_requested_at(inputs)
});
