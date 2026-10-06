/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Meta_Logout_TitleInputs */

const en_auth_meta_logout_title = /** @type {(inputs: Auth_Meta_Logout_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log out`)
};

const es_auth_meta_logout_title = /** @type {(inputs: Auth_Meta_Logout_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cerrar sesión`)
};

const de_auth_meta_logout_title = /** @type {(inputs: Auth_Meta_Logout_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abmelden`)
};

const fr_auth_meta_logout_title = /** @type {(inputs: Auth_Meta_Logout_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se déconnecter`)
};

const it_auth_meta_logout_title = /** @type {(inputs: Auth_Meta_Logout_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esci`)
};

const nl_auth_meta_logout_title = /** @type {(inputs: Auth_Meta_Logout_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uitloggen`)
};

const pl_auth_meta_logout_title = /** @type {(inputs: Auth_Meta_Logout_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyloguj się`)
};

const pt_auth_meta_logout_title = /** @type {(inputs: Auth_Meta_Logout_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sair`)
};

const ru_auth_meta_logout_title = /** @type {(inputs: Auth_Meta_Logout_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выход`)
};

const sv_auth_meta_logout_title = /** @type {(inputs: Auth_Meta_Logout_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logga ut`)
};

const tr_auth_meta_logout_title = /** @type {(inputs: Auth_Meta_Logout_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çıkış yap`)
};

const zh_auth_meta_logout_title = /** @type {(inputs: Auth_Meta_Logout_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`退出登录`)
};

const ja_auth_meta_logout_title = /** @type {(inputs: Auth_Meta_Logout_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ログアウト`)
};

/**
* | output |
* | --- |
* | "Log out" |
*
* @param {Auth_Meta_Logout_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_meta_logout_title = /** @type {((inputs?: Auth_Meta_Logout_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Meta_Logout_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_meta_logout_title(inputs)
	if (locale === "de") return de_auth_meta_logout_title(inputs)
	if (locale === "fr") return fr_auth_meta_logout_title(inputs)
	if (locale === "it") return it_auth_meta_logout_title(inputs)
	if (locale === "nl") return nl_auth_meta_logout_title(inputs)
	if (locale === "pl") return pl_auth_meta_logout_title(inputs)
	if (locale === "pt") return pt_auth_meta_logout_title(inputs)
	if (locale === "ru") return ru_auth_meta_logout_title(inputs)
	if (locale === "sv") return sv_auth_meta_logout_title(inputs)
	if (locale === "tr") return tr_auth_meta_logout_title(inputs)
	if (locale === "zh") return zh_auth_meta_logout_title(inputs)
	if (locale === "ja") return ja_auth_meta_logout_title(inputs)
	return en_auth_meta_logout_title(inputs)
});
