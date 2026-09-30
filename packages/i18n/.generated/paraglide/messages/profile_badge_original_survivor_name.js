/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ year: NonNullable<unknown> }} Profile_Badge_Original_Survivor_NameInputs */

const en_profile_badge_original_survivor_name = /** @type {(inputs: Profile_Badge_Original_Survivor_NameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Original Survivor ${i?.year}`)
};

const es_profile_badge_original_survivor_name = /** @type {(inputs: Profile_Badge_Original_Survivor_NameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Superviviente original ${i?.year}`)
};

const de_profile_badge_original_survivor_name = /** @type {(inputs: Profile_Badge_Original_Survivor_NameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ursprünglicher Überlebender ${i?.year}`)
};

const fr_profile_badge_original_survivor_name = /** @type {(inputs: Profile_Badge_Original_Survivor_NameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Survivant d’origine ${i?.year}`)
};

const it_profile_badge_original_survivor_name = /** @type {(inputs: Profile_Badge_Original_Survivor_NameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sopravvissuto originale ${i?.year}`)
};

const nl_profile_badge_original_survivor_name = /** @type {(inputs: Profile_Badge_Original_Survivor_NameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Oorspronkelijke overlevende ${i?.year}`)
};

const pl_profile_badge_original_survivor_name = /** @type {(inputs: Profile_Badge_Original_Survivor_NameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Pierwszy ocalały ${i?.year}`)
};

const pt_profile_badge_original_survivor_name = /** @type {(inputs: Profile_Badge_Original_Survivor_NameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sobrevivente original ${i?.year}`)
};

const ru_profile_badge_original_survivor_name = /** @type {(inputs: Profile_Badge_Original_Survivor_NameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Первый выживший ${i?.year}`)
};

const sv_profile_badge_original_survivor_name = /** @type {(inputs: Profile_Badge_Original_Survivor_NameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ursprunglig överlevare ${i?.year}`)
};

const tr_profile_badge_original_survivor_name = /** @type {(inputs: Profile_Badge_Original_Survivor_NameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`İlk Hayatta Kalan ${i?.year}`)
};

const zh_profile_badge_original_survivor_name = /** @type {(inputs: Profile_Badge_Original_Survivor_NameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.year} 元老幸存者`)
};

const ja_profile_badge_original_survivor_name = /** @type {(inputs: Profile_Badge_Original_Survivor_NameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`初期サバイバー ${i?.year}`)
};

/**
* | output |
* | --- |
* | "Original Survivor {year}" |
*
* @param {Profile_Badge_Original_Survivor_NameInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_badge_original_survivor_name = /** @type {((inputs: Profile_Badge_Original_Survivor_NameInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badge_Original_Survivor_NameInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_badge_original_survivor_name(inputs)
	if (locale === "de") return de_profile_badge_original_survivor_name(inputs)
	if (locale === "fr") return fr_profile_badge_original_survivor_name(inputs)
	if (locale === "it") return it_profile_badge_original_survivor_name(inputs)
	if (locale === "nl") return nl_profile_badge_original_survivor_name(inputs)
	if (locale === "pl") return pl_profile_badge_original_survivor_name(inputs)
	if (locale === "pt") return pt_profile_badge_original_survivor_name(inputs)
	if (locale === "ru") return ru_profile_badge_original_survivor_name(inputs)
	if (locale === "sv") return sv_profile_badge_original_survivor_name(inputs)
	if (locale === "tr") return tr_profile_badge_original_survivor_name(inputs)
	if (locale === "zh") return zh_profile_badge_original_survivor_name(inputs)
	if (locale === "ja") return ja_profile_badge_original_survivor_name(inputs)
	return en_profile_badge_original_survivor_name(inputs)
});
