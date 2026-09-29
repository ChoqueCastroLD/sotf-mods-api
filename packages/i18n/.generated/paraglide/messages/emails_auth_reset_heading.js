/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Auth_Reset_HeadingInputs */

const en_emails_auth_reset_heading = /** @type {(inputs: Emails_Auth_Reset_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reset your password`)
};

const es_emails_auth_reset_heading = /** @type {(inputs: Emails_Auth_Reset_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Restablece tu contraseña`)
};

const de_emails_auth_reset_heading = /** @type {(inputs: Emails_Auth_Reset_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Passwort zurücksetzen`)
};

const fr_emails_auth_reset_heading = /** @type {(inputs: Emails_Auth_Reset_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Réinitialisez votre mot de passe`)
};

const it_emails_auth_reset_heading = /** @type {(inputs: Emails_Auth_Reset_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reimposta la password`)
};

const nl_emails_auth_reset_heading = /** @type {(inputs: Emails_Auth_Reset_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wachtwoord opnieuw instellen`)
};

const pl_emails_auth_reset_heading = /** @type {(inputs: Emails_Auth_Reset_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zresetuj hasło`)
};

const pt_emails_auth_reset_heading = /** @type {(inputs: Emails_Auth_Reset_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Redefina sua senha`)
};

const ru_emails_auth_reset_heading = /** @type {(inputs: Emails_Auth_Reset_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сбросьте пароль`)
};

const sv_emails_auth_reset_heading = /** @type {(inputs: Emails_Auth_Reset_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Återställ ditt lösenord`)
};

const tr_emails_auth_reset_heading = /** @type {(inputs: Emails_Auth_Reset_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Şifreni sıfırla`)
};

const zh_emails_auth_reset_heading = /** @type {(inputs: Emails_Auth_Reset_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重置密码`)
};

const ja_emails_auth_reset_heading = /** @type {(inputs: Emails_Auth_Reset_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`パスワードの再設定`)
};

/**
* | output |
* | --- |
* | "Reset your password" |
*
* @param {Emails_Auth_Reset_HeadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_auth_reset_heading = /** @type {((inputs?: Emails_Auth_Reset_HeadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Reset_HeadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_auth_reset_heading(inputs)
	if (locale === "de") return de_emails_auth_reset_heading(inputs)
	if (locale === "fr") return fr_emails_auth_reset_heading(inputs)
	if (locale === "it") return it_emails_auth_reset_heading(inputs)
	if (locale === "nl") return nl_emails_auth_reset_heading(inputs)
	if (locale === "pl") return pl_emails_auth_reset_heading(inputs)
	if (locale === "pt") return pt_emails_auth_reset_heading(inputs)
	if (locale === "ru") return ru_emails_auth_reset_heading(inputs)
	if (locale === "sv") return sv_emails_auth_reset_heading(inputs)
	if (locale === "tr") return tr_emails_auth_reset_heading(inputs)
	if (locale === "zh") return zh_emails_auth_reset_heading(inputs)
	if (locale === "ja") return ja_emails_auth_reset_heading(inputs)
	return en_emails_auth_reset_heading(inputs)
});
