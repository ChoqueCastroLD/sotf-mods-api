/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Auth_Verify_HeadingInputs */

const en_emails_auth_verify_heading = /** @type {(inputs: Emails_Auth_Verify_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confirm your email`)
};

const es_emails_auth_verify_heading = /** @type {(inputs: Emails_Auth_Verify_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confirma tu correo`)
};

const de_emails_auth_verify_heading = /** @type {(inputs: Emails_Auth_Verify_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bestätige deine E-Mail-Adresse`)
};

const fr_emails_auth_verify_heading = /** @type {(inputs: Emails_Auth_Verify_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confirmez votre adresse e-mail`)
};

const it_emails_auth_verify_heading = /** @type {(inputs: Emails_Auth_Verify_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conferma la tua email`)
};

const nl_emails_auth_verify_heading = /** @type {(inputs: Emails_Auth_Verify_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bevestig je e-mailadres`)
};

const pl_emails_auth_verify_heading = /** @type {(inputs: Emails_Auth_Verify_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Potwierdź swój e-mail`)
};

const pt_emails_auth_verify_heading = /** @type {(inputs: Emails_Auth_Verify_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confirme seu e-mail`)
};

const ru_emails_auth_verify_heading = /** @type {(inputs: Emails_Auth_Verify_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подтвердите почту`)
};

const sv_emails_auth_verify_heading = /** @type {(inputs: Emails_Auth_Verify_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bekräfta din e-postadress`)
};

const tr_emails_auth_verify_heading = /** @type {(inputs: Emails_Auth_Verify_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-postanı doğrula`)
};

const zh_emails_auth_verify_heading = /** @type {(inputs: Emails_Auth_Verify_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`确认你的邮箱`)
};

const ja_emails_auth_verify_heading = /** @type {(inputs: Emails_Auth_Verify_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メールアドレスの確認`)
};

/**
* | output |
* | --- |
* | "Confirm your email" |
*
* @param {Emails_Auth_Verify_HeadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_auth_verify_heading = /** @type {((inputs?: Emails_Auth_Verify_HeadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Verify_HeadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_auth_verify_heading(inputs)
	if (locale === "de") return de_emails_auth_verify_heading(inputs)
	if (locale === "fr") return fr_emails_auth_verify_heading(inputs)
	if (locale === "it") return it_emails_auth_verify_heading(inputs)
	if (locale === "nl") return nl_emails_auth_verify_heading(inputs)
	if (locale === "pl") return pl_emails_auth_verify_heading(inputs)
	if (locale === "pt") return pt_emails_auth_verify_heading(inputs)
	if (locale === "ru") return ru_emails_auth_verify_heading(inputs)
	if (locale === "sv") return sv_emails_auth_verify_heading(inputs)
	if (locale === "tr") return tr_emails_auth_verify_heading(inputs)
	if (locale === "zh") return zh_emails_auth_verify_heading(inputs)
	if (locale === "ja") return ja_emails_auth_verify_heading(inputs)
	return en_emails_auth_verify_heading(inputs)
});
