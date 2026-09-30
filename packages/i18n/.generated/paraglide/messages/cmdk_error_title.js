/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Error_TitleInputs */

const en_cmdk_error_title = /** @type {(inputs: Cmdk_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The search index didn’t load.`)
};

const es_cmdk_error_title = /** @type {(inputs: Cmdk_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo cargar el índice de búsqueda.`)
};

const de_cmdk_error_title = /** @type {(inputs: Cmdk_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Der Suchindex konnte nicht geladen werden.`)
};

const fr_cmdk_error_title = /** @type {(inputs: Cmdk_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’index de recherche n’a pas pu être chargé.`)
};

const it_cmdk_error_title = /** @type {(inputs: Cmdk_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non è stato possibile caricare l’indice di ricerca.`)
};

const nl_cmdk_error_title = /** @type {(inputs: Cmdk_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De zoekindex kon niet worden geladen.`)
};

const pl_cmdk_error_title = /** @type {(inputs: Cmdk_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się wczytać indeksu wyszukiwania.`)
};

const pt_cmdk_error_title = /** @type {(inputs: Cmdk_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível carregar o índice de busca.`)
};

const ru_cmdk_error_title = /** @type {(inputs: Cmdk_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось загрузить поисковый индекс.`)
};

const sv_cmdk_error_title = /** @type {(inputs: Cmdk_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sökindexet kunde inte laddas.`)
};

const tr_cmdk_error_title = /** @type {(inputs: Cmdk_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arama dizini yüklenemedi.`)
};

const zh_cmdk_error_title = /** @type {(inputs: Cmdk_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`搜索索引加载失败。`)
};

const ja_cmdk_error_title = /** @type {(inputs: Cmdk_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`検索インデックスを読み込めませんでした。`)
};

/**
* | output |
* | --- |
* | "The search index didn’t load." |
*
* @param {Cmdk_Error_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_error_title = /** @type {((inputs?: Cmdk_Error_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Error_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_error_title(inputs)
	if (locale === "de") return de_cmdk_error_title(inputs)
	if (locale === "fr") return fr_cmdk_error_title(inputs)
	if (locale === "it") return it_cmdk_error_title(inputs)
	if (locale === "nl") return nl_cmdk_error_title(inputs)
	if (locale === "pl") return pl_cmdk_error_title(inputs)
	if (locale === "pt") return pt_cmdk_error_title(inputs)
	if (locale === "ru") return ru_cmdk_error_title(inputs)
	if (locale === "sv") return sv_cmdk_error_title(inputs)
	if (locale === "tr") return tr_cmdk_error_title(inputs)
	if (locale === "zh") return zh_cmdk_error_title(inputs)
	if (locale === "ja") return ja_cmdk_error_title(inputs)
	return en_cmdk_error_title(inputs)
});
