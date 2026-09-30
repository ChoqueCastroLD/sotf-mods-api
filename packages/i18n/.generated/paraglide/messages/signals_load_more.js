/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_Load_MoreInputs */

const en_signals_load_more = /** @type {(inputs: Signals_Load_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Load older signals`)
};

const es_signals_load_more = /** @type {(inputs: Signals_Load_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cargar señales anteriores`)
};

const de_signals_load_more = /** @type {(inputs: Signals_Load_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ältere Signale laden`)
};

const fr_signals_load_more = /** @type {(inputs: Signals_Load_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Charger les signaux plus anciens`)
};

const it_signals_load_more = /** @type {(inputs: Signals_Load_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Carica i segnali precedenti`)
};

const nl_signals_load_more = /** @type {(inputs: Signals_Load_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oudere signalen laden`)
};

const pl_signals_load_more = /** @type {(inputs: Signals_Load_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wczytaj starsze sygnały`)
};

const pt_signals_load_more = /** @type {(inputs: Signals_Load_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Carregar sinais anteriores`)
};

const ru_signals_load_more = /** @type {(inputs: Signals_Load_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загрузить более старые сигналы`)
};

const sv_signals_load_more = /** @type {(inputs: Signals_Load_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ladda äldre signaler`)
};

const tr_signals_load_more = /** @type {(inputs: Signals_Load_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Daha eski sinyalleri yükle`)
};

const zh_signals_load_more = /** @type {(inputs: Signals_Load_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`加载更早的信号`)
};

const ja_signals_load_more = /** @type {(inputs: Signals_Load_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`以前のシグナルを読み込む`)
};

/**
* | output |
* | --- |
* | "Load older signals" |
*
* @param {Signals_Load_MoreInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_load_more = /** @type {((inputs?: Signals_Load_MoreInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Load_MoreInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_load_more(inputs)
	if (locale === "de") return de_signals_load_more(inputs)
	if (locale === "fr") return fr_signals_load_more(inputs)
	if (locale === "it") return it_signals_load_more(inputs)
	if (locale === "nl") return nl_signals_load_more(inputs)
	if (locale === "pl") return pl_signals_load_more(inputs)
	if (locale === "pt") return pt_signals_load_more(inputs)
	if (locale === "ru") return ru_signals_load_more(inputs)
	if (locale === "sv") return sv_signals_load_more(inputs)
	if (locale === "tr") return tr_signals_load_more(inputs)
	if (locale === "zh") return zh_signals_load_more(inputs)
	if (locale === "ja") return ja_signals_load_more(inputs)
	return en_signals_load_more(inputs)
});
