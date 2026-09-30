/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Verify_ResendInputs */

const en_auth_verify_resend = /** @type {(inputs: Auth_Verify_ResendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Send me a new link`)
};

const es_auth_verify_resend = /** @type {(inputs: Auth_Verify_ResendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enviarme un enlace nuevo`)
};

const de_auth_verify_resend = /** @type {(inputs: Auth_Verify_ResendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neuen Link senden`)
};

const fr_auth_verify_resend = /** @type {(inputs: Auth_Verify_ResendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`M’envoyer un nouveau lien`)
};

const it_auth_verify_resend = /** @type {(inputs: Auth_Verify_ResendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inviami un nuovo link`)
};

const nl_auth_verify_resend = /** @type {(inputs: Auth_Verify_ResendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stuur me een nieuwe link`)
};

const pl_auth_verify_resend = /** @type {(inputs: Auth_Verify_ResendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyślij mi nowy link`)
};

const pt_auth_verify_resend = /** @type {(inputs: Auth_Verify_ResendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enviar um novo link`)
};

const ru_auth_verify_resend = /** @type {(inputs: Auth_Verify_ResendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Прислать новую ссылку`)
};

const sv_auth_verify_resend = /** @type {(inputs: Auth_Verify_ResendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skicka en ny länk`)
};

const tr_auth_verify_resend = /** @type {(inputs: Auth_Verify_ResendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bana yeni bağlantı gönder`)
};

const zh_auth_verify_resend = /** @type {(inputs: Auth_Verify_ResendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`给我发送新链接`)
};

const ja_auth_verify_resend = /** @type {(inputs: Auth_Verify_ResendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新しいリンクを送る`)
};

/**
* | output |
* | --- |
* | "Send me a new link" |
*
* @param {Auth_Verify_ResendInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_verify_resend = /** @type {((inputs?: Auth_Verify_ResendInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Verify_ResendInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_verify_resend(inputs)
	if (locale === "de") return de_auth_verify_resend(inputs)
	if (locale === "fr") return fr_auth_verify_resend(inputs)
	if (locale === "it") return it_auth_verify_resend(inputs)
	if (locale === "nl") return nl_auth_verify_resend(inputs)
	if (locale === "pl") return pl_auth_verify_resend(inputs)
	if (locale === "pt") return pt_auth_verify_resend(inputs)
	if (locale === "ru") return ru_auth_verify_resend(inputs)
	if (locale === "sv") return sv_auth_verify_resend(inputs)
	if (locale === "tr") return tr_auth_verify_resend(inputs)
	if (locale === "zh") return zh_auth_verify_resend(inputs)
	if (locale === "ja") return ja_auth_verify_resend(inputs)
	return en_auth_verify_resend(inputs)
});
