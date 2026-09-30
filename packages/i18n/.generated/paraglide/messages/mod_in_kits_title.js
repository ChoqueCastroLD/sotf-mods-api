/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Mod_In_Kits_TitleInputs */

const en_mod_in_kits_title = /** @type {(inputs: Mod_In_Kits_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`In ${count__number} kit`);
	return /** @type {LocalizedString} */ (`In ${count__number} kits`)
	
};

const es_mod_in_kits_title = /** @type {(inputs: Mod_In_Kits_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`En ${count__number} kit`);
	return /** @type {LocalizedString} */ (`En ${count__number} kits`)
	
};

const de_mod_in_kits_title = /** @type {(inputs: Mod_In_Kits_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`In ${count__number} Kit`);
	return /** @type {LocalizedString} */ (`In ${count__number} Kits`)
	
};

const fr_mod_in_kits_title = /** @type {(inputs: Mod_In_Kits_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Dans ${count__number} kit`);
	return /** @type {LocalizedString} */ (`Dans ${count__number} kits`)
	
};

const it_mod_in_kits_title = /** @type {(inputs: Mod_In_Kits_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`In ${count__number} kit`);
	return /** @type {LocalizedString} */ (`In ${count__number} kit`)
	
};

const nl_mod_in_kits_title = /** @type {(inputs: Mod_In_Kits_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`In ${count__number} kit`);
	return /** @type {LocalizedString} */ (`In ${count__number} kits`)
	
};

const pl_mod_in_kits_title = /** @type {(inputs: Mod_In_Kits_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`W ${count__number} zestawie`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`W ${count__number} zestawach`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`W ${count__number} zestawach`);
	return /** @type {LocalizedString} */ (`W ${count__number} zestawach`)
	
};

const pt_mod_in_kits_title = /** @type {(inputs: Mod_In_Kits_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Em ${count__number} kit`);
	return /** @type {LocalizedString} */ (`Em ${count__number} kits`)
	
};

const ru_mod_in_kits_title = /** @type {(inputs: Mod_In_Kits_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`В ${count__number} наборе`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`В ${count__number} наборах`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`В ${count__number} наборах`);
	return /** @type {LocalizedString} */ (`В ${count__number} наборах`)
	
};

const sv_mod_in_kits_title = /** @type {(inputs: Mod_In_Kits_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`I ${count__number} kit`);
	return /** @type {LocalizedString} */ (`I ${count__number} kit`)
	
};

const tr_mod_in_kits_title = /** @type {(inputs: Mod_In_Kits_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} kitte`);
	return /** @type {LocalizedString} */ (`${count__number} kitte`)
	
};

const zh_mod_in_kits_title = /** @type {(inputs: Mod_In_Kits_TitleInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`收录于 ${count__number} 个合集`)
};

const ja_mod_in_kits_title = /** @type {(inputs: Mod_In_Kits_TitleInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 個のキットに収録`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "In {count__number} kit" |
* | * | "In {count__number} kits" |
*
* @param {Mod_In_Kits_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_in_kits_title = /** @type {((inputs: Mod_In_Kits_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_In_Kits_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_in_kits_title(inputs)
	if (locale === "de") return de_mod_in_kits_title(inputs)
	if (locale === "fr") return fr_mod_in_kits_title(inputs)
	if (locale === "it") return it_mod_in_kits_title(inputs)
	if (locale === "nl") return nl_mod_in_kits_title(inputs)
	if (locale === "pl") return pl_mod_in_kits_title(inputs)
	if (locale === "pt") return pt_mod_in_kits_title(inputs)
	if (locale === "ru") return ru_mod_in_kits_title(inputs)
	if (locale === "sv") return sv_mod_in_kits_title(inputs)
	if (locale === "tr") return tr_mod_in_kits_title(inputs)
	if (locale === "zh") return zh_mod_in_kits_title(inputs)
	if (locale === "ja") return ja_mod_in_kits_title(inputs)
	return en_mod_in_kits_title(inputs)
});
