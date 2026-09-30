/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kitsocial_Sign_In_LinkInputs */

const en_kitsocial_sign_in_link = /** @type {(inputs: Kitsocial_Sign_In_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sign in`)
};

const es_kitsocial_sign_in_link = /** @type {(inputs: Kitsocial_Sign_In_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Iniciar sesión`)
};

const de_kitsocial_sign_in_link = /** @type {(inputs: Kitsocial_Sign_In_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anmelden`)
};

const fr_kitsocial_sign_in_link = /** @type {(inputs: Kitsocial_Sign_In_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se connecter`)
};

const it_kitsocial_sign_in_link = /** @type {(inputs: Kitsocial_Sign_In_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Accedi`)
};

const nl_kitsocial_sign_in_link = /** @type {(inputs: Kitsocial_Sign_In_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inloggen`)
};

const pl_kitsocial_sign_in_link = /** @type {(inputs: Kitsocial_Sign_In_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaloguj się`)
};

const pt_kitsocial_sign_in_link = /** @type {(inputs: Kitsocial_Sign_In_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entrar`)
};

const ru_kitsocial_sign_in_link = /** @type {(inputs: Kitsocial_Sign_In_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Войти`)
};

const sv_kitsocial_sign_in_link = /** @type {(inputs: Kitsocial_Sign_In_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logga in`)
};

const tr_kitsocial_sign_in_link = /** @type {(inputs: Kitsocial_Sign_In_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Giriş yap`)
};

const zh_kitsocial_sign_in_link = /** @type {(inputs: Kitsocial_Sign_In_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`登录`)
};

const ja_kitsocial_sign_in_link = /** @type {(inputs: Kitsocial_Sign_In_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ログイン`)
};

/**
* | output |
* | --- |
* | "Sign in" |
*
* @param {Kitsocial_Sign_In_LinkInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kitsocial_sign_in_link = /** @type {((inputs?: Kitsocial_Sign_In_LinkInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kitsocial_Sign_In_LinkInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kitsocial_sign_in_link(inputs)
	if (locale === "de") return de_kitsocial_sign_in_link(inputs)
	if (locale === "fr") return fr_kitsocial_sign_in_link(inputs)
	if (locale === "it") return it_kitsocial_sign_in_link(inputs)
	if (locale === "nl") return nl_kitsocial_sign_in_link(inputs)
	if (locale === "pl") return pl_kitsocial_sign_in_link(inputs)
	if (locale === "pt") return pt_kitsocial_sign_in_link(inputs)
	if (locale === "ru") return ru_kitsocial_sign_in_link(inputs)
	if (locale === "sv") return sv_kitsocial_sign_in_link(inputs)
	if (locale === "tr") return tr_kitsocial_sign_in_link(inputs)
	if (locale === "zh") return zh_kitsocial_sign_in_link(inputs)
	if (locale === "ja") return ja_kitsocial_sign_in_link(inputs)
	return en_kitsocial_sign_in_link(inputs)
});
