/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Kits_Conflicts_TitleInputs */

const en_kits_conflicts_title = /** @type {(inputs: Kits_Conflicts_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} conflict in this kit`);
	return /** @type {LocalizedString} */ (`${count__number} conflicts in this kit`)
	
};

const es_kits_conflicts_title = /** @type {(inputs: Kits_Conflicts_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} conflicto en este kit`);
	return /** @type {LocalizedString} */ (`${count__number} conflictos en este kit`)
	
};

const de_kits_conflicts_title = /** @type {(inputs: Kits_Conflicts_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Konflikt in diesem Kit`);
	return /** @type {LocalizedString} */ (`${count__number} Konflikte in diesem Kit`)
	
};

const fr_kits_conflicts_title = /** @type {(inputs: Kits_Conflicts_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} conflit dans ce kit`);
	return /** @type {LocalizedString} */ (`${count__number} conflits dans ce kit`)
	
};

const it_kits_conflicts_title = /** @type {(inputs: Kits_Conflicts_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} conflitto in questo kit`);
	return /** @type {LocalizedString} */ (`${count__number} conflitti in questo kit`)
	
};

const nl_kits_conflicts_title = /** @type {(inputs: Kits_Conflicts_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} conflict in deze kit`);
	return /** @type {LocalizedString} */ (`${count__number} conflicten in deze kit`)
	
};

const pl_kits_conflicts_title = /** @type {(inputs: Kits_Conflicts_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} konflikt w tym zestawie`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} konflikty w tym zestawie`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} konfliktów w tym zestawie`);
	return /** @type {LocalizedString} */ (`${count__number} konfliktu w tym zestawie`)
	
};

const pt_kits_conflicts_title = /** @type {(inputs: Kits_Conflicts_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} conflito neste kit`);
	return /** @type {LocalizedString} */ (`${count__number} conflitos neste kit`)
	
};

const ru_kits_conflicts_title = /** @type {(inputs: Kits_Conflicts_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} конфликт в наборе`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} конфликта в наборе`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} конфликтов в наборе`);
	return /** @type {LocalizedString} */ (`${count__number} конфликта в наборе`)
	
};

const sv_kits_conflicts_title = /** @type {(inputs: Kits_Conflicts_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} konflikt i kitet`);
	return /** @type {LocalizedString} */ (`${count__number} konflikter i kitet`)
	
};

const tr_kits_conflicts_title = /** @type {(inputs: Kits_Conflicts_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Bu kitte ${count__number} çakışma var`);
	return /** @type {LocalizedString} */ (`Bu kitte ${count__number} çakışma var`)
	
};

const zh_kits_conflicts_title = /** @type {(inputs: Kits_Conflicts_TitleInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`此套装中有 ${count__number} 处冲突`)
};

const ja_kits_conflicts_title = /** @type {(inputs: Kits_Conflicts_TitleInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`このキットに競合が ${count__number} 件あります`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} conflict in this kit" |
* | * | "{count__number} conflicts in this kit" |
*
* @param {Kits_Conflicts_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_conflicts_title = /** @type {((inputs: Kits_Conflicts_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Conflicts_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_conflicts_title(inputs)
	if (locale === "de") return de_kits_conflicts_title(inputs)
	if (locale === "fr") return fr_kits_conflicts_title(inputs)
	if (locale === "it") return it_kits_conflicts_title(inputs)
	if (locale === "nl") return nl_kits_conflicts_title(inputs)
	if (locale === "pl") return pl_kits_conflicts_title(inputs)
	if (locale === "pt") return pt_kits_conflicts_title(inputs)
	if (locale === "ru") return ru_kits_conflicts_title(inputs)
	if (locale === "sv") return sv_kits_conflicts_title(inputs)
	if (locale === "tr") return tr_kits_conflicts_title(inputs)
	if (locale === "zh") return zh_kits_conflicts_title(inputs)
	if (locale === "ja") return ja_kits_conflicts_title(inputs)
	return en_kits_conflicts_title(inputs)
});
