/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ device: NonNullable<unknown> }} Settings_Sessions_RevokedInputs */

const en_settings_sessions_revoked = /** @type {(inputs: Settings_Sessions_RevokedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.device} signed out`)
};

const es_settings_sessions_revoked = /** @type {(inputs: Settings_Sessions_RevokedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sesión cerrada en ${i?.device}`)
};

const de_settings_sessions_revoked = /** @type {(inputs: Settings_Sessions_RevokedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.device} abgemeldet`)
};

const fr_settings_sessions_revoked = /** @type {(inputs: Settings_Sessions_RevokedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.device} déconnecté`)
};

const it_settings_sessions_revoked = /** @type {(inputs: Settings_Sessions_RevokedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.device} disconnesso`)
};

const nl_settings_sessions_revoked = /** @type {(inputs: Settings_Sessions_RevokedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.device} uitgelogd`)
};

const pl_settings_sessions_revoked = /** @type {(inputs: Settings_Sessions_RevokedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wylogowano: ${i?.device}`)
};

const pt_settings_sessions_revoked = /** @type {(inputs: Settings_Sessions_RevokedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.device} desconectado`)
};

const ru_settings_sessions_revoked = /** @type {(inputs: Settings_Sessions_RevokedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Выполнен выход: ${i?.device}`)
};

const sv_settings_sessions_revoked = /** @type {(inputs: Settings_Sessions_RevokedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.device} utloggad`)
};

const tr_settings_sessions_revoked = /** @type {(inputs: Settings_Sessions_RevokedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.device} oturumu kapatıldı`)
};

const zh_settings_sessions_revoked = /** @type {(inputs: Settings_Sessions_RevokedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.device} 已退出登录`)
};

const ja_settings_sessions_revoked = /** @type {(inputs: Settings_Sessions_RevokedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.device} をログアウトしました`)
};

/**
* | output |
* | --- |
* | "{device} signed out" |
*
* @param {Settings_Sessions_RevokedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_sessions_revoked = /** @type {((inputs: Settings_Sessions_RevokedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Sessions_RevokedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_sessions_revoked(inputs)
	if (locale === "de") return de_settings_sessions_revoked(inputs)
	if (locale === "fr") return fr_settings_sessions_revoked(inputs)
	if (locale === "it") return it_settings_sessions_revoked(inputs)
	if (locale === "nl") return nl_settings_sessions_revoked(inputs)
	if (locale === "pl") return pl_settings_sessions_revoked(inputs)
	if (locale === "pt") return pt_settings_sessions_revoked(inputs)
	if (locale === "ru") return ru_settings_sessions_revoked(inputs)
	if (locale === "sv") return sv_settings_sessions_revoked(inputs)
	if (locale === "tr") return tr_settings_sessions_revoked(inputs)
	if (locale === "zh") return zh_settings_sessions_revoked(inputs)
	if (locale === "ja") return ja_settings_sessions_revoked(inputs)
	return en_settings_sessions_revoked(inputs)
});
