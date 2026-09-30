/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Back_To_Sign_InInputs */

const en_auth_back_to_sign_in = /** @type {(inputs: Auth_Back_To_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Back to sign in`)
};

const es_auth_back_to_sign_in = /** @type {(inputs: Auth_Back_To_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volver a iniciar sesión`)
};

const de_auth_back_to_sign_in = /** @type {(inputs: Auth_Back_To_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zurück zur Anmeldung`)
};

const fr_auth_back_to_sign_in = /** @type {(inputs: Auth_Back_To_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retour à la connexion`)
};

const it_auth_back_to_sign_in = /** @type {(inputs: Auth_Back_To_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Torna all’accesso`)
};

const nl_auth_back_to_sign_in = /** @type {(inputs: Auth_Back_To_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Terug naar inloggen`)
};

const pl_auth_back_to_sign_in = /** @type {(inputs: Auth_Back_To_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wróć do logowania`)
};

const pt_auth_back_to_sign_in = /** @type {(inputs: Auth_Back_To_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voltar para entrar`)
};

const ru_auth_back_to_sign_in = /** @type {(inputs: Auth_Back_To_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Назад ко входу`)
};

const sv_auth_back_to_sign_in = /** @type {(inputs: Auth_Back_To_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tillbaka till inloggningen`)
};

const tr_auth_back_to_sign_in = /** @type {(inputs: Auth_Back_To_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Girişe dön`)
};

const zh_auth_back_to_sign_in = /** @type {(inputs: Auth_Back_To_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`返回登录`)
};

const ja_auth_back_to_sign_in = /** @type {(inputs: Auth_Back_To_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ログインに戻る`)
};

/**
* | output |
* | --- |
* | "Back to sign in" |
*
* @param {Auth_Back_To_Sign_InInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_back_to_sign_in = /** @type {((inputs?: Auth_Back_To_Sign_InInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Back_To_Sign_InInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_back_to_sign_in(inputs)
	if (locale === "de") return de_auth_back_to_sign_in(inputs)
	if (locale === "fr") return fr_auth_back_to_sign_in(inputs)
	if (locale === "it") return it_auth_back_to_sign_in(inputs)
	if (locale === "nl") return nl_auth_back_to_sign_in(inputs)
	if (locale === "pl") return pl_auth_back_to_sign_in(inputs)
	if (locale === "pt") return pt_auth_back_to_sign_in(inputs)
	if (locale === "ru") return ru_auth_back_to_sign_in(inputs)
	if (locale === "sv") return sv_auth_back_to_sign_in(inputs)
	if (locale === "tr") return tr_auth_back_to_sign_in(inputs)
	if (locale === "zh") return zh_auth_back_to_sign_in(inputs)
	if (locale === "ja") return ja_auth_back_to_sign_in(inputs)
	return en_auth_back_to_sign_in(inputs)
});
