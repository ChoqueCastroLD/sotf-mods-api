/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Cmdk_Kit_ItemsInputs */

const en_cmdk_kit_items = /** @type {(inputs: Cmdk_Kit_ItemsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} item`);
	return /** @type {LocalizedString} */ (`${count__number} items`)
	
};

const es_cmdk_kit_items = /** @type {(inputs: Cmdk_Kit_ItemsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} elemento`);
	return /** @type {LocalizedString} */ (`${count__number} elementos`)
	
};

const de_cmdk_kit_items = /** @type {(inputs: Cmdk_Kit_ItemsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Eintrag`);
	return /** @type {LocalizedString} */ (`${count__number} Einträge`)
	
};

const fr_cmdk_kit_items = /** @type {(inputs: Cmdk_Kit_ItemsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} élément`);
	return /** @type {LocalizedString} */ (`${count__number} éléments`)
	
};

const it_cmdk_kit_items = /** @type {(inputs: Cmdk_Kit_ItemsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} elemento`);
	return /** @type {LocalizedString} */ (`${count__number} elementi`)
	
};

const nl_cmdk_kit_items = /** @type {(inputs: Cmdk_Kit_ItemsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} item`);
	return /** @type {LocalizedString} */ (`${count__number} items`)
	
};

const pl_cmdk_kit_items = /** @type {(inputs: Cmdk_Kit_ItemsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} element`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} elementy`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} elementów`);
	return /** @type {LocalizedString} */ (`${count__number} elementu`)
	
};

const pt_cmdk_kit_items = /** @type {(inputs: Cmdk_Kit_ItemsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} item`);
	return /** @type {LocalizedString} */ (`${count__number} itens`)
	
};

const ru_cmdk_kit_items = /** @type {(inputs: Cmdk_Kit_ItemsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} элемент`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} элемента`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} элементов`);
	return /** @type {LocalizedString} */ (`${count__number} элемента`)
	
};

const sv_cmdk_kit_items = /** @type {(inputs: Cmdk_Kit_ItemsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} objekt`);
	return /** @type {LocalizedString} */ (`${count__number} objekt`)
	
};

const tr_cmdk_kit_items = /** @type {(inputs: Cmdk_Kit_ItemsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} öğe`);
	return /** @type {LocalizedString} */ (`${count__number} öğe`)
	
};

const zh_cmdk_kit_items = /** @type {(inputs: Cmdk_Kit_ItemsInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 项`)
};

const ja_cmdk_kit_items = /** @type {(inputs: Cmdk_Kit_ItemsInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 件のアイテム`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} item" |
* | * | "{count__number} items" |
*
* @param {Cmdk_Kit_ItemsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_kit_items = /** @type {((inputs: Cmdk_Kit_ItemsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Kit_ItemsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_kit_items(inputs)
	if (locale === "de") return de_cmdk_kit_items(inputs)
	if (locale === "fr") return fr_cmdk_kit_items(inputs)
	if (locale === "it") return it_cmdk_kit_items(inputs)
	if (locale === "nl") return nl_cmdk_kit_items(inputs)
	if (locale === "pl") return pl_cmdk_kit_items(inputs)
	if (locale === "pt") return pt_cmdk_kit_items(inputs)
	if (locale === "ru") return ru_cmdk_kit_items(inputs)
	if (locale === "sv") return sv_cmdk_kit_items(inputs)
	if (locale === "tr") return tr_cmdk_kit_items(inputs)
	if (locale === "zh") return zh_cmdk_kit_items(inputs)
	if (locale === "ja") return ja_cmdk_kit_items(inputs)
	return en_cmdk_kit_items(inputs)
});
