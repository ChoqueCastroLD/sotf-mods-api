/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ when: NonNullable<unknown> }} Emails_Auth_Security_Change_Recovery_CodesInputs */

const en_emails_auth_security_change_recovery_codes = /** @type {(inputs: Emails_Auth_Security_Change_Recovery_CodesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`The recovery codes of your account were replaced on ${i?.when} (UTC). The old codes no longer work.`)
};

const es_emails_auth_security_change_recovery_codes = /** @type {(inputs: Emails_Auth_Security_Change_Recovery_CodesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Los códigos de recuperación de tu cuenta se reemplazaron el ${i?.when} (UTC). Los anteriores ya no funcionan.`)
};

const de_emails_auth_security_change_recovery_codes = /** @type {(inputs: Emails_Auth_Security_Change_Recovery_CodesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Die Wiederherstellungscodes deines Kontos wurden am ${i?.when} (UTC) ersetzt. Die alten Codes funktionieren nicht mehr.`)
};

const fr_emails_auth_security_change_recovery_codes = /** @type {(inputs: Emails_Auth_Security_Change_Recovery_CodesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Les codes de récupération de votre compte ont été remplacés le ${i?.when} (UTC). Les anciens codes ne fonctionnent plus.`)
};

const it_emails_auth_security_change_recovery_codes = /** @type {(inputs: Emails_Auth_Security_Change_Recovery_CodesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`I codici di recupero del tuo account sono stati sostituiti il ${i?.when} (UTC). I vecchi codici non funzionano più.`)
};

const nl_emails_auth_security_change_recovery_codes = /** @type {(inputs: Emails_Auth_Security_Change_Recovery_CodesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`De herstelcodes van je account zijn op ${i?.when} (UTC) vervangen. De oude codes werken niet meer.`)
};

const pl_emails_auth_security_change_recovery_codes = /** @type {(inputs: Emails_Auth_Security_Change_Recovery_CodesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Kody odzyskiwania Twojego konta zostały zastąpione ${i?.when} (UTC). Stare kody już nie działają.`)
};

const pt_emails_auth_security_change_recovery_codes = /** @type {(inputs: Emails_Auth_Security_Change_Recovery_CodesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Os códigos de recuperação da sua conta foram substituídos em ${i?.when} (UTC). Os antigos deixaram de funcionar.`)
};

const ru_emails_auth_security_change_recovery_codes = /** @type {(inputs: Emails_Auth_Security_Change_Recovery_CodesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Коды восстановления вашего аккаунта заменены ${i?.when} (UTC). Старые коды больше не работают.`)
};

const sv_emails_auth_security_change_recovery_codes = /** @type {(inputs: Emails_Auth_Security_Change_Recovery_CodesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Återställningskoderna för ditt konto byttes ut ${i?.when} (UTC). De gamla koderna fungerar inte längre.`)
};

const tr_emails_auth_security_change_recovery_codes = /** @type {(inputs: Emails_Auth_Security_Change_Recovery_CodesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Hesabının kurtarma kodları ${i?.when} (UTC) tarihinde değiştirildi. Eski kodlar artık çalışmaz.`)
};

const zh_emails_auth_security_change_recovery_codes = /** @type {(inputs: Emails_Auth_Security_Change_Recovery_CodesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`你的账号的恢复码已于 ${i?.when}（UTC）更换，旧恢复码不再有效。`)
};

const ja_emails_auth_security_change_recovery_codes = /** @type {(inputs: Emails_Auth_Security_Change_Recovery_CodesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.when}（UTC）に、アカウントのリカバリーコードが再発行されました。以前のコードは使えなくなります。`)
};

/**
* | output |
* | --- |
* | "The recovery codes of your account were replaced on {when} (UTC). The old codes no longer work." |
*
* @param {Emails_Auth_Security_Change_Recovery_CodesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_auth_security_change_recovery_codes = /** @type {((inputs: Emails_Auth_Security_Change_Recovery_CodesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Security_Change_Recovery_CodesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_auth_security_change_recovery_codes(inputs)
	if (locale === "de") return de_emails_auth_security_change_recovery_codes(inputs)
	if (locale === "fr") return fr_emails_auth_security_change_recovery_codes(inputs)
	if (locale === "it") return it_emails_auth_security_change_recovery_codes(inputs)
	if (locale === "nl") return nl_emails_auth_security_change_recovery_codes(inputs)
	if (locale === "pl") return pl_emails_auth_security_change_recovery_codes(inputs)
	if (locale === "pt") return pt_emails_auth_security_change_recovery_codes(inputs)
	if (locale === "ru") return ru_emails_auth_security_change_recovery_codes(inputs)
	if (locale === "sv") return sv_emails_auth_security_change_recovery_codes(inputs)
	if (locale === "tr") return tr_emails_auth_security_change_recovery_codes(inputs)
	if (locale === "zh") return zh_emails_auth_security_change_recovery_codes(inputs)
	if (locale === "ja") return ja_emails_auth_security_change_recovery_codes(inputs)
	return en_emails_auth_security_change_recovery_codes(inputs)
});
