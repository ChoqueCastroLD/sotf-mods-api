/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Menu_Signed_In_AsInputs */

const en_auth_menu_signed_in_as = /** @type {(inputs: Auth_Menu_Signed_In_AsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logged in as`)
};

const es_auth_menu_signed_in_as = /** @type {(inputs: Auth_Menu_Signed_In_AsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sesión iniciada como`)
};

const de_auth_menu_signed_in_as = /** @type {(inputs: Auth_Menu_Signed_In_AsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Angemeldet als`)
};

const fr_auth_menu_signed_in_as = /** @type {(inputs: Auth_Menu_Signed_In_AsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connecté en tant que`)
};

const it_auth_menu_signed_in_as = /** @type {(inputs: Auth_Menu_Signed_In_AsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Accesso effettuato come`)
};

const nl_auth_menu_signed_in_as = /** @type {(inputs: Auth_Menu_Signed_In_AsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingelogd als`)
};

const pl_auth_menu_signed_in_as = /** @type {(inputs: Auth_Menu_Signed_In_AsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zalogowano jako`)
};

const pt_auth_menu_signed_in_as = /** @type {(inputs: Auth_Menu_Signed_In_AsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conectado como`)
};

const ru_auth_menu_signed_in_as = /** @type {(inputs: Auth_Menu_Signed_In_AsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вы вошли как`)
};

const sv_auth_menu_signed_in_as = /** @type {(inputs: Auth_Menu_Signed_In_AsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inloggad som`)
};

const tr_auth_menu_signed_in_as = /** @type {(inputs: Auth_Menu_Signed_In_AsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Giriş yapan`)
};

const zh_auth_menu_signed_in_as = /** @type {(inputs: Auth_Menu_Signed_In_AsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`当前登录`)
};

const ja_auth_menu_signed_in_as = /** @type {(inputs: Auth_Menu_Signed_In_AsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ログイン中`)
};

/**
* | output |
* | --- |
* | "Logged in as" |
*
* @param {Auth_Menu_Signed_In_AsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_menu_signed_in_as = /** @type {((inputs?: Auth_Menu_Signed_In_AsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Menu_Signed_In_AsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_menu_signed_in_as(inputs)
	if (locale === "de") return de_auth_menu_signed_in_as(inputs)
	if (locale === "fr") return fr_auth_menu_signed_in_as(inputs)
	if (locale === "it") return it_auth_menu_signed_in_as(inputs)
	if (locale === "nl") return nl_auth_menu_signed_in_as(inputs)
	if (locale === "pl") return pl_auth_menu_signed_in_as(inputs)
	if (locale === "pt") return pt_auth_menu_signed_in_as(inputs)
	if (locale === "ru") return ru_auth_menu_signed_in_as(inputs)
	if (locale === "sv") return sv_auth_menu_signed_in_as(inputs)
	if (locale === "tr") return tr_auth_menu_signed_in_as(inputs)
	if (locale === "zh") return zh_auth_menu_signed_in_as(inputs)
	if (locale === "ja") return ja_auth_menu_signed_in_as(inputs)
	return en_auth_menu_signed_in_as(inputs)
});
