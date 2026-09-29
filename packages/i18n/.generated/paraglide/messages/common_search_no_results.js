/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ query: NonNullable<unknown> }} Common_Search_No_ResultsInputs */

const en_common_search_no_results = /** @type {(inputs: Common_Search_No_ResultsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nothing on the map for “${i?.query}”. Try fewer words.`)
};

const es_common_search_no_results = /** @type {(inputs: Common_Search_No_ResultsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nada en el mapa para «${i?.query}». Prueba con menos palabras.`)
};

const de_common_search_no_results = /** @type {(inputs: Common_Search_No_ResultsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nichts auf der Karte für „${i?.query}“. Versuch es mit weniger Wörtern.`)
};

const fr_common_search_no_results = /** @type {(inputs: Common_Search_No_ResultsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Rien sur la carte pour « ${i?.query} ». Essayez avec moins de mots.`)
};

const it_common_search_no_results = /** @type {(inputs: Common_Search_No_ResultsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Niente sulla mappa per «${i?.query}». Prova con meno parole.`)
};

const nl_common_search_no_results = /** @type {(inputs: Common_Search_No_ResultsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Niets op de kaart voor ‘${i?.query}’. Probeer minder woorden.`)
};

const pl_common_search_no_results = /** @type {(inputs: Common_Search_No_ResultsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nic na mapie dla „${i?.query}”. Spróbuj użyć mniej słów.`)
};

const pt_common_search_no_results = /** @type {(inputs: Common_Search_No_ResultsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nada no mapa para “${i?.query}”. Tente usar menos palavras.`)
};

const ru_common_search_no_results = /** @type {(inputs: Common_Search_No_ResultsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`На карте нет ничего по запросу «${i?.query}». Попробуйте меньше слов.`)
};

const sv_common_search_no_results = /** @type {(inputs: Common_Search_No_ResultsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Inget på kartan för ”${i?.query}”. Prova med färre ord.`)
};

const tr_common_search_no_results = /** @type {(inputs: Common_Search_No_ResultsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Haritada “${i?.query}” için bir şey yok. Daha az kelimeyle dene.`)
};

const zh_common_search_no_results = /** @type {(inputs: Common_Search_No_ResultsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`地图上没有“${i?.query}”的相关结果。试试更少的关键词。`)
};

const ja_common_search_no_results = /** @type {(inputs: Common_Search_No_ResultsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`「${i?.query}」は地図に見つかりませんでした。キーワードを減らしてみてください。`)
};

/**
* | output |
* | --- |
* | "Nothing on the map for “{query}”. Try fewer words." |
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
