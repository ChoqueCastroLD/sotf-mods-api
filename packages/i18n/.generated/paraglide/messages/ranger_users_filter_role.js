/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Users_Filter_RoleInputs */

const en_ranger_users_filter_role = /** @type {(inputs: Ranger_Users_Filter_RoleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Role`)
};

const es_ranger_users_filter_role = /** @type {(inputs: Ranger_Users_Filter_RoleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rol`)
};

const de_ranger_users_filter_role = /** @type {(inputs: Ranger_Users_Filter_RoleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rolle`)
};

const fr_ranger_users_filter_role = /** @type {(inputs: Ranger_Users_Filter_RoleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rôle`)
};

const it_ranger_users_filter_role = /** @type {(inputs: Ranger_Users_Filter_RoleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ruolo`)
};

const nl_ranger_users_filter_role = /** @type {(inputs: Ranger_Users_Filter_RoleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rol`)
};

const pl_ranger_users_filter_role = /** @type {(inputs: Ranger_Users_Filter_RoleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rola`)
};

const pt_ranger_users_filter_role = /** @type {(inputs: Ranger_Users_Filter_RoleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Função`)
};

const ru_ranger_users_filter_role = /** @type {(inputs: Ranger_Users_Filter_RoleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Роль`)
};

const sv_ranger_users_filter_role = /** @type {(inputs: Ranger_Users_Filter_RoleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Roll`)
};

const tr_ranger_users_filter_role = /** @type {(inputs: Ranger_Users_Filter_RoleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rol`)
};

const zh_ranger_users_filter_role = /** @type {(inputs: Ranger_Users_Filter_RoleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`角色`)
};

const ja_ranger_users_filter_role = /** @type {(inputs: Ranger_Users_Filter_RoleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ロール`)
};

/**
* | output |
* | --- |
* | "Role" |
*
* @param {Ranger_Users_Filter_RoleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_users_filter_role = /** @type {((inputs?: Ranger_Users_Filter_RoleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Users_Filter_RoleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_users_filter_role(inputs)
	if (locale === "de") return de_ranger_users_filter_role(inputs)
	if (locale === "fr") return fr_ranger_users_filter_role(inputs)
	if (locale === "it") return it_ranger_users_filter_role(inputs)
	if (locale === "nl") return nl_ranger_users_filter_role(inputs)
	if (locale === "pl") return pl_ranger_users_filter_role(inputs)
	if (locale === "pt") return pt_ranger_users_filter_role(inputs)
	if (locale === "ru") return ru_ranger_users_filter_role(inputs)
	if (locale === "sv") return sv_ranger_users_filter_role(inputs)
	if (locale === "tr") return tr_ranger_users_filter_role(inputs)
	if (locale === "zh") return zh_ranger_users_filter_role(inputs)
	if (locale === "ja") return ja_ranger_users_filter_role(inputs)
	return en_ranger_users_filter_role(inputs)
});
