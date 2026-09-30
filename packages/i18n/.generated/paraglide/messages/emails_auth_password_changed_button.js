/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Auth_Password_Changed_ButtonInputs */

const en_emails_auth_password_changed_button = /** @type {(inputs: Emails_Auth_Password_Changed_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reset password`)
};

const es_emails_auth_password_changed_button = /** @type {(inputs: Emails_Auth_Password_Changed_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Restablecer contraseña`)
};

const de_emails_auth_password_changed_button = /** @type {(inputs: Emails_Auth_Password_Changed_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Passwort zurücksetzen`)
};

const fr_emails_auth_password_changed_button = /** @type {(inputs: Emails_Auth_Password_Changed_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Réinitialiser le mot de passe`)
};

const it_emails_auth_password_changed_button = /** @type {(inputs: Emails_Auth_Password_Changed_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reimposta password`)
};

const nl_emails_auth_password_changed_button = /** @type {(inputs: Emails_Auth_Password_Changed_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wachtwoord opnieuw instellen`)
};

const pl_emails_auth_password_changed_button = /** @type {(inputs: Emails_Auth_Password_Changed_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zresetuj hasło`)
};

const pt_emails_auth_password_changed_button = /** @type {(inputs: Emails_Auth_Password_Changed_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Redefinir senha`)
};

const ru_emails_auth_password_changed_button = /** @type {(inputs: Emails_Auth_Password_Changed_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сбросить пароль`)
};

const sv_emails_auth_password_changed_button = /** @type {(inputs: Emails_Auth_Password_Changed_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Återställ lösenord`)
};

const tr_emails_auth_password_changed_button = /** @type {(inputs: Emails_Auth_Password_Changed_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Şifreyi sıfırla`)
};

const zh_emails_auth_password_changed_button = /** @type {(inputs: Emails_Auth_Password_Changed_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重置密码`)
};

const ja_emails_auth_password_changed_button = /** @type {(inputs: Emails_Auth_Password_Changed_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`パスワードを再設定`)
};

/**
* | output |
* | --- |
* | "Reset password" |
*
* @param {Emails_Auth_Password_Changed_ButtonInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_auth_password_changed_button = /** @type {((inputs?: Emails_Auth_Password_Changed_ButtonInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Password_Changed_ButtonInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_auth_password_changed_button(inputs)
	if (locale === "de") return de_emails_auth_password_changed_button(inputs)
	if (locale === "fr") return fr_emails_auth_password_changed_button(inputs)
	if (locale === "it") return it_emails_auth_password_changed_button(inputs)
	if (locale === "nl") return nl_emails_auth_password_changed_button(inputs)
	if (locale === "pl") return pl_emails_auth_password_changed_button(inputs)
	if (locale === "pt") return pt_emails_auth_password_changed_button(inputs)
	if (locale === "ru") return ru_emails_auth_password_changed_button(inputs)
	if (locale === "sv") return sv_emails_auth_password_changed_button(inputs)
	if (locale === "tr") return tr_emails_auth_password_changed_button(inputs)
	if (locale === "zh") return zh_emails_auth_password_changed_button(inputs)
	if (locale === "ja") return ja_emails_auth_password_changed_button(inputs)
	return en_emails_auth_password_changed_button(inputs)
});
