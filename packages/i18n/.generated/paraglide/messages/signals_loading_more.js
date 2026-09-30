/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_Loading_MoreInputs */

const en_signals_loading_more = /** @type {(inputs: Signals_Loading_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loading…`)
};

const es_signals_loading_more = /** @type {(inputs: Signals_Loading_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cargando…`)
};

const de_signals_loading_more = /** @type {(inputs: Signals_Loading_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wird geladen…`)
};

const fr_signals_loading_more = /** @type {(inputs: Signals_Loading_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chargement…`)
};

const it_signals_loading_more = /** @type {(inputs: Signals_Loading_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Caricamento…`)
};

const nl_signals_loading_more = /** @type {(inputs: Signals_Loading_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Laden…`)
};

const pl_signals_loading_more = /** @type {(inputs: Signals_Loading_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wczytywanie…`)
};

const pt_signals_loading_more = /** @type {(inputs: Signals_Loading_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Carregando…`)
};

const ru_signals_loading_more = /** @type {(inputs: Signals_Loading_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загрузка…`)
};

const sv_signals_loading_more = /** @type {(inputs: Signals_Loading_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Laddar…`)
};

const tr_signals_loading_more = /** @type {(inputs: Signals_Loading_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yükleniyor…`)
};

const zh_signals_loading_more = /** @type {(inputs: Signals_Loading_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在加载…`)
};

const ja_signals_loading_more = /** @type {(inputs: Signals_Loading_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`読み込み中…`)
};

/**
* | output |
* | --- |
* | "Loading…" |
*
* @param {Signals_Loading_MoreInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_loading_more = /** @type {((inputs?: Signals_Loading_MoreInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Loading_MoreInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_loading_more(inputs)
	if (locale === "de") return de_signals_loading_more(inputs)
	if (locale === "fr") return fr_signals_loading_more(inputs)
	if (locale === "it") return it_signals_loading_more(inputs)
	if (locale === "nl") return nl_signals_loading_more(inputs)
	if (locale === "pl") return pl_signals_loading_more(inputs)
	if (locale === "pt") return pt_signals_loading_more(inputs)
	if (locale === "ru") return ru_signals_loading_more(inputs)
	if (locale === "sv") return sv_signals_loading_more(inputs)
	if (locale === "tr") return tr_signals_loading_more(inputs)
	if (locale === "zh") return zh_signals_loading_more(inputs)
	if (locale === "ja") return ja_signals_loading_more(inputs)
	return en_signals_loading_more(inputs)
});
