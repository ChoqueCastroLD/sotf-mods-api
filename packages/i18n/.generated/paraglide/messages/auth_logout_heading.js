/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Logout_HeadingInputs */

const en_auth_logout_heading = /** @type {(inputs: Auth_Logout_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sign out?`)
};

const es_auth_logout_heading = /** @type {(inputs: Auth_Logout_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Cerrar sesión?`)
};

const de_auth_logout_heading = /** @type {(inputs: Auth_Logout_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abmelden?`)
};

const fr_auth_logout_heading = /** @type {(inputs: Auth_Logout_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se déconnecter ?`)
};

const it_auth_logout_heading = /** @type {(inputs: Auth_Logout_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uscire?`)
};

const nl_auth_logout_heading = /** @type {(inputs: Auth_Logout_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uitloggen?`)
};

const pl_auth_logout_heading = /** @type {(inputs: Auth_Logout_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wylogować się?`)
};

const pt_auth_logout_heading = /** @type {(inputs: Auth_Logout_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sair?`)
};

const ru_auth_logout_heading = /** @type {(inputs: Auth_Logout_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выйти?`)
};

const sv_auth_logout_heading = /** @type {(inputs: Auth_Logout_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logga ut?`)
};

const tr_auth_logout_heading = /** @type {(inputs: Auth_Logout_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çıkış yapılsın mı?`)
};

const zh_auth_logout_heading = /** @type {(inputs: Auth_Logout_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`要退出登录吗？`)
};

const ja_auth_logout_heading = /** @type {(inputs: Auth_Logout_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ログアウトしますか？`)
};

/**
* | output |
* | --- |
* | "Sign out?" |
*
* @param {Auth_Logout_HeadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_logout_heading = /** @type {((inputs?: Auth_Logout_HeadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Logout_HeadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_logout_heading(inputs)
	if (locale === "de") return de_auth_logout_heading(inputs)
	if (locale === "fr") return fr_auth_logout_heading(inputs)
	if (locale === "it") return it_auth_logout_heading(inputs)
	if (locale === "nl") return nl_auth_logout_heading(inputs)
	if (locale === "pl") return pl_auth_logout_heading(inputs)
	if (locale === "pt") return pt_auth_logout_heading(inputs)
	if (locale === "ru") return ru_auth_logout_heading(inputs)
	if (locale === "sv") return sv_auth_logout_heading(inputs)
	if (locale === "tr") return tr_auth_logout_heading(inputs)
	if (locale === "zh") return zh_auth_logout_heading(inputs)
	if (locale === "ja") return ja_auth_logout_heading(inputs)
	return en_auth_logout_heading(inputs)
});
