/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_SearchingInputs */

const en_cmdk_searching = /** @type {(inputs: Cmdk_SearchingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Searching the whole island…`)
};

const es_cmdk_searching = /** @type {(inputs: Cmdk_SearchingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buscando por toda la isla…`)
};

const de_cmdk_searching = /** @type {(inputs: Cmdk_SearchingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die ganze Insel wird durchsucht…`)
};

const fr_cmdk_searching = /** @type {(inputs: Cmdk_SearchingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recherche sur toute l’île…`)
};

const it_cmdk_searching = /** @type {(inputs: Cmdk_SearchingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ricerca su tutta l’isola…`)
};

const nl_cmdk_searching = /** @type {(inputs: Cmdk_SearchingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Het hele eiland wordt doorzocht…`)
};

const pl_cmdk_searching = /** @type {(inputs: Cmdk_SearchingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przeszukujemy całą wyspę…`)
};

const pt_cmdk_searching = /** @type {(inputs: Cmdk_SearchingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Procurando pela ilha inteira…`)
};

const ru_cmdk_searching = /** @type {(inputs: Cmdk_SearchingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ищем по всему острову…`)
};

const sv_cmdk_searching = /** @type {(inputs: Cmdk_SearchingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Söker över hela ön…`)
};

const tr_cmdk_searching = /** @type {(inputs: Cmdk_SearchingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tüm ada taranıyor…`)
};

const zh_cmdk_searching = /** @type {(inputs: Cmdk_SearchingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在搜索整座岛…`)
};

const ja_cmdk_searching = /** @type {(inputs: Cmdk_SearchingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`島じゅうを探しています…`)
};

/**
* | output |
* | --- |
* | "Searching the whole island…" |
*
* @param {Cmdk_SearchingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_searching = /** @type {((inputs?: Cmdk_SearchingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_SearchingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_searching(inputs)
	if (locale === "de") return de_cmdk_searching(inputs)
	if (locale === "fr") return fr_cmdk_searching(inputs)
	if (locale === "it") return it_cmdk_searching(inputs)
	if (locale === "nl") return nl_cmdk_searching(inputs)
	if (locale === "pl") return pl_cmdk_searching(inputs)
	if (locale === "pt") return pt_cmdk_searching(inputs)
	if (locale === "ru") return ru_cmdk_searching(inputs)
	if (locale === "sv") return sv_cmdk_searching(inputs)
	if (locale === "tr") return tr_cmdk_searching(inputs)
	if (locale === "zh") return zh_cmdk_searching(inputs)
	if (locale === "ja") return ja_cmdk_searching(inputs)
	return en_cmdk_searching(inputs)
});
