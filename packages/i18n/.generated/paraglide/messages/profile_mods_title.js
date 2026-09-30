/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Profile_Mods_TitleInputs */

const en_profile_mods_title = /** @type {(inputs: Profile_Mods_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mods by ${i?.name}`)
};

const es_profile_mods_title = /** @type {(inputs: Profile_Mods_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mods de ${i?.name}`)
};

const de_profile_mods_title = /** @type {(inputs: Profile_Mods_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mods von ${i?.name}`)
};

const fr_profile_mods_title = /** @type {(inputs: Profile_Mods_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mods de ${i?.name}`)
};

const it_profile_mods_title = /** @type {(inputs: Profile_Mods_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mod di ${i?.name}`)
};

const nl_profile_mods_title = /** @type {(inputs: Profile_Mods_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mods van ${i?.name}`)
};

const pl_profile_mods_title = /** @type {(inputs: Profile_Mods_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mody: ${i?.name}`)
};

const pt_profile_mods_title = /** @type {(inputs: Profile_Mods_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mods de ${i?.name}`)
};

const ru_profile_mods_title = /** @type {(inputs: Profile_Mods_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Моды автора ${i?.name}`)
};

const sv_profile_mods_title = /** @type {(inputs: Profile_Mods_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Moddar av ${i?.name}`)
};

const tr_profile_mods_title = /** @type {(inputs: Profile_Mods_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} kullanıcısının modları`)
};

const zh_profile_mods_title = /** @type {(inputs: Profile_Mods_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} 的模组`)
};

const ja_profile_mods_title = /** @type {(inputs: Profile_Mods_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} の MOD`)
};

/**
* | output |
* | --- |
* | "Mods by {name}" |
*
* @param {Profile_Mods_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_mods_title = /** @type {((inputs: Profile_Mods_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Mods_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_mods_title(inputs)
	if (locale === "de") return de_profile_mods_title(inputs)
	if (locale === "fr") return fr_profile_mods_title(inputs)
	if (locale === "it") return it_profile_mods_title(inputs)
	if (locale === "nl") return nl_profile_mods_title(inputs)
	if (locale === "pl") return pl_profile_mods_title(inputs)
	if (locale === "pt") return pt_profile_mods_title(inputs)
	if (locale === "ru") return ru_profile_mods_title(inputs)
	if (locale === "sv") return sv_profile_mods_title(inputs)
	if (locale === "tr") return tr_profile_mods_title(inputs)
	if (locale === "zh") return zh_profile_mods_title(inputs)
	if (locale === "ja") return ja_profile_mods_title(inputs)
	return en_profile_mods_title(inputs)
});
