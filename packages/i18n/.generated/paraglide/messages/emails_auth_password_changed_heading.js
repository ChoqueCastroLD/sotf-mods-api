/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Auth_Password_Changed_HeadingInputs */

const en_emails_auth_password_changed_heading = /** @type {(inputs: Emails_Auth_Password_Changed_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Password changed`)
};

const es_emails_auth_password_changed_heading = /** @type {(inputs: Emails_Auth_Password_Changed_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contraseña cambiada`)
};

const de_emails_auth_password_changed_heading = /** @type {(inputs: Emails_Auth_Password_Changed_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Passwort geändert`)
};

const fr_emails_auth_password_changed_heading = /** @type {(inputs: Emails_Auth_Password_Changed_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mot de passe modifié`)
};

const it_emails_auth_password_changed_heading = /** @type {(inputs: Emails_Auth_Password_Changed_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Password cambiata`)
};

const nl_emails_auth_password_changed_heading = /** @type {(inputs: Emails_Auth_Password_Changed_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wachtwoord gewijzigd`)
};

const pl_emails_auth_password_changed_heading = /** @type {(inputs: Emails_Auth_Password_Changed_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hasło zmienione`)
};

const pt_emails_auth_password_changed_heading = /** @type {(inputs: Emails_Auth_Password_Changed_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Senha alterada`)
};

const ru_emails_auth_password_changed_heading = /** @type {(inputs: Emails_Auth_Password_Changed_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Пароль изменён`)
};

const sv_emails_auth_password_changed_heading = /** @type {(inputs: Emails_Auth_Password_Changed_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lösenordet har ändrats`)
};

const tr_emails_auth_password_changed_heading = /** @type {(inputs: Emails_Auth_Password_Changed_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Şifre değiştirildi`)
};

const zh_emails_auth_password_changed_heading = /** @type {(inputs: Emails_Auth_Password_Changed_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`密码已更改`)
};

const ja_emails_auth_password_changed_heading = /** @type {(inputs: Emails_Auth_Password_Changed_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`パスワードが変更されました`)
};

/**
* | output |
* | --- |
* | "Password changed" |
*
* @param {Emails_Auth_Password_Changed_HeadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_auth_password_changed_heading = /** @type {((inputs?: Emails_Auth_Password_Changed_HeadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Password_Changed_HeadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_auth_password_changed_heading(inputs)
	if (locale === "de") return de_emails_auth_password_changed_heading(inputs)
	if (locale === "fr") return fr_emails_auth_password_changed_heading(inputs)
	if (locale === "it") return it_emails_auth_password_changed_heading(inputs)
	if (locale === "nl") return nl_emails_auth_password_changed_heading(inputs)
	if (locale === "pl") return pl_emails_auth_password_changed_heading(inputs)
	if (locale === "pt") return pt_emails_auth_password_changed_heading(inputs)
	if (locale === "ru") return ru_emails_auth_password_changed_heading(inputs)
	if (locale === "sv") return sv_emails_auth_password_changed_heading(inputs)
	if (locale === "tr") return tr_emails_auth_password_changed_heading(inputs)
	if (locale === "zh") return zh_emails_auth_password_changed_heading(inputs)
	if (locale === "ja") return ja_emails_auth_password_changed_heading(inputs)
	return en_emails_auth_password_changed_heading(inputs)
});
