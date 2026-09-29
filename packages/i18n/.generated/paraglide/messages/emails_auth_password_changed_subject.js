/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Auth_Password_Changed_SubjectInputs */

const en_emails_auth_password_changed_subject = /** @type {(inputs: Emails_Auth_Password_Changed_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your SOTF Mods password was changed`)
};

const es_emails_auth_password_changed_subject = /** @type {(inputs: Emails_Auth_Password_Changed_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se ha cambiado tu contraseña de SOTF Mods`)
};

const de_emails_auth_password_changed_subject = /** @type {(inputs: Emails_Auth_Password_Changed_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dein SOTF-Mods-Passwort wurde geändert`)
};

const fr_emails_auth_password_changed_subject = /** @type {(inputs: Emails_Auth_Password_Changed_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votre mot de passe SOTF Mods a été modifié`)
};

const it_emails_auth_password_changed_subject = /** @type {(inputs: Emails_Auth_Password_Changed_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La password di SOTF Mods è stata cambiata`)
};

const nl_emails_auth_password_changed_subject = /** @type {(inputs: Emails_Auth_Password_Changed_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je SOTF Mods-wachtwoord is gewijzigd`)
};

const pl_emails_auth_password_changed_subject = /** @type {(inputs: Emails_Auth_Password_Changed_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hasło do SOTF Mods zostało zmienione`)
};

const pt_emails_auth_password_changed_subject = /** @type {(inputs: Emails_Auth_Password_Changed_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sua senha do SOTF Mods foi alterada`)
};

const ru_emails_auth_password_changed_subject = /** @type {(inputs: Emails_Auth_Password_Changed_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Пароль SOTF Mods изменён`)
};

const sv_emails_auth_password_changed_subject = /** @type {(inputs: Emails_Auth_Password_Changed_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ditt lösenord för SOTF Mods har ändrats`)
};

const tr_emails_auth_password_changed_subject = /** @type {(inputs: Emails_Auth_Password_Changed_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods şifren değiştirildi`)
};

const zh_emails_auth_password_changed_subject = /** @type {(inputs: Emails_Auth_Password_Changed_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的 SOTF Mods 密码已更改`)
};

const ja_emails_auth_password_changed_subject = /** @type {(inputs: Emails_Auth_Password_Changed_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods のパスワードが変更されました`)
};

/**
* | output |
* | --- |
* | "Your SOTF Mods password was changed" |
*
* @param {Emails_Auth_Password_Changed_SubjectInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_auth_password_changed_subject = /** @type {((inputs?: Emails_Auth_Password_Changed_SubjectInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Password_Changed_SubjectInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_auth_password_changed_subject(inputs)
	if (locale === "de") return de_emails_auth_password_changed_subject(inputs)
	if (locale === "fr") return fr_emails_auth_password_changed_subject(inputs)
	if (locale === "it") return it_emails_auth_password_changed_subject(inputs)
	if (locale === "nl") return nl_emails_auth_password_changed_subject(inputs)
	if (locale === "pl") return pl_emails_auth_password_changed_subject(inputs)
	if (locale === "pt") return pt_emails_auth_password_changed_subject(inputs)
	if (locale === "ru") return ru_emails_auth_password_changed_subject(inputs)
	if (locale === "sv") return sv_emails_auth_password_changed_subject(inputs)
	if (locale === "tr") return tr_emails_auth_password_changed_subject(inputs)
	if (locale === "zh") return zh_emails_auth_password_changed_subject(inputs)
	if (locale === "ja") return ja_emails_auth_password_changed_subject(inputs)
	return en_emails_auth_password_changed_subject(inputs)
});
