/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Sessions_Confirm_Current_TextInputs */

const en_settings_sessions_confirm_current_text = /** @type {(inputs: Settings_Sessions_Confirm_Current_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You’ll go to the login page.`)
};

const es_settings_sessions_confirm_current_text = /** @type {(inputs: Settings_Sessions_Confirm_Current_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Irás a la página de inicio de sesión.`)
};

const de_settings_sessions_confirm_current_text = /** @type {(inputs: Settings_Sessions_Confirm_Current_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du landest auf der Anmeldeseite.`)
};

const fr_settings_sessions_confirm_current_text = /** @type {(inputs: Settings_Sessions_Confirm_Current_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous irez sur la page de connexion.`)
};

const it_settings_sessions_confirm_current_text = /** @type {(inputs: Settings_Sessions_Confirm_Current_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Andrai alla pagina di accesso.`)
};

const nl_settings_sessions_confirm_current_text = /** @type {(inputs: Settings_Sessions_Confirm_Current_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je gaat naar de inlogpagina.`)
};

const pl_settings_sessions_confirm_current_text = /** @type {(inputs: Settings_Sessions_Confirm_Current_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przejdziesz na stronę logowania.`)
};

const pt_settings_sessions_confirm_current_text = /** @type {(inputs: Settings_Sessions_Confirm_Current_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você vai para a página de login.`)
};

const ru_settings_sessions_confirm_current_text = /** @type {(inputs: Settings_Sessions_Confirm_Current_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вы перейдёте на страницу входа.`)
};

const sv_settings_sessions_confirm_current_text = /** @type {(inputs: Settings_Sessions_Confirm_Current_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du hamnar på inloggningssidan.`)
};

const tr_settings_sessions_confirm_current_text = /** @type {(inputs: Settings_Sessions_Confirm_Current_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Giriş sayfasına gideceksin.`)
};

const zh_settings_sessions_confirm_current_text = /** @type {(inputs: Settings_Sessions_Confirm_Current_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你将前往登录页面。`)
};

const ja_settings_sessions_confirm_current_text = /** @type {(inputs: Settings_Sessions_Confirm_Current_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ログインページに移動します。`)
};

/**
* | output |
* | --- |
* | "You’ll go to the login page." |
*
* @param {Settings_Sessions_Confirm_Current_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_sessions_confirm_current_text = /** @type {((inputs?: Settings_Sessions_Confirm_Current_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Sessions_Confirm_Current_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_sessions_confirm_current_text(inputs)
	if (locale === "de") return de_settings_sessions_confirm_current_text(inputs)
	if (locale === "fr") return fr_settings_sessions_confirm_current_text(inputs)
	if (locale === "it") return it_settings_sessions_confirm_current_text(inputs)
	if (locale === "nl") return nl_settings_sessions_confirm_current_text(inputs)
	if (locale === "pl") return pl_settings_sessions_confirm_current_text(inputs)
	if (locale === "pt") return pt_settings_sessions_confirm_current_text(inputs)
	if (locale === "ru") return ru_settings_sessions_confirm_current_text(inputs)
	if (locale === "sv") return sv_settings_sessions_confirm_current_text(inputs)
	if (locale === "tr") return tr_settings_sessions_confirm_current_text(inputs)
	if (locale === "zh") return zh_settings_sessions_confirm_current_text(inputs)
	if (locale === "ja") return ja_settings_sessions_confirm_current_text(inputs)
	return en_settings_sessions_confirm_current_text(inputs)
});
