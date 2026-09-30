/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Profile_Builds_TitleInputs */

const en_profile_builds_title = /** @type {(inputs: Profile_Builds_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Builds by ${i?.name}`)
};

const es_profile_builds_title = /** @type {(inputs: Profile_Builds_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Builds de ${i?.name}`)
};

const de_profile_builds_title = /** @type {(inputs: Profile_Builds_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Builds von ${i?.name}`)
};

const fr_profile_builds_title = /** @type {(inputs: Profile_Builds_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Builds de ${i?.name}`)
};

const it_profile_builds_title = /** @type {(inputs: Profile_Builds_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Build di ${i?.name}`)
};

const nl_profile_builds_title = /** @type {(inputs: Profile_Builds_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Builds van ${i?.name}`)
};

const pl_profile_builds_title = /** @type {(inputs: Profile_Builds_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Buildy: ${i?.name}`)
};

const pt_profile_builds_title = /** @type {(inputs: Profile_Builds_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Builds de ${i?.name}`)
};

const ru_profile_builds_title = /** @type {(inputs: Profile_Builds_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Постройки автора ${i?.name}`)
};

const sv_profile_builds_title = /** @type {(inputs: Profile_Builds_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Byggen av ${i?.name}`)
};

const tr_profile_builds_title = /** @type {(inputs: Profile_Builds_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} kullanıcısının yapıları`)
};

const zh_profile_builds_title = /** @type {(inputs: Profile_Builds_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} 的建筑`)
};

const ja_profile_builds_title = /** @type {(inputs: Profile_Builds_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} の建築`)
};

/**
* | output |
* | --- |
* | "Builds by {name}" |
*
* @param {Profile_Builds_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_builds_title = /** @type {((inputs: Profile_Builds_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Builds_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_builds_title(inputs)
	if (locale === "de") return de_profile_builds_title(inputs)
	if (locale === "fr") return fr_profile_builds_title(inputs)
	if (locale === "it") return it_profile_builds_title(inputs)
	if (locale === "nl") return nl_profile_builds_title(inputs)
	if (locale === "pl") return pl_profile_builds_title(inputs)
	if (locale === "pt") return pt_profile_builds_title(inputs)
	if (locale === "ru") return ru_profile_builds_title(inputs)
	if (locale === "sv") return sv_profile_builds_title(inputs)
	if (locale === "tr") return tr_profile_builds_title(inputs)
	if (locale === "zh") return zh_profile_builds_title(inputs)
	if (locale === "ja") return ja_profile_builds_title(inputs)
	return en_profile_builds_title(inputs)
});
