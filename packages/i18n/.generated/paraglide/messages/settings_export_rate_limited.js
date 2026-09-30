/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Export_Rate_LimitedInputs */

const en_settings_export_rate_limited = /** @type {(inputs: Settings_Export_Rate_LimitedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You requested an export recently — try again later`)
};

const es_settings_export_rate_limited = /** @type {(inputs: Settings_Export_Rate_LimitedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pediste una exportación hace poco: vuelve a intentarlo más tarde`)
};

const de_settings_export_rate_limited = /** @type {(inputs: Settings_Export_Rate_LimitedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du hast vor Kurzem einen Export angefordert – versuch es später noch einmal`)
};

const fr_settings_export_rate_limited = /** @type {(inputs: Settings_Export_Rate_LimitedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous avez demandé un export récemment — réessayez plus tard`)
};

const it_settings_export_rate_limited = /** @type {(inputs: Settings_Export_Rate_LimitedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hai richiesto un’esportazione di recente: riprova più tardi`)
};

const nl_settings_export_rate_limited = /** @type {(inputs: Settings_Export_Rate_LimitedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je hebt onlangs een export aangevraagd — probeer het later opnieuw`)
};

const pl_settings_export_rate_limited = /** @type {(inputs: Settings_Export_Rate_LimitedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niedawno zamówiłeś eksport — spróbuj ponownie później`)
};

const pt_settings_export_rate_limited = /** @type {(inputs: Settings_Export_Rate_LimitedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você pediu uma exportação recentemente — tente mais tarde`)
};

const ru_settings_export_rate_limited = /** @type {(inputs: Settings_Export_Rate_LimitedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вы недавно запрашивали экспорт — попробуйте позже`)
};

const sv_settings_export_rate_limited = /** @type {(inputs: Settings_Export_Rate_LimitedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du begärde en export nyligen — försök igen senare`)
};

const tr_settings_export_rate_limited = /** @type {(inputs: Settings_Export_Rate_LimitedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kısa süre önce dışa aktarım istedin — daha sonra tekrar dene`)
};

const zh_settings_export_rate_limited = /** @type {(inputs: Settings_Export_Rate_LimitedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你最近已请求过导出——请稍后再试`)
};

const ja_settings_export_rate_limited = /** @type {(inputs: Settings_Export_Rate_LimitedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最近エクスポートをリクエストしています。しばらくしてからお試しください`)
};

/**
* | output |
* | --- |
* | "You requested an export recently — try again later" |
*
* @param {Settings_Export_Rate_LimitedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_export_rate_limited = /** @type {((inputs?: Settings_Export_Rate_LimitedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Export_Rate_LimitedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_export_rate_limited(inputs)
	if (locale === "de") return de_settings_export_rate_limited(inputs)
	if (locale === "fr") return fr_settings_export_rate_limited(inputs)
	if (locale === "it") return it_settings_export_rate_limited(inputs)
	if (locale === "nl") return nl_settings_export_rate_limited(inputs)
	if (locale === "pl") return pl_settings_export_rate_limited(inputs)
	if (locale === "pt") return pt_settings_export_rate_limited(inputs)
	if (locale === "ru") return ru_settings_export_rate_limited(inputs)
	if (locale === "sv") return sv_settings_export_rate_limited(inputs)
	if (locale === "tr") return tr_settings_export_rate_limited(inputs)
	if (locale === "zh") return zh_settings_export_rate_limited(inputs)
	if (locale === "ja") return ja_settings_export_rate_limited(inputs)
	return en_settings_export_rate_limited(inputs)
});
