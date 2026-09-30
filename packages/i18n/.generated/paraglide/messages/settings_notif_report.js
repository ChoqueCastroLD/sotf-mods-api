/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notif_ReportInputs */

const en_settings_notif_report = /** @type {(inputs: Settings_Notif_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your reports`)
};

const es_settings_notif_report = /** @type {(inputs: Settings_Notif_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tus reportes`)
};

const de_settings_notif_report = /** @type {(inputs: Settings_Notif_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deine Meldungen`)
};

const fr_settings_notif_report = /** @type {(inputs: Settings_Notif_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vos signalements`)
};

const it_settings_notif_report = /** @type {(inputs: Settings_Notif_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le tue segnalazioni`)
};

const nl_settings_notif_report = /** @type {(inputs: Settings_Notif_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je meldingen`)
};

const pl_settings_notif_report = /** @type {(inputs: Settings_Notif_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twoje zgłoszenia`)
};

const pt_settings_notif_report = /** @type {(inputs: Settings_Notif_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suas denúncias`)
};

const ru_settings_notif_report = /** @type {(inputs: Settings_Notif_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваши жалобы`)
};

const sv_settings_notif_report = /** @type {(inputs: Settings_Notif_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dina anmälningar`)
};

const tr_settings_notif_report = /** @type {(inputs: Settings_Notif_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bildirimlerin`)
};

const zh_settings_notif_report = /** @type {(inputs: Settings_Notif_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的举报`)
};

const ja_settings_notif_report = /** @type {(inputs: Settings_Notif_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`あなたの通報`)
};

/**
* | output |
* | --- |
* | "Your reports" |
*
* @param {Settings_Notif_ReportInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_notif_report = /** @type {((inputs?: Settings_Notif_ReportInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_ReportInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_notif_report(inputs)
	if (locale === "de") return de_settings_notif_report(inputs)
	if (locale === "fr") return fr_settings_notif_report(inputs)
	if (locale === "it") return it_settings_notif_report(inputs)
	if (locale === "nl") return nl_settings_notif_report(inputs)
	if (locale === "pl") return pl_settings_notif_report(inputs)
	if (locale === "pt") return pt_settings_notif_report(inputs)
	if (locale === "ru") return ru_settings_notif_report(inputs)
	if (locale === "sv") return sv_settings_notif_report(inputs)
	if (locale === "tr") return tr_settings_notif_report(inputs)
	if (locale === "zh") return zh_settings_notif_report(inputs)
	if (locale === "ja") return ja_settings_notif_report(inputs)
	return en_settings_notif_report(inputs)
});
