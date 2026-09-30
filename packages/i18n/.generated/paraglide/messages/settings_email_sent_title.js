/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Email_Sent_TitleInputs */

const en_settings_email_sent_title = /** @type {(inputs: Settings_Email_Sent_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Check your inbox`)
};

const es_settings_email_sent_title = /** @type {(inputs: Settings_Email_Sent_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Revisa tu bandeja de entrada`)
};

const de_settings_email_sent_title = /** @type {(inputs: Settings_Email_Sent_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schau in dein Postfach`)
};

const fr_settings_email_sent_title = /** @type {(inputs: Settings_Email_Sent_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Consultez votre boîte de réception`)
};

const it_settings_email_sent_title = /** @type {(inputs: Settings_Email_Sent_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Controlla la tua casella`)
};

const nl_settings_email_sent_title = /** @type {(inputs: Settings_Email_Sent_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kijk in je inbox`)
};

const pl_settings_email_sent_title = /** @type {(inputs: Settings_Email_Sent_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sprawdź skrzynkę`)
};

const pt_settings_email_sent_title = /** @type {(inputs: Settings_Email_Sent_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confira sua caixa de entrada`)
};

const ru_settings_email_sent_title = /** @type {(inputs: Settings_Email_Sent_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Проверьте почту`)
};

const sv_settings_email_sent_title = /** @type {(inputs: Settings_Email_Sent_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kolla din inkorg`)
};

const tr_settings_email_sent_title = /** @type {(inputs: Settings_Email_Sent_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gelen kutunu kontrol et`)
};

const zh_settings_email_sent_title = /** @type {(inputs: Settings_Email_Sent_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请查看你的收件箱`)
};

const ja_settings_email_sent_title = /** @type {(inputs: Settings_Email_Sent_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`受信トレイを確認してください`)
};

/**
* | output |
* | --- |
* | "Check your inbox" |
*
* @param {Settings_Email_Sent_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_email_sent_title = /** @type {((inputs?: Settings_Email_Sent_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Email_Sent_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_email_sent_title(inputs)
	if (locale === "de") return de_settings_email_sent_title(inputs)
	if (locale === "fr") return fr_settings_email_sent_title(inputs)
	if (locale === "it") return it_settings_email_sent_title(inputs)
	if (locale === "nl") return nl_settings_email_sent_title(inputs)
	if (locale === "pl") return pl_settings_email_sent_title(inputs)
	if (locale === "pt") return pt_settings_email_sent_title(inputs)
	if (locale === "ru") return ru_settings_email_sent_title(inputs)
	if (locale === "sv") return sv_settings_email_sent_title(inputs)
	if (locale === "tr") return tr_settings_email_sent_title(inputs)
	if (locale === "zh") return zh_settings_email_sent_title(inputs)
	if (locale === "ja") return ja_settings_email_sent_title(inputs)
	return en_settings_email_sent_title(inputs)
});
