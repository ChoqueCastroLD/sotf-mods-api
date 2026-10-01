/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Jump_ErrorInputs */

const en_logs_jump_error = /** @type {(inputs: Logs_Jump_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`First error`)
};

const es_logs_jump_error = /** @type {(inputs: Logs_Jump_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Primer error`)
};

const de_logs_jump_error = /** @type {(inputs: Logs_Jump_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erster Fehler`)
};

const fr_logs_jump_error = /** @type {(inputs: Logs_Jump_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Première erreur`)
};

const it_logs_jump_error = /** @type {(inputs: Logs_Jump_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Primo errore`)
};

const nl_logs_jump_error = /** @type {(inputs: Logs_Jump_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eerste fout`)
};

const pl_logs_jump_error = /** @type {(inputs: Logs_Jump_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pierwszy błąd`)
};

const pt_logs_jump_error = /** @type {(inputs: Logs_Jump_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Primeiro erro`)
};

const ru_logs_jump_error = /** @type {(inputs: Logs_Jump_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Первая ошибка`)
};

const sv_logs_jump_error = /** @type {(inputs: Logs_Jump_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Första felet`)
};

const tr_logs_jump_error = /** @type {(inputs: Logs_Jump_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İlk hata`)
};

const zh_logs_jump_error = /** @type {(inputs: Logs_Jump_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`第一个错误`)
};

const ja_logs_jump_error = /** @type {(inputs: Logs_Jump_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最初のエラー`)
};

/**
* | output |
* | --- |
* | "First error" |
*
* @param {Logs_Jump_ErrorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_jump_error = /** @type {((inputs?: Logs_Jump_ErrorInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Jump_ErrorInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_jump_error(inputs)
	if (locale === "de") return de_logs_jump_error(inputs)
	if (locale === "fr") return fr_logs_jump_error(inputs)
	if (locale === "it") return it_logs_jump_error(inputs)
	if (locale === "nl") return nl_logs_jump_error(inputs)
	if (locale === "pl") return pl_logs_jump_error(inputs)
	if (locale === "pt") return pt_logs_jump_error(inputs)
	if (locale === "ru") return ru_logs_jump_error(inputs)
	if (locale === "sv") return sv_logs_jump_error(inputs)
	if (locale === "tr") return tr_logs_jump_error(inputs)
	if (locale === "zh") return zh_logs_jump_error(inputs)
	if (locale === "ja") return ja_logs_jump_error(inputs)
	return en_logs_jump_error(inputs)
});
