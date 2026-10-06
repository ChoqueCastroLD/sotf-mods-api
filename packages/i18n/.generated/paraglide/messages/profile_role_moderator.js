/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Role_ModeratorInputs */

const en_profile_role_moderator = /** @type {(inputs: Profile_Role_ModeratorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderator`)
};

const es_profile_role_moderator = /** @type {(inputs: Profile_Role_ModeratorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderador`)
};

const de_profile_role_moderator = /** @type {(inputs: Profile_Role_ModeratorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderator`)
};

const fr_profile_role_moderator = /** @type {(inputs: Profile_Role_ModeratorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modérateur`)
};

const it_profile_role_moderator = /** @type {(inputs: Profile_Role_ModeratorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderatore`)
};

const nl_profile_role_moderator = /** @type {(inputs: Profile_Role_ModeratorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderator`)
};

const pl_profile_role_moderator = /** @type {(inputs: Profile_Role_ModeratorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderator`)
};

const pt_profile_role_moderator = /** @type {(inputs: Profile_Role_ModeratorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderador`)
};

const ru_profile_role_moderator = /** @type {(inputs: Profile_Role_ModeratorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Модератор`)
};

const sv_profile_role_moderator = /** @type {(inputs: Profile_Role_ModeratorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderator`)
};

const tr_profile_role_moderator = /** @type {(inputs: Profile_Role_ModeratorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderatör`)
};

const zh_profile_role_moderator = /** @type {(inputs: Profile_Role_ModeratorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`版主`)
};

const ja_profile_role_moderator = /** @type {(inputs: Profile_Role_ModeratorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`モデレーター`)
};

/**
* | output |
* | --- |
* | "Moderator" |
*
* @param {Profile_Role_ModeratorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_role_moderator = /** @type {((inputs?: Profile_Role_ModeratorInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Role_ModeratorInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_role_moderator(inputs)
	if (locale === "de") return de_profile_role_moderator(inputs)
	if (locale === "fr") return fr_profile_role_moderator(inputs)
	if (locale === "it") return it_profile_role_moderator(inputs)
	if (locale === "nl") return nl_profile_role_moderator(inputs)
	if (locale === "pl") return pl_profile_role_moderator(inputs)
	if (locale === "pt") return pt_profile_role_moderator(inputs)
	if (locale === "ru") return ru_profile_role_moderator(inputs)
	if (locale === "sv") return sv_profile_role_moderator(inputs)
	if (locale === "tr") return tr_profile_role_moderator(inputs)
	if (locale === "zh") return zh_profile_role_moderator(inputs)
	if (locale === "ja") return ja_profile_role_moderator(inputs)
	return en_profile_role_moderator(inputs)
});
