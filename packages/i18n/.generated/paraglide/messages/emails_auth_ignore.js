/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Auth_IgnoreInputs */

const en_emails_auth_ignore = /** @type {(inputs: Emails_Auth_IgnoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`If you didn’t ask for this, you can safely ignore this email.`)
};

const es_emails_auth_ignore = /** @type {(inputs: Emails_Auth_IgnoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Si no lo has pedido tú, puedes ignorar este correo.`)
};

const de_emails_auth_ignore = /** @type {(inputs: Emails_Auth_IgnoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Falls du das nicht angefordert hast, kannst du diese E-Mail einfach ignorieren.`)
};

const fr_emails_auth_ignore = /** @type {(inputs: Emails_Auth_IgnoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Si vous n’êtes pas à l’origine de cette demande, vous pouvez ignorer cet e-mail.`)
};

const it_emails_auth_ignore = /** @type {(inputs: Emails_Auth_IgnoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se non l’hai richiesto tu, puoi ignorare questa email.`)
};

const nl_emails_auth_ignore = /** @type {(inputs: Emails_Auth_IgnoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Heb je dit niet zelf aangevraagd? Dan kun je deze e-mail negeren.`)
};

const pl_emails_auth_ignore = /** @type {(inputs: Emails_Auth_IgnoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jeśli to nie Ty, możesz zignorować tę wiadomość.`)
};

const pt_emails_auth_ignore = /** @type {(inputs: Emails_Auth_IgnoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se não foi você que pediu, pode ignorar este e-mail.`)
};

const ru_emails_auth_ignore = /** @type {(inputs: Emails_Auth_IgnoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Если это были не вы, просто проигнорируйте это письмо.`)
};

const sv_emails_auth_ignore = /** @type {(inputs: Emails_Auth_IgnoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Om det inte var du som bad om detta kan du ignorera mejlet.`)
};

const tr_emails_auth_ignore = /** @type {(inputs: Emails_Auth_IgnoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bunu sen istemediysen bu e-postayı yok sayabilirsin.`)
};

const zh_emails_auth_ignore = /** @type {(inputs: Emails_Auth_IgnoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`如果这不是你本人的操作，可以忽略这封邮件。`)
};

const ja_emails_auth_ignore = /** @type {(inputs: Emails_Auth_IgnoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`心当たりがない場合は、このメールを無視してください。`)
};

/**
* | output |
* | --- |
* | "If you didn’t ask for this, you can safely ignore this email." |
*
* @param {Emails_Auth_IgnoreInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_auth_ignore = /** @type {((inputs?: Emails_Auth_IgnoreInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_IgnoreInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_auth_ignore(inputs)
	if (locale === "de") return de_emails_auth_ignore(inputs)
	if (locale === "fr") return fr_emails_auth_ignore(inputs)
	if (locale === "it") return it_emails_auth_ignore(inputs)
	if (locale === "nl") return nl_emails_auth_ignore(inputs)
	if (locale === "pl") return pl_emails_auth_ignore(inputs)
	if (locale === "pt") return pt_emails_auth_ignore(inputs)
	if (locale === "ru") return ru_emails_auth_ignore(inputs)
	if (locale === "sv") return sv_emails_auth_ignore(inputs)
	if (locale === "tr") return tr_emails_auth_ignore(inputs)
	if (locale === "zh") return zh_emails_auth_ignore(inputs)
	if (locale === "ja") return ja_emails_auth_ignore(inputs)
	return en_emails_auth_ignore(inputs)
});
