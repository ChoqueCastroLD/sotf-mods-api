/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_LoadingInputs */

const en_signals_loading = /** @type {(inputs: Signals_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loading signals…`)
};

const es_signals_loading = /** @type {(inputs: Signals_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cargando señales…`)
};

const de_signals_loading = /** @type {(inputs: Signals_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signale werden geladen…`)
};

const fr_signals_loading = /** @type {(inputs: Signals_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chargement des signaux…`)
};

const it_signals_loading = /** @type {(inputs: Signals_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Caricamento dei segnali…`)
};

const nl_signals_loading = /** @type {(inputs: Signals_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signalen laden…`)
};

const pl_signals_loading = /** @type {(inputs: Signals_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wczytywanie sygnałów…`)
};

const pt_signals_loading = /** @type {(inputs: Signals_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Carregando sinais…`)
};

const ru_signals_loading = /** @type {(inputs: Signals_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загрузка сигналов…`)
};

const sv_signals_loading = /** @type {(inputs: Signals_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Laddar signaler…`)
};

const tr_signals_loading = /** @type {(inputs: Signals_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sinyaller yükleniyor…`)
};

const zh_signals_loading = /** @type {(inputs: Signals_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在加载信号…`)
};

const ja_signals_loading = /** @type {(inputs: Signals_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`シグナルを読み込み中…`)
};

/**
* | output |
* | --- |
* | "Loading signals…" |
*
* @param {Signals_LoadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_loading = /** @type {((inputs?: Signals_LoadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_LoadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_loading(inputs)
	if (locale === "de") return de_signals_loading(inputs)
	if (locale === "fr") return fr_signals_loading(inputs)
	if (locale === "it") return it_signals_loading(inputs)
	if (locale === "nl") return nl_signals_loading(inputs)
	if (locale === "pl") return pl_signals_loading(inputs)
	if (locale === "pt") return pt_signals_loading(inputs)
	if (locale === "ru") return ru_signals_loading(inputs)
	if (locale === "sv") return sv_signals_loading(inputs)
	if (locale === "tr") return tr_signals_loading(inputs)
	if (locale === "zh") return zh_signals_loading(inputs)
	if (locale === "ja") return ja_signals_loading(inputs)
	return en_signals_loading(inputs)
});
