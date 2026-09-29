/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Auth_Verify_SubjectInputs */

const en_emails_auth_verify_subject = /** @type {(inputs: Emails_Auth_Verify_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confirm your email for SOTF Mods`)
};

const es_emails_auth_verify_subject = /** @type {(inputs: Emails_Auth_Verify_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confirma tu correo en SOTF Mods`)
};

const de_emails_auth_verify_subject = /** @type {(inputs: Emails_Auth_Verify_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bestätige deine E-Mail-Adresse für SOTF Mods`)
};

const fr_emails_auth_verify_subject = /** @type {(inputs: Emails_Auth_Verify_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confirmez votre adresse e-mail pour SOTF Mods`)
};

const it_emails_auth_verify_subject = /** @type {(inputs: Emails_Auth_Verify_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conferma la tua email per SOTF Mods`)
};

const nl_emails_auth_verify_subject = /** @type {(inputs: Emails_Auth_Verify_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bevestig je e-mailadres voor SOTF Mods`)
};

const pl_emails_auth_verify_subject = /** @type {(inputs: Emails_Auth_Verify_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Potwierdź swój e-mail w SOTF Mods`)
};

const pt_emails_auth_verify_subject = /** @type {(inputs: Emails_Auth_Verify_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confirme seu e-mail no SOTF Mods`)
};

const ru_emails_auth_verify_subject = /** @type {(inputs: Emails_Auth_Verify_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подтвердите почту для SOTF Mods`)
};

const sv_emails_auth_verify_subject = /** @type {(inputs: Emails_Auth_Verify_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bekräfta din e-postadress för SOTF Mods`)
};

const tr_emails_auth_verify_subject = /** @type {(inputs: Emails_Auth_Verify_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods için e-postanı doğrula`)
};

const zh_emails_auth_verify_subject = /** @type {(inputs: Emails_Auth_Verify_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`确认你在 SOTF Mods 的邮箱`)
};

const ja_emails_auth_verify_subject = /** @type {(inputs: Emails_Auth_Verify_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods のメールアドレスを確認してください`)
};

/**
* | output |
* | --- |
* | "Confirm your email for SOTF Mods" |
*
* @param {Emails_Auth_Verify_SubjectInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_auth_verify_subject = /** @type {((inputs?: Emails_Auth_Verify_SubjectInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Verify_SubjectInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_auth_verify_subject(inputs)
	if (locale === "de") return de_emails_auth_verify_subject(inputs)
	if (locale === "fr") return fr_emails_auth_verify_subject(inputs)
	if (locale === "it") return it_emails_auth_verify_subject(inputs)
	if (locale === "nl") return nl_emails_auth_verify_subject(inputs)
	if (locale === "pl") return pl_emails_auth_verify_subject(inputs)
	if (locale === "pt") return pt_emails_auth_verify_subject(inputs)
	if (locale === "ru") return ru_emails_auth_verify_subject(inputs)
	if (locale === "sv") return sv_emails_auth_verify_subject(inputs)
	if (locale === "tr") return tr_emails_auth_verify_subject(inputs)
	if (locale === "zh") return zh_emails_auth_verify_subject(inputs)
	if (locale === "ja") return ja_emails_auth_verify_subject(inputs)
	return en_emails_auth_verify_subject(inputs)
});
