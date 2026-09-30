/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Email_DailyInputs */

const en_settings_email_daily = /** @type {(inputs: Settings_Email_DailyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Daily digest`)
};

const es_settings_email_daily = /** @type {(inputs: Settings_Email_DailyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resumen diario`)
};

const de_settings_email_daily = /** @type {(inputs: Settings_Email_DailyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tägliche Zusammenfassung`)
};

const fr_settings_email_daily = /** @type {(inputs: Settings_Email_DailyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Résumé quotidien`)
};

const it_settings_email_daily = /** @type {(inputs: Settings_Email_DailyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Riepilogo giornaliero`)
};

const nl_settings_email_daily = /** @type {(inputs: Settings_Email_DailyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dagelijkse samenvatting`)
};

const pl_settings_email_daily = /** @type {(inputs: Settings_Email_DailyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Podsumowanie dzienne`)
};

const pt_settings_email_daily = /** @type {(inputs: Settings_Email_DailyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resumo diário`)
};

const ru_settings_email_daily = /** @type {(inputs: Settings_Email_DailyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ежедневная сводка`)
};

const sv_settings_email_daily = /** @type {(inputs: Settings_Email_DailyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Daglig sammanfattning`)
};

const tr_settings_email_daily = /** @type {(inputs: Settings_Email_DailyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Günlük özet`)
};

const zh_settings_email_daily = /** @type {(inputs: Settings_Email_DailyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`每日摘要`)
};

const ja_settings_email_daily = /** @type {(inputs: Settings_Email_DailyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`毎日のダイジェスト`)
};

/**
* | output |
* | --- |
* | "Daily digest" |
*
* @param {Settings_Email_DailyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_email_daily = /** @type {((inputs?: Settings_Email_DailyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Email_DailyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_email_daily(inputs)
	if (locale === "de") return de_settings_email_daily(inputs)
	if (locale === "fr") return fr_settings_email_daily(inputs)
	if (locale === "it") return it_settings_email_daily(inputs)
	if (locale === "nl") return nl_settings_email_daily(inputs)
	if (locale === "pl") return pl_settings_email_daily(inputs)
	if (locale === "pt") return pt_settings_email_daily(inputs)
	if (locale === "ru") return ru_settings_email_daily(inputs)
	if (locale === "sv") return sv_settings_email_daily(inputs)
	if (locale === "tr") return tr_settings_email_daily(inputs)
	if (locale === "zh") return zh_settings_email_daily(inputs)
	if (locale === "ja") return ja_settings_email_daily(inputs)
	return en_settings_email_daily(inputs)
});
