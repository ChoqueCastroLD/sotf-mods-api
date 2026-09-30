/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Profile_Kits_TitleInputs */

const en_profile_kits_title = /** @type {(inputs: Profile_Kits_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Kits by ${i?.name}`)
};

const es_profile_kits_title = /** @type {(inputs: Profile_Kits_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Kits de ${i?.name}`)
};

const de_profile_kits_title = /** @type {(inputs: Profile_Kits_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Kits von ${i?.name}`)
};

const fr_profile_kits_title = /** @type {(inputs: Profile_Kits_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Kits de ${i?.name}`)
};

const it_profile_kits_title = /** @type {(inputs: Profile_Kits_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Kit di ${i?.name}`)
};

const nl_profile_kits_title = /** @type {(inputs: Profile_Kits_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Kits van ${i?.name}`)
};

const pl_profile_kits_title = /** @type {(inputs: Profile_Kits_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zestawy: ${i?.name}`)
};

const pt_profile_kits_title = /** @type {(inputs: Profile_Kits_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Kits de ${i?.name}`)
};

const ru_profile_kits_title = /** @type {(inputs: Profile_Kits_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Наборы автора ${i?.name}`)
};

const sv_profile_kits_title = /** @type {(inputs: Profile_Kits_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Kit av ${i?.name}`)
};

const tr_profile_kits_title = /** @type {(inputs: Profile_Kits_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} kullanıcısının kitleri`)
};

const zh_profile_kits_title = /** @type {(inputs: Profile_Kits_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} 的合集`)
};

const ja_profile_kits_title = /** @type {(inputs: Profile_Kits_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} のキット`)
};

/**
* | output |
* | --- |
* | "Kits by {name}" |
*
* @param {Profile_Kits_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_kits_title = /** @type {((inputs: Profile_Kits_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Kits_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_kits_title(inputs)
	if (locale === "de") return de_profile_kits_title(inputs)
	if (locale === "fr") return fr_profile_kits_title(inputs)
	if (locale === "it") return it_profile_kits_title(inputs)
	if (locale === "nl") return nl_profile_kits_title(inputs)
	if (locale === "pl") return pl_profile_kits_title(inputs)
	if (locale === "pt") return pt_profile_kits_title(inputs)
	if (locale === "ru") return ru_profile_kits_title(inputs)
	if (locale === "sv") return sv_profile_kits_title(inputs)
	if (locale === "tr") return tr_profile_kits_title(inputs)
	if (locale === "zh") return zh_profile_kits_title(inputs)
	if (locale === "ja") return ja_profile_kits_title(inputs)
	return en_profile_kits_title(inputs)
});
