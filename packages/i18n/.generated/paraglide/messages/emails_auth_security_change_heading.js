/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Auth_Security_Change_HeadingInputs */

const en_emails_auth_security_change_heading = /** @type {(inputs: Emails_Auth_Security_Change_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Security change`)
};

const es_emails_auth_security_change_heading = /** @type {(inputs: Emails_Auth_Security_Change_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cambio de seguridad`)
};

const de_emails_auth_security_change_heading = /** @type {(inputs: Emails_Auth_Security_Change_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sicherheitsänderung`)
};

const fr_emails_auth_security_change_heading = /** @type {(inputs: Emails_Auth_Security_Change_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Changement de sécurité`)
};

const it_emails_auth_security_change_heading = /** @type {(inputs: Emails_Auth_Security_Change_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modifica di sicurezza`)
};

const nl_emails_auth_security_change_heading = /** @type {(inputs: Emails_Auth_Security_Change_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beveiligingswijziging`)
};

const pl_emails_auth_security_change_heading = /** @type {(inputs: Emails_Auth_Security_Change_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zmiana zabezpieczeń`)
};

const pt_emails_auth_security_change_heading = /** @type {(inputs: Emails_Auth_Security_Change_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alteração de segurança`)
};

const ru_emails_auth_security_change_heading = /** @type {(inputs: Emails_Auth_Security_Change_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Изменение безопасности`)
};

const sv_emails_auth_security_change_heading = /** @type {(inputs: Emails_Auth_Security_Change_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Säkerhetsändring`)
};

const tr_emails_auth_security_change_heading = /** @type {(inputs: Emails_Auth_Security_Change_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Güvenlik değişikliği`)
};

const zh_emails_auth_security_change_heading = /** @type {(inputs: Emails_Auth_Security_Change_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`安全设置更改`)
};

const ja_emails_auth_security_change_heading = /** @type {(inputs: Emails_Auth_Security_Change_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`セキュリティの変更`)
};

/**
* | output |
* | --- |
* | "Security change" |
*
* @param {Emails_Auth_Security_Change_HeadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_auth_security_change_heading = /** @type {((inputs?: Emails_Auth_Security_Change_HeadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Security_Change_HeadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_auth_security_change_heading(inputs)
	if (locale === "de") return de_emails_auth_security_change_heading(inputs)
	if (locale === "fr") return fr_emails_auth_security_change_heading(inputs)
	if (locale === "it") return it_emails_auth_security_change_heading(inputs)
	if (locale === "nl") return nl_emails_auth_security_change_heading(inputs)
	if (locale === "pl") return pl_emails_auth_security_change_heading(inputs)
	if (locale === "pt") return pt_emails_auth_security_change_heading(inputs)
	if (locale === "ru") return ru_emails_auth_security_change_heading(inputs)
	if (locale === "sv") return sv_emails_auth_security_change_heading(inputs)
	if (locale === "tr") return tr_emails_auth_security_change_heading(inputs)
	if (locale === "zh") return zh_emails_auth_security_change_heading(inputs)
	if (locale === "ja") return ja_emails_auth_security_change_heading(inputs)
	return en_emails_auth_security_change_heading(inputs)
});
