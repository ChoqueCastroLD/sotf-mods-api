/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ email: NonNullable<unknown> }} Emails_Auth_Email_Change_BodyInputs */

const en_emails_auth_email_change_body = /** @type {(inputs: Emails_Auth_Email_Change_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`You asked to use ${i?.email} for your SOTF Mods account. Confirm it to finish the change.`)
};

const es_emails_auth_email_change_body = /** @type {(inputs: Emails_Auth_Email_Change_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Has pedido usar ${i?.email} en tu cuenta de SOTF Mods. Confírmalo para terminar el cambio.`)
};

const de_emails_auth_email_change_body = /** @type {(inputs: Emails_Auth_Email_Change_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Du möchtest ${i?.email} für dein SOTF-Mods-Konto verwenden. Bestätige die Adresse, um die Änderung abzuschließen.`)
};

const fr_emails_auth_email_change_body = /** @type {(inputs: Emails_Auth_Email_Change_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Vous avez demandé à utiliser ${i?.email} pour votre compte SOTF Mods. Confirmez-la pour terminer le changement.`)
};

const it_emails_auth_email_change_body = /** @type {(inputs: Emails_Auth_Email_Change_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Hai chiesto di usare ${i?.email} per il tuo account SOTF Mods. Confermalo per completare la modifica.`)
};

const nl_emails_auth_email_change_body = /** @type {(inputs: Emails_Auth_Email_Change_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Je wilt ${i?.email} gebruiken voor je SOTF Mods-account. Bevestig het om de wijziging af te ronden.`)
};

const pl_emails_auth_email_change_body = /** @type {(inputs: Emails_Auth_Email_Change_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Poprosiłeś o użycie adresu ${i?.email} dla konta SOTF Mods. Potwierdź go, aby dokończyć zmianę.`)
};

const pt_emails_auth_email_change_body = /** @type {(inputs: Emails_Auth_Email_Change_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Você pediu para usar ${i?.email} na sua conta do SOTF Mods. Confirme para concluir a alteração.`)
};

const ru_emails_auth_email_change_body = /** @type {(inputs: Emails_Auth_Email_Change_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Вы хотите использовать ${i?.email} для аккаунта SOTF Mods. Подтвердите адрес, чтобы завершить смену.`)
};

const sv_emails_auth_email_change_body = /** @type {(inputs: Emails_Auth_Email_Change_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Du vill använda ${i?.email} för ditt SOTF Mods-konto. Bekräfta den för att slutföra ändringen.`)
};

const tr_emails_auth_email_change_body = /** @type {(inputs: Emails_Auth_Email_Change_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`SOTF Mods hesabın için ${i?.email} adresini kullanmak istedin. Değişikliği tamamlamak için doğrula.`)
};

const zh_emails_auth_email_change_body = /** @type {(inputs: Emails_Auth_Email_Change_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`你申请将 SOTF Mods 账号的邮箱改为 ${i?.email}。确认后即可完成更改。`)
};

const ja_emails_auth_email_change_body = /** @type {(inputs: Emails_Auth_Email_Change_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`SOTF Mods アカウントで ${i?.email} を使用するようリクエストされました。確認すると変更が完了します。`)
};

/**
* | output |
* | --- |
* | "You asked to use {email} for your SOTF Mods account. Confirm it to finish the change." |
*
* @param {Emails_Auth_Email_Change_BodyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_auth_email_change_body = /** @type {((inputs: Emails_Auth_Email_Change_BodyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Email_Change_BodyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_auth_email_change_body(inputs)
	if (locale === "de") return de_emails_auth_email_change_body(inputs)
	if (locale === "fr") return fr_emails_auth_email_change_body(inputs)
	if (locale === "it") return it_emails_auth_email_change_body(inputs)
	if (locale === "nl") return nl_emails_auth_email_change_body(inputs)
	if (locale === "pl") return pl_emails_auth_email_change_body(inputs)
	if (locale === "pt") return pt_emails_auth_email_change_body(inputs)
	if (locale === "ru") return ru_emails_auth_email_change_body(inputs)
	if (locale === "sv") return sv_emails_auth_email_change_body(inputs)
	if (locale === "tr") return tr_emails_auth_email_change_body(inputs)
	if (locale === "zh") return zh_emails_auth_email_change_body(inputs)
	if (locale === "ja") return ja_emails_auth_email_change_body(inputs)
	return en_emails_auth_email_change_body(inputs)
});
