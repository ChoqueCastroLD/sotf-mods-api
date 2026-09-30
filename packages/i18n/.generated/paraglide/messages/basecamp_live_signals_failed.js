/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Live_Signals_FailedInputs */

const en_basecamp_live_signals_failed = /** @type {(inputs: Basecamp_Live_Signals_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recent activity could not be loaded.`)
};

const es_basecamp_live_signals_failed = /** @type {(inputs: Basecamp_Live_Signals_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo cargar la actividad reciente.`)
};

const de_basecamp_live_signals_failed = /** @type {(inputs: Basecamp_Live_Signals_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die letzte Aktivität konnte nicht geladen werden.`)
};

const fr_basecamp_live_signals_failed = /** @type {(inputs: Basecamp_Live_Signals_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’activité récente n’a pas pu être chargée.`)
};

const it_basecamp_live_signals_failed = /** @type {(inputs: Basecamp_Live_Signals_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non è stato possibile caricare l’attività recente.`)
};

const nl_basecamp_live_signals_failed = /** @type {(inputs: Basecamp_Live_Signals_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De recente activiteit kon niet worden geladen.`)
};

const pl_basecamp_live_signals_failed = /** @type {(inputs: Basecamp_Live_Signals_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się wczytać ostatniej aktywności.`)
};

const pt_basecamp_live_signals_failed = /** @type {(inputs: Basecamp_Live_Signals_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível carregar a atividade recente.`)
};

const ru_basecamp_live_signals_failed = /** @type {(inputs: Basecamp_Live_Signals_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось загрузить недавнюю активность.`)
};

const sv_basecamp_live_signals_failed = /** @type {(inputs: Basecamp_Live_Signals_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den senaste aktiviteten kunde inte laddas.`)
};

const tr_basecamp_live_signals_failed = /** @type {(inputs: Basecamp_Live_Signals_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Son etkinlik yüklenemedi.`)
};

const zh_basecamp_live_signals_failed = /** @type {(inputs: Basecamp_Live_Signals_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法加载最近的动态。`)
};

const ja_basecamp_live_signals_failed = /** @type {(inputs: Basecamp_Live_Signals_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最近のアクティビティを読み込めませんでした。`)
};

/**
* | output |
* | --- |
* | "Recent activity could not be loaded." |
*
* @param {Basecamp_Live_Signals_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_live_signals_failed = /** @type {((inputs?: Basecamp_Live_Signals_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Live_Signals_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_live_signals_failed(inputs)
	if (locale === "de") return de_basecamp_live_signals_failed(inputs)
	if (locale === "fr") return fr_basecamp_live_signals_failed(inputs)
	if (locale === "it") return it_basecamp_live_signals_failed(inputs)
	if (locale === "nl") return nl_basecamp_live_signals_failed(inputs)
	if (locale === "pl") return pl_basecamp_live_signals_failed(inputs)
	if (locale === "pt") return pt_basecamp_live_signals_failed(inputs)
	if (locale === "ru") return ru_basecamp_live_signals_failed(inputs)
	if (locale === "sv") return sv_basecamp_live_signals_failed(inputs)
	if (locale === "tr") return tr_basecamp_live_signals_failed(inputs)
	if (locale === "zh") return zh_basecamp_live_signals_failed(inputs)
	if (locale === "ja") return ja_basecamp_live_signals_failed(inputs)
	return en_basecamp_live_signals_failed(inputs)
});
