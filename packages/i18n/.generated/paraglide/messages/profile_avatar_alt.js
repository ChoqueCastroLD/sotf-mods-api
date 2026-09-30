/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Profile_Avatar_AltInputs */

const en_profile_avatar_alt = /** @type {(inputs: Profile_Avatar_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Avatar of ${i?.name}`)
};

const es_profile_avatar_alt = /** @type {(inputs: Profile_Avatar_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Avatar de ${i?.name}`)
};

const de_profile_avatar_alt = /** @type {(inputs: Profile_Avatar_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Avatar von ${i?.name}`)
};

const fr_profile_avatar_alt = /** @type {(inputs: Profile_Avatar_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Avatar de ${i?.name}`)
};

const it_profile_avatar_alt = /** @type {(inputs: Profile_Avatar_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Avatar di ${i?.name}`)
};

const nl_profile_avatar_alt = /** @type {(inputs: Profile_Avatar_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Avatar van ${i?.name}`)
};

const pl_profile_avatar_alt = /** @type {(inputs: Profile_Avatar_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Awatar ${i?.name}`)
};

const pt_profile_avatar_alt = /** @type {(inputs: Profile_Avatar_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Avatar de ${i?.name}`)
};

const ru_profile_avatar_alt = /** @type {(inputs: Profile_Avatar_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Аватар ${i?.name}`)
};

const sv_profile_avatar_alt = /** @type {(inputs: Profile_Avatar_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Avatar för ${i?.name}`)
};

const tr_profile_avatar_alt = /** @type {(inputs: Profile_Avatar_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} kullanıcısının avatarı`)
};

const zh_profile_avatar_alt = /** @type {(inputs: Profile_Avatar_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} 的头像`)
};

const ja_profile_avatar_alt = /** @type {(inputs: Profile_Avatar_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} のアバター`)
};

/**
* | output |
* | --- |
* | "Avatar of {name}" |
*
* @param {Profile_Avatar_AltInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_avatar_alt = /** @type {((inputs: Profile_Avatar_AltInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Avatar_AltInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_avatar_alt(inputs)
	if (locale === "de") return de_profile_avatar_alt(inputs)
	if (locale === "fr") return fr_profile_avatar_alt(inputs)
	if (locale === "it") return it_profile_avatar_alt(inputs)
	if (locale === "nl") return nl_profile_avatar_alt(inputs)
	if (locale === "pl") return pl_profile_avatar_alt(inputs)
	if (locale === "pt") return pt_profile_avatar_alt(inputs)
	if (locale === "ru") return ru_profile_avatar_alt(inputs)
	if (locale === "sv") return sv_profile_avatar_alt(inputs)
	if (locale === "tr") return tr_profile_avatar_alt(inputs)
	if (locale === "zh") return zh_profile_avatar_alt(inputs)
	if (locale === "ja") return ja_profile_avatar_alt(inputs)
	return en_profile_avatar_alt(inputs)
});
