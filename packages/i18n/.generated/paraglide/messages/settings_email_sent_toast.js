/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Email_Sent_ToastInputs */

const en_settings_email_sent_toast = /** @type {(inputs: Settings_Email_Sent_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confirmation link sent`)
};

const es_settings_email_sent_toast = /** @type {(inputs: Settings_Email_Sent_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enlace de confirmación enviado`)
};

const de_settings_email_sent_toast = /** @type {(inputs: Settings_Email_Sent_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bestätigungslink gesendet`)
};

const fr_settings_email_sent_toast = /** @type {(inputs: Settings_Email_Sent_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lien de confirmation envoyé`)
};

const it_settings_email_sent_toast = /** @type {(inputs: Settings_Email_Sent_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link di conferma inviato`)
};

const nl_settings_email_sent_toast = /** @type {(inputs: Settings_Email_Sent_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bevestigingslink verstuurd`)
};

const pl_settings_email_sent_toast = /** @type {(inputs: Settings_Email_Sent_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wysłano link potwierdzający`)
};

const pt_settings_email_sent_toast = /** @type {(inputs: Settings_Email_Sent_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link de confirmação enviado`)
};

const ru_settings_email_sent_toast = /** @type {(inputs: Settings_Email_Sent_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ссылка для подтверждения отправлена`)
};

const sv_settings_email_sent_toast = /** @type {(inputs: Settings_Email_Sent_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bekräftelselänk skickad`)
};

const tr_settings_email_sent_toast = /** @type {(inputs: Settings_Email_Sent_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Onay bağlantısı gönderildi`)
};

const zh_settings_email_sent_toast = /** @type {(inputs: Settings_Email_Sent_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`确认链接已发送`)
};

const ja_settings_email_sent_toast = /** @type {(inputs: Settings_Email_Sent_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`確認リンクを送信しました`)
};

/**
* | output |
* | --- |
* | "Confirmation link sent" |
*
* @param {Settings_Email_Sent_ToastInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_email_sent_toast = /** @type {((inputs?: Settings_Email_Sent_ToastInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Email_Sent_ToastInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_email_sent_toast(inputs)
	if (locale === "de") return de_settings_email_sent_toast(inputs)
	if (locale === "fr") return fr_settings_email_sent_toast(inputs)
	if (locale === "it") return it_settings_email_sent_toast(inputs)
	if (locale === "nl") return nl_settings_email_sent_toast(inputs)
	if (locale === "pl") return pl_settings_email_sent_toast(inputs)
	if (locale === "pt") return pt_settings_email_sent_toast(inputs)
	if (locale === "ru") return ru_settings_email_sent_toast(inputs)
	if (locale === "sv") return sv_settings_email_sent_toast(inputs)
	if (locale === "tr") return tr_settings_email_sent_toast(inputs)
	if (locale === "zh") return zh_settings_email_sent_toast(inputs)
	if (locale === "ja") return ja_settings_email_sent_toast(inputs)
	return en_settings_email_sent_toast(inputs)
});
