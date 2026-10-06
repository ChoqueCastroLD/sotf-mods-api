/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Sessions_Confirm_TitleInputs */

const en_settings_sessions_confirm_title = /** @type {(inputs: Settings_Sessions_Confirm_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log out this device?`)
};

const es_settings_sessions_confirm_title = /** @type {(inputs: Settings_Sessions_Confirm_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Cerrar la sesión de este dispositivo?`)
};

const de_settings_sessions_confirm_title = /** @type {(inputs: Settings_Sessions_Confirm_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dieses Gerät abmelden?`)
};

const fr_settings_sessions_confirm_title = /** @type {(inputs: Settings_Sessions_Confirm_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Déconnecter cet appareil ?`)
};

const it_settings_sessions_confirm_title = /** @type {(inputs: Settings_Sessions_Confirm_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Disconnettere questo dispositivo?`)
};

const nl_settings_sessions_confirm_title = /** @type {(inputs: Settings_Sessions_Confirm_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dit apparaat uitloggen?`)
};

const pl_settings_sessions_confirm_title = /** @type {(inputs: Settings_Sessions_Confirm_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wylogować to urządzenie?`)
};

const pt_settings_sessions_confirm_title = /** @type {(inputs: Settings_Sessions_Confirm_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desconectar este dispositivo?`)
};

const ru_settings_sessions_confirm_title = /** @type {(inputs: Settings_Sessions_Confirm_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выйти на этом устройстве?`)
};

const sv_settings_sessions_confirm_title = /** @type {(inputs: Settings_Sessions_Confirm_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logga ut den här enheten?`)
};

const tr_settings_sessions_confirm_title = /** @type {(inputs: Settings_Sessions_Confirm_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu cihazdan çıkış yapılsın mı?`)
};

const zh_settings_sessions_confirm_title = /** @type {(inputs: Settings_Sessions_Confirm_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`要退出此设备吗？`)
};

const ja_settings_sessions_confirm_title = /** @type {(inputs: Settings_Sessions_Confirm_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このデバイスをログアウトしますか？`)
};

/**
* | output |
* | --- |
* | "Log out this device?" |
*
* @param {Settings_Sessions_Confirm_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_sessions_confirm_title = /** @type {((inputs?: Settings_Sessions_Confirm_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Sessions_Confirm_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_sessions_confirm_title(inputs)
	if (locale === "de") return de_settings_sessions_confirm_title(inputs)
	if (locale === "fr") return fr_settings_sessions_confirm_title(inputs)
	if (locale === "it") return it_settings_sessions_confirm_title(inputs)
	if (locale === "nl") return nl_settings_sessions_confirm_title(inputs)
	if (locale === "pl") return pl_settings_sessions_confirm_title(inputs)
	if (locale === "pt") return pt_settings_sessions_confirm_title(inputs)
	if (locale === "ru") return ru_settings_sessions_confirm_title(inputs)
	if (locale === "sv") return sv_settings_sessions_confirm_title(inputs)
	if (locale === "tr") return tr_settings_sessions_confirm_title(inputs)
	if (locale === "zh") return zh_settings_sessions_confirm_title(inputs)
	if (locale === "ja") return ja_settings_sessions_confirm_title(inputs)
	return en_settings_sessions_confirm_title(inputs)
});
