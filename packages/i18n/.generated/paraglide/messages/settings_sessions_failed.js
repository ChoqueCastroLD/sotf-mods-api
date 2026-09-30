/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Sessions_FailedInputs */

const en_settings_sessions_failed = /** @type {(inputs: Settings_Sessions_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn’t sign that session out`)
};

const es_settings_sessions_failed = /** @type {(inputs: Settings_Sessions_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se ha podido cerrar esa sesión`)
};

const de_settings_sessions_failed = /** @type {(inputs: Settings_Sessions_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diese Sitzung konnte nicht abgemeldet werden`)
};

const fr_settings_sessions_failed = /** @type {(inputs: Settings_Sessions_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible de déconnecter cette session`)
};

const it_settings_sessions_failed = /** @type {(inputs: Settings_Sessions_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile chiudere quella sessione`)
};

const nl_settings_sessions_failed = /** @type {(inputs: Settings_Sessions_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die sessie kon niet worden uitgelogd`)
};

const pl_settings_sessions_failed = /** @type {(inputs: Settings_Sessions_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się wylogować tej sesji`)
};

const pt_settings_sessions_failed = /** @type {(inputs: Settings_Sessions_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível encerrar essa sessão`)
};

const ru_settings_sessions_failed = /** @type {(inputs: Settings_Sessions_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось завершить эту сессию`)
};

const sv_settings_sessions_failed = /** @type {(inputs: Settings_Sessions_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det gick inte att logga ut den sessionen`)
};

const tr_settings_sessions_failed = /** @type {(inputs: Settings_Sessions_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu oturum kapatılamadı`)
};

const zh_settings_sessions_failed = /** @type {(inputs: Settings_Sessions_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法退出该会话`)
};

const ja_settings_sessions_failed = /** @type {(inputs: Settings_Sessions_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このセッションをログアウトできませんでした`)
};

/**
* | output |
* | --- |
* | "Couldn’t sign that session out" |
*
* @param {Settings_Sessions_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_sessions_failed = /** @type {((inputs?: Settings_Sessions_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Sessions_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_sessions_failed(inputs)
	if (locale === "de") return de_settings_sessions_failed(inputs)
	if (locale === "fr") return fr_settings_sessions_failed(inputs)
	if (locale === "it") return it_settings_sessions_failed(inputs)
	if (locale === "nl") return nl_settings_sessions_failed(inputs)
	if (locale === "pl") return pl_settings_sessions_failed(inputs)
	if (locale === "pt") return pt_settings_sessions_failed(inputs)
	if (locale === "ru") return ru_settings_sessions_failed(inputs)
	if (locale === "sv") return sv_settings_sessions_failed(inputs)
	if (locale === "tr") return tr_settings_sessions_failed(inputs)
	if (locale === "zh") return zh_settings_sessions_failed(inputs)
	if (locale === "ja") return ja_settings_sessions_failed(inputs)
	return en_settings_sessions_failed(inputs)
});
