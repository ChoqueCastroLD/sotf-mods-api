/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Eco_Field_VersionInputs */

const en_admin_eco_field_version = /** @type {(inputs: Admin_Eco_Field_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version`)
};

const es_admin_eco_field_version = /** @type {(inputs: Admin_Eco_Field_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versión`)
};

const de_admin_eco_field_version = /** @type {(inputs: Admin_Eco_Field_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version`)
};

const fr_admin_eco_field_version = /** @type {(inputs: Admin_Eco_Field_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version`)
};

const it_admin_eco_field_version = /** @type {(inputs: Admin_Eco_Field_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versione`)
};

const nl_admin_eco_field_version = /** @type {(inputs: Admin_Eco_Field_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versie`)
};

const pl_admin_eco_field_version = /** @type {(inputs: Admin_Eco_Field_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wersja`)
};

const pt_admin_eco_field_version = /** @type {(inputs: Admin_Eco_Field_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versão`)
};

const ru_admin_eco_field_version = /** @type {(inputs: Admin_Eco_Field_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Версия`)
};

const sv_admin_eco_field_version = /** @type {(inputs: Admin_Eco_Field_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version`)
};

const tr_admin_eco_field_version = /** @type {(inputs: Admin_Eco_Field_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sürüm`)
};

const zh_admin_eco_field_version = /** @type {(inputs: Admin_Eco_Field_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`版本号`)
};

const ja_admin_eco_field_version = /** @type {(inputs: Admin_Eco_Field_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バージョン`)
};

/**
* | output |
* | --- |
* | "Version" |
*
* @param {Admin_Eco_Field_VersionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_eco_field_version = /** @type {((inputs?: Admin_Eco_Field_VersionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Eco_Field_VersionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_eco_field_version(inputs)
	if (locale === "de") return de_admin_eco_field_version(inputs)
	if (locale === "fr") return fr_admin_eco_field_version(inputs)
	if (locale === "it") return it_admin_eco_field_version(inputs)
	if (locale === "nl") return nl_admin_eco_field_version(inputs)
	if (locale === "pl") return pl_admin_eco_field_version(inputs)
	if (locale === "pt") return pt_admin_eco_field_version(inputs)
	if (locale === "ru") return ru_admin_eco_field_version(inputs)
	if (locale === "sv") return sv_admin_eco_field_version(inputs)
	if (locale === "tr") return tr_admin_eco_field_version(inputs)
	if (locale === "zh") return zh_admin_eco_field_version(inputs)
	if (locale === "ja") return ja_admin_eco_field_version(inputs)
	return en_admin_eco_field_version(inputs)
});
