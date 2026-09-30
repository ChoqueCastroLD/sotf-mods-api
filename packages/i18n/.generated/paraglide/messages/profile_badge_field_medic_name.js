/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Badge_Field_Medic_NameInputs */

const en_profile_badge_field_medic_name = /** @type {(inputs: Profile_Badge_Field_Medic_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Field Medic`)
};

const es_profile_badge_field_medic_name = /** @type {(inputs: Profile_Badge_Field_Medic_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Médico de campo`)
};

const de_profile_badge_field_medic_name = /** @type {(inputs: Profile_Badge_Field_Medic_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Feldsanitäter`)
};

const fr_profile_badge_field_medic_name = /** @type {(inputs: Profile_Badge_Field_Medic_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Médecin de terrain`)
};

const it_profile_badge_field_medic_name = /** @type {(inputs: Profile_Badge_Field_Medic_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Medico da campo`)
};

const nl_profile_badge_field_medic_name = /** @type {(inputs: Profile_Badge_Field_Medic_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veldhospik`)
};

const pl_profile_badge_field_medic_name = /** @type {(inputs: Profile_Badge_Field_Medic_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sanitariusz polowy`)
};

const pt_profile_badge_field_medic_name = /** @type {(inputs: Profile_Badge_Field_Medic_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Médico de campo`)
};

const ru_profile_badge_field_medic_name = /** @type {(inputs: Profile_Badge_Field_Medic_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Полевой медик`)
};

const sv_profile_badge_field_medic_name = /** @type {(inputs: Profile_Badge_Field_Medic_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fältsjukvårdare`)
};

const tr_profile_badge_field_medic_name = /** @type {(inputs: Profile_Badge_Field_Medic_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saha Sıhhiyecisi`)
};

const zh_profile_badge_field_medic_name = /** @type {(inputs: Profile_Badge_Field_Medic_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`战地医生`)
};

const ja_profile_badge_field_medic_name = /** @type {(inputs: Profile_Badge_Field_Medic_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フィールドメディック`)
};

/**
* | output |
* | --- |
* | "Field Medic" |
*
* @param {Profile_Badge_Field_Medic_NameInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_badge_field_medic_name = /** @type {((inputs?: Profile_Badge_Field_Medic_NameInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badge_Field_Medic_NameInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_badge_field_medic_name(inputs)
	if (locale === "de") return de_profile_badge_field_medic_name(inputs)
	if (locale === "fr") return fr_profile_badge_field_medic_name(inputs)
	if (locale === "it") return it_profile_badge_field_medic_name(inputs)
	if (locale === "nl") return nl_profile_badge_field_medic_name(inputs)
	if (locale === "pl") return pl_profile_badge_field_medic_name(inputs)
	if (locale === "pt") return pt_profile_badge_field_medic_name(inputs)
	if (locale === "ru") return ru_profile_badge_field_medic_name(inputs)
	if (locale === "sv") return sv_profile_badge_field_medic_name(inputs)
	if (locale === "tr") return tr_profile_badge_field_medic_name(inputs)
	if (locale === "zh") return zh_profile_badge_field_medic_name(inputs)
	if (locale === "ja") return ja_profile_badge_field_medic_name(inputs)
	return en_profile_badge_field_medic_name(inputs)
});
