/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Forgot_Sent_HeadingInputs */

const en_auth_forgot_sent_heading = /** @type {(inputs: Auth_Forgot_Sent_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Check your email`)
};

const es_auth_forgot_sent_heading = /** @type {(inputs: Auth_Forgot_Sent_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Revisa tu email`)
};

const de_auth_forgot_sent_heading = /** @type {(inputs: Auth_Forgot_Sent_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schau in dein Postfach`)
};

const fr_auth_forgot_sent_heading = /** @type {(inputs: Auth_Forgot_Sent_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Consultez vos e-mails`)
};

const it_auth_forgot_sent_heading = /** @type {(inputs: Auth_Forgot_Sent_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Controlla la tua email`)
};

const nl_auth_forgot_sent_heading = /** @type {(inputs: Auth_Forgot_Sent_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Check je e-mail`)
};

const pl_auth_forgot_sent_heading = /** @type {(inputs: Auth_Forgot_Sent_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sprawdź pocztę`)
};

const pt_auth_forgot_sent_heading = /** @type {(inputs: Auth_Forgot_Sent_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confira seu e-mail`)
};

const ru_auth_forgot_sent_heading = /** @type {(inputs: Auth_Forgot_Sent_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Проверьте почту`)
};

const sv_auth_forgot_sent_heading = /** @type {(inputs: Auth_Forgot_Sent_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kolla din e-post`)
};

const tr_auth_forgot_sent_heading = /** @type {(inputs: Auth_Forgot_Sent_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-postanı kontrol et`)
};

const zh_auth_forgot_sent_heading = /** @type {(inputs: Auth_Forgot_Sent_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请查收邮件`)
};

const ja_auth_forgot_sent_heading = /** @type {(inputs: Auth_Forgot_Sent_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メールを確認してください`)
};

/**
* | output |
* | --- |
* | "Check your email" |
*
* @param {Auth_Forgot_Sent_HeadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_forgot_sent_heading = /** @type {((inputs?: Auth_Forgot_Sent_HeadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Forgot_Sent_HeadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_forgot_sent_heading(inputs)
	if (locale === "de") return de_auth_forgot_sent_heading(inputs)
	if (locale === "fr") return fr_auth_forgot_sent_heading(inputs)
	if (locale === "it") return it_auth_forgot_sent_heading(inputs)
	if (locale === "nl") return nl_auth_forgot_sent_heading(inputs)
	if (locale === "pl") return pl_auth_forgot_sent_heading(inputs)
	if (locale === "pt") return pt_auth_forgot_sent_heading(inputs)
	if (locale === "ru") return ru_auth_forgot_sent_heading(inputs)
	if (locale === "sv") return sv_auth_forgot_sent_heading(inputs)
	if (locale === "tr") return tr_auth_forgot_sent_heading(inputs)
	if (locale === "zh") return zh_auth_forgot_sent_heading(inputs)
	if (locale === "ja") return ja_auth_forgot_sent_heading(inputs)
	return en_auth_forgot_sent_heading(inputs)
});
