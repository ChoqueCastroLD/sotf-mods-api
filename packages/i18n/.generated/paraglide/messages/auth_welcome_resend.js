/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Welcome_ResendInputs */

const en_auth_welcome_resend = /** @type {(inputs: Auth_Welcome_ResendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Send the link again`)
};

const es_auth_welcome_resend = /** @type {(inputs: Auth_Welcome_ResendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enviar el enlace otra vez`)
};

const de_auth_welcome_resend = /** @type {(inputs: Auth_Welcome_ResendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link erneut senden`)
};

const fr_auth_welcome_resend = /** @type {(inputs: Auth_Welcome_ResendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Renvoyer le lien`)
};

const it_auth_welcome_resend = /** @type {(inputs: Auth_Welcome_ResendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Invia di nuovo il link`)
};

const nl_auth_welcome_resend = /** @type {(inputs: Auth_Welcome_ResendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link opnieuw sturen`)
};

const pl_auth_welcome_resend = /** @type {(inputs: Auth_Welcome_ResendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyślij link ponownie`)
};

const pt_auth_welcome_resend = /** @type {(inputs: Auth_Welcome_ResendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enviar o link de novo`)
};

const ru_auth_welcome_resend = /** @type {(inputs: Auth_Welcome_ResendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отправить ссылку ещё раз`)
};

const sv_auth_welcome_resend = /** @type {(inputs: Auth_Welcome_ResendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skicka länken igen`)
};

const tr_auth_welcome_resend = /** @type {(inputs: Auth_Welcome_ResendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bağlantıyı tekrar gönder`)
};

const zh_auth_welcome_resend = /** @type {(inputs: Auth_Welcome_ResendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重新发送链接`)
};

const ja_auth_welcome_resend = /** @type {(inputs: Auth_Welcome_ResendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リンクを再送する`)
};

/**
* | output |
* | --- |
* | "Send the link again" |
*
* @param {Auth_Welcome_ResendInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_welcome_resend = /** @type {((inputs?: Auth_Welcome_ResendInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Welcome_ResendInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_welcome_resend(inputs)
	if (locale === "de") return de_auth_welcome_resend(inputs)
	if (locale === "fr") return fr_auth_welcome_resend(inputs)
	if (locale === "it") return it_auth_welcome_resend(inputs)
	if (locale === "nl") return nl_auth_welcome_resend(inputs)
	if (locale === "pl") return pl_auth_welcome_resend(inputs)
	if (locale === "pt") return pt_auth_welcome_resend(inputs)
	if (locale === "ru") return ru_auth_welcome_resend(inputs)
	if (locale === "sv") return sv_auth_welcome_resend(inputs)
	if (locale === "tr") return tr_auth_welcome_resend(inputs)
	if (locale === "zh") return zh_auth_welcome_resend(inputs)
	if (locale === "ja") return ja_auth_welcome_resend(inputs)
	return en_auth_welcome_resend(inputs)
});
