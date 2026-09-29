/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Auth_Reset_SubjectInputs */

const en_emails_auth_reset_subject = /** @type {(inputs: Emails_Auth_Reset_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reset your SOTF Mods password`)
};

const es_emails_auth_reset_subject = /** @type {(inputs: Emails_Auth_Reset_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Restablece tu contraseña de SOTF Mods`)
};

const de_emails_auth_reset_subject = /** @type {(inputs: Emails_Auth_Reset_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Setze dein SOTF-Mods-Passwort zurück`)
};

const fr_emails_auth_reset_subject = /** @type {(inputs: Emails_Auth_Reset_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Réinitialisez votre mot de passe SOTF Mods`)
};

const it_emails_auth_reset_subject = /** @type {(inputs: Emails_Auth_Reset_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reimposta la password di SOTF Mods`)
};

const nl_emails_auth_reset_subject = /** @type {(inputs: Emails_Auth_Reset_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stel je SOTF Mods-wachtwoord opnieuw in`)
};

const pl_emails_auth_reset_subject = /** @type {(inputs: Emails_Auth_Reset_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zresetuj hasło do SOTF Mods`)
};

const pt_emails_auth_reset_subject = /** @type {(inputs: Emails_Auth_Reset_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Redefina sua senha do SOTF Mods`)
};

const ru_emails_auth_reset_subject = /** @type {(inputs: Emails_Auth_Reset_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сброс пароля SOTF Mods`)
};

const sv_emails_auth_reset_subject = /** @type {(inputs: Emails_Auth_Reset_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Återställ ditt lösenord för SOTF Mods`)
};

const tr_emails_auth_reset_subject = /** @type {(inputs: Emails_Auth_Reset_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods şifreni sıfırla`)
};

const zh_emails_auth_reset_subject = /** @type {(inputs: Emails_Auth_Reset_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重置你的 SOTF Mods 密码`)
};

const ja_emails_auth_reset_subject = /** @type {(inputs: Emails_Auth_Reset_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods のパスワード再設定`)
};

/**
* | output |
* | --- |
* | "Reset your SOTF Mods password" |
*
* @param {Emails_Auth_Reset_SubjectInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_auth_reset_subject = /** @type {((inputs?: Emails_Auth_Reset_SubjectInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Reset_SubjectInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_auth_reset_subject(inputs)
	if (locale === "de") return de_emails_auth_reset_subject(inputs)
	if (locale === "fr") return fr_emails_auth_reset_subject(inputs)
	if (locale === "it") return it_emails_auth_reset_subject(inputs)
	if (locale === "nl") return nl_emails_auth_reset_subject(inputs)
	if (locale === "pl") return pl_emails_auth_reset_subject(inputs)
	if (locale === "pt") return pt_emails_auth_reset_subject(inputs)
	if (locale === "ru") return ru_emails_auth_reset_subject(inputs)
	if (locale === "sv") return sv_emails_auth_reset_subject(inputs)
	if (locale === "tr") return tr_emails_auth_reset_subject(inputs)
	if (locale === "zh") return zh_emails_auth_reset_subject(inputs)
	if (locale === "ja") return ja_emails_auth_reset_subject(inputs)
	return en_emails_auth_reset_subject(inputs)
});
