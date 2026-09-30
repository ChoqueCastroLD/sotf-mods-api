/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notif_WeeklyInputs */

const en_settings_notif_weekly = /** @type {(inputs: Settings_Notif_WeeklyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Weekly creator report`)
};

const es_settings_notif_weekly = /** @type {(inputs: Settings_Notif_WeeklyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Informe semanal de creador`)
};

const de_settings_notif_weekly = /** @type {(inputs: Settings_Notif_WeeklyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wöchentlicher Creator-Bericht`)
};

const fr_settings_notif_weekly = /** @type {(inputs: Settings_Notif_WeeklyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rapport hebdomadaire de créateur`)
};

const it_settings_notif_weekly = /** @type {(inputs: Settings_Notif_WeeklyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Report settimanale da creatore`)
};

const nl_settings_notif_weekly = /** @type {(inputs: Settings_Notif_WeeklyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wekelijks makersrapport`)
};

const pl_settings_notif_weekly = /** @type {(inputs: Settings_Notif_WeeklyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tygodniowy raport twórcy`)
};

const pt_settings_notif_weekly = /** @type {(inputs: Settings_Notif_WeeklyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Relatório semanal de criador`)
};

const ru_settings_notif_weekly = /** @type {(inputs: Settings_Notif_WeeklyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Еженедельный отчёт автора`)
};

const sv_settings_notif_weekly = /** @type {(inputs: Settings_Notif_WeeklyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veckorapport för skapare`)
};

const tr_settings_notif_weekly = /** @type {(inputs: Settings_Notif_WeeklyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Haftalık yapımcı raporu`)
};

const zh_settings_notif_weekly = /** @type {(inputs: Settings_Notif_WeeklyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创作者周报`)
};

const ja_settings_notif_weekly = /** @type {(inputs: Settings_Notif_WeeklyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`クリエイター週次レポート`)
};

/**
* | output |
* | --- |
* | "Weekly creator report" |
*
* @param {Settings_Notif_WeeklyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_notif_weekly = /** @type {((inputs?: Settings_Notif_WeeklyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_WeeklyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_notif_weekly(inputs)
	if (locale === "de") return de_settings_notif_weekly(inputs)
	if (locale === "fr") return fr_settings_notif_weekly(inputs)
	if (locale === "it") return it_settings_notif_weekly(inputs)
	if (locale === "nl") return nl_settings_notif_weekly(inputs)
	if (locale === "pl") return pl_settings_notif_weekly(inputs)
	if (locale === "pt") return pt_settings_notif_weekly(inputs)
	if (locale === "ru") return ru_settings_notif_weekly(inputs)
	if (locale === "sv") return sv_settings_notif_weekly(inputs)
	if (locale === "tr") return tr_settings_notif_weekly(inputs)
	if (locale === "zh") return zh_settings_notif_weekly(inputs)
	if (locale === "ja") return ja_settings_notif_weekly(inputs)
	return en_settings_notif_weekly(inputs)
});
