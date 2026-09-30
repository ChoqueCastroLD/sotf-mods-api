/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Sessions_Sign_OutInputs */

const en_settings_sessions_sign_out = /** @type {(inputs: Settings_Sessions_Sign_OutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sign out`)
};

const es_settings_sessions_sign_out = /** @type {(inputs: Settings_Sessions_Sign_OutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cerrar sesión`)
};

const de_settings_sessions_sign_out = /** @type {(inputs: Settings_Sessions_Sign_OutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abmelden`)
};

const fr_settings_sessions_sign_out = /** @type {(inputs: Settings_Sessions_Sign_OutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se déconnecter`)
};

const it_settings_sessions_sign_out = /** @type {(inputs: Settings_Sessions_Sign_OutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esci`)
};

const nl_settings_sessions_sign_out = /** @type {(inputs: Settings_Sessions_Sign_OutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uitloggen`)
};

const pl_settings_sessions_sign_out = /** @type {(inputs: Settings_Sessions_Sign_OutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyloguj`)
};

const pt_settings_sessions_sign_out = /** @type {(inputs: Settings_Sessions_Sign_OutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sair`)
};

const ru_settings_sessions_sign_out = /** @type {(inputs: Settings_Sessions_Sign_OutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выйти`)
};

const sv_settings_sessions_sign_out = /** @type {(inputs: Settings_Sessions_Sign_OutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logga ut`)
};

const tr_settings_sessions_sign_out = /** @type {(inputs: Settings_Sessions_Sign_OutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çıkış yap`)
};

const zh_settings_sessions_sign_out = /** @type {(inputs: Settings_Sessions_Sign_OutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`退出登录`)
};

const ja_settings_sessions_sign_out = /** @type {(inputs: Settings_Sessions_Sign_OutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ログアウト`)
};

/**
* | output |
* | --- |
* | "Sign out" |
*
* @param {Settings_Sessions_Sign_OutInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_sessions_sign_out = /** @type {((inputs?: Settings_Sessions_Sign_OutInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Sessions_Sign_OutInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_sessions_sign_out(inputs)
	if (locale === "de") return de_settings_sessions_sign_out(inputs)
	if (locale === "fr") return fr_settings_sessions_sign_out(inputs)
	if (locale === "it") return it_settings_sessions_sign_out(inputs)
	if (locale === "nl") return nl_settings_sessions_sign_out(inputs)
	if (locale === "pl") return pl_settings_sessions_sign_out(inputs)
	if (locale === "pt") return pt_settings_sessions_sign_out(inputs)
	if (locale === "ru") return ru_settings_sessions_sign_out(inputs)
	if (locale === "sv") return sv_settings_sessions_sign_out(inputs)
	if (locale === "tr") return tr_settings_sessions_sign_out(inputs)
	if (locale === "zh") return zh_settings_sessions_sign_out(inputs)
	if (locale === "ja") return ja_settings_sessions_sign_out(inputs)
	return en_settings_sessions_sign_out(inputs)
});
