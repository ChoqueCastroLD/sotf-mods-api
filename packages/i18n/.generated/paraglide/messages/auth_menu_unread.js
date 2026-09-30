/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Menu_UnreadInputs */

const en_auth_menu_unread = /** @type {(inputs: Auth_Menu_UnreadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unread:`)
};

const es_auth_menu_unread = /** @type {(inputs: Auth_Menu_UnreadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sin leer:`)
};

const de_auth_menu_unread = /** @type {(inputs: Auth_Menu_UnreadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ungelesen:`)
};

const fr_auth_menu_unread = /** @type {(inputs: Auth_Menu_UnreadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non lus :`)
};

const it_auth_menu_unread = /** @type {(inputs: Auth_Menu_UnreadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non letti:`)
};

const nl_auth_menu_unread = /** @type {(inputs: Auth_Menu_UnreadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ongelezen:`)
};

const pl_auth_menu_unread = /** @type {(inputs: Auth_Menu_UnreadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieprzeczytane:`)
};

const pt_auth_menu_unread = /** @type {(inputs: Auth_Menu_UnreadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não lidas:`)
};

const ru_auth_menu_unread = /** @type {(inputs: Auth_Menu_UnreadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Непрочитанные:`)
};

const sv_auth_menu_unread = /** @type {(inputs: Auth_Menu_UnreadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Olästa:`)
};

const tr_auth_menu_unread = /** @type {(inputs: Auth_Menu_UnreadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Okunmamış:`)
};

const zh_auth_menu_unread = /** @type {(inputs: Auth_Menu_UnreadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未读：`)
};

const ja_auth_menu_unread = /** @type {(inputs: Auth_Menu_UnreadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未読：`)
};

/**
* | output |
* | --- |
* | "Unread:" |
*
* @param {Auth_Menu_UnreadInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_menu_unread = /** @type {((inputs?: Auth_Menu_UnreadInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Menu_UnreadInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_menu_unread(inputs)
	if (locale === "de") return de_auth_menu_unread(inputs)
	if (locale === "fr") return fr_auth_menu_unread(inputs)
	if (locale === "it") return it_auth_menu_unread(inputs)
	if (locale === "nl") return nl_auth_menu_unread(inputs)
	if (locale === "pl") return pl_auth_menu_unread(inputs)
	if (locale === "pt") return pt_auth_menu_unread(inputs)
	if (locale === "ru") return ru_auth_menu_unread(inputs)
	if (locale === "sv") return sv_auth_menu_unread(inputs)
	if (locale === "tr") return tr_auth_menu_unread(inputs)
	if (locale === "zh") return zh_auth_menu_unread(inputs)
	if (locale === "ja") return ja_auth_menu_unread(inputs)
	return en_auth_menu_unread(inputs)
});
