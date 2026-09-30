/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_Badge_Name_Field_MedicInputs */

const en_signals_badge_name_field_medic = /** @type {(inputs: Signals_Badge_Name_Field_MedicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Field Medic`)
};

const es_signals_badge_name_field_medic = /** @type {(inputs: Signals_Badge_Name_Field_MedicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Médico de campo`)
};

const de_signals_badge_name_field_medic = /** @type {(inputs: Signals_Badge_Name_Field_MedicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Feldsanitäter`)
};

const fr_signals_badge_name_field_medic = /** @type {(inputs: Signals_Badge_Name_Field_MedicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Médecin de terrain`)
};

const it_signals_badge_name_field_medic = /** @type {(inputs: Signals_Badge_Name_Field_MedicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Medico da campo`)
};

const nl_signals_badge_name_field_medic = /** @type {(inputs: Signals_Badge_Name_Field_MedicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veldhospik`)
};

const pl_signals_badge_name_field_medic = /** @type {(inputs: Signals_Badge_Name_Field_MedicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sanitariusz polowy`)
};

const pt_signals_badge_name_field_medic = /** @type {(inputs: Signals_Badge_Name_Field_MedicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Médico de campo`)
};

const ru_signals_badge_name_field_medic = /** @type {(inputs: Signals_Badge_Name_Field_MedicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Полевой медик`)
};

const sv_signals_badge_name_field_medic = /** @type {(inputs: Signals_Badge_Name_Field_MedicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fältsjukvårdare`)
};

const tr_signals_badge_name_field_medic = /** @type {(inputs: Signals_Badge_Name_Field_MedicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saha Sıhhiyecisi`)
};

const zh_signals_badge_name_field_medic = /** @type {(inputs: Signals_Badge_Name_Field_MedicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`战地医生`)
};

const ja_signals_badge_name_field_medic = /** @type {(inputs: Signals_Badge_Name_Field_MedicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フィールドメディック`)
};

/**
* | output |
* | --- |
* | "Field Medic" |
*
* @param {Signals_Badge_Name_Field_MedicInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_badge_name_field_medic = /** @type {((inputs?: Signals_Badge_Name_Field_MedicInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Badge_Name_Field_MedicInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_badge_name_field_medic(inputs)
	if (locale === "de") return de_signals_badge_name_field_medic(inputs)
	if (locale === "fr") return fr_signals_badge_name_field_medic(inputs)
	if (locale === "it") return it_signals_badge_name_field_medic(inputs)
	if (locale === "nl") return nl_signals_badge_name_field_medic(inputs)
	if (locale === "pl") return pl_signals_badge_name_field_medic(inputs)
	if (locale === "pt") return pt_signals_badge_name_field_medic(inputs)
	if (locale === "ru") return ru_signals_badge_name_field_medic(inputs)
	if (locale === "sv") return sv_signals_badge_name_field_medic(inputs)
	if (locale === "tr") return tr_signals_badge_name_field_medic(inputs)
	if (locale === "zh") return zh_signals_badge_name_field_medic(inputs)
	if (locale === "ja") return ja_signals_badge_name_field_medic(inputs)
	return en_signals_badge_name_field_medic(inputs)
});
