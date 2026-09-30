/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ date: NonNullable<unknown> }} Profile_JoinedInputs */

const en_profile_joined = /** @type {(inputs: Profile_JoinedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Joined on ${i?.date}`)
};

const es_profile_joined = /** @type {(inputs: Profile_JoinedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Se unió el ${i?.date}`)
};

const de_profile_joined = /** @type {(inputs: Profile_JoinedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dabei seit ${i?.date}`)
};

const fr_profile_joined = /** @type {(inputs: Profile_JoinedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Inscrit le ${i?.date}`)
};

const it_profile_joined = /** @type {(inputs: Profile_JoinedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Iscritto il ${i?.date}`)
};

const nl_profile_joined = /** @type {(inputs: Profile_JoinedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Lid sinds ${i?.date}`)
};

const pl_profile_joined = /** @type {(inputs: Profile_JoinedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dołączył(a) ${i?.date}`)
};

const pt_profile_joined = /** @type {(inputs: Profile_JoinedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Entrou em ${i?.date}`)
};

const ru_profile_joined = /** @type {(inputs: Profile_JoinedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`На сайте с ${i?.date}`)
};

const sv_profile_joined = /** @type {(inputs: Profile_JoinedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Gick med ${i?.date}`)
};

const tr_profile_joined = /** @type {(inputs: Profile_JoinedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Katılma tarihi: ${i?.date}`)
};

const zh_profile_joined = /** @type {(inputs: Profile_JoinedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`加入于 ${i?.date}`)
};

const ja_profile_joined = /** @type {(inputs: Profile_JoinedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date} に参加`)
};

/**
* | output |
* | --- |
* | "Joined on {date}" |
*
* @param {Profile_JoinedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_joined = /** @type {((inputs: Profile_JoinedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_JoinedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_joined(inputs)
	if (locale === "de") return de_profile_joined(inputs)
	if (locale === "fr") return fr_profile_joined(inputs)
	if (locale === "it") return it_profile_joined(inputs)
	if (locale === "nl") return nl_profile_joined(inputs)
	if (locale === "pl") return pl_profile_joined(inputs)
	if (locale === "pt") return pt_profile_joined(inputs)
	if (locale === "ru") return ru_profile_joined(inputs)
	if (locale === "sv") return sv_profile_joined(inputs)
	if (locale === "tr") return tr_profile_joined(inputs)
	if (locale === "zh") return zh_profile_joined(inputs)
	if (locale === "ja") return ja_profile_joined(inputs)
	return en_profile_joined(inputs)
});
