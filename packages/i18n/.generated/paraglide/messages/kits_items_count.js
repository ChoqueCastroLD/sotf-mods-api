/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Kits_Items_CountInputs */

const en_kits_items_count = /** @type {(inputs: Kits_Items_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} item`);
	return /** @type {LocalizedString} */ (`${count__number} items`)
	
};

const es_kits_items_count = /** @type {(inputs: Kits_Items_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} elemento`);
	return /** @type {LocalizedString} */ (`${count__number} elementos`)
	
};

const de_kits_items_count = /** @type {(inputs: Kits_Items_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Eintrag`);
	return /** @type {LocalizedString} */ (`${count__number} Einträge`)
	
};

const fr_kits_items_count = /** @type {(inputs: Kits_Items_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} élément`);
	return /** @type {LocalizedString} */ (`${count__number} éléments`)
	
};

const it_kits_items_count = /** @type {(inputs: Kits_Items_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} elemento`);
	return /** @type {LocalizedString} */ (`${count__number} elementi`)
	
};

const nl_kits_items_count = /** @type {(inputs: Kits_Items_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} item`);
	return /** @type {LocalizedString} */ (`${count__number} items`)
	
};

const pl_kits_items_count = /** @type {(inputs: Kits_Items_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} element`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} elementy`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} elementów`);
	return /** @type {LocalizedString} */ (`${count__number} elementu`)
	
};

const pt_kits_items_count = /** @type {(inputs: Kits_Items_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} item`);
	return /** @type {LocalizedString} */ (`${count__number} itens`)
	
};

const ru_kits_items_count = /** @type {(inputs: Kits_Items_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} элемент`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} элемента`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} элементов`);
	return /** @type {LocalizedString} */ (`${count__number} элемента`)
	
};

const sv_kits_items_count = /** @type {(inputs: Kits_Items_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} objekt`);
	return /** @type {LocalizedString} */ (`${count__number} objekt`)
	
};

const tr_kits_items_count = /** @type {(inputs: Kits_Items_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} öğe`);
	return /** @type {LocalizedString} */ (`${count__number} öğe`)
	
};

const zh_kits_items_count = /** @type {(inputs: Kits_Items_CountInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 项`)
};

const ja_kits_items_count = /** @type {(inputs: Kits_Items_CountInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 件`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} item" |
* | * | "{count__number} items" |
*
* @param {Kits_Items_CountInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_items_count = /** @type {((inputs: Kits_Items_CountInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Items_CountInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_items_count(inputs)
	if (locale === "de") return de_kits_items_count(inputs)
	if (locale === "fr") return fr_kits_items_count(inputs)
	if (locale === "it") return it_kits_items_count(inputs)
	if (locale === "nl") return nl_kits_items_count(inputs)
	if (locale === "pl") return pl_kits_items_count(inputs)
	if (locale === "pt") return pt_kits_items_count(inputs)
	if (locale === "ru") return ru_kits_items_count(inputs)
	if (locale === "sv") return sv_kits_items_count(inputs)
	if (locale === "tr") return tr_kits_items_count(inputs)
	if (locale === "zh") return zh_kits_items_count(inputs)
	if (locale === "ja") return ja_kits_items_count(inputs)
	return en_kits_items_count(inputs)
});
