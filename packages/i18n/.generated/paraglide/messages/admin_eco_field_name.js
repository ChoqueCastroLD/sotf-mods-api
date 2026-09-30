/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Eco_Field_NameInputs */

const en_admin_eco_field_name = /** @type {(inputs: Admin_Eco_Field_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tool`)
};

const es_admin_eco_field_name = /** @type {(inputs: Admin_Eco_Field_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Herramienta`)
};

const de_admin_eco_field_name = /** @type {(inputs: Admin_Eco_Field_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Werkzeug`)
};

const fr_admin_eco_field_name = /** @type {(inputs: Admin_Eco_Field_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Outil`)
};

const it_admin_eco_field_name = /** @type {(inputs: Admin_Eco_Field_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Strumento`)
};

const nl_admin_eco_field_name = /** @type {(inputs: Admin_Eco_Field_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tool`)
};

const pl_admin_eco_field_name = /** @type {(inputs: Admin_Eco_Field_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Narzędzie`)
};

const pt_admin_eco_field_name = /** @type {(inputs: Admin_Eco_Field_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ferramenta`)
};

const ru_admin_eco_field_name = /** @type {(inputs: Admin_Eco_Field_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Инструмент`)
};

const sv_admin_eco_field_name = /** @type {(inputs: Admin_Eco_Field_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verktyg`)
};

const tr_admin_eco_field_name = /** @type {(inputs: Admin_Eco_Field_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Araç`)
};

const zh_admin_eco_field_name = /** @type {(inputs: Admin_Eco_Field_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`工具`)
};

const ja_admin_eco_field_name = /** @type {(inputs: Admin_Eco_Field_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ツール`)
};

/**
* | output |
* | --- |
* | "Tool" |
*
* @param {Admin_Eco_Field_NameInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_eco_field_name = /** @type {((inputs?: Admin_Eco_Field_NameInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Eco_Field_NameInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_eco_field_name(inputs)
	if (locale === "de") return de_admin_eco_field_name(inputs)
	if (locale === "fr") return fr_admin_eco_field_name(inputs)
	if (locale === "it") return it_admin_eco_field_name(inputs)
	if (locale === "nl") return nl_admin_eco_field_name(inputs)
	if (locale === "pl") return pl_admin_eco_field_name(inputs)
	if (locale === "pt") return pt_admin_eco_field_name(inputs)
	if (locale === "ru") return ru_admin_eco_field_name(inputs)
	if (locale === "sv") return sv_admin_eco_field_name(inputs)
	if (locale === "tr") return tr_admin_eco_field_name(inputs)
	if (locale === "zh") return zh_admin_eco_field_name(inputs)
	if (locale === "ja") return ja_admin_eco_field_name(inputs)
	return en_admin_eco_field_name(inputs)
});
