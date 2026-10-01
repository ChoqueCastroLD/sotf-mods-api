/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Sort_CloseInputs */

const en_explore_sort_close = /** @type {(inputs: Explore_Sort_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Close sorting`)
};

const es_explore_sort_close = /** @type {(inputs: Explore_Sort_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cerrar orden`)
};

const de_explore_sort_close = /** @type {(inputs: Explore_Sort_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sortierung schließen`)
};

const fr_explore_sort_close = /** @type {(inputs: Explore_Sort_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fermer le tri`)
};

const it_explore_sort_close = /** @type {(inputs: Explore_Sort_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chiudi ordinamento`)
};

const nl_explore_sort_close = /** @type {(inputs: Explore_Sort_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sortering sluiten`)
};

const pl_explore_sort_close = /** @type {(inputs: Explore_Sort_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zamknij sortowanie`)
};

const pt_explore_sort_close = /** @type {(inputs: Explore_Sort_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fechar ordenação`)
};

const ru_explore_sort_close = /** @type {(inputs: Explore_Sort_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Закрыть сортировку`)
};

const sv_explore_sort_close = /** @type {(inputs: Explore_Sort_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stäng sortering`)
};

const tr_explore_sort_close = /** @type {(inputs: Explore_Sort_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sıralamayı kapat`)
};

const zh_explore_sort_close = /** @type {(inputs: Explore_Sort_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`关闭排序`)
};

const ja_explore_sort_close = /** @type {(inputs: Explore_Sort_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`並べ替えを閉じる`)
};

/**
* | output |
* | --- |
* | "Close sorting" |
*
* @param {Explore_Sort_CloseInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_sort_close = /** @type {((inputs?: Explore_Sort_CloseInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Sort_CloseInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_sort_close(inputs)
	if (locale === "de") return de_explore_sort_close(inputs)
	if (locale === "fr") return fr_explore_sort_close(inputs)
	if (locale === "it") return it_explore_sort_close(inputs)
	if (locale === "nl") return nl_explore_sort_close(inputs)
	if (locale === "pl") return pl_explore_sort_close(inputs)
	if (locale === "pt") return pt_explore_sort_close(inputs)
	if (locale === "ru") return ru_explore_sort_close(inputs)
	if (locale === "sv") return sv_explore_sort_close(inputs)
	if (locale === "tr") return tr_explore_sort_close(inputs)
	if (locale === "zh") return zh_explore_sort_close(inputs)
	if (locale === "ja") return ja_explore_sort_close(inputs)
	return en_explore_sort_close(inputs)
});
