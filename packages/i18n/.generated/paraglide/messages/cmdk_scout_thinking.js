/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Scout_ThinkingInputs */

const en_cmdk_scout_thinking = /** @type {(inputs: Cmdk_Scout_ThinkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scout is searching the catalog…`)
};

const es_cmdk_scout_thinking = /** @type {(inputs: Cmdk_Scout_ThinkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scout está buscando en el catálogo…`)
};

const de_cmdk_scout_thinking = /** @type {(inputs: Cmdk_Scout_ThinkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scout durchsucht den Katalog…`)
};

const fr_cmdk_scout_thinking = /** @type {(inputs: Cmdk_Scout_ThinkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scout fouille le catalogue…`)
};

const it_cmdk_scout_thinking = /** @type {(inputs: Cmdk_Scout_ThinkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scout sta cercando nel catalogo…`)
};

const nl_cmdk_scout_thinking = /** @type {(inputs: Cmdk_Scout_ThinkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scout doorzoekt de catalogus…`)
};

const pl_cmdk_scout_thinking = /** @type {(inputs: Cmdk_Scout_ThinkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scout przeszukuje katalog…`)
};

const pt_cmdk_scout_thinking = /** @type {(inputs: Cmdk_Scout_ThinkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O Scout está a pesquisar o catálogo…`)
};

const ru_cmdk_scout_thinking = /** @type {(inputs: Cmdk_Scout_ThinkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scout ищет по каталогу…`)
};

const sv_cmdk_scout_thinking = /** @type {(inputs: Cmdk_Scout_ThinkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scout söker i katalogen…`)
};

const tr_cmdk_scout_thinking = /** @type {(inputs: Cmdk_Scout_ThinkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scout kataloğu tarıyor…`)
};

const zh_cmdk_scout_thinking = /** @type {(inputs: Cmdk_Scout_ThinkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scout 正在搜索目录…`)
};

const ja_cmdk_scout_thinking = /** @type {(inputs: Cmdk_Scout_ThinkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scoutがカタログを検索しています…`)
};

/**
* | output |
* | --- |
* | "Scout is searching the catalog…" |
*
* @param {Cmdk_Scout_ThinkingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_scout_thinking = /** @type {((inputs?: Cmdk_Scout_ThinkingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Scout_ThinkingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_scout_thinking(inputs)
	if (locale === "de") return de_cmdk_scout_thinking(inputs)
	if (locale === "fr") return fr_cmdk_scout_thinking(inputs)
	if (locale === "it") return it_cmdk_scout_thinking(inputs)
	if (locale === "nl") return nl_cmdk_scout_thinking(inputs)
	if (locale === "pl") return pl_cmdk_scout_thinking(inputs)
	if (locale === "pt") return pt_cmdk_scout_thinking(inputs)
	if (locale === "ru") return ru_cmdk_scout_thinking(inputs)
	if (locale === "sv") return sv_cmdk_scout_thinking(inputs)
	if (locale === "tr") return tr_cmdk_scout_thinking(inputs)
	if (locale === "zh") return zh_cmdk_scout_thinking(inputs)
	if (locale === "ja") return ja_cmdk_scout_thinking(inputs)
	return en_cmdk_scout_thinking(inputs)
});
