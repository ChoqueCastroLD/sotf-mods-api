/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_User_Role_ConfirmInputs */

const en_ranger_user_role_confirm = /** @type {(inputs: Ranger_User_Role_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Change role`)
};

const es_ranger_user_role_confirm = /** @type {(inputs: Ranger_User_Role_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cambiar rol`)
};

const de_ranger_user_role_confirm = /** @type {(inputs: Ranger_User_Role_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rolle ändern`)
};

const fr_ranger_user_role_confirm = /** @type {(inputs: Ranger_User_Role_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Changer le rôle`)
};

const it_ranger_user_role_confirm = /** @type {(inputs: Ranger_User_Role_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cambia ruolo`)
};

const nl_ranger_user_role_confirm = /** @type {(inputs: Ranger_User_Role_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rol wijzigen`)
};

const pl_ranger_user_role_confirm = /** @type {(inputs: Ranger_User_Role_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zmień rolę`)
};

const pt_ranger_user_role_confirm = /** @type {(inputs: Ranger_User_Role_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mudar papel`)
};

const ru_ranger_user_role_confirm = /** @type {(inputs: Ranger_User_Role_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сменить роль`)
};

const sv_ranger_user_role_confirm = /** @type {(inputs: Ranger_User_Role_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ändra roll`)
};

const tr_ranger_user_role_confirm = /** @type {(inputs: Ranger_User_Role_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rolü değiştir`)
};

const zh_ranger_user_role_confirm = /** @type {(inputs: Ranger_User_Role_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更改角色`)
};

const ja_ranger_user_role_confirm = /** @type {(inputs: Ranger_User_Role_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ロールを変更`)
};

/**
* | output |
* | --- |
* | "Change role" |
*
* @param {Ranger_User_Role_ConfirmInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_user_role_confirm = /** @type {((inputs?: Ranger_User_Role_ConfirmInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_User_Role_ConfirmInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_user_role_confirm(inputs)
	if (locale === "de") return de_ranger_user_role_confirm(inputs)
	if (locale === "fr") return fr_ranger_user_role_confirm(inputs)
	if (locale === "it") return it_ranger_user_role_confirm(inputs)
	if (locale === "nl") return nl_ranger_user_role_confirm(inputs)
	if (locale === "pl") return pl_ranger_user_role_confirm(inputs)
	if (locale === "pt") return pt_ranger_user_role_confirm(inputs)
	if (locale === "ru") return ru_ranger_user_role_confirm(inputs)
	if (locale === "sv") return sv_ranger_user_role_confirm(inputs)
	if (locale === "tr") return tr_ranger_user_role_confirm(inputs)
	if (locale === "zh") return zh_ranger_user_role_confirm(inputs)
	if (locale === "ja") return ja_ranger_user_role_confirm(inputs)
	return en_ranger_user_role_confirm(inputs)
});
