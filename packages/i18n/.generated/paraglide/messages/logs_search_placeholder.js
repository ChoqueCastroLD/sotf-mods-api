/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Search_PlaceholderInputs */

const en_logs_search_placeholder = /** @type {(inputs: Logs_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search the log…`)
};

const es_logs_search_placeholder = /** @type {(inputs: Logs_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buscar en el log…`)
};

const de_logs_search_placeholder = /** @type {(inputs: Logs_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Im Log suchen…`)
};

const fr_logs_search_placeholder = /** @type {(inputs: Logs_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rechercher dans le log…`)
};

const it_logs_search_placeholder = /** @type {(inputs: Logs_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cerca nel log…`)
};

const nl_logs_search_placeholder = /** @type {(inputs: Logs_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zoek in de log…`)
};

const pl_logs_search_placeholder = /** @type {(inputs: Logs_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szukaj w logu…`)
};

const pt_logs_search_placeholder = /** @type {(inputs: Logs_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pesquisar no log…`)
};

const ru_logs_search_placeholder = /** @type {(inputs: Logs_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Искать в логе…`)
};

const sv_logs_search_placeholder = /** @type {(inputs: Logs_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sök i loggen…`)
};

const tr_logs_search_placeholder = /** @type {(inputs: Logs_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logda ara…`)
};

const zh_logs_search_placeholder = /** @type {(inputs: Logs_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在日志中搜索…`)
};

const ja_logs_search_placeholder = /** @type {(inputs: Logs_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ログ内を検索…`)
};

/**
* | output |
* | --- |
* | "Search the log…" |
*
* @param {Logs_Search_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_search_placeholder = /** @type {((inputs?: Logs_Search_PlaceholderInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Search_PlaceholderInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_search_placeholder(inputs)
	if (locale === "de") return de_logs_search_placeholder(inputs)
	if (locale === "fr") return fr_logs_search_placeholder(inputs)
	if (locale === "it") return it_logs_search_placeholder(inputs)
	if (locale === "nl") return nl_logs_search_placeholder(inputs)
	if (locale === "pl") return pl_logs_search_placeholder(inputs)
	if (locale === "pt") return pt_logs_search_placeholder(inputs)
	if (locale === "ru") return ru_logs_search_placeholder(inputs)
	if (locale === "sv") return sv_logs_search_placeholder(inputs)
	if (locale === "tr") return tr_logs_search_placeholder(inputs)
	if (locale === "zh") return zh_logs_search_placeholder(inputs)
	if (locale === "ja") return ja_logs_search_placeholder(inputs)
	return en_logs_search_placeholder(inputs)
});
