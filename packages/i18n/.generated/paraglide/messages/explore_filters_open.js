/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Explore_Filters_OpenInputs */

const en_explore_filters_open = /** @type {(inputs: Explore_Filters_OpenInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("en", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Filters`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Filters (${count__number})`);
	return /** @type {LocalizedString} */ (`Filters (${count__number})`)
	
};

const es_explore_filters_open = /** @type {(inputs: Explore_Filters_OpenInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("es", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Filtros`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Filtros (${count__number})`);
	return /** @type {LocalizedString} */ (`Filtros (${count__number})`)
	
};

const de_explore_filters_open = /** @type {(inputs: Explore_Filters_OpenInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("de", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Filter`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Filter (${count__number})`);
	return /** @type {LocalizedString} */ (`Filter (${count__number})`)
	
};

const fr_explore_filters_open = /** @type {(inputs: Explore_Filters_OpenInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("fr", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Filtres`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Filtres (${count__number})`);
	return /** @type {LocalizedString} */ (`Filtres (${count__number})`)
	
};

const it_explore_filters_open = /** @type {(inputs: Explore_Filters_OpenInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("it", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Filtri`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Filtri (${count__number})`);
	return /** @type {LocalizedString} */ (`Filtri (${count__number})`)
	
};

const nl_explore_filters_open = /** @type {(inputs: Explore_Filters_OpenInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("nl", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Filters`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Filters (${count__number})`);
	return /** @type {LocalizedString} */ (`Filters (${count__number})`)
	
};

const pl_explore_filters_open = /** @type {(inputs: Explore_Filters_OpenInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("pl", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Filtry`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Filtry (${count__number})`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Filtry (${count__number})`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Filtry (${count__number})`);
	return /** @type {LocalizedString} */ (`Filtry (${count__number})`)
	
};

const pt_explore_filters_open = /** @type {(inputs: Explore_Filters_OpenInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("pt", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Filtros`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Filtros (${count__number})`);
	return /** @type {LocalizedString} */ (`Filtros (${count__number})`)
	
};

const ru_explore_filters_open = /** @type {(inputs: Explore_Filters_OpenInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("ru", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Фильтры`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Фильтры (${count__number})`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Фильтры (${count__number})`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Фильтры (${count__number})`);
	return /** @type {LocalizedString} */ (`Фильтры (${count__number})`)
	
};

const sv_explore_filters_open = /** @type {(inputs: Explore_Filters_OpenInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("sv", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Filter`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Filter (${count__number})`);
	return /** @type {LocalizedString} */ (`Filter (${count__number})`)
	
};

const tr_explore_filters_open = /** @type {(inputs: Explore_Filters_OpenInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("tr", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Filtreler`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Filtreler (${count__number})`);
	return /** @type {LocalizedString} */ (`Filtreler (${count__number})`)
	
};

const zh_explore_filters_open = /** @type {(inputs: Explore_Filters_OpenInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("zh", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`筛选`);
	return /** @type {LocalizedString} */ (`筛选（${count__number}）`)
	
};

const ja_explore_filters_open = /** @type {(inputs: Explore_Filters_OpenInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("ja", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`絞り込み`);
	return /** @type {LocalizedString} */ (`絞り込み（${count__number}）`)
	
};

/**
* | count__exact | count__plural | output |
* | --- | --- | --- |
* | "0" | * | "Filters" |
* | * | "one" | "Filters ({count__number})" |
* | * | * | "Filters ({count__number})" |
*
* @param {Explore_Filters_OpenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_filters_open = /** @type {((inputs: Explore_Filters_OpenInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Filters_OpenInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_filters_open(inputs)
	if (locale === "de") return de_explore_filters_open(inputs)
	if (locale === "fr") return fr_explore_filters_open(inputs)
	if (locale === "it") return it_explore_filters_open(inputs)
	if (locale === "nl") return nl_explore_filters_open(inputs)
	if (locale === "pl") return pl_explore_filters_open(inputs)
	if (locale === "pt") return pt_explore_filters_open(inputs)
	if (locale === "ru") return ru_explore_filters_open(inputs)
	if (locale === "sv") return sv_explore_filters_open(inputs)
	if (locale === "tr") return tr_explore_filters_open(inputs)
	if (locale === "zh") return zh_explore_filters_open(inputs)
	if (locale === "ja") return ja_explore_filters_open(inputs)
	return en_explore_filters_open(inputs)
});
