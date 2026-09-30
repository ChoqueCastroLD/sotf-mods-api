/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Auth_Security_Change_ButtonInputs */

const en_emails_auth_security_change_button = /** @type {(inputs: Emails_Auth_Security_Change_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Review security settings`)
};

const es_emails_auth_security_change_button = /** @type {(inputs: Emails_Auth_Security_Change_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Revisar la seguridad`)
};

const de_emails_auth_security_change_button = /** @type {(inputs: Emails_Auth_Security_Change_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sicherheitseinstellungen prüfen`)
};

const fr_emails_auth_security_change_button = /** @type {(inputs: Emails_Auth_Security_Change_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vérifier la sécurité`)
};

const it_emails_auth_security_change_button = /** @type {(inputs: Emails_Auth_Security_Change_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Controlla la sicurezza`)
};

const nl_emails_auth_security_change_button = /** @type {(inputs: Emails_Auth_Security_Change_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beveiliging controleren`)
};

const pl_emails_auth_security_change_button = /** @type {(inputs: Emails_Auth_Security_Change_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sprawdź zabezpieczenia`)
};

const pt_emails_auth_security_change_button = /** @type {(inputs: Emails_Auth_Security_Change_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Revisar a segurança`)
};

const ru_emails_auth_security_change_button = /** @type {(inputs: Emails_Auth_Security_Change_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Проверить безопасность`)
};

const sv_emails_auth_security_change_button = /** @type {(inputs: Emails_Auth_Security_Change_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Granska säkerhetsinställningar`)
};

const tr_emails_auth_security_change_button = /** @type {(inputs: Emails_Auth_Security_Change_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Güvenlik ayarlarını gözden geçir`)
};

const zh_emails_auth_security_change_button = /** @type {(inputs: Emails_Auth_Security_Change_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`检查安全设置`)
};

const ja_emails_auth_security_change_button = /** @type {(inputs: Emails_Auth_Security_Change_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`セキュリティ設定を確認`)
};

/**
* | output |
* | --- |
* | "Review security settings" |
*
* @param {Emails_Auth_Security_Change_ButtonInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_auth_security_change_button = /** @type {((inputs?: Emails_Auth_Security_Change_ButtonInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Security_Change_ButtonInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_auth_security_change_button(inputs)
	if (locale === "de") return de_emails_auth_security_change_button(inputs)
	if (locale === "fr") return fr_emails_auth_security_change_button(inputs)
	if (locale === "it") return it_emails_auth_security_change_button(inputs)
	if (locale === "nl") return nl_emails_auth_security_change_button(inputs)
	if (locale === "pl") return pl_emails_auth_security_change_button(inputs)
	if (locale === "pt") return pt_emails_auth_security_change_button(inputs)
	if (locale === "ru") return ru_emails_auth_security_change_button(inputs)
	if (locale === "sv") return sv_emails_auth_security_change_button(inputs)
	if (locale === "tr") return tr_emails_auth_security_change_button(inputs)
	if (locale === "zh") return zh_emails_auth_security_change_button(inputs)
	if (locale === "ja") return ja_emails_auth_security_change_button(inputs)
	return en_emails_auth_security_change_button(inputs)
});
