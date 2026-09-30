/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Profile_Follow_NameInputs */

const en_profile_follow_name = /** @type {(inputs: Profile_Follow_NameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Follow ${i?.name}`)
};

const es_profile_follow_name = /** @type {(inputs: Profile_Follow_NameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Seguir a ${i?.name}`)
};

const de_profile_follow_name = /** @type {(inputs: Profile_Follow_NameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} folgen`)
};

const fr_profile_follow_name = /** @type {(inputs: Profile_Follow_NameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Suivre ${i?.name}`)
};

const it_profile_follow_name = /** @type {(inputs: Profile_Follow_NameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Segui ${i?.name}`)
};

const nl_profile_follow_name = /** @type {(inputs: Profile_Follow_NameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} volgen`)
};

const pl_profile_follow_name = /** @type {(inputs: Profile_Follow_NameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Obserwuj: ${i?.name}`)
};

const pt_profile_follow_name = /** @type {(inputs: Profile_Follow_NameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Seguir ${i?.name}`)
};

const ru_profile_follow_name = /** @type {(inputs: Profile_Follow_NameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Подписаться на ${i?.name}`)
};

const sv_profile_follow_name = /** @type {(inputs: Profile_Follow_NameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Följ ${i?.name}`)
};

const tr_profile_follow_name = /** @type {(inputs: Profile_Follow_NameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} kullanıcısını takip et`)
};

const zh_profile_follow_name = /** @type {(inputs: Profile_Follow_NameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`关注 ${i?.name}`)
};

const ja_profile_follow_name = /** @type {(inputs: Profile_Follow_NameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} をフォロー`)
};

/**
* | output |
* | --- |
* | "Follow {name}" |
*
* @param {Profile_Follow_NameInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_follow_name = /** @type {((inputs: Profile_Follow_NameInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Follow_NameInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_follow_name(inputs)
	if (locale === "de") return de_profile_follow_name(inputs)
	if (locale === "fr") return fr_profile_follow_name(inputs)
	if (locale === "it") return it_profile_follow_name(inputs)
	if (locale === "nl") return nl_profile_follow_name(inputs)
	if (locale === "pl") return pl_profile_follow_name(inputs)
	if (locale === "pt") return pt_profile_follow_name(inputs)
	if (locale === "ru") return ru_profile_follow_name(inputs)
	if (locale === "sv") return sv_profile_follow_name(inputs)
	if (locale === "tr") return tr_profile_follow_name(inputs)
	if (locale === "zh") return zh_profile_follow_name(inputs)
	if (locale === "ja") return ja_profile_follow_name(inputs)
	return en_profile_follow_name(inputs)
});
