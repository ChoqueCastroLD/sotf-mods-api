/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Builds_Field_ReleasedInputs */

const en_admin_builds_field_released = /** @type {(inputs: Admin_Builds_Field_ReleasedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Release date`)
};

const es_admin_builds_field_released = /** @type {(inputs: Admin_Builds_Field_ReleasedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fecha de publicación`)
};

const de_admin_builds_field_released = /** @type {(inputs: Admin_Builds_Field_ReleasedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veröffentlichungsdatum`)
};

const fr_admin_builds_field_released = /** @type {(inputs: Admin_Builds_Field_ReleasedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Date de sortie`)
};

const it_admin_builds_field_released = /** @type {(inputs: Admin_Builds_Field_ReleasedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Data di uscita`)
};

const nl_admin_builds_field_released = /** @type {(inputs: Admin_Builds_Field_ReleasedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Releasedatum`)
};

const pl_admin_builds_field_released = /** @type {(inputs: Admin_Builds_Field_ReleasedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Data wydania`)
};

const pt_admin_builds_field_released = /** @type {(inputs: Admin_Builds_Field_ReleasedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Data de lançamento`)
};

const ru_admin_builds_field_released = /** @type {(inputs: Admin_Builds_Field_ReleasedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Дата выхода`)
};

const sv_admin_builds_field_released = /** @type {(inputs: Admin_Builds_Field_ReleasedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Släppdatum`)
};

const tr_admin_builds_field_released = /** @type {(inputs: Admin_Builds_Field_ReleasedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çıkış tarihi`)
};

const zh_admin_builds_field_released = /** @type {(inputs: Admin_Builds_Field_ReleasedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`发布日期`)
};

const ja_admin_builds_field_released = /** @type {(inputs: Admin_Builds_Field_ReleasedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リリース日`)
};

/**
* | output |
* | --- |
* | "Release date" |
*
* @param {Admin_Builds_Field_ReleasedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_builds_field_released = /** @type {((inputs?: Admin_Builds_Field_ReleasedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_Field_ReleasedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_builds_field_released(inputs)
	if (locale === "de") return de_admin_builds_field_released(inputs)
	if (locale === "fr") return fr_admin_builds_field_released(inputs)
	if (locale === "it") return it_admin_builds_field_released(inputs)
	if (locale === "nl") return nl_admin_builds_field_released(inputs)
	if (locale === "pl") return pl_admin_builds_field_released(inputs)
	if (locale === "pt") return pt_admin_builds_field_released(inputs)
	if (locale === "ru") return ru_admin_builds_field_released(inputs)
	if (locale === "sv") return sv_admin_builds_field_released(inputs)
	if (locale === "tr") return tr_admin_builds_field_released(inputs)
	if (locale === "zh") return zh_admin_builds_field_released(inputs)
	if (locale === "ja") return ja_admin_builds_field_released(inputs)
	return en_admin_builds_field_released(inputs)
});
