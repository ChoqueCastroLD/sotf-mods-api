/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ when: NonNullable<unknown> }} Emails_Auth_Password_Changed_BodyInputs */

const en_emails_auth_password_changed_body = /** @type {(inputs: Emails_Auth_Password_Changed_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`The password of your account was changed on ${i?.when} (UTC).`)
};

const es_emails_auth_password_changed_body = /** @type {(inputs: Emails_Auth_Password_Changed_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`La contraseña de tu cuenta se cambió el ${i?.when} (UTC).`)
};

const de_emails_auth_password_changed_body = /** @type {(inputs: Emails_Auth_Password_Changed_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Das Passwort deines Kontos wurde am ${i?.when} (UTC) geändert.`)
};

const fr_emails_auth_password_changed_body = /** @type {(inputs: Emails_Auth_Password_Changed_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Le mot de passe de votre compte a été modifié le ${i?.when} (UTC).`)
};

const it_emails_auth_password_changed_body = /** @type {(inputs: Emails_Auth_Password_Changed_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`La password del tuo account è stata cambiata il ${i?.when} (UTC).`)
};

const nl_emails_auth_password_changed_body = /** @type {(inputs: Emails_Auth_Password_Changed_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Het wachtwoord van je account is gewijzigd op ${i?.when} (UTC).`)
};

const pl_emails_auth_password_changed_body = /** @type {(inputs: Emails_Auth_Password_Changed_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Hasło do Twojego konta zostało zmienione ${i?.when} (UTC).`)
};

const pt_emails_auth_password_changed_body = /** @type {(inputs: Emails_Auth_Password_Changed_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`A senha da sua conta foi alterada em ${i?.when} (UTC).`)
};

const ru_emails_auth_password_changed_body = /** @type {(inputs: Emails_Auth_Password_Changed_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Пароль вашего аккаунта был изменён ${i?.when} (UTC).`)
};

const sv_emails_auth_password_changed_body = /** @type {(inputs: Emails_Auth_Password_Changed_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Lösenordet för ditt konto ändrades ${i?.when} (UTC).`)
};

const tr_emails_auth_password_changed_body = /** @type {(inputs: Emails_Auth_Password_Changed_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Hesabının şifresi ${i?.when} (UTC) tarihinde değiştirildi.`)
};

const zh_emails_auth_password_changed_body = /** @type {(inputs: Emails_Auth_Password_Changed_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`你账号的密码已于 ${i?.when}（UTC）更改。`)
};

const ja_emails_auth_password_changed_body = /** @type {(inputs: Emails_Auth_Password_Changed_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`あなたのアカウントのパスワードが ${i?.when}（UTC）に変更されました。`)
};

/**
* | output |
* | --- |
* | "The password of your account was changed on {when} (UTC)." |
*
* @param {Emails_Auth_Password_Changed_BodyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_auth_password_changed_body = /** @type {((inputs: Emails_Auth_Password_Changed_BodyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Password_Changed_BodyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_auth_password_changed_body(inputs)
	if (locale === "de") return de_emails_auth_password_changed_body(inputs)
	if (locale === "fr") return fr_emails_auth_password_changed_body(inputs)
	if (locale === "it") return it_emails_auth_password_changed_body(inputs)
	if (locale === "nl") return nl_emails_auth_password_changed_body(inputs)
	if (locale === "pl") return pl_emails_auth_password_changed_body(inputs)
	if (locale === "pt") return pt_emails_auth_password_changed_body(inputs)
	if (locale === "ru") return ru_emails_auth_password_changed_body(inputs)
	if (locale === "sv") return sv_emails_auth_password_changed_body(inputs)
	if (locale === "tr") return tr_emails_auth_password_changed_body(inputs)
	if (locale === "zh") return zh_emails_auth_password_changed_body(inputs)
	if (locale === "ja") return ja_emails_auth_password_changed_body(inputs)
	return en_emails_auth_password_changed_body(inputs)
});
