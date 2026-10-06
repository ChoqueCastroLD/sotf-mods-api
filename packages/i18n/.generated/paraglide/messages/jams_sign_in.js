/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Sign_InInputs */

const en_jams_sign_in = /** @type {(inputs: Jams_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log in`)
};

const es_jams_sign_in = /** @type {(inputs: Jams_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Iniciar sesión`)
};

const de_jams_sign_in = /** @type {(inputs: Jams_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anmelden`)
};

const fr_jams_sign_in = /** @type {(inputs: Jams_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se connecter`)
};

const it_jams_sign_in = /** @type {(inputs: Jams_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Accedi`)
};

const nl_jams_sign_in = /** @type {(inputs: Jams_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inloggen`)
};

const pl_jams_sign_in = /** @type {(inputs: Jams_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaloguj się`)
};

const pt_jams_sign_in = /** @type {(inputs: Jams_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entrar`)
};

const ru_jams_sign_in = /** @type {(inputs: Jams_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Войти`)
};

const sv_jams_sign_in = /** @type {(inputs: Jams_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logga in`)
};

const tr_jams_sign_in = /** @type {(inputs: Jams_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Giriş yap`)
};

const zh_jams_sign_in = /** @type {(inputs: Jams_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`登录`)
};

const ja_jams_sign_in = /** @type {(inputs: Jams_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ログイン`)
};

/**
* | output |
* | --- |
* | "Log in" |
*
* @param {Jams_Sign_InInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_sign_in = /** @type {((inputs?: Jams_Sign_InInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Sign_InInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_sign_in(inputs)
	if (locale === "de") return de_jams_sign_in(inputs)
	if (locale === "fr") return fr_jams_sign_in(inputs)
	if (locale === "it") return it_jams_sign_in(inputs)
	if (locale === "nl") return nl_jams_sign_in(inputs)
	if (locale === "pl") return pl_jams_sign_in(inputs)
	if (locale === "pt") return pt_jams_sign_in(inputs)
	if (locale === "ru") return ru_jams_sign_in(inputs)
	if (locale === "sv") return sv_jams_sign_in(inputs)
	if (locale === "tr") return tr_jams_sign_in(inputs)
	if (locale === "zh") return zh_jams_sign_in(inputs)
	if (locale === "ja") return ja_jams_sign_in(inputs)
	return en_jams_sign_in(inputs)
});
