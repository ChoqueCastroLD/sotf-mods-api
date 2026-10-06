/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Role_AdminInputs */

const en_profile_role_admin = /** @type {(inputs: Profile_Role_AdminInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Admin`)
};

const es_profile_role_admin = /** @type {(inputs: Profile_Role_AdminInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Administrador`)
};

const de_profile_role_admin = /** @type {(inputs: Profile_Role_AdminInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Admin`)
};

const fr_profile_role_admin = /** @type {(inputs: Profile_Role_AdminInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Administrateur`)
};

const it_profile_role_admin = /** @type {(inputs: Profile_Role_AdminInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Amministratore`)
};

const nl_profile_role_admin = /** @type {(inputs: Profile_Role_AdminInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beheerder`)
};

const pl_profile_role_admin = /** @type {(inputs: Profile_Role_AdminInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Administrator`)
};

const pt_profile_role_admin = /** @type {(inputs: Profile_Role_AdminInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Administrador`)
};

const ru_profile_role_admin = /** @type {(inputs: Profile_Role_AdminInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Администратор`)
};

const sv_profile_role_admin = /** @type {(inputs: Profile_Role_AdminInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Administratör`)
};

const tr_profile_role_admin = /** @type {(inputs: Profile_Role_AdminInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yönetici`)
};

const zh_profile_role_admin = /** @type {(inputs: Profile_Role_AdminInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`管理员`)
};

const ja_profile_role_admin = /** @type {(inputs: Profile_Role_AdminInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`管理者`)
};

/**
* | output |
* | --- |
* | "Admin" |
*
* @param {Profile_Role_AdminInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_role_admin = /** @type {((inputs?: Profile_Role_AdminInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Role_AdminInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_role_admin(inputs)
	if (locale === "de") return de_profile_role_admin(inputs)
	if (locale === "fr") return fr_profile_role_admin(inputs)
	if (locale === "it") return it_profile_role_admin(inputs)
	if (locale === "nl") return nl_profile_role_admin(inputs)
	if (locale === "pl") return pl_profile_role_admin(inputs)
	if (locale === "pt") return pt_profile_role_admin(inputs)
	if (locale === "ru") return ru_profile_role_admin(inputs)
	if (locale === "sv") return sv_profile_role_admin(inputs)
	if (locale === "tr") return tr_profile_role_admin(inputs)
	if (locale === "zh") return zh_profile_role_admin(inputs)
	if (locale === "ja") return ja_profile_role_admin(inputs)
	return en_profile_role_admin(inputs)
});
