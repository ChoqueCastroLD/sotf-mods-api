/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Error_TitleInputs */

const en_cmdk_error_title = /** @type {(inputs: Cmdk_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search could not be loaded.`)
};

const es_cmdk_error_title = /** @type {(inputs: Cmdk_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo cargar la búsqueda.`)
};

const de_cmdk_error_title = /** @type {(inputs: Cmdk_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Suche konnte nicht geladen werden.`)
};

const fr_cmdk_error_title = /** @type {(inputs: Cmdk_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La recherche n’a pas pu être chargée.`)
};

const it_cmdk_error_title = /** @type {(inputs: Cmdk_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non è stato possibile caricare la ricerca.`)
};

const nl_cmdk_error_title = /** @type {(inputs: Cmdk_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De zoekfunctie kon niet worden geladen.`)
};

const pl_cmdk_error_title = /** @type {(inputs: Cmdk_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się wczytać wyszukiwarki.`)
};

const pt_cmdk_error_title = /** @type {(inputs: Cmdk_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível carregar a busca.`)
};

const ru_cmdk_error_title = /** @type {(inputs: Cmdk_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось загрузить поиск.`)
};

const sv_cmdk_error_title = /** @type {(inputs: Cmdk_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sökningen kunde inte laddas.`)
};

const tr_cmdk_error_title = /** @type {(inputs: Cmdk_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arama yüklenemedi.`)
};

const zh_cmdk_error_title = /** @type {(inputs: Cmdk_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`搜索加载失败。`)
};

const ja_cmdk_error_title = /** @type {(inputs: Cmdk_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`検索を読み込めませんでした。`)
};

/**
* | output |
* | --- |
* | "Search could not be loaded." |
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
