/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Auth_Reset_ButtonInputs */

const en_emails_auth_reset_button = /** @type {(inputs: Emails_Auth_Reset_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choose a new password`)
};

const es_emails_auth_reset_button = /** @type {(inputs: Emails_Auth_Reset_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elegir una contraseña nueva`)
};

const de_emails_auth_reset_button = /** @type {(inputs: Emails_Auth_Reset_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neues Passwort wählen`)
};

const fr_emails_auth_reset_button = /** @type {(inputs: Emails_Auth_Reset_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choisir un nouveau mot de passe`)
};

const it_emails_auth_reset_button = /** @type {(inputs: Emails_Auth_Reset_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scegli una nuova password`)
};

const nl_emails_auth_reset_button = /** @type {(inputs: Emails_Auth_Reset_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuw wachtwoord kiezen`)
};

const pl_emails_auth_reset_button = /** @type {(inputs: Emails_Auth_Reset_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wybierz nowe hasło`)
};

const pt_emails_auth_reset_button = /** @type {(inputs: Emails_Auth_Reset_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escolher uma nova senha`)
};

const ru_emails_auth_reset_button = /** @type {(inputs: Emails_Auth_Reset_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выбрать новый пароль`)
};

const sv_emails_auth_reset_button = /** @type {(inputs: Emails_Auth_Reset_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Välj ett nytt lösenord`)
};

const tr_emails_auth_reset_button = /** @type {(inputs: Emails_Auth_Reset_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeni şifre seç`)
};

const zh_emails_auth_reset_button = /** @type {(inputs: Emails_Auth_Reset_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`设置新密码`)
};

const ja_emails_auth_reset_button = /** @type {(inputs: Emails_Auth_Reset_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新しいパスワードを設定`)
};

/**
* | output |
* | --- |
* | "Choose a new password" |
*
* @param {Emails_Auth_Reset_ButtonInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_auth_reset_button = /** @type {((inputs?: Emails_Auth_Reset_ButtonInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Reset_ButtonInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_auth_reset_button(inputs)
	if (locale === "de") return de_emails_auth_reset_button(inputs)
	if (locale === "fr") return fr_emails_auth_reset_button(inputs)
	if (locale === "it") return it_emails_auth_reset_button(inputs)
	if (locale === "nl") return nl_emails_auth_reset_button(inputs)
	if (locale === "pl") return pl_emails_auth_reset_button(inputs)
	if (locale === "pt") return pt_emails_auth_reset_button(inputs)
	if (locale === "ru") return ru_emails_auth_reset_button(inputs)
	if (locale === "sv") return sv_emails_auth_reset_button(inputs)
	if (locale === "tr") return tr_emails_auth_reset_button(inputs)
	if (locale === "zh") return zh_emails_auth_reset_button(inputs)
	if (locale === "ja") return ja_emails_auth_reset_button(inputs)
	return en_emails_auth_reset_button(inputs)
});
