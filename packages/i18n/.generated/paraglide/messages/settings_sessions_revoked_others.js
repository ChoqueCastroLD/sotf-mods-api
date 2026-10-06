/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Sessions_Revoked_OthersInputs */

const en_settings_sessions_revoked_others = /** @type {(inputs: Settings_Sessions_Revoked_OthersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Other devices logged out`)
};

const es_settings_sessions_revoked_others = /** @type {(inputs: Settings_Sessions_Revoked_OthersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sesión cerrada en los otros dispositivos`)
};

const de_settings_sessions_revoked_others = /** @type {(inputs: Settings_Sessions_Revoked_OthersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Andere Geräte abgemeldet`)
};

const fr_settings_sessions_revoked_others = /** @type {(inputs: Settings_Sessions_Revoked_OthersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autres appareils déconnectés`)
};

const it_settings_sessions_revoked_others = /** @type {(inputs: Settings_Sessions_Revoked_OthersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Altri dispositivi disconnessi`)
};

const nl_settings_sessions_revoked_others = /** @type {(inputs: Settings_Sessions_Revoked_OthersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Andere apparaten uitgelogd`)
};

const pl_settings_sessions_revoked_others = /** @type {(inputs: Settings_Sessions_Revoked_OthersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wylogowano pozostałe urządzenia`)
};

const pt_settings_sessions_revoked_others = /** @type {(inputs: Settings_Sessions_Revoked_OthersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Outros dispositivos desconectados`)
};

const ru_settings_sessions_revoked_others = /** @type {(inputs: Settings_Sessions_Revoked_OthersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выполнен выход на других устройствах`)
};

const sv_settings_sessions_revoked_others = /** @type {(inputs: Settings_Sessions_Revoked_OthersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Andra enheter utloggade`)
};

const tr_settings_sessions_revoked_others = /** @type {(inputs: Settings_Sessions_Revoked_OthersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diğer cihazlardan çıkış yapıldı`)
};

const zh_settings_sessions_revoked_others = /** @type {(inputs: Settings_Sessions_Revoked_OthersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`其他设备已退出登录`)
};

const ja_settings_sessions_revoked_others = /** @type {(inputs: Settings_Sessions_Revoked_OthersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`他のデバイスをログアウトしました`)
};

/**
* | output |
* | --- |
* | "Other devices logged out" |
*
* @param {Settings_Sessions_Revoked_OthersInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_sessions_revoked_others = /** @type {((inputs?: Settings_Sessions_Revoked_OthersInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Sessions_Revoked_OthersInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_sessions_revoked_others(inputs)
	if (locale === "de") return de_settings_sessions_revoked_others(inputs)
	if (locale === "fr") return fr_settings_sessions_revoked_others(inputs)
	if (locale === "it") return it_settings_sessions_revoked_others(inputs)
	if (locale === "nl") return nl_settings_sessions_revoked_others(inputs)
	if (locale === "pl") return pl_settings_sessions_revoked_others(inputs)
	if (locale === "pt") return pt_settings_sessions_revoked_others(inputs)
	if (locale === "ru") return ru_settings_sessions_revoked_others(inputs)
	if (locale === "sv") return sv_settings_sessions_revoked_others(inputs)
	if (locale === "tr") return tr_settings_sessions_revoked_others(inputs)
	if (locale === "zh") return zh_settings_sessions_revoked_others(inputs)
	if (locale === "ja") return ja_settings_sessions_revoked_others(inputs)
	return en_settings_sessions_revoked_others(inputs)
});
