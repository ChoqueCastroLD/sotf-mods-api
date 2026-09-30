/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Eco_Field_StatusInputs */

const en_admin_eco_field_status = /** @type {(inputs: Admin_Eco_Field_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Status`)
};

const es_admin_eco_field_status = /** @type {(inputs: Admin_Eco_Field_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Estado`)
};

const de_admin_eco_field_status = /** @type {(inputs: Admin_Eco_Field_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Status`)
};

const fr_admin_eco_field_status = /** @type {(inputs: Admin_Eco_Field_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`État`)
};

const it_admin_eco_field_status = /** @type {(inputs: Admin_Eco_Field_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stato`)
};

const nl_admin_eco_field_status = /** @type {(inputs: Admin_Eco_Field_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Status`)
};

const pl_admin_eco_field_status = /** @type {(inputs: Admin_Eco_Field_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stan`)
};

const pt_admin_eco_field_status = /** @type {(inputs: Admin_Eco_Field_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Status`)
};

const ru_admin_eco_field_status = /** @type {(inputs: Admin_Eco_Field_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Статус`)
};

const sv_admin_eco_field_status = /** @type {(inputs: Admin_Eco_Field_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Status`)
};

const tr_admin_eco_field_status = /** @type {(inputs: Admin_Eco_Field_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Durum`)
};

const zh_admin_eco_field_status = /** @type {(inputs: Admin_Eco_Field_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`状态`)
};

const ja_admin_eco_field_status = /** @type {(inputs: Admin_Eco_Field_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`状況`)
};

/**
* | output |
* | --- |
* | "Status" |
*
* @param {Admin_Eco_Field_StatusInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_eco_field_status = /** @type {((inputs?: Admin_Eco_Field_StatusInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Eco_Field_StatusInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_eco_field_status(inputs)
	if (locale === "de") return de_admin_eco_field_status(inputs)
	if (locale === "fr") return fr_admin_eco_field_status(inputs)
	if (locale === "it") return it_admin_eco_field_status(inputs)
	if (locale === "nl") return nl_admin_eco_field_status(inputs)
	if (locale === "pl") return pl_admin_eco_field_status(inputs)
	if (locale === "pt") return pt_admin_eco_field_status(inputs)
	if (locale === "ru") return ru_admin_eco_field_status(inputs)
	if (locale === "sv") return sv_admin_eco_field_status(inputs)
	if (locale === "tr") return tr_admin_eco_field_status(inputs)
	if (locale === "zh") return zh_admin_eco_field_status(inputs)
	if (locale === "ja") return ja_admin_eco_field_status(inputs)
	return en_admin_eco_field_status(inputs)
});
