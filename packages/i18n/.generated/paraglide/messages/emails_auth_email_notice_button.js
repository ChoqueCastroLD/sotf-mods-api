/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Auth_Email_Notice_ButtonInputs */

const en_emails_auth_email_notice_button = /** @type {(inputs: Emails_Auth_Email_Notice_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Review security`)
};

const es_emails_auth_email_notice_button = /** @type {(inputs: Emails_Auth_Email_Notice_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Revisar la seguridad`)
};

const de_emails_auth_email_notice_button = /** @type {(inputs: Emails_Auth_Email_Notice_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sicherheit prüfen`)
};

const fr_emails_auth_email_notice_button = /** @type {(inputs: Emails_Auth_Email_Notice_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vérifier la sécurité`)
};

const it_emails_auth_email_notice_button = /** @type {(inputs: Emails_Auth_Email_Notice_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Controlla la sicurezza`)
};

const nl_emails_auth_email_notice_button = /** @type {(inputs: Emails_Auth_Email_Notice_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beveiliging controleren`)
};

const pl_emails_auth_email_notice_button = /** @type {(inputs: Emails_Auth_Email_Notice_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sprawdź bezpieczeństwo`)
};

const pt_emails_auth_email_notice_button = /** @type {(inputs: Emails_Auth_Email_Notice_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Revisar a segurança`)
};

const ru_emails_auth_email_notice_button = /** @type {(inputs: Emails_Auth_Email_Notice_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Проверить безопасность`)
};

const sv_emails_auth_email_notice_button = /** @type {(inputs: Emails_Auth_Email_Notice_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Granska säkerheten`)
};

const tr_emails_auth_email_notice_button = /** @type {(inputs: Emails_Auth_Email_Notice_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Güvenliği gözden geçir`)
};

const zh_emails_auth_email_notice_button = /** @type {(inputs: Emails_Auth_Email_Notice_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`检查安全设置`)
};

const ja_emails_auth_email_notice_button = /** @type {(inputs: Emails_Auth_Email_Notice_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`セキュリティを確認`)
};

/**
* | output |
* | --- |
* | "Review security" |
*
* @param {Emails_Auth_Email_Notice_ButtonInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_auth_email_notice_button = /** @type {((inputs?: Emails_Auth_Email_Notice_ButtonInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Email_Notice_ButtonInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_auth_email_notice_button(inputs)
	if (locale === "de") return de_emails_auth_email_notice_button(inputs)
	if (locale === "fr") return fr_emails_auth_email_notice_button(inputs)
	if (locale === "it") return it_emails_auth_email_notice_button(inputs)
	if (locale === "nl") return nl_emails_auth_email_notice_button(inputs)
	if (locale === "pl") return pl_emails_auth_email_notice_button(inputs)
	if (locale === "pt") return pt_emails_auth_email_notice_button(inputs)
	if (locale === "ru") return ru_emails_auth_email_notice_button(inputs)
	if (locale === "sv") return sv_emails_auth_email_notice_button(inputs)
	if (locale === "tr") return tr_emails_auth_email_notice_button(inputs)
	if (locale === "zh") return zh_emails_auth_email_notice_button(inputs)
	if (locale === "ja") return ja_emails_auth_email_notice_button(inputs)
	return en_emails_auth_email_notice_button(inputs)
});
