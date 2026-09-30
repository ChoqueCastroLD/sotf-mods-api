/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Builds_In_KitsInputs */

const en_builds_in_kits = /** @type {(inputs: Builds_In_KitsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`In ${count__number} Kit`);
	return /** @type {LocalizedString} */ (`In ${count__number} Kits`)
	
};

const es_builds_in_kits = /** @type {(inputs: Builds_In_KitsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`En ${count__number} Kit`);
	return /** @type {LocalizedString} */ (`En ${count__number} Kits`)
	
};

const de_builds_in_kits = /** @type {(inputs: Builds_In_KitsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`In ${count__number} Kit`);
	return /** @type {LocalizedString} */ (`In ${count__number} Kits`)
	
};

const fr_builds_in_kits = /** @type {(inputs: Builds_In_KitsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Dans ${count__number} Kit`);
	return /** @type {LocalizedString} */ (`Dans ${count__number} Kits`)
	
};

const it_builds_in_kits = /** @type {(inputs: Builds_In_KitsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`In ${count__number} Kit`);
	return /** @type {LocalizedString} */ (`In ${count__number} Kit`)
	
};

const nl_builds_in_kits = /** @type {(inputs: Builds_In_KitsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`In ${count__number} Kit`);
	return /** @type {LocalizedString} */ (`In ${count__number} Kits`)
	
};

const pl_builds_in_kits = /** @type {(inputs: Builds_In_KitsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`W ${count__number} zestawie`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`W ${count__number} zestawach`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`W ${count__number} zestawach`);
	return /** @type {LocalizedString} */ (`W ${count__number} zestawu`)
	
};

const pt_builds_in_kits = /** @type {(inputs: Builds_In_KitsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Em ${count__number} Kit`);
	return /** @type {LocalizedString} */ (`Em ${count__number} Kits`)
	
};

const ru_builds_in_kits = /** @type {(inputs: Builds_In_KitsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`В ${count__number} наборе`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`В ${count__number} наборах`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`В ${count__number} наборах`);
	return /** @type {LocalizedString} */ (`В ${count__number} набора`)
	
};

const sv_builds_in_kits = /** @type {(inputs: Builds_In_KitsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`I ${count__number} Kit`);
	return /** @type {LocalizedString} */ (`I ${count__number} Kit`)
	
};

const tr_builds_in_kits = /** @type {(inputs: Builds_In_KitsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Kitte`);
	return /** @type {LocalizedString} */ (`${count__number} Kitte`)
	
};

const zh_builds_in_kits = /** @type {(inputs: Builds_In_KitsInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`收录于 ${count__number} 个套装`)
};

const ja_builds_in_kits = /** @type {(inputs: Builds_In_KitsInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 件のキットに収録`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "In {count__number} Kit" |
* | * | "In {count__number} Kits" |
*
* @param {Builds_In_KitsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_in_kits = /** @type {((inputs: Builds_In_KitsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_In_KitsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_in_kits(inputs)
	if (locale === "de") return de_builds_in_kits(inputs)
	if (locale === "fr") return fr_builds_in_kits(inputs)
	if (locale === "it") return it_builds_in_kits(inputs)
	if (locale === "nl") return nl_builds_in_kits(inputs)
	if (locale === "pl") return pl_builds_in_kits(inputs)
	if (locale === "pt") return pt_builds_in_kits(inputs)
	if (locale === "ru") return ru_builds_in_kits(inputs)
	if (locale === "sv") return sv_builds_in_kits(inputs)
	if (locale === "tr") return tr_builds_in_kits(inputs)
	if (locale === "zh") return zh_builds_in_kits(inputs)
	if (locale === "ja") return ja_builds_in_kits(inputs)
	return en_builds_in_kits(inputs)
});
