/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Login_IntroInputs */

const en_auth_login_intro = /** @type {(inputs: Auth_Login_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Welcome back, survivor.`)
};

const es_auth_login_intro = /** @type {(inputs: Auth_Login_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bienvenido de nuevo, superviviente.`)
};

const de_auth_login_intro = /** @type {(inputs: Auth_Login_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Willkommen zurück, Überlebender.`)
};

const fr_auth_login_intro = /** @type {(inputs: Auth_Login_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bon retour parmi nous, survivant.`)
};

const it_auth_login_intro = /** @type {(inputs: Auth_Login_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bentornato, sopravvissuto.`)
};

const nl_auth_login_intro = /** @type {(inputs: Auth_Login_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Welkom terug, overlevende.`)
};

const pl_auth_login_intro = /** @type {(inputs: Auth_Login_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Witaj z powrotem, ocalały.`)
};

const pt_auth_login_intro = /** @type {(inputs: Auth_Login_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Que bom ver você de novo, sobrevivente.`)
};

const ru_auth_login_intro = /** @type {(inputs: Auth_Login_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`С возвращением, выживший.`)
};

const sv_auth_login_intro = /** @type {(inputs: Auth_Login_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Välkommen tillbaka, överlevare.`)
};

const tr_auth_login_intro = /** @type {(inputs: Auth_Login_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tekrar hoş geldin, hayatta kalan.`)
};

const zh_auth_login_intro = /** @type {(inputs: Auth_Login_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`欢迎回来，幸存者。`)
};

const ja_auth_login_intro = /** @type {(inputs: Auth_Login_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`おかえりなさい、サバイバー。`)
};

/**
* | output |
* | --- |
* | "Welcome back, survivor." |
*
* @param {Auth_Login_IntroInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_login_intro = /** @type {((inputs?: Auth_Login_IntroInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Login_IntroInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_login_intro(inputs)
	if (locale === "de") return de_auth_login_intro(inputs)
	if (locale === "fr") return fr_auth_login_intro(inputs)
	if (locale === "it") return it_auth_login_intro(inputs)
	if (locale === "nl") return nl_auth_login_intro(inputs)
	if (locale === "pl") return pl_auth_login_intro(inputs)
	if (locale === "pt") return pt_auth_login_intro(inputs)
	if (locale === "ru") return ru_auth_login_intro(inputs)
	if (locale === "sv") return sv_auth_login_intro(inputs)
	if (locale === "tr") return tr_auth_login_intro(inputs)
	if (locale === "zh") return zh_auth_login_intro(inputs)
	if (locale === "ja") return ja_auth_login_intro(inputs)
	return en_auth_login_intro(inputs)
});
