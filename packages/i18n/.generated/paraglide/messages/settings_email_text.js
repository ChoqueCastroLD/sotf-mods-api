/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Email_TextInputs */

const en_settings_email_text = /** @type {(inputs: Settings_Email_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Used to log in and for the emails you choose to get. To change it, confirm the new address from your inbox; we’ll let the old one know.`)
};

const es_settings_email_text = /** @type {(inputs: Settings_Email_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sirve para iniciar sesión y para los correos que elijas recibir. Para cambiarlo, confirma la dirección nueva desde tu bandeja de entrada; avisaremos a la antigua.`)
};

const de_settings_email_text = /** @type {(inputs: Settings_Email_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dient zur Anmeldung und für die E-Mails, die du bekommen möchtest. Zum Ändern bestätigst du die neue Adresse aus deinem Posteingang; die alte bekommt einen Hinweis.`)
};

const fr_settings_email_text = /** @type {(inputs: Settings_Email_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elle sert à vous connecter et aux e-mails que vous choisissez de recevoir. Pour la changer, confirmez la nouvelle adresse depuis votre boîte de réception ; nous prévenons l’ancienne.`)
};

const it_settings_email_text = /** @type {(inputs: Settings_Email_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Serve per accedere e per le email che scegli di ricevere. Per cambiarlo, conferma il nuovo indirizzo dalla tua casella; avviseremo quello vecchio.`)
};

const nl_settings_email_text = /** @type {(inputs: Settings_Email_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gebruikt om in te loggen en voor de e-mails die je wilt ontvangen. Om het te wijzigen bevestig je het nieuwe adres vanuit je inbox; het oude adres krijgt een bericht.`)
};

const pl_settings_email_text = /** @type {(inputs: Settings_Email_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Służy do logowania i wiadomości, które chcesz dostawać. Aby go zmienić, potwierdź nowy adres ze swojej skrzynki; stary adres dostanie powiadomienie.`)
};

const pt_settings_email_text = /** @type {(inputs: Settings_Email_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usado para entrar e para os e-mails que você escolher receber. Para mudar, confirme o novo endereço pela sua caixa de entrada; avisaremos o antigo.`)
};

const ru_settings_email_text = /** @type {(inputs: Settings_Email_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Используется для входа и писем, которые вы решили получать. Чтобы сменить его, подтвердите новый адрес из почтового ящика; на старый придёт уведомление.`)
};

const sv_settings_email_text = /** @type {(inputs: Settings_Email_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Används för inloggning och för de mejl du väljer att få. För att byta bekräftar du den nya adressen från din inkorg; den gamla får ett meddelande.`)
};

const tr_settings_email_text = /** @type {(inputs: Settings_Email_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Giriş yapmak ve almayı seçtiğin e-postalar için kullanılır. Değiştirmek için yeni adresi gelen kutundan onayla; eski adrese haber veririz.`)
};

const zh_settings_email_text = /** @type {(inputs: Settings_Email_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`用于登录以及接收你选择的邮件。更改时，请在收件箱中确认新地址；我们也会通知旧地址。`)
};

const ja_settings_email_text = /** @type {(inputs: Settings_Email_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ログインと、受け取ることを選んだメールに使います。変更するには受信トレイから新しいアドレスを確認してください。古いアドレスにもお知らせします。`)
};

/**
* | output |
* | --- |
* | "Used to log in and for the emails you choose to get. To change it, confirm the new address from your inbox; we’ll let the old one know." |
*
* @param {Settings_Email_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_email_text = /** @type {((inputs?: Settings_Email_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Email_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_email_text(inputs)
	if (locale === "de") return de_settings_email_text(inputs)
	if (locale === "fr") return fr_settings_email_text(inputs)
	if (locale === "it") return it_settings_email_text(inputs)
	if (locale === "nl") return nl_settings_email_text(inputs)
	if (locale === "pl") return pl_settings_email_text(inputs)
	if (locale === "pt") return pt_settings_email_text(inputs)
	if (locale === "ru") return ru_settings_email_text(inputs)
	if (locale === "sv") return sv_settings_email_text(inputs)
	if (locale === "tr") return tr_settings_email_text(inputs)
	if (locale === "zh") return zh_settings_email_text(inputs)
	if (locale === "ja") return ja_settings_email_text(inputs)
	return en_settings_email_text(inputs)
});
