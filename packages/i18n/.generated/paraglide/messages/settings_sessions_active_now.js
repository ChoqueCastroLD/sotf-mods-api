/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Sessions_Active_NowInputs */

const en_settings_sessions_active_now = /** @type {(inputs: Settings_Sessions_Active_NowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`active now`)
};

const es_settings_sessions_active_now = /** @type {(inputs: Settings_Sessions_Active_NowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`activa ahora`)
};

const de_settings_sessions_active_now = /** @type {(inputs: Settings_Sessions_Active_NowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`gerade aktiv`)
};

const fr_settings_sessions_active_now = /** @type {(inputs: Settings_Sessions_Active_NowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`actif maintenant`)
};

const it_settings_sessions_active_now = /** @type {(inputs: Settings_Sessions_Active_NowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`attiva ora`)
};

const nl_settings_sessions_active_now = /** @type {(inputs: Settings_Sessions_Active_NowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`nu actief`)
};

const pl_settings_sessions_active_now = /** @type {(inputs: Settings_Sessions_Active_NowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`aktywna teraz`)
};

const pt_settings_sessions_active_now = /** @type {(inputs: Settings_Sessions_Active_NowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ativo agora`)
};

const ru_settings_sessions_active_now = /** @type {(inputs: Settings_Sessions_Active_NowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`активна сейчас`)
};

const sv_settings_sessions_active_now = /** @type {(inputs: Settings_Sessions_Active_NowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`aktiv nu`)
};

const tr_settings_sessions_active_now = /** @type {(inputs: Settings_Sessions_Active_NowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`şu anda etkin`)
};

const zh_settings_sessions_active_now = /** @type {(inputs: Settings_Sessions_Active_NowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`当前活跃`)
};

const ja_settings_sessions_active_now = /** @type {(inputs: Settings_Sessions_Active_NowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`現在アクティブ`)
};

/**
* | output |
* | --- |
* | "active now" |
*
* @param {Settings_Sessions_Active_NowInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_sessions_active_now = /** @type {((inputs?: Settings_Sessions_Active_NowInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Sessions_Active_NowInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_sessions_active_now(inputs)
	if (locale === "de") return de_settings_sessions_active_now(inputs)
	if (locale === "fr") return fr_settings_sessions_active_now(inputs)
	if (locale === "it") return it_settings_sessions_active_now(inputs)
	if (locale === "nl") return nl_settings_sessions_active_now(inputs)
	if (locale === "pl") return pl_settings_sessions_active_now(inputs)
	if (locale === "pt") return pt_settings_sessions_active_now(inputs)
	if (locale === "ru") return ru_settings_sessions_active_now(inputs)
	if (locale === "sv") return sv_settings_sessions_active_now(inputs)
	if (locale === "tr") return tr_settings_sessions_active_now(inputs)
	if (locale === "zh") return zh_settings_sessions_active_now(inputs)
	if (locale === "ja") return ja_settings_sessions_active_now(inputs)
	return en_settings_sessions_active_now(inputs)
});
