/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notif_MilestoneInputs */

const en_settings_notif_milestone = /** @type {(inputs: Settings_Notif_MilestoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download milestones`)
};

const es_settings_notif_milestone = /** @type {(inputs: Settings_Notif_MilestoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hitos de descargas`)
};

const de_settings_notif_milestone = /** @type {(inputs: Settings_Notif_MilestoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download-Meilensteine`)
};

const fr_settings_notif_milestone = /** @type {(inputs: Settings_Notif_MilestoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paliers de téléchargements`)
};

const it_settings_notif_milestone = /** @type {(inputs: Settings_Notif_MilestoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Traguardi di download`)
};

const nl_settings_notif_milestone = /** @type {(inputs: Settings_Notif_MilestoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloadmijlpalen`)
};

const pl_settings_notif_milestone = /** @type {(inputs: Settings_Notif_MilestoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Progi pobrań`)
};

const pt_settings_notif_milestone = /** @type {(inputs: Settings_Notif_MilestoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marcos de downloads`)
};

const ru_settings_notif_milestone = /** @type {(inputs: Settings_Notif_MilestoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Рубежи загрузок`)
};

const sv_settings_notif_milestone = /** @type {(inputs: Settings_Notif_MilestoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Milstolpar för nedladdningar`)
};

const tr_settings_notif_milestone = /** @type {(inputs: Settings_Notif_MilestoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İndirme dönüm noktaları`)
};

const zh_settings_notif_milestone = /** @type {(inputs: Settings_Notif_MilestoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下载里程碑`)
};

const ja_settings_notif_milestone = /** @type {(inputs: Settings_Notif_MilestoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダウンロードの節目`)
};

/**
* | output |
* | --- |
* | "Download milestones" |
*
* @param {Settings_Notif_MilestoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_notif_milestone = /** @type {((inputs?: Settings_Notif_MilestoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_MilestoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_notif_milestone(inputs)
	if (locale === "de") return de_settings_notif_milestone(inputs)
	if (locale === "fr") return fr_settings_notif_milestone(inputs)
	if (locale === "it") return it_settings_notif_milestone(inputs)
	if (locale === "nl") return nl_settings_notif_milestone(inputs)
	if (locale === "pl") return pl_settings_notif_milestone(inputs)
	if (locale === "pt") return pt_settings_notif_milestone(inputs)
	if (locale === "ru") return ru_settings_notif_milestone(inputs)
	if (locale === "sv") return sv_settings_notif_milestone(inputs)
	if (locale === "tr") return tr_settings_notif_milestone(inputs)
	if (locale === "zh") return zh_settings_notif_milestone(inputs)
	if (locale === "ja") return ja_settings_notif_milestone(inputs)
	return en_settings_notif_milestone(inputs)
});
