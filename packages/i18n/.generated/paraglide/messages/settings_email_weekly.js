/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Email_WeeklyInputs */

const en_settings_email_weekly = /** @type {(inputs: Settings_Email_WeeklyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Weekly digest`)
};

const es_settings_email_weekly = /** @type {(inputs: Settings_Email_WeeklyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resumen semanal`)
};

const de_settings_email_weekly = /** @type {(inputs: Settings_Email_WeeklyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wöchentliche Zusammenfassung`)
};

const fr_settings_email_weekly = /** @type {(inputs: Settings_Email_WeeklyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Résumé hebdomadaire`)
};

const it_settings_email_weekly = /** @type {(inputs: Settings_Email_WeeklyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Riepilogo settimanale`)
};

const nl_settings_email_weekly = /** @type {(inputs: Settings_Email_WeeklyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wekelijkse samenvatting`)
};

const pl_settings_email_weekly = /** @type {(inputs: Settings_Email_WeeklyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Podsumowanie tygodniowe`)
};

const pt_settings_email_weekly = /** @type {(inputs: Settings_Email_WeeklyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resumo semanal`)
};

const ru_settings_email_weekly = /** @type {(inputs: Settings_Email_WeeklyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Еженедельная сводка`)
};

const sv_settings_email_weekly = /** @type {(inputs: Settings_Email_WeeklyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veckosammanfattning`)
};

const tr_settings_email_weekly = /** @type {(inputs: Settings_Email_WeeklyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Haftalık özet`)
};

const zh_settings_email_weekly = /** @type {(inputs: Settings_Email_WeeklyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`每周摘要`)
};

const ja_settings_email_weekly = /** @type {(inputs: Settings_Email_WeeklyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`毎週のダイジェスト`)
};

/**
* | output |
* | --- |
* | "Weekly digest" |
*
* @param {Settings_Email_WeeklyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_email_weekly = /** @type {((inputs?: Settings_Email_WeeklyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Email_WeeklyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_email_weekly(inputs)
	if (locale === "de") return de_settings_email_weekly(inputs)
	if (locale === "fr") return fr_settings_email_weekly(inputs)
	if (locale === "it") return it_settings_email_weekly(inputs)
	if (locale === "nl") return nl_settings_email_weekly(inputs)
	if (locale === "pl") return pl_settings_email_weekly(inputs)
	if (locale === "pt") return pt_settings_email_weekly(inputs)
	if (locale === "ru") return ru_settings_email_weekly(inputs)
	if (locale === "sv") return sv_settings_email_weekly(inputs)
	if (locale === "tr") return tr_settings_email_weekly(inputs)
	if (locale === "zh") return zh_settings_email_weekly(inputs)
	if (locale === "ja") return ja_settings_email_weekly(inputs)
	return en_settings_email_weekly(inputs)
});
