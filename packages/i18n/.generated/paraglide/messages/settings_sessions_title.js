/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Sessions_TitleInputs */

const en_settings_sessions_title = /** @type {(inputs: Settings_Sessions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Where you’re logged in`)
};

const es_settings_sessions_title = /** @type {(inputs: Settings_Sessions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dónde tienes la sesión iniciada`)
};

const de_settings_sessions_title = /** @type {(inputs: Settings_Sessions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wo du angemeldet bist`)
};

const fr_settings_sessions_title = /** @type {(inputs: Settings_Sessions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Où vous êtes connecté`)
};

const it_settings_sessions_title = /** @type {(inputs: Settings_Sessions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dove hai effettuato l’accesso`)
};

const nl_settings_sessions_title = /** @type {(inputs: Settings_Sessions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Waar je bent ingelogd`)
};

const pl_settings_sessions_title = /** @type {(inputs: Settings_Sessions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gdzie jesteś zalogowany`)
};

const pt_settings_sessions_title = /** @type {(inputs: Settings_Sessions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Onde você está conectado`)
};

const ru_settings_sessions_title = /** @type {(inputs: Settings_Sessions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Где выполнен вход`)
};

const sv_settings_sessions_title = /** @type {(inputs: Settings_Sessions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Var du är inloggad`)
};

const tr_settings_sessions_title = /** @type {(inputs: Settings_Sessions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oturumun açık olduğu yerler`)
};

const zh_settings_sessions_title = /** @type {(inputs: Settings_Sessions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你在哪些地方登录`)
};

const ja_settings_sessions_title = /** @type {(inputs: Settings_Sessions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ログイン中の場所`)
};

/**
* | output |
* | --- |
* | "Where you’re logged in" |
*
* @param {Settings_Sessions_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_sessions_title = /** @type {((inputs?: Settings_Sessions_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Sessions_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_sessions_title(inputs)
	if (locale === "de") return de_settings_sessions_title(inputs)
	if (locale === "fr") return fr_settings_sessions_title(inputs)
	if (locale === "it") return it_settings_sessions_title(inputs)
	if (locale === "nl") return nl_settings_sessions_title(inputs)
	if (locale === "pl") return pl_settings_sessions_title(inputs)
	if (locale === "pt") return pt_settings_sessions_title(inputs)
	if (locale === "ru") return ru_settings_sessions_title(inputs)
	if (locale === "sv") return sv_settings_sessions_title(inputs)
	if (locale === "tr") return tr_settings_sessions_title(inputs)
	if (locale === "zh") return zh_settings_sessions_title(inputs)
	if (locale === "ja") return ja_settings_sessions_title(inputs)
	return en_settings_sessions_title(inputs)
});
