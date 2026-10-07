/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Users_Filter_Role_AllInputs */

const en_ranger_users_filter_role_all = /** @type {(inputs: Ranger_Users_Filter_Role_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Any role`)
};

const es_ranger_users_filter_role_all = /** @type {(inputs: Ranger_Users_Filter_Role_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cualquier rol`)
};

const de_ranger_users_filter_role_all = /** @type {(inputs: Ranger_Users_Filter_Role_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jede Rolle`)
};

const fr_ranger_users_filter_role_all = /** @type {(inputs: Ranger_Users_Filter_Role_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tous les rôles`)
};

const it_ranger_users_filter_role_all = /** @type {(inputs: Ranger_Users_Filter_Role_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qualsiasi ruolo`)
};

const nl_ranger_users_filter_role_all = /** @type {(inputs: Ranger_Users_Filter_Role_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elke rol`)
};

const pl_ranger_users_filter_role_all = /** @type {(inputs: Ranger_Users_Filter_Role_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dowolna rola`)
};

const pt_ranger_users_filter_role_all = /** @type {(inputs: Ranger_Users_Filter_Role_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qualquer função`)
};

const ru_ranger_users_filter_role_all = /** @type {(inputs: Ranger_Users_Filter_Role_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Любая роль`)
};

const sv_ranger_users_filter_role_all = /** @type {(inputs: Ranger_Users_Filter_Role_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alla roller`)
};

const tr_ranger_users_filter_role_all = /** @type {(inputs: Ranger_Users_Filter_Role_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tüm roller`)
};

const zh_ranger_users_filter_role_all = /** @type {(inputs: Ranger_Users_Filter_Role_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`任意角色`)
};

const ja_ranger_users_filter_role_all = /** @type {(inputs: Ranger_Users_Filter_Role_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべてのロール`)
};

/**
* | output |
* | --- |
* | "Any role" |
*
* @param {Ranger_Users_Filter_Role_AllInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_users_filter_role_all = /** @type {((inputs?: Ranger_Users_Filter_Role_AllInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Users_Filter_Role_AllInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_users_filter_role_all(inputs)
	if (locale === "de") return de_ranger_users_filter_role_all(inputs)
	if (locale === "fr") return fr_ranger_users_filter_role_all(inputs)
	if (locale === "it") return it_ranger_users_filter_role_all(inputs)
	if (locale === "nl") return nl_ranger_users_filter_role_all(inputs)
	if (locale === "pl") return pl_ranger_users_filter_role_all(inputs)
	if (locale === "pt") return pt_ranger_users_filter_role_all(inputs)
	if (locale === "ru") return ru_ranger_users_filter_role_all(inputs)
	if (locale === "sv") return sv_ranger_users_filter_role_all(inputs)
	if (locale === "tr") return tr_ranger_users_filter_role_all(inputs)
	if (locale === "zh") return zh_ranger_users_filter_role_all(inputs)
	if (locale === "ja") return ja_ranger_users_filter_role_all(inputs)
	return en_ranger_users_filter_role_all(inputs)
});
