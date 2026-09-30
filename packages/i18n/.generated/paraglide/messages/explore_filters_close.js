/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Filters_CloseInputs */

const en_explore_filters_close = /** @type {(inputs: Explore_Filters_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Close filters`)
};

const es_explore_filters_close = /** @type {(inputs: Explore_Filters_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cerrar filtros`)
};

const de_explore_filters_close = /** @type {(inputs: Explore_Filters_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filter schließen`)
};

const fr_explore_filters_close = /** @type {(inputs: Explore_Filters_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fermer les filtres`)
};

const it_explore_filters_close = /** @type {(inputs: Explore_Filters_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chiudi i filtri`)
};

const nl_explore_filters_close = /** @type {(inputs: Explore_Filters_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filters sluiten`)
};

const pl_explore_filters_close = /** @type {(inputs: Explore_Filters_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zamknij filtry`)
};

const pt_explore_filters_close = /** @type {(inputs: Explore_Filters_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fechar filtros`)
};

const ru_explore_filters_close = /** @type {(inputs: Explore_Filters_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Закрыть фильтры`)
};

const sv_explore_filters_close = /** @type {(inputs: Explore_Filters_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stäng filter`)
};

const tr_explore_filters_close = /** @type {(inputs: Explore_Filters_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtreleri kapat`)
};

const zh_explore_filters_close = /** @type {(inputs: Explore_Filters_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`关闭筛选`)
};

const ja_explore_filters_close = /** @type {(inputs: Explore_Filters_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`絞り込みを閉じる`)
};

/**
* | output |
* | --- |
* | "Close filters" |
*
* @param {Explore_Filters_CloseInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_filters_close = /** @type {((inputs?: Explore_Filters_CloseInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Filters_CloseInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_filters_close(inputs)
	if (locale === "de") return de_explore_filters_close(inputs)
	if (locale === "fr") return fr_explore_filters_close(inputs)
	if (locale === "it") return it_explore_filters_close(inputs)
	if (locale === "nl") return nl_explore_filters_close(inputs)
	if (locale === "pl") return pl_explore_filters_close(inputs)
	if (locale === "pt") return pt_explore_filters_close(inputs)
	if (locale === "ru") return ru_explore_filters_close(inputs)
	if (locale === "sv") return sv_explore_filters_close(inputs)
	if (locale === "tr") return tr_explore_filters_close(inputs)
	if (locale === "zh") return zh_explore_filters_close(inputs)
	if (locale === "ja") return ja_explore_filters_close(inputs)
	return en_explore_filters_close(inputs)
});
