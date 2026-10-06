/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ date: NonNullable<unknown> }} Profile_Member_SinceInputs */

const en_profile_member_since = /** @type {(inputs: Profile_Member_SinceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Member since ${i?.date}`)
};

const es_profile_member_since = /** @type {(inputs: Profile_Member_SinceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Miembro desde ${i?.date}`)
};

const de_profile_member_since = /** @type {(inputs: Profile_Member_SinceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mitglied seit ${i?.date}`)
};

const fr_profile_member_since = /** @type {(inputs: Profile_Member_SinceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Membre depuis le ${i?.date}`)
};

const it_profile_member_since = /** @type {(inputs: Profile_Member_SinceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Iscritto dal ${i?.date}`)
};

const nl_profile_member_since = /** @type {(inputs: Profile_Member_SinceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Lid sinds ${i?.date}`)
};

const pl_profile_member_since = /** @type {(inputs: Profile_Member_SinceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Członek od ${i?.date}`)
};

const pt_profile_member_since = /** @type {(inputs: Profile_Member_SinceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Membro desde ${i?.date}`)
};

const ru_profile_member_since = /** @type {(inputs: Profile_Member_SinceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Участник с ${i?.date}`)
};

const sv_profile_member_since = /** @type {(inputs: Profile_Member_SinceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Medlem sedan ${i?.date}`)
};

const tr_profile_member_since = /** @type {(inputs: Profile_Member_SinceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date} tarihinden beri üye`)
};

const zh_profile_member_since = /** @type {(inputs: Profile_Member_SinceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`注册于 ${i?.date}`)
};

const ja_profile_member_since = /** @type {(inputs: Profile_Member_SinceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date} から利用`)
};

/**
* | output |
* | --- |
* | "Member since {date}" |
*
* @param {Profile_Member_SinceInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_member_since = /** @type {((inputs: Profile_Member_SinceInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Member_SinceInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_member_since(inputs)
	if (locale === "de") return de_profile_member_since(inputs)
	if (locale === "fr") return fr_profile_member_since(inputs)
	if (locale === "it") return it_profile_member_since(inputs)
	if (locale === "nl") return nl_profile_member_since(inputs)
	if (locale === "pl") return pl_profile_member_since(inputs)
	if (locale === "pt") return pt_profile_member_since(inputs)
	if (locale === "ru") return ru_profile_member_since(inputs)
	if (locale === "sv") return sv_profile_member_since(inputs)
	if (locale === "tr") return tr_profile_member_since(inputs)
	if (locale === "zh") return zh_profile_member_since(inputs)
	if (locale === "ja") return ja_profile_member_since(inputs)
	return en_profile_member_since(inputs)
});
