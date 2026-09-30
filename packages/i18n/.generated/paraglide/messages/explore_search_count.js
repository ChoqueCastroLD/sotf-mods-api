/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown>, query: NonNullable<unknown> }} Explore_Search_CountInputs */

const en_explore_search_count = /** @type {(inputs: Explore_Search_CountInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("en", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`No results for “${i?.query}”`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} result for “${i?.query}”`);
	return /** @type {LocalizedString} */ (`${count__number} results for “${i?.query}”`)
	
};

const es_explore_search_count = /** @type {(inputs: Explore_Search_CountInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("es", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Sin resultados para «${i?.query}»`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} resultado para «${i?.query}»`);
	return /** @type {LocalizedString} */ (`${count__number} resultados para «${i?.query}»`)
	
};

const de_explore_search_count = /** @type {(inputs: Explore_Search_CountInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("de", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Keine Ergebnisse für „${i?.query}“`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Ergebnis für „${i?.query}“`);
	return /** @type {LocalizedString} */ (`${count__number} Ergebnisse für „${i?.query}“`)
	
};

const fr_explore_search_count = /** @type {(inputs: Explore_Search_CountInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("fr", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Aucun résultat pour « ${i?.query} »`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} résultat pour « ${i?.query} »`);
	return /** @type {LocalizedString} */ (`${count__number} résultats pour « ${i?.query} »`)
	
};

const it_explore_search_count = /** @type {(inputs: Explore_Search_CountInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("it", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Nessun risultato per «${i?.query}»`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} risultato per «${i?.query}»`);
	return /** @type {LocalizedString} */ (`${count__number} risultati per «${i?.query}»`)
	
};

const nl_explore_search_count = /** @type {(inputs: Explore_Search_CountInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("nl", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Geen resultaten voor ‘${i?.query}’`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} resultaat voor ‘${i?.query}’`);
	return /** @type {LocalizedString} */ (`${count__number} resultaten voor ‘${i?.query}’`)
	
};

const pl_explore_search_count = /** @type {(inputs: Explore_Search_CountInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("pl", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Brak wyników dla „${i?.query}”`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} wynik dla „${i?.query}”`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} wyniki dla „${i?.query}”`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} wyników dla „${i?.query}”`);
	return /** @type {LocalizedString} */ (`${count__number} wyniku dla „${i?.query}”`)
	
};

const pt_explore_search_count = /** @type {(inputs: Explore_Search_CountInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("pt", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Nenhum resultado para “${i?.query}”`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} resultado para “${i?.query}”`);
	return /** @type {LocalizedString} */ (`${count__number} resultados para “${i?.query}”`)
	
};

const ru_explore_search_count = /** @type {(inputs: Explore_Search_CountInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("ru", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Нет результатов по запросу «${i?.query}»`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} результат по запросу «${i?.query}»`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} результата по запросу «${i?.query}»`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} результатов по запросу «${i?.query}»`);
	return /** @type {LocalizedString} */ (`${count__number} результата по запросу «${i?.query}»`)
	
};

const sv_explore_search_count = /** @type {(inputs: Explore_Search_CountInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("sv", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Inga resultat för ”${i?.query}”`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} resultat för ”${i?.query}”`);
	return /** @type {LocalizedString} */ (`${count__number} resultat för ”${i?.query}”`)
	
};

const tr_explore_search_count = /** @type {(inputs: Explore_Search_CountInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("tr", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`“${i?.query}” için sonuç yok`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`“${i?.query}” için ${count__number} sonuç`);
	return /** @type {LocalizedString} */ (`“${i?.query}” için ${count__number} sonuç`)
	
};

const zh_explore_search_count = /** @type {(inputs: Explore_Search_CountInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("zh", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`没有“${i?.query}”的结果`);
	return /** @type {LocalizedString} */ (`“${i?.query}”共 ${count__number} 个结果`)
	
};

const ja_explore_search_count = /** @type {(inputs: Explore_Search_CountInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("ja", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`「${i?.query}」の結果はありません`);
	return /** @type {LocalizedString} */ (`「${i?.query}」の結果 ${count__number} 件`)
	
};

/**
* | count__exact | count__plural | output |
* | --- | --- | --- |
* | "0" | * | "No results for “{query}”" |
* | * | "one" | "{count__number} result for “{query}”" |
* | * | * | "{count__number} results for “{query}”" |
*
* @param {Explore_Search_CountInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_search_count = /** @type {((inputs: Explore_Search_CountInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Search_CountInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_search_count(inputs)
	if (locale === "de") return de_explore_search_count(inputs)
	if (locale === "fr") return fr_explore_search_count(inputs)
	if (locale === "it") return it_explore_search_count(inputs)
	if (locale === "nl") return nl_explore_search_count(inputs)
	if (locale === "pl") return pl_explore_search_count(inputs)
	if (locale === "pt") return pt_explore_search_count(inputs)
	if (locale === "ru") return ru_explore_search_count(inputs)
	if (locale === "sv") return sv_explore_search_count(inputs)
	if (locale === "tr") return tr_explore_search_count(inputs)
	if (locale === "zh") return zh_explore_search_count(inputs)
	if (locale === "ja") return ja_explore_search_count(inputs)
	return en_explore_search_count(inputs)
});
