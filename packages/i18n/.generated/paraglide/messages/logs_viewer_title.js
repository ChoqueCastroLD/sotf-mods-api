/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Viewer_TitleInputs */

const en_logs_viewer_title = /** @type {(inputs: Logs_Viewer_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Shared log`)
};

const es_logs_viewer_title = /** @type {(inputs: Logs_Viewer_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log compartido`)
};

const de_logs_viewer_title = /** @type {(inputs: Logs_Viewer_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geteiltes Log`)
};

const fr_logs_viewer_title = /** @type {(inputs: Logs_Viewer_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log partagé`)
};

const it_logs_viewer_title = /** @type {(inputs: Logs_Viewer_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log condiviso`)
};

const nl_logs_viewer_title = /** @type {(inputs: Logs_Viewer_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gedeelde log`)
};

const pl_logs_viewer_title = /** @type {(inputs: Logs_Viewer_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Udostępniony log`)
};

const pt_logs_viewer_title = /** @type {(inputs: Logs_Viewer_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log partilhado`)
};

const ru_logs_viewer_title = /** @type {(inputs: Logs_Viewer_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Общий лог`)
};

const sv_logs_viewer_title = /** @type {(inputs: Logs_Viewer_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delad logg`)
};

const tr_logs_viewer_title = /** @type {(inputs: Logs_Viewer_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paylaşılan log`)
};

const zh_logs_viewer_title = /** @type {(inputs: Logs_Viewer_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`共享日志`)
};

const ja_logs_viewer_title = /** @type {(inputs: Logs_Viewer_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`共有されたログ`)
};

/**
* | output |
* | --- |
* | "Shared log" |
*
* @param {Logs_Viewer_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_viewer_title = /** @type {((inputs?: Logs_Viewer_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Viewer_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_viewer_title(inputs)
	if (locale === "de") return de_logs_viewer_title(inputs)
	if (locale === "fr") return fr_logs_viewer_title(inputs)
	if (locale === "it") return it_logs_viewer_title(inputs)
	if (locale === "nl") return nl_logs_viewer_title(inputs)
	if (locale === "pl") return pl_logs_viewer_title(inputs)
	if (locale === "pt") return pt_logs_viewer_title(inputs)
	if (locale === "ru") return ru_logs_viewer_title(inputs)
	if (locale === "sv") return sv_logs_viewer_title(inputs)
	if (locale === "tr") return tr_logs_viewer_title(inputs)
	if (locale === "zh") return zh_logs_viewer_title(inputs)
	if (locale === "ja") return ja_logs_viewer_title(inputs)
	return en_logs_viewer_title(inputs)
});
