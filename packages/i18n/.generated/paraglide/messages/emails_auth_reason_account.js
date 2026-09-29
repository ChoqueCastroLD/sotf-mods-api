/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Auth_Reason_AccountInputs */

const en_emails_auth_reason_account = /** @type {(inputs: Emails_Auth_Reason_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You’re receiving this email because of activity on your SOTF Mods account.`)
};

const es_emails_auth_reason_account = /** @type {(inputs: Emails_Auth_Reason_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recibes este correo por actividad en tu cuenta de SOTF Mods.`)
};

const de_emails_auth_reason_account = /** @type {(inputs: Emails_Auth_Reason_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du erhältst diese E-Mail wegen einer Aktivität in deinem SOTF-Mods-Konto.`)
};

const fr_emails_auth_reason_account = /** @type {(inputs: Emails_Auth_Reason_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous recevez cet e-mail en raison d’une activité sur votre compte SOTF Mods.`)
};

const it_emails_auth_reason_account = /** @type {(inputs: Emails_Auth_Reason_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ricevi questa email per un’attività sul tuo account SOTF Mods.`)
};

const nl_emails_auth_reason_account = /** @type {(inputs: Emails_Auth_Reason_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je ontvangt deze e-mail vanwege activiteit op je SOTF Mods-account.`)
};

const pl_emails_auth_reason_account = /** @type {(inputs: Emails_Auth_Reason_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otrzymujesz tę wiadomość z powodu aktywności na Twoim koncie SOTF Mods.`)
};

const pt_emails_auth_reason_account = /** @type {(inputs: Emails_Auth_Reason_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você está recebendo este e-mail por causa de uma atividade na sua conta do SOTF Mods.`)
};

const ru_emails_auth_reason_account = /** @type {(inputs: Emails_Auth_Reason_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вы получили это письмо из-за действий в вашем аккаунте SOTF Mods.`)
};

const sv_emails_auth_reason_account = /** @type {(inputs: Emails_Auth_Reason_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du får det här mejlet på grund av aktivitet på ditt SOTF Mods-konto.`)
};

const tr_emails_auth_reason_account = /** @type {(inputs: Emails_Auth_Reason_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu e-postayı SOTF Mods hesabındaki bir etkinlik nedeniyle alıyorsun.`)
};

const zh_emails_auth_reason_account = /** @type {(inputs: Emails_Auth_Reason_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你收到这封邮件，是因为你的 SOTF Mods 账号有相关活动。`)
};

const ja_emails_auth_reason_account = /** @type {(inputs: Emails_Auth_Reason_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このメールは、SOTF Mods アカウントでの操作に基づいて送信されています。`)
};

/**
* | output |
* | --- |
* | "You’re receiving this email because of activity on your SOTF Mods account." |
*
* @param {Emails_Auth_Reason_AccountInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_auth_reason_account = /** @type {((inputs?: Emails_Auth_Reason_AccountInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Reason_AccountInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_auth_reason_account(inputs)
	if (locale === "de") return de_emails_auth_reason_account(inputs)
	if (locale === "fr") return fr_emails_auth_reason_account(inputs)
	if (locale === "it") return it_emails_auth_reason_account(inputs)
	if (locale === "nl") return nl_emails_auth_reason_account(inputs)
	if (locale === "pl") return pl_emails_auth_reason_account(inputs)
	if (locale === "pt") return pt_emails_auth_reason_account(inputs)
	if (locale === "ru") return ru_emails_auth_reason_account(inputs)
	if (locale === "sv") return sv_emails_auth_reason_account(inputs)
	if (locale === "tr") return tr_emails_auth_reason_account(inputs)
	if (locale === "zh") return zh_emails_auth_reason_account(inputs)
	if (locale === "ja") return ja_emails_auth_reason_account(inputs)
	return en_emails_auth_reason_account(inputs)
});
