/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ query: NonNullable<unknown> }} Explore_Noresults_Query_TitleInputs */

const en_explore_noresults_query_title = /** @type {(inputs: Explore_Noresults_Query_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`No results for “${i?.query}”`)
};

const es_explore_noresults_query_title = /** @type {(inputs: Explore_Noresults_Query_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sin resultados para «${i?.query}»`)
};

const de_explore_noresults_query_title = /** @type {(inputs: Explore_Noresults_Query_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Keine Ergebnisse für „${i?.query}“`)
};

const fr_explore_noresults_query_title = /** @type {(inputs: Explore_Noresults_Query_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Aucun résultat pour « ${i?.query} »`)
};

const it_explore_noresults_query_title = /** @type {(inputs: Explore_Noresults_Query_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nessun risultato per «${i?.query}»`)
};

const nl_explore_noresults_query_title = /** @type {(inputs: Explore_Noresults_Query_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Geen resultaten voor “${i?.query}”`)
};

const pl_explore_noresults_query_title = /** @type {(inputs: Explore_Noresults_Query_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Brak wyników dla „${i?.query}”`)
};

const pt_explore_noresults_query_title = /** @type {(inputs: Explore_Noresults_Query_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nenhum resultado para “${i?.query}”`)
};

const ru_explore_noresults_query_title = /** @type {(inputs: Explore_Noresults_Query_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`По запросу «${i?.query}» ничего не найдено`)
};

const sv_explore_noresults_query_title = /** @type {(inputs: Explore_Noresults_Query_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Inga resultat för ”${i?.query}”`)
};

const tr_explore_noresults_query_title = /** @type {(inputs: Explore_Noresults_Query_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`“${i?.query}” için sonuç yok`)
};

const zh_explore_noresults_query_title = /** @type {(inputs: Explore_Noresults_Query_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`没有找到与“${i?.query}”相关的结果`)
};

const ja_explore_noresults_query_title = /** @type {(inputs: Explore_Noresults_Query_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`「${i?.query}」に一致する結果はありません`)
};

/**
* | output |
* | --- |
* | "No results for “{query}”" |
*
* @param {Explore_Noresults_Query_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_noresults_query_title = /** @type {((inputs: Explore_Noresults_Query_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Noresults_Query_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_noresults_query_title(inputs)
	if (locale === "de") return de_explore_noresults_query_title(inputs)
	if (locale === "fr") return fr_explore_noresults_query_title(inputs)
	if (locale === "it") return it_explore_noresults_query_title(inputs)
	if (locale === "nl") return nl_explore_noresults_query_title(inputs)
	if (locale === "pl") return pl_explore_noresults_query_title(inputs)
	if (locale === "pt") return pt_explore_noresults_query_title(inputs)
	if (locale === "ru") return ru_explore_noresults_query_title(inputs)
	if (locale === "sv") return sv_explore_noresults_query_title(inputs)
	if (locale === "tr") return tr_explore_noresults_query_title(inputs)
	if (locale === "zh") return zh_explore_noresults_query_title(inputs)
	if (locale === "ja") return ja_explore_noresults_query_title(inputs)
	return en_explore_noresults_query_title(inputs)
});
