/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Cmdk_Results_CountInputs */

const en_cmdk_results_count = /** @type {(inputs: Cmdk_Results_CountInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("en", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`No results`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} result`);
	return /** @type {LocalizedString} */ (`${count__number} results`)
	
};

const es_cmdk_results_count = /** @type {(inputs: Cmdk_Results_CountInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("es", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Sin resultados`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} resultado`);
	return /** @type {LocalizedString} */ (`${count__number} resultados`)
	
};

const de_cmdk_results_count = /** @type {(inputs: Cmdk_Results_CountInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("de", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Keine Ergebnisse`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Ergebnis`);
	return /** @type {LocalizedString} */ (`${count__number} Ergebnisse`)
	
};

const fr_cmdk_results_count = /** @type {(inputs: Cmdk_Results_CountInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("fr", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Aucun résultat`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} résultat`);
	return /** @type {LocalizedString} */ (`${count__number} résultats`)
	
};

const it_cmdk_results_count = /** @type {(inputs: Cmdk_Results_CountInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("it", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Nessun risultato`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} risultato`);
	return /** @type {LocalizedString} */ (`${count__number} risultati`)
	
};

const nl_cmdk_results_count = /** @type {(inputs: Cmdk_Results_CountInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("nl", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Geen resultaten`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} resultaat`);
	return /** @type {LocalizedString} */ (`${count__number} resultaten`)
	
};

const pl_cmdk_results_count = /** @type {(inputs: Cmdk_Results_CountInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("pl", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Brak wyników`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} wynik`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} wyniki`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} wyników`);
	return /** @type {LocalizedString} */ (`${count__number} wyniku`)
	
};

const pt_cmdk_results_count = /** @type {(inputs: Cmdk_Results_CountInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("pt", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Nenhum resultado`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} resultado`);
	return /** @type {LocalizedString} */ (`${count__number} resultados`)
	
};

const ru_cmdk_results_count = /** @type {(inputs: Cmdk_Results_CountInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("ru", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Нет результатов`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} результат`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} результата`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} результатов`);
	return /** @type {LocalizedString} */ (`${count__number} результата`)
	
};

const sv_cmdk_results_count = /** @type {(inputs: Cmdk_Results_CountInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("sv", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Inga resultat`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} resultat`);
	return /** @type {LocalizedString} */ (`${count__number} resultat`)
	
};

const tr_cmdk_results_count = /** @type {(inputs: Cmdk_Results_CountInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("tr", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Sonuç yok`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} sonuç`);
	return /** @type {LocalizedString} */ (`${count__number} sonuç`)
	
};

const zh_cmdk_results_count = /** @type {(inputs: Cmdk_Results_CountInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("zh", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`没有结果`);
	return /** @type {LocalizedString} */ (`${count__number} 个结果`)
	
};

const ja_cmdk_results_count = /** @type {(inputs: Cmdk_Results_CountInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("ja", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`結果なし`);
	return /** @type {LocalizedString} */ (`${count__number} 件`)
	
};

/**
* | count__exact | count__plural | output |
* | --- | --- | --- |
* | "0" | * | "No results" |
* | * | "one" | "{count__number} result" |
* | * | * | "{count__number} results" |
*
* @param {Cmdk_Results_CountInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_results_count = /** @type {((inputs: Cmdk_Results_CountInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Results_CountInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_results_count(inputs)
	if (locale === "de") return de_cmdk_results_count(inputs)
	if (locale === "fr") return fr_cmdk_results_count(inputs)
	if (locale === "it") return it_cmdk_results_count(inputs)
	if (locale === "nl") return nl_cmdk_results_count(inputs)
	if (locale === "pl") return pl_cmdk_results_count(inputs)
	if (locale === "pt") return pt_cmdk_results_count(inputs)
	if (locale === "ru") return ru_cmdk_results_count(inputs)
	if (locale === "sv") return sv_cmdk_results_count(inputs)
	if (locale === "tr") return tr_cmdk_results_count(inputs)
	if (locale === "zh") return zh_cmdk_results_count(inputs)
	if (locale === "ja") return ja_cmdk_results_count(inputs)
	return en_cmdk_results_count(inputs)
});
