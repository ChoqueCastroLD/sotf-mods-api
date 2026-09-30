/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ date: NonNullable<unknown> }} Settings_Sessions_StartedInputs */

const en_settings_sessions_started = /** @type {(inputs: Settings_Sessions_StartedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`signed in ${i?.date}`)
};

const es_settings_sessions_started = /** @type {(inputs: Settings_Sessions_StartedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`sesión iniciada el ${i?.date}`)
};

const de_settings_sessions_started = /** @type {(inputs: Settings_Sessions_StartedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`angemeldet am ${i?.date}`)
};

const fr_settings_sessions_started = /** @type {(inputs: Settings_Sessions_StartedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`connecté le ${i?.date}`)
};

const it_settings_sessions_started = /** @type {(inputs: Settings_Sessions_StartedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`accesso il ${i?.date}`)
};

const nl_settings_sessions_started = /** @type {(inputs: Settings_Sessions_StartedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`ingelogd op ${i?.date}`)
};

const pl_settings_sessions_started = /** @type {(inputs: Settings_Sessions_StartedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`zalogowano ${i?.date}`)
};

const pt_settings_sessions_started = /** @type {(inputs: Settings_Sessions_StartedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`conectado em ${i?.date}`)
};

const ru_settings_sessions_started = /** @type {(inputs: Settings_Sessions_StartedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`вход ${i?.date}`)
};

const sv_settings_sessions_started = /** @type {(inputs: Settings_Sessions_StartedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`inloggad ${i?.date}`)
};

const tr_settings_sessions_started = /** @type {(inputs: Settings_Sessions_StartedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date} tarihinde giriş yapıldı`)
};

const zh_settings_sessions_started = /** @type {(inputs: Settings_Sessions_StartedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date} 登录`)
};

const ja_settings_sessions_started = /** @type {(inputs: Settings_Sessions_StartedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date} にログイン`)
};

/**
* | output |
* | --- |
* | "signed in {date}" |
*
* @param {Settings_Sessions_StartedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_sessions_started = /** @type {((inputs: Settings_Sessions_StartedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Sessions_StartedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_sessions_started(inputs)
	if (locale === "de") return de_settings_sessions_started(inputs)
	if (locale === "fr") return fr_settings_sessions_started(inputs)
	if (locale === "it") return it_settings_sessions_started(inputs)
	if (locale === "nl") return nl_settings_sessions_started(inputs)
	if (locale === "pl") return pl_settings_sessions_started(inputs)
	if (locale === "pt") return pt_settings_sessions_started(inputs)
	if (locale === "ru") return ru_settings_sessions_started(inputs)
	if (locale === "sv") return sv_settings_sessions_started(inputs)
	if (locale === "tr") return tr_settings_sessions_started(inputs)
	if (locale === "zh") return zh_settings_sessions_started(inputs)
	if (locale === "ja") return ja_settings_sessions_started(inputs)
	return en_settings_sessions_started(inputs)
});
