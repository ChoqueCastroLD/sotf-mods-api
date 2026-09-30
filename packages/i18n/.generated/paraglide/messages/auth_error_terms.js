/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Error_TermsInputs */

const en_auth_error_terms = /** @type {(inputs: Auth_Error_TermsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Accept the terms to create your account.`)
};

const es_auth_error_terms = /** @type {(inputs: Auth_Error_TermsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Acepta las condiciones para crear tu cuenta.`)
};

const de_auth_error_terms = /** @type {(inputs: Auth_Error_TermsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Akzeptiere die Bedingungen, um dein Konto zu erstellen.`)
};

const fr_auth_error_terms = /** @type {(inputs: Auth_Error_TermsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Acceptez les conditions pour créer votre compte.`)
};

const it_auth_error_terms = /** @type {(inputs: Auth_Error_TermsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Accetta i termini per creare il tuo account.`)
};

const nl_auth_error_terms = /** @type {(inputs: Auth_Error_TermsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ga akkoord met de voorwaarden om je account aan te maken.`)
};

const pl_auth_error_terms = /** @type {(inputs: Auth_Error_TermsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaakceptuj warunki, aby założyć konto.`)
};

const pt_auth_error_terms = /** @type {(inputs: Auth_Error_TermsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aceite os termos para criar sua conta.`)
};

const ru_auth_error_terms = /** @type {(inputs: Auth_Error_TermsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Примите условия, чтобы создать аккаунт.`)
};

const sv_auth_error_terms = /** @type {(inputs: Auth_Error_TermsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Godkänn villkoren för att skapa ditt konto.`)
};

const tr_auth_error_terms = /** @type {(inputs: Auth_Error_TermsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hesabını oluşturmak için koşulları kabul et.`)
};

const zh_auth_error_terms = /** @type {(inputs: Auth_Error_TermsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请接受条款以创建账号。`)
};

const ja_auth_error_terms = /** @type {(inputs: Auth_Error_TermsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アカウントを作成するには規約に同意してください。`)
};

/**
* | output |
* | --- |
* | "Accept the terms to create your account." |
*
* @param {Auth_Error_TermsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_error_terms = /** @type {((inputs?: Auth_Error_TermsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Error_TermsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_error_terms(inputs)
	if (locale === "de") return de_auth_error_terms(inputs)
	if (locale === "fr") return fr_auth_error_terms(inputs)
	if (locale === "it") return it_auth_error_terms(inputs)
	if (locale === "nl") return nl_auth_error_terms(inputs)
	if (locale === "pl") return pl_auth_error_terms(inputs)
	if (locale === "pt") return pt_auth_error_terms(inputs)
	if (locale === "ru") return ru_auth_error_terms(inputs)
	if (locale === "sv") return sv_auth_error_terms(inputs)
	if (locale === "tr") return tr_auth_error_terms(inputs)
	if (locale === "zh") return zh_auth_error_terms(inputs)
	if (locale === "ja") return ja_auth_error_terms(inputs)
	return en_auth_error_terms(inputs)
});
