/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_More_ErrorInputs */

const en_signals_more_error = /** @type {(inputs: Signals_More_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Older signals didn’t load.`)
};

const es_signals_more_error = /** @type {(inputs: Signals_More_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Las señales anteriores no se han cargado.`)
};

const de_signals_more_error = /** @type {(inputs: Signals_More_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ältere Signale konnten nicht geladen werden.`)
};

const fr_signals_more_error = /** @type {(inputs: Signals_More_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les signaux plus anciens n’ont pas pu être chargés.`)
};

const it_signals_more_error = /** @type {(inputs: Signals_More_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non è stato possibile caricare i segnali precedenti.`)
};

const nl_signals_more_error = /** @type {(inputs: Signals_More_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oudere signalen konden niet worden geladen.`)
};

const pl_signals_more_error = /** @type {(inputs: Signals_More_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się wczytać starszych sygnałów.`)
};

const pt_signals_more_error = /** @type {(inputs: Signals_More_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível carregar os sinais anteriores.`)
};

const ru_signals_more_error = /** @type {(inputs: Signals_More_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось загрузить более старые сигналы.`)
};

const sv_signals_more_error = /** @type {(inputs: Signals_More_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Äldre signaler kunde inte laddas.`)
};

const tr_signals_more_error = /** @type {(inputs: Signals_More_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Daha eski sinyaller yüklenemedi.`)
};

const zh_signals_more_error = /** @type {(inputs: Signals_More_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更早的信号加载失败。`)
};

const ja_signals_more_error = /** @type {(inputs: Signals_More_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`以前のシグナルを読み込めませんでした。`)
};

/**
* | output |
* | --- |
* | "Older signals didn’t load." |
*
* @param {Signals_More_ErrorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_more_error = /** @type {((inputs?: Signals_More_ErrorInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_More_ErrorInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_more_error(inputs)
	if (locale === "de") return de_signals_more_error(inputs)
	if (locale === "fr") return fr_signals_more_error(inputs)
	if (locale === "it") return it_signals_more_error(inputs)
	if (locale === "nl") return nl_signals_more_error(inputs)
	if (locale === "pl") return pl_signals_more_error(inputs)
	if (locale === "pt") return pt_signals_more_error(inputs)
	if (locale === "ru") return ru_signals_more_error(inputs)
	if (locale === "sv") return sv_signals_more_error(inputs)
	if (locale === "tr") return tr_signals_more_error(inputs)
	if (locale === "zh") return zh_signals_more_error(inputs)
	if (locale === "ja") return ja_signals_more_error(inputs)
	return en_signals_more_error(inputs)
});
