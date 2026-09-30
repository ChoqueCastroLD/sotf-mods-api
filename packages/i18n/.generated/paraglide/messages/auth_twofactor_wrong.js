/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Twofactor_WrongInputs */

const en_auth_twofactor_wrong = /** @type {(inputs: Auth_Twofactor_WrongInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`That code is not correct. Try again.`)
};

const es_auth_twofactor_wrong = /** @type {(inputs: Auth_Twofactor_WrongInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ese código no es correcto. Inténtalo de nuevo.`)
};

const de_auth_twofactor_wrong = /** @type {(inputs: Auth_Twofactor_WrongInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dieser Code ist nicht korrekt. Versuche es erneut.`)
};

const fr_auth_twofactor_wrong = /** @type {(inputs: Auth_Twofactor_WrongInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce code n’est pas correct. Réessayez.`)
};

const it_auth_twofactor_wrong = /** @type {(inputs: Auth_Twofactor_WrongInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il codice non è corretto. Riprova.`)
};

const nl_auth_twofactor_wrong = /** @type {(inputs: Auth_Twofactor_WrongInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die code klopt niet. Probeer het opnieuw.`)
};

const pl_auth_twofactor_wrong = /** @type {(inputs: Auth_Twofactor_WrongInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ten kod jest nieprawidłowy. Spróbuj ponownie.`)
};

const pt_auth_twofactor_wrong = /** @type {(inputs: Auth_Twofactor_WrongInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esse código não está correto. Tente de novo.`)
};

const ru_auth_twofactor_wrong = /** @type {(inputs: Auth_Twofactor_WrongInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Неверный код. Попробуйте ещё раз.`)
};

const sv_auth_twofactor_wrong = /** @type {(inputs: Auth_Twofactor_WrongInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Koden stämmer inte. Försök igen.`)
};

const tr_auth_twofactor_wrong = /** @type {(inputs: Auth_Twofactor_WrongInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu kod doğru değil. Tekrar dene.`)
};

const zh_auth_twofactor_wrong = /** @type {(inputs: Auth_Twofactor_WrongInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`验证码不正确，请重试。`)
};

const ja_auth_twofactor_wrong = /** @type {(inputs: Auth_Twofactor_WrongInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コードが正しくありません。もう一度お試しください。`)
};

/**
* | output |
* | --- |
* | "That code is not correct. Try again." |
*
* @param {Auth_Twofactor_WrongInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_twofactor_wrong = /** @type {((inputs?: Auth_Twofactor_WrongInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Twofactor_WrongInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_twofactor_wrong(inputs)
	if (locale === "de") return de_auth_twofactor_wrong(inputs)
	if (locale === "fr") return fr_auth_twofactor_wrong(inputs)
	if (locale === "it") return it_auth_twofactor_wrong(inputs)
	if (locale === "nl") return nl_auth_twofactor_wrong(inputs)
	if (locale === "pl") return pl_auth_twofactor_wrong(inputs)
	if (locale === "pt") return pt_auth_twofactor_wrong(inputs)
	if (locale === "ru") return ru_auth_twofactor_wrong(inputs)
	if (locale === "sv") return sv_auth_twofactor_wrong(inputs)
	if (locale === "tr") return tr_auth_twofactor_wrong(inputs)
	if (locale === "zh") return zh_auth_twofactor_wrong(inputs)
	if (locale === "ja") return ja_auth_twofactor_wrong(inputs)
	return en_auth_twofactor_wrong(inputs)
});
