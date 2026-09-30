/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Auth_Email_Change_PreviewInputs */

const en_emails_auth_email_change_preview = /** @type {(inputs: Emails_Auth_Email_Change_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confirm the new address to finish the change.`)
};

const es_emails_auth_email_change_preview = /** @type {(inputs: Emails_Auth_Email_Change_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confirma la nueva dirección para terminar el cambio.`)
};

const de_emails_auth_email_change_preview = /** @type {(inputs: Emails_Auth_Email_Change_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bestätige die neue Adresse, um die Änderung abzuschließen.`)
};

const fr_emails_auth_email_change_preview = /** @type {(inputs: Emails_Auth_Email_Change_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confirmez la nouvelle adresse pour terminer le changement.`)
};

const it_emails_auth_email_change_preview = /** @type {(inputs: Emails_Auth_Email_Change_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conferma il nuovo indirizzo per completare la modifica.`)
};

const nl_emails_auth_email_change_preview = /** @type {(inputs: Emails_Auth_Email_Change_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bevestig het nieuwe adres om de wijziging af te ronden.`)
};

const pl_emails_auth_email_change_preview = /** @type {(inputs: Emails_Auth_Email_Change_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Potwierdź nowy adres, aby dokończyć zmianę.`)
};

const pt_emails_auth_email_change_preview = /** @type {(inputs: Emails_Auth_Email_Change_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confirme o novo endereço para concluir a alteração.`)
};

const ru_emails_auth_email_change_preview = /** @type {(inputs: Emails_Auth_Email_Change_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подтвердите новый адрес, чтобы завершить смену.`)
};

const sv_emails_auth_email_change_preview = /** @type {(inputs: Emails_Auth_Email_Change_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bekräfta den nya adressen för att slutföra ändringen.`)
};

const tr_emails_auth_email_change_preview = /** @type {(inputs: Emails_Auth_Email_Change_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Değişikliği tamamlamak için yeni adresi doğrula.`)
};

const zh_emails_auth_email_change_preview = /** @type {(inputs: Emails_Auth_Email_Change_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`确认新邮箱以完成更改。`)
};

const ja_emails_auth_email_change_preview = /** @type {(inputs: Emails_Auth_Email_Change_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新しいアドレスを確認すると変更が完了します。`)
};

/**
* | output |
* | --- |
* | "Confirm the new address to finish the change." |
*
* @param {Emails_Auth_Email_Change_PreviewInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_auth_email_change_preview = /** @type {((inputs?: Emails_Auth_Email_Change_PreviewInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Email_Change_PreviewInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_auth_email_change_preview(inputs)
	if (locale === "de") return de_emails_auth_email_change_preview(inputs)
	if (locale === "fr") return fr_emails_auth_email_change_preview(inputs)
	if (locale === "it") return it_emails_auth_email_change_preview(inputs)
	if (locale === "nl") return nl_emails_auth_email_change_preview(inputs)
	if (locale === "pl") return pl_emails_auth_email_change_preview(inputs)
	if (locale === "pt") return pt_emails_auth_email_change_preview(inputs)
	if (locale === "ru") return ru_emails_auth_email_change_preview(inputs)
	if (locale === "sv") return sv_emails_auth_email_change_preview(inputs)
	if (locale === "tr") return tr_emails_auth_email_change_preview(inputs)
	if (locale === "zh") return zh_emails_auth_email_change_preview(inputs)
	if (locale === "ja") return ja_emails_auth_email_change_preview(inputs)
	return en_emails_auth_email_change_preview(inputs)
});
