/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Kits_List_CountInputs */

const en_kits_list_count = /** @type {(inputs: Kits_List_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} kit`);
	return /** @type {LocalizedString} */ (`${count__number} kits`)
	
};

const es_kits_list_count = /** @type {(inputs: Kits_List_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} kit`);
	return /** @type {LocalizedString} */ (`${count__number} kits`)
	
};

const de_kits_list_count = /** @type {(inputs: Kits_List_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Kit`);
	return /** @type {LocalizedString} */ (`${count__number} Kits`)
	
};

const fr_kits_list_count = /** @type {(inputs: Kits_List_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} kit`);
	return /** @type {LocalizedString} */ (`${count__number} kits`)
	
};

const it_kits_list_count = /** @type {(inputs: Kits_List_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} kit`);
	return /** @type {LocalizedString} */ (`${count__number} kit`)
	
};

const nl_kits_list_count = /** @type {(inputs: Kits_List_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} kit`);
	return /** @type {LocalizedString} */ (`${count__number} kits`)
	
};

const pl_kits_list_count = /** @type {(inputs: Kits_List_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} zestaw`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} zestawy`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} zestawów`);
	return /** @type {LocalizedString} */ (`${count__number} zestawu`)
	
};

const pt_kits_list_count = /** @type {(inputs: Kits_List_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} kit`);
	return /** @type {LocalizedString} */ (`${count__number} kits`)
	
};

const ru_kits_list_count = /** @type {(inputs: Kits_List_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} набор`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} набора`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} наборов`);
	return /** @type {LocalizedString} */ (`${count__number} набора`)
	
};

const sv_kits_list_count = /** @type {(inputs: Kits_List_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} kit`);
	return /** @type {LocalizedString} */ (`${count__number} kit`)
	
};

const tr_kits_list_count = /** @type {(inputs: Kits_List_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} kit`);
	return /** @type {LocalizedString} */ (`${count__number} kit`)
	
};

const zh_kits_list_count = /** @type {(inputs: Kits_List_CountInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 个套装`)
};

const ja_kits_list_count = /** @type {(inputs: Kits_List_CountInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 件のキット`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} kit" |
* | * | "{count__number} kits" |
*
* @param {Kits_List_CountInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_list_count = /** @type {((inputs: Kits_List_CountInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_List_CountInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_list_count(inputs)
	if (locale === "de") return de_kits_list_count(inputs)
	if (locale === "fr") return fr_kits_list_count(inputs)
	if (locale === "it") return it_kits_list_count(inputs)
	if (locale === "nl") return nl_kits_list_count(inputs)
	if (locale === "pl") return pl_kits_list_count(inputs)
	if (locale === "pt") return pt_kits_list_count(inputs)
	if (locale === "ru") return ru_kits_list_count(inputs)
	if (locale === "sv") return sv_kits_list_count(inputs)
	if (locale === "tr") return tr_kits_list_count(inputs)
	if (locale === "zh") return zh_kits_list_count(inputs)
	if (locale === "ja") return ja_kits_list_count(inputs)
	return en_kits_list_count(inputs)
});
