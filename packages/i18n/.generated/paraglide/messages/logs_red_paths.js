/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Red_PathsInputs */

const en_logs_red_paths = /** @type {(inputs: Logs_Red_PathsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`User paths`)
};

const es_logs_red_paths = /** @type {(inputs: Logs_Red_PathsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rutas de usuario`)
};

const de_logs_red_paths = /** @type {(inputs: Logs_Red_PathsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Benutzerpfade`)
};

const fr_logs_red_paths = /** @type {(inputs: Logs_Red_PathsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chemins utilisateur`)
};

const it_logs_red_paths = /** @type {(inputs: Logs_Red_PathsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Percorsi utente`)
};

const nl_logs_red_paths = /** @type {(inputs: Logs_Red_PathsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gebruikerspaden`)
};

const pl_logs_red_paths = /** @type {(inputs: Logs_Red_PathsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ścieżki użytkownika`)
};

const pt_logs_red_paths = /** @type {(inputs: Logs_Red_PathsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Caminhos de utilizador`)
};

const ru_logs_red_paths = /** @type {(inputs: Logs_Red_PathsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Пути пользователя`)
};

const sv_logs_red_paths = /** @type {(inputs: Logs_Red_PathsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Användarsökvägar`)
};

const tr_logs_red_paths = /** @type {(inputs: Logs_Red_PathsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kullanıcı yolları`)
};

const zh_logs_red_paths = /** @type {(inputs: Logs_Red_PathsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`用户路径`)
};

const ja_logs_red_paths = /** @type {(inputs: Logs_Red_PathsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ユーザーパス`)
};

/**
* | output |
* | --- |
* | "User paths" |
*
* @param {Logs_Red_PathsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_red_paths = /** @type {((inputs?: Logs_Red_PathsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Red_PathsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_red_paths(inputs)
	if (locale === "de") return de_logs_red_paths(inputs)
	if (locale === "fr") return fr_logs_red_paths(inputs)
	if (locale === "it") return it_logs_red_paths(inputs)
	if (locale === "nl") return nl_logs_red_paths(inputs)
	if (locale === "pl") return pl_logs_red_paths(inputs)
	if (locale === "pt") return pt_logs_red_paths(inputs)
	if (locale === "ru") return ru_logs_red_paths(inputs)
	if (locale === "sv") return sv_logs_red_paths(inputs)
	if (locale === "tr") return tr_logs_red_paths(inputs)
	if (locale === "zh") return zh_logs_red_paths(inputs)
	if (locale === "ja") return ja_logs_red_paths(inputs)
	return en_logs_red_paths(inputs)
});
