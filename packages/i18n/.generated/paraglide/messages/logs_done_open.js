/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Done_OpenInputs */

const en_logs_done_open = /** @type {(inputs: Logs_Done_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open log`)
};

const es_logs_done_open = /** @type {(inputs: Logs_Done_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abrir log`)
};

const de_logs_done_open = /** @type {(inputs: Logs_Done_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log öffnen`)
};

const fr_logs_done_open = /** @type {(inputs: Logs_Done_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ouvrir le log`)
};

const it_logs_done_open = /** @type {(inputs: Logs_Done_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apri il log`)
};

const nl_logs_done_open = /** @type {(inputs: Logs_Done_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log openen`)
};

const pl_logs_done_open = /** @type {(inputs: Logs_Done_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otwórz log`)
};

const pt_logs_done_open = /** @type {(inputs: Logs_Done_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abrir log`)
};

const ru_logs_done_open = /** @type {(inputs: Logs_Done_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Открыть лог`)
};

const sv_logs_done_open = /** @type {(inputs: Logs_Done_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öppna logg`)
};

const tr_logs_done_open = /** @type {(inputs: Logs_Done_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logu aç`)
};

const zh_logs_done_open = /** @type {(inputs: Logs_Done_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`打开日志`)
};

const ja_logs_done_open = /** @type {(inputs: Logs_Done_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ログを開く`)
};

/**
* | output |
* | --- |
* | "Open log" |
*
* @param {Logs_Done_OpenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_done_open = /** @type {((inputs?: Logs_Done_OpenInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Done_OpenInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_done_open(inputs)
	if (locale === "de") return de_logs_done_open(inputs)
	if (locale === "fr") return fr_logs_done_open(inputs)
	if (locale === "it") return it_logs_done_open(inputs)
	if (locale === "nl") return nl_logs_done_open(inputs)
	if (locale === "pl") return pl_logs_done_open(inputs)
	if (locale === "pt") return pt_logs_done_open(inputs)
	if (locale === "ru") return ru_logs_done_open(inputs)
	if (locale === "sv") return sv_logs_done_open(inputs)
	if (locale === "tr") return tr_logs_done_open(inputs)
	if (locale === "zh") return zh_logs_done_open(inputs)
	if (locale === "ja") return ja_logs_done_open(inputs)
	return en_logs_done_open(inputs)
});
