/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Eco_Status_UnknownInputs */

const en_admin_eco_status_unknown = /** @type {(inputs: Admin_Eco_Status_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unknown`)
};

const es_admin_eco_status_unknown = /** @type {(inputs: Admin_Eco_Status_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desconocido`)
};

const de_admin_eco_status_unknown = /** @type {(inputs: Admin_Eco_Status_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unbekannt`)
};

const fr_admin_eco_status_unknown = /** @type {(inputs: Admin_Eco_Status_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inconnu`)
};

const it_admin_eco_status_unknown = /** @type {(inputs: Admin_Eco_Status_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sconosciuto`)
};

const nl_admin_eco_status_unknown = /** @type {(inputs: Admin_Eco_Status_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Onbekend`)
};

const pl_admin_eco_status_unknown = /** @type {(inputs: Admin_Eco_Status_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieznany`)
};

const pt_admin_eco_status_unknown = /** @type {(inputs: Admin_Eco_Status_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desconhecido`)
};

const ru_admin_eco_status_unknown = /** @type {(inputs: Admin_Eco_Status_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Неизвестно`)
};

const sv_admin_eco_status_unknown = /** @type {(inputs: Admin_Eco_Status_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Okänd`)
};

const tr_admin_eco_status_unknown = /** @type {(inputs: Admin_Eco_Status_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bilinmiyor`)
};

const zh_admin_eco_status_unknown = /** @type {(inputs: Admin_Eco_Status_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未知`)
};

const ja_admin_eco_status_unknown = /** @type {(inputs: Admin_Eco_Status_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不明`)
};

/**
* | output |
* | --- |
* | "Unknown" |
*
* @param {Admin_Eco_Status_UnknownInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_eco_status_unknown = /** @type {((inputs?: Admin_Eco_Status_UnknownInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Eco_Status_UnknownInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_eco_status_unknown(inputs)
	if (locale === "de") return de_admin_eco_status_unknown(inputs)
	if (locale === "fr") return fr_admin_eco_status_unknown(inputs)
	if (locale === "it") return it_admin_eco_status_unknown(inputs)
	if (locale === "nl") return nl_admin_eco_status_unknown(inputs)
	if (locale === "pl") return pl_admin_eco_status_unknown(inputs)
	if (locale === "pt") return pt_admin_eco_status_unknown(inputs)
	if (locale === "ru") return ru_admin_eco_status_unknown(inputs)
	if (locale === "sv") return sv_admin_eco_status_unknown(inputs)
	if (locale === "tr") return tr_admin_eco_status_unknown(inputs)
	if (locale === "zh") return zh_admin_eco_status_unknown(inputs)
	if (locale === "ja") return ja_admin_eco_status_unknown(inputs)
	return en_admin_eco_status_unknown(inputs)
});
