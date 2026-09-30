/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown>, auto: NonNullable<unknown> }} Kits_Items_With_AutoInputs */

const en_kits_items_with_auto = /** @type {(inputs: Kits_Items_With_AutoInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	const auto__plural = registry.plural("en", i?.auto, {});
	const auto__number = registry.number("en", i?.auto, {});
	if (count__plural === "one" && auto__plural === "one") return /** @type {LocalizedString} */ (`${count__number} item + ${auto__number} dependency`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} item + ${auto__number} dependencies`);
	if (auto__plural === "one") return /** @type {LocalizedString} */ (`${count__number} items + ${auto__number} dependency`);
	return /** @type {LocalizedString} */ (`${count__number} items + ${auto__number} dependencies`)
	
};

const es_kits_items_with_auto = /** @type {(inputs: Kits_Items_With_AutoInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	const auto__plural = registry.plural("es", i?.auto, {});
	const auto__number = registry.number("es", i?.auto, {});
	if (count__plural === "one" && auto__plural === "one") return /** @type {LocalizedString} */ (`${count__number} elemento + ${auto__number} dependencia`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} elemento + ${auto__number} dependencias`);
	if (auto__plural === "one") return /** @type {LocalizedString} */ (`${count__number} elementos + ${auto__number} dependencia`);
	return /** @type {LocalizedString} */ (`${count__number} elementos + ${auto__number} dependencias`)
	
};

const de_kits_items_with_auto = /** @type {(inputs: Kits_Items_With_AutoInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	const auto__plural = registry.plural("de", i?.auto, {});
	const auto__number = registry.number("de", i?.auto, {});
	if (count__plural === "one" && auto__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Eintrag + ${auto__number} Abhängigkeit`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Eintrag + ${auto__number} Abhängigkeiten`);
	if (auto__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Einträge + ${auto__number} Abhängigkeit`);
	return /** @type {LocalizedString} */ (`${count__number} Einträge + ${auto__number} Abhängigkeiten`)
	
};

const fr_kits_items_with_auto = /** @type {(inputs: Kits_Items_With_AutoInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	const auto__plural = registry.plural("fr", i?.auto, {});
	const auto__number = registry.number("fr", i?.auto, {});
	if (count__plural === "one" && auto__plural === "one") return /** @type {LocalizedString} */ (`${count__number} élément + ${auto__number} dépendance`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} élément + ${auto__number} dépendances`);
	if (auto__plural === "one") return /** @type {LocalizedString} */ (`${count__number} éléments + ${auto__number} dépendance`);
	return /** @type {LocalizedString} */ (`${count__number} éléments + ${auto__number} dépendances`)
	
};

const it_kits_items_with_auto = /** @type {(inputs: Kits_Items_With_AutoInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	const auto__plural = registry.plural("it", i?.auto, {});
	const auto__number = registry.number("it", i?.auto, {});
	if (count__plural === "one" && auto__plural === "one") return /** @type {LocalizedString} */ (`${count__number} elemento + ${auto__number} dipendenza`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} elemento + ${auto__number} dipendenze`);
	if (auto__plural === "one") return /** @type {LocalizedString} */ (`${count__number} elementi + ${auto__number} dipendenza`);
	return /** @type {LocalizedString} */ (`${count__number} elementi + ${auto__number} dipendenze`)
	
};

const nl_kits_items_with_auto = /** @type {(inputs: Kits_Items_With_AutoInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	const auto__plural = registry.plural("nl", i?.auto, {});
	const auto__number = registry.number("nl", i?.auto, {});
	if (count__plural === "one" && auto__plural === "one") return /** @type {LocalizedString} */ (`${count__number} item + ${auto__number} afhankelijkheid`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} item + ${auto__number} afhankelijkheden`);
	if (auto__plural === "one") return /** @type {LocalizedString} */ (`${count__number} items + ${auto__number} afhankelijkheid`);
	return /** @type {LocalizedString} */ (`${count__number} items + ${auto__number} afhankelijkheden`)
	
};

const pl_kits_items_with_auto = /** @type {(inputs: Kits_Items_With_AutoInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	const auto__plural = registry.plural("pl", i?.auto, {});
	const auto__number = registry.number("pl", i?.auto, {});
	if (count__plural === "one" && auto__plural === "one") return /** @type {LocalizedString} */ (`${count__number} element + ${auto__number} zależność`);
	if (count__plural === "one" && auto__plural === "few") return /** @type {LocalizedString} */ (`${count__number} element + ${auto__number} zależności`);
	if (count__plural === "one" && auto__plural === "many") return /** @type {LocalizedString} */ (`${count__number} element + ${auto__number} zależności`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} element + ${auto__number} zależności`);
	if (count__plural === "few" && auto__plural === "one") return /** @type {LocalizedString} */ (`${count__number} elementy + ${auto__number} zależność`);
	if (count__plural === "few" && auto__plural === "few") return /** @type {LocalizedString} */ (`${count__number} elementy + ${auto__number} zależności`);
	if (count__plural === "few" && auto__plural === "many") return /** @type {LocalizedString} */ (`${count__number} elementy + ${auto__number} zależności`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} elementy + ${auto__number} zależności`);
	if (count__plural === "many" && auto__plural === "one") return /** @type {LocalizedString} */ (`${count__number} elementów + ${auto__number} zależność`);
	if (count__plural === "many" && auto__plural === "few") return /** @type {LocalizedString} */ (`${count__number} elementów + ${auto__number} zależności`);
	if (count__plural === "many" && auto__plural === "many") return /** @type {LocalizedString} */ (`${count__number} elementów + ${auto__number} zależności`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} elementów + ${auto__number} zależności`);
	if (auto__plural === "one") return /** @type {LocalizedString} */ (`${count__number} elementu + ${auto__number} zależność`);
	if (auto__plural === "few") return /** @type {LocalizedString} */ (`${count__number} elementu + ${auto__number} zależności`);
	if (auto__plural === "many") return /** @type {LocalizedString} */ (`${count__number} elementu + ${auto__number} zależności`);
	return /** @type {LocalizedString} */ (`${count__number} elementu + ${auto__number} zależności`)
	
};

const pt_kits_items_with_auto = /** @type {(inputs: Kits_Items_With_AutoInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	const auto__plural = registry.plural("pt", i?.auto, {});
	const auto__number = registry.number("pt", i?.auto, {});
	if (count__plural === "one" && auto__plural === "one") return /** @type {LocalizedString} */ (`${count__number} item + ${auto__number} dependência`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} item + ${auto__number} dependências`);
	if (auto__plural === "one") return /** @type {LocalizedString} */ (`${count__number} itens + ${auto__number} dependência`);
	return /** @type {LocalizedString} */ (`${count__number} itens + ${auto__number} dependências`)
	
};

const ru_kits_items_with_auto = /** @type {(inputs: Kits_Items_With_AutoInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	const auto__plural = registry.plural("ru", i?.auto, {});
	const auto__number = registry.number("ru", i?.auto, {});
	if (count__plural === "one" && auto__plural === "one") return /** @type {LocalizedString} */ (`${count__number} элемент + ${auto__number} зависимость`);
	if (count__plural === "one" && auto__plural === "few") return /** @type {LocalizedString} */ (`${count__number} элемент + ${auto__number} зависимости`);
	if (count__plural === "one" && auto__plural === "many") return /** @type {LocalizedString} */ (`${count__number} элемент + ${auto__number} зависимостей`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} элемент + ${auto__number} зависимости`);
	if (count__plural === "few" && auto__plural === "one") return /** @type {LocalizedString} */ (`${count__number} элемента + ${auto__number} зависимость`);
	if (count__plural === "few" && auto__plural === "few") return /** @type {LocalizedString} */ (`${count__number} элемента + ${auto__number} зависимости`);
	if (count__plural === "few" && auto__plural === "many") return /** @type {LocalizedString} */ (`${count__number} элемента + ${auto__number} зависимостей`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} элемента + ${auto__number} зависимости`);
	if (count__plural === "many" && auto__plural === "one") return /** @type {LocalizedString} */ (`${count__number} элементов + ${auto__number} зависимость`);
	if (count__plural === "many" && auto__plural === "few") return /** @type {LocalizedString} */ (`${count__number} элементов + ${auto__number} зависимости`);
	if (count__plural === "many" && auto__plural === "many") return /** @type {LocalizedString} */ (`${count__number} элементов + ${auto__number} зависимостей`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} элементов + ${auto__number} зависимости`);
	if (auto__plural === "one") return /** @type {LocalizedString} */ (`${count__number} элемента + ${auto__number} зависимость`);
	if (auto__plural === "few") return /** @type {LocalizedString} */ (`${count__number} элемента + ${auto__number} зависимости`);
	if (auto__plural === "many") return /** @type {LocalizedString} */ (`${count__number} элемента + ${auto__number} зависимостей`);
	return /** @type {LocalizedString} */ (`${count__number} элемента + ${auto__number} зависимости`)
	
};

const sv_kits_items_with_auto = /** @type {(inputs: Kits_Items_With_AutoInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	const auto__plural = registry.plural("sv", i?.auto, {});
	const auto__number = registry.number("sv", i?.auto, {});
	if (count__plural === "one" && auto__plural === "one") return /** @type {LocalizedString} */ (`${count__number} objekt + ${auto__number} beroende`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} objekt + ${auto__number} beroenden`);
	if (auto__plural === "one") return /** @type {LocalizedString} */ (`${count__number} objekt + ${auto__number} beroende`);
	return /** @type {LocalizedString} */ (`${count__number} objekt + ${auto__number} beroenden`)
	
};

const tr_kits_items_with_auto = /** @type {(inputs: Kits_Items_With_AutoInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	const auto__plural = registry.plural("tr", i?.auto, {});
	const auto__number = registry.number("tr", i?.auto, {});
	if (count__plural === "one" && auto__plural === "one") return /** @type {LocalizedString} */ (`${count__number} öğe + ${auto__number} bağımlılık`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} öğe + ${auto__number} bağımlılık`);
	if (auto__plural === "one") return /** @type {LocalizedString} */ (`${count__number} öğe + ${auto__number} bağımlılık`);
	return /** @type {LocalizedString} */ (`${count__number} öğe + ${auto__number} bağımlılık`)
	
};

const zh_kits_items_with_auto = /** @type {(inputs: Kits_Items_With_AutoInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});
	const auto__plural = registry.plural("zh", i?.auto, {});
	const auto__number = registry.number("zh", i?.auto, {});return /** @type {LocalizedString} */ (`${count__number} 项 + ${auto__number} 个依赖`)
};

const ja_kits_items_with_auto = /** @type {(inputs: Kits_Items_With_AutoInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});
	const auto__plural = registry.plural("ja", i?.auto, {});
	const auto__number = registry.number("ja", i?.auto, {});return /** @type {LocalizedString} */ (`${count__number} 件 + 依存 MOD ${auto__number} 件`)
};

/**
* | count__plural | auto__plural | output |
* | --- | --- | --- |
* | "one" | "one" | "{count__number} item + {auto__number} dependency" |
* | "one" | * | "{count__number} item + {auto__number} dependencies" |
* | * | "one" | "{count__number} items + {auto__number} dependency" |
* | * | * | "{count__number} items + {auto__number} dependencies" |
*
* @param {Kits_Items_With_AutoInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_items_with_auto = /** @type {((inputs: Kits_Items_With_AutoInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Items_With_AutoInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_items_with_auto(inputs)
	if (locale === "de") return de_kits_items_with_auto(inputs)
	if (locale === "fr") return fr_kits_items_with_auto(inputs)
	if (locale === "it") return it_kits_items_with_auto(inputs)
	if (locale === "nl") return nl_kits_items_with_auto(inputs)
	if (locale === "pl") return pl_kits_items_with_auto(inputs)
	if (locale === "pt") return pt_kits_items_with_auto(inputs)
	if (locale === "ru") return ru_kits_items_with_auto(inputs)
	if (locale === "sv") return sv_kits_items_with_auto(inputs)
	if (locale === "tr") return tr_kits_items_with_auto(inputs)
	if (locale === "zh") return zh_kits_items_with_auto(inputs)
	if (locale === "ja") return ja_kits_items_with_auto(inputs)
	return en_kits_items_with_auto(inputs)
});
