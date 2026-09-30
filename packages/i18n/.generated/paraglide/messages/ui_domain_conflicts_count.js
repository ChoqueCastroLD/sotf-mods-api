/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Ui_Domain_Conflicts_CountInputs */

const en_ui_domain_conflicts_count = /** @type {(inputs: Ui_Domain_Conflicts_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} conflict`);
	return /** @type {LocalizedString} */ (`${count__number} conflicts`)
	
};

const es_ui_domain_conflicts_count = /** @type {(inputs: Ui_Domain_Conflicts_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} conflicto`);
	return /** @type {LocalizedString} */ (`${count__number} conflictos`)
	
};

const de_ui_domain_conflicts_count = /** @type {(inputs: Ui_Domain_Conflicts_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Konflikt`);
	return /** @type {LocalizedString} */ (`${count__number} Konflikte`)
	
};

const fr_ui_domain_conflicts_count = /** @type {(inputs: Ui_Domain_Conflicts_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} conflit`);
	return /** @type {LocalizedString} */ (`${count__number} conflits`)
	
};

const it_ui_domain_conflicts_count = /** @type {(inputs: Ui_Domain_Conflicts_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} conflitto`);
	return /** @type {LocalizedString} */ (`${count__number} conflitti`)
	
};

const nl_ui_domain_conflicts_count = /** @type {(inputs: Ui_Domain_Conflicts_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} conflict`);
	return /** @type {LocalizedString} */ (`${count__number} conflicten`)
	
};

const pl_ui_domain_conflicts_count = /** @type {(inputs: Ui_Domain_Conflicts_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} konflikt`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} konflikty`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} konfliktów`);
	return /** @type {LocalizedString} */ (`${count__number} konfliktu`)
	
};

const pt_ui_domain_conflicts_count = /** @type {(inputs: Ui_Domain_Conflicts_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} conflito`);
	return /** @type {LocalizedString} */ (`${count__number} conflitos`)
	
};

const ru_ui_domain_conflicts_count = /** @type {(inputs: Ui_Domain_Conflicts_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} конфликт`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} конфликта`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} конфликтов`);
	return /** @type {LocalizedString} */ (`${count__number} конфликта`)
	
};

const sv_ui_domain_conflicts_count = /** @type {(inputs: Ui_Domain_Conflicts_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} konflikt`);
	return /** @type {LocalizedString} */ (`${count__number} konflikter`)
	
};

const tr_ui_domain_conflicts_count = /** @type {(inputs: Ui_Domain_Conflicts_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} çakışma`);
	return /** @type {LocalizedString} */ (`${count__number} çakışma`)
	
};

const zh_ui_domain_conflicts_count = /** @type {(inputs: Ui_Domain_Conflicts_CountInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 个冲突`)
};

const ja_ui_domain_conflicts_count = /** @type {(inputs: Ui_Domain_Conflicts_CountInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`競合 ${count__number} 件`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} conflict" |
* | * | "{count__number} conflicts" |
*
* @param {Ui_Domain_Conflicts_CountInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_conflicts_count = /** @type {((inputs: Ui_Domain_Conflicts_CountInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Conflicts_CountInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_conflicts_count(inputs)
	if (locale === "de") return de_ui_domain_conflicts_count(inputs)
	if (locale === "fr") return fr_ui_domain_conflicts_count(inputs)
	if (locale === "it") return it_ui_domain_conflicts_count(inputs)
	if (locale === "nl") return nl_ui_domain_conflicts_count(inputs)
	if (locale === "pl") return pl_ui_domain_conflicts_count(inputs)
	if (locale === "pt") return pt_ui_domain_conflicts_count(inputs)
	if (locale === "ru") return ru_ui_domain_conflicts_count(inputs)
	if (locale === "sv") return sv_ui_domain_conflicts_count(inputs)
	if (locale === "tr") return tr_ui_domain_conflicts_count(inputs)
	if (locale === "zh") return zh_ui_domain_conflicts_count(inputs)
	if (locale === "ja") return ja_ui_domain_conflicts_count(inputs)
	return en_ui_domain_conflicts_count(inputs)
});
