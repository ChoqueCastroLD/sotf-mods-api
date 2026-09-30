/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Badge_Group_RolesInputs */

const en_profile_badge_group_roles = /** @type {(inputs: Profile_Badge_Group_RolesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Roles`)
};

const es_profile_badge_group_roles = /** @type {(inputs: Profile_Badge_Group_RolesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Roles`)
};

const de_profile_badge_group_roles = /** @type {(inputs: Profile_Badge_Group_RolesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rollen`)
};

const fr_profile_badge_group_roles = /** @type {(inputs: Profile_Badge_Group_RolesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rôles`)
};

const it_profile_badge_group_roles = /** @type {(inputs: Profile_Badge_Group_RolesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ruoli`)
};

const nl_profile_badge_group_roles = /** @type {(inputs: Profile_Badge_Group_RolesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rollen`)
};

const pl_profile_badge_group_roles = /** @type {(inputs: Profile_Badge_Group_RolesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Role`)
};

const pt_profile_badge_group_roles = /** @type {(inputs: Profile_Badge_Group_RolesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Funções`)
};

const ru_profile_badge_group_roles = /** @type {(inputs: Profile_Badge_Group_RolesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Роли`)
};

const sv_profile_badge_group_roles = /** @type {(inputs: Profile_Badge_Group_RolesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Roller`)
};

const tr_profile_badge_group_roles = /** @type {(inputs: Profile_Badge_Group_RolesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Roller`)
};

const zh_profile_badge_group_roles = /** @type {(inputs: Profile_Badge_Group_RolesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`身份`)
};

const ja_profile_badge_group_roles = /** @type {(inputs: Profile_Badge_Group_RolesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ロール`)
};

/**
* | output |
* | --- |
* | "Roles" |
*
* @param {Profile_Badge_Group_RolesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_badge_group_roles = /** @type {((inputs?: Profile_Badge_Group_RolesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badge_Group_RolesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_badge_group_roles(inputs)
	if (locale === "de") return de_profile_badge_group_roles(inputs)
	if (locale === "fr") return fr_profile_badge_group_roles(inputs)
	if (locale === "it") return it_profile_badge_group_roles(inputs)
	if (locale === "nl") return nl_profile_badge_group_roles(inputs)
	if (locale === "pl") return pl_profile_badge_group_roles(inputs)
	if (locale === "pt") return pt_profile_badge_group_roles(inputs)
	if (locale === "ru") return ru_profile_badge_group_roles(inputs)
	if (locale === "sv") return sv_profile_badge_group_roles(inputs)
	if (locale === "tr") return tr_profile_badge_group_roles(inputs)
	if (locale === "zh") return zh_profile_badge_group_roles(inputs)
	if (locale === "ja") return ja_profile_badge_group_roles(inputs)
	return en_profile_badge_group_roles(inputs)
});
