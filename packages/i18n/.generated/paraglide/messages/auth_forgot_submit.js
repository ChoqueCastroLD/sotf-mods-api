/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Forgot_SubmitInputs */

const en_auth_forgot_submit = /** @type {(inputs: Auth_Forgot_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Send reset link`)
};

const es_auth_forgot_submit = /** @type {(inputs: Auth_Forgot_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enviar enlace`)
};

const de_auth_forgot_submit = /** @type {(inputs: Auth_Forgot_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link senden`)
};

const fr_auth_forgot_submit = /** @type {(inputs: Auth_Forgot_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Envoyer le lien`)
};

const it_auth_forgot_submit = /** @type {(inputs: Auth_Forgot_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Invia link`)
};

const nl_auth_forgot_submit = /** @type {(inputs: Auth_Forgot_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link versturen`)
};

const pl_auth_forgot_submit = /** @type {(inputs: Auth_Forgot_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyślij link`)
};

const pt_auth_forgot_submit = /** @type {(inputs: Auth_Forgot_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enviar link`)
};

const ru_auth_forgot_submit = /** @type {(inputs: Auth_Forgot_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отправить ссылку`)
};

const sv_auth_forgot_submit = /** @type {(inputs: Auth_Forgot_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skicka länk`)
};

const tr_auth_forgot_submit = /** @type {(inputs: Auth_Forgot_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bağlantı gönder`)
};

const zh_auth_forgot_submit = /** @type {(inputs: Auth_Forgot_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`发送重置链接`)
};

const ja_auth_forgot_submit = /** @type {(inputs: Auth_Forgot_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リンクを送信`)
};

/**
* | output |
* | --- |
* | "Send reset link" |
*
* @param {Auth_Forgot_SubmitInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_forgot_submit = /** @type {((inputs?: Auth_Forgot_SubmitInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Forgot_SubmitInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_forgot_submit(inputs)
	if (locale === "de") return de_auth_forgot_submit(inputs)
	if (locale === "fr") return fr_auth_forgot_submit(inputs)
	if (locale === "it") return it_auth_forgot_submit(inputs)
	if (locale === "nl") return nl_auth_forgot_submit(inputs)
	if (locale === "pl") return pl_auth_forgot_submit(inputs)
	if (locale === "pt") return pt_auth_forgot_submit(inputs)
	if (locale === "ru") return ru_auth_forgot_submit(inputs)
	if (locale === "sv") return sv_auth_forgot_submit(inputs)
	if (locale === "tr") return tr_auth_forgot_submit(inputs)
	if (locale === "zh") return zh_auth_forgot_submit(inputs)
	if (locale === "ja") return ja_auth_forgot_submit(inputs)
	return en_auth_forgot_submit(inputs)
});
