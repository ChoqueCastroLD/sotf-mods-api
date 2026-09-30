/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Role_AdminInputs */

const en_ranger_role_admin = /** @type {(inputs: Ranger_Role_AdminInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Admin`)
};

const es_ranger_role_admin = /** @type {(inputs: Ranger_Role_AdminInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Admin`)
};

const de_ranger_role_admin = /** @type {(inputs: Ranger_Role_AdminInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Admin`)
};

const fr_ranger_role_admin = /** @type {(inputs: Ranger_Role_AdminInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Admin`)
};

const it_ranger_role_admin = /** @type {(inputs: Ranger_Role_AdminInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Admin`)
};

const nl_ranger_role_admin = /** @type {(inputs: Ranger_Role_AdminInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Admin`)
};

const pl_ranger_role_admin = /** @type {(inputs: Ranger_Role_AdminInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Administrator`)
};

const pt_ranger_role_admin = /** @type {(inputs: Ranger_Role_AdminInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Admin`)
};

const ru_ranger_role_admin = /** @type {(inputs: Ranger_Role_AdminInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Администратор`)
};

const sv_ranger_role_admin = /** @type {(inputs: Ranger_Role_AdminInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Admin`)
};

const tr_ranger_role_admin = /** @type {(inputs: Ranger_Role_AdminInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yönetici`)
};

const zh_ranger_role_admin = /** @type {(inputs: Ranger_Role_AdminInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`管理员`)
};

const ja_ranger_role_admin = /** @type {(inputs: Ranger_Role_AdminInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`管理者`)
};

/**
* | output |
* | --- |
* | "Admin" |
*
* @param {Ranger_Role_AdminInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_role_admin = /** @type {((inputs?: Ranger_Role_AdminInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Role_AdminInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_role_admin(inputs)
	if (locale === "de") return de_ranger_role_admin(inputs)
	if (locale === "fr") return fr_ranger_role_admin(inputs)
	if (locale === "it") return it_ranger_role_admin(inputs)
	if (locale === "nl") return nl_ranger_role_admin(inputs)
	if (locale === "pl") return pl_ranger_role_admin(inputs)
	if (locale === "pt") return pt_ranger_role_admin(inputs)
	if (locale === "ru") return ru_ranger_role_admin(inputs)
	if (locale === "sv") return sv_ranger_role_admin(inputs)
	if (locale === "tr") return tr_ranger_role_admin(inputs)
	if (locale === "zh") return zh_ranger_role_admin(inputs)
	if (locale === "ja") return ja_ranger_role_admin(inputs)
	return en_ranger_role_admin(inputs)
});
