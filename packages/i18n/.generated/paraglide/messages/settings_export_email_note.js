/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Export_Email_NoteInputs */

const en_settings_export_email_note = /** @type {(inputs: Settings_Export_Email_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We also email you the download link. It works for 24 hours.`)
};

const es_settings_export_email_note = /** @type {(inputs: Settings_Export_Email_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`También te enviamos el enlace de descarga por correo. Funciona durante 24 horas.`)
};

const de_settings_export_email_note = /** @type {(inputs: Settings_Export_Email_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wir senden dir den Download-Link auch per E-Mail. Er funktioniert 24 Stunden lang.`)
};

const fr_settings_export_email_note = /** @type {(inputs: Settings_Export_Email_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nous vous envoyons aussi le lien par e-mail. Il fonctionne pendant 24 heures.`)
};

const it_settings_export_email_note = /** @type {(inputs: Settings_Export_Email_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ti inviamo anche il link di download via email. Funziona per 24 ore.`)
};

const nl_settings_export_email_note = /** @type {(inputs: Settings_Export_Email_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We mailen je de downloadlink ook. Hij werkt 24 uur.`)
};

const pl_settings_export_email_note = /** @type {(inputs: Settings_Export_Email_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link do pobrania wyślemy ci też e-mailem. Działa przez 24 godziny.`)
};

const pt_settings_export_email_note = /** @type {(inputs: Settings_Export_Email_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Também enviamos o link de download por e-mail. Ele funciona por 24 horas.`)
};

const ru_settings_export_email_note = /** @type {(inputs: Settings_Export_Email_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Мы также пришлём ссылку на почту. Она действует 24 часа.`)
};

const sv_settings_export_email_note = /** @type {(inputs: Settings_Export_Email_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vi mejlar dig också nedladdningslänken. Den fungerar i 24 timmar.`)
};

const tr_settings_export_email_note = /** @type {(inputs: Settings_Export_Email_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İndirme bağlantısını e-postayla da gönderiyoruz. 24 saat geçerlidir.`)
};

const zh_settings_export_email_note = /** @type {(inputs: Settings_Export_Email_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`我们也会通过邮件发送下载链接，有效期 24 小时。`)
};

const ja_settings_export_email_note = /** @type {(inputs: Settings_Export_Email_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダウンロードリンクはメールでもお送りします。有効期間は 24 時間です。`)
};

/**
* | output |
* | --- |
* | "We also email you the download link. It works for 24 hours." |
*
* @param {Settings_Export_Email_NoteInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_export_email_note = /** @type {((inputs?: Settings_Export_Email_NoteInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Export_Email_NoteInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_export_email_note(inputs)
	if (locale === "de") return de_settings_export_email_note(inputs)
	if (locale === "fr") return fr_settings_export_email_note(inputs)
	if (locale === "it") return it_settings_export_email_note(inputs)
	if (locale === "nl") return nl_settings_export_email_note(inputs)
	if (locale === "pl") return pl_settings_export_email_note(inputs)
	if (locale === "pt") return pt_settings_export_email_note(inputs)
	if (locale === "ru") return ru_settings_export_email_note(inputs)
	if (locale === "sv") return sv_settings_export_email_note(inputs)
	if (locale === "tr") return tr_settings_export_email_note(inputs)
	if (locale === "zh") return zh_settings_export_email_note(inputs)
	if (locale === "ja") return ja_settings_export_email_note(inputs)
	return en_settings_export_email_note(inputs)
});
