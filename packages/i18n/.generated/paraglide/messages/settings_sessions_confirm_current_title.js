/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Sessions_Confirm_Current_TitleInputs */

const en_settings_sessions_confirm_current_title = /** @type {(inputs: Settings_Sessions_Confirm_Current_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log out of this browser?`)
};

const es_settings_sessions_confirm_current_title = /** @type {(inputs: Settings_Sessions_Confirm_Current_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Cerrar la sesión en este navegador?`)
};

const de_settings_sessions_confirm_current_title = /** @type {(inputs: Settings_Sessions_Confirm_Current_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In diesem Browser abmelden?`)
};

const fr_settings_sessions_confirm_current_title = /** @type {(inputs: Settings_Sessions_Confirm_Current_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se déconnecter de ce navigateur ?`)
};

const it_settings_sessions_confirm_current_title = /** @type {(inputs: Settings_Sessions_Confirm_Current_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uscire da questo browser?`)
};

const nl_settings_sessions_confirm_current_title = /** @type {(inputs: Settings_Sessions_Confirm_Current_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uitloggen in deze browser?`)
};

const pl_settings_sessions_confirm_current_title = /** @type {(inputs: Settings_Sessions_Confirm_Current_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wylogować się w tej przeglądarce?`)
};

const pt_settings_sessions_confirm_current_title = /** @type {(inputs: Settings_Sessions_Confirm_Current_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sair deste navegador?`)
};

const ru_settings_sessions_confirm_current_title = /** @type {(inputs: Settings_Sessions_Confirm_Current_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выйти в этом браузере?`)
};

const sv_settings_sessions_confirm_current_title = /** @type {(inputs: Settings_Sessions_Confirm_Current_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logga ut från den här webbläsaren?`)
};

const tr_settings_sessions_confirm_current_title = /** @type {(inputs: Settings_Sessions_Confirm_Current_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu tarayıcıdan çıkış yapılsın mı?`)
};

const zh_settings_sessions_confirm_current_title = /** @type {(inputs: Settings_Sessions_Confirm_Current_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`要在此浏览器中退出吗？`)
};

const ja_settings_sessions_confirm_current_title = /** @type {(inputs: Settings_Sessions_Confirm_Current_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このブラウザーからログアウトしますか？`)
};

/**
* | output |
* | --- |
* | "Log out of this browser?" |
*
* @param {Settings_Sessions_Confirm_Current_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_sessions_confirm_current_title = /** @type {((inputs?: Settings_Sessions_Confirm_Current_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Sessions_Confirm_Current_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_sessions_confirm_current_title(inputs)
	if (locale === "de") return de_settings_sessions_confirm_current_title(inputs)
	if (locale === "fr") return fr_settings_sessions_confirm_current_title(inputs)
	if (locale === "it") return it_settings_sessions_confirm_current_title(inputs)
	if (locale === "nl") return nl_settings_sessions_confirm_current_title(inputs)
	if (locale === "pl") return pl_settings_sessions_confirm_current_title(inputs)
	if (locale === "pt") return pt_settings_sessions_confirm_current_title(inputs)
	if (locale === "ru") return ru_settings_sessions_confirm_current_title(inputs)
	if (locale === "sv") return sv_settings_sessions_confirm_current_title(inputs)
	if (locale === "tr") return tr_settings_sessions_confirm_current_title(inputs)
	if (locale === "zh") return zh_settings_sessions_confirm_current_title(inputs)
	if (locale === "ja") return ja_settings_sessions_confirm_current_title(inputs)
	return en_settings_sessions_confirm_current_title(inputs)
});
