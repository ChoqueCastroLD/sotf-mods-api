/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notif_AckInputs */

const en_settings_notif_ack = /** @type {(inputs: Settings_Notif_AckInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your field reports`)
};

const es_settings_notif_ack = /** @type {(inputs: Settings_Notif_AckInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tus informes de campo`)
};

const de_settings_notif_ack = /** @type {(inputs: Settings_Notif_AckInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deine Feldberichte`)
};

const fr_settings_notif_ack = /** @type {(inputs: Settings_Notif_AckInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vos rapports de terrain`)
};

const it_settings_notif_ack = /** @type {(inputs: Settings_Notif_AckInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I tuoi rapporti sul campo`)
};

const nl_settings_notif_ack = /** @type {(inputs: Settings_Notif_AckInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je veldrapporten`)
};

const pl_settings_notif_ack = /** @type {(inputs: Settings_Notif_AckInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twoje raporty terenowe`)
};

const pt_settings_notif_ack = /** @type {(inputs: Settings_Notif_AckInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seus relatórios de campo`)
};

const ru_settings_notif_ack = /** @type {(inputs: Settings_Notif_AckInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваши полевые отчёты`)
};

const sv_settings_notif_ack = /** @type {(inputs: Settings_Notif_AckInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dina fältrapporter`)
};

const tr_settings_notif_ack = /** @type {(inputs: Settings_Notif_AckInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saha raporların`)
};

const zh_settings_notif_ack = /** @type {(inputs: Settings_Notif_AckInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的实地报告`)
};

const ja_settings_notif_ack = /** @type {(inputs: Settings_Notif_AckInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`あなたの現地レポート`)
};

/**
* | output |
* | --- |
* | "Your field reports" |
*
* @param {Settings_Notif_AckInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_notif_ack = /** @type {((inputs?: Settings_Notif_AckInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_AckInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_notif_ack(inputs)
	if (locale === "de") return de_settings_notif_ack(inputs)
	if (locale === "fr") return fr_settings_notif_ack(inputs)
	if (locale === "it") return it_settings_notif_ack(inputs)
	if (locale === "nl") return nl_settings_notif_ack(inputs)
	if (locale === "pl") return pl_settings_notif_ack(inputs)
	if (locale === "pt") return pt_settings_notif_ack(inputs)
	if (locale === "ru") return ru_settings_notif_ack(inputs)
	if (locale === "sv") return sv_settings_notif_ack(inputs)
	if (locale === "tr") return tr_settings_notif_ack(inputs)
	if (locale === "zh") return zh_settings_notif_ack(inputs)
	if (locale === "ja") return ja_settings_notif_ack(inputs)
	return en_settings_notif_ack(inputs)
});
