/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ query: NonNullable<unknown> }} Common_Search_No_ResultsInputs */

const en_common_search_no_results = /** @type {(inputs: Common_Search_No_ResultsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`No results for “${i?.query}”. Try fewer words.`)
};

const es_common_search_no_results = /** @type {(inputs: Common_Search_No_ResultsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sin resultados para «${i?.query}». Prueba con menos palabras.`)
};

const de_common_search_no_results = /** @type {(inputs: Common_Search_No_ResultsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Keine Ergebnisse für „${i?.query}“. Versuch es mit weniger Wörtern.`)
};

const fr_common_search_no_results = /** @type {(inputs: Common_Search_No_ResultsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Aucun résultat pour « ${i?.query} ». Essayez avec moins de mots.`)
};

const it_common_search_no_results = /** @type {(inputs: Common_Search_No_ResultsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nessun risultato per «${i?.query}». Prova con meno parole.`)
};

const nl_common_search_no_results = /** @type {(inputs: Common_Search_No_ResultsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Geen resultaten voor ‘${i?.query}’. Probeer minder woorden.`)
};

const pl_common_search_no_results = /** @type {(inputs: Common_Search_No_ResultsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Brak wyników dla „${i?.query}”. Spróbuj użyć mniej słów.`)
};

const pt_common_search_no_results = /** @type {(inputs: Common_Search_No_ResultsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nenhum resultado para “${i?.query}”. Tente usar menos palavras.`)
};

const ru_common_search_no_results = /** @type {(inputs: Common_Search_No_ResultsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`По запросу «${i?.query}» ничего не найдено. Попробуйте меньше слов.`)
};

const sv_common_search_no_results = /** @type {(inputs: Common_Search_No_ResultsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Inga resultat för ”${i?.query}”. Prova med färre ord.`)
};

const tr_common_search_no_results = /** @type {(inputs: Common_Search_No_ResultsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`“${i?.query}” için sonuç yok. Daha az kelimeyle dene.`)
};

const zh_common_search_no_results = /** @type {(inputs: Common_Search_No_ResultsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`没有找到“${i?.query}”的结果。试试更少的关键词。`)
};

const ja_common_search_no_results = /** @type {(inputs: Common_Search_No_ResultsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`「${i?.query}」の結果はありません。キーワードを減らしてみてください。`)
};

/**
* | output |
* | --- |
* | "No results for “{query}”. Try fewer words." |
*
* @param {Common_Search_No_ResultsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_search_no_results = /** @type {((inputs: Common_Search_No_ResultsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Search_No_ResultsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_search_no_results(inputs)
	if (locale === "de") return de_common_search_no_results(inputs)
	if (locale === "fr") return fr_common_search_no_results(inputs)
	if (locale === "it") return it_common_search_no_results(inputs)
	if (locale === "nl") return nl_common_search_no_results(inputs)
	if (locale === "pl") return pl_common_search_no_results(inputs)
	if (locale === "pt") return pt_common_search_no_results(inputs)
	if (locale === "ru") return ru_common_search_no_results(inputs)
	if (locale === "sv") return sv_common_search_no_results(inputs)
	if (locale === "tr") return tr_common_search_no_results(inputs)
	if (locale === "zh") return zh_common_search_no_results(inputs)
	if (locale === "ja") return ja_common_search_no_results(inputs)
	return en_common_search_no_results(inputs)
});
