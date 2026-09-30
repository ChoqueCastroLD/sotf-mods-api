/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Ui_Domain_Kit_ModsInputs */

const en_ui_domain_kit_mods = /** @type {(inputs: Ui_Domain_Kit_ModsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod`);
	return /** @type {LocalizedString} */ (`${count__number} mods`)
	
};

const es_ui_domain_kit_mods = /** @type {(inputs: Ui_Domain_Kit_ModsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod`);
	return /** @type {LocalizedString} */ (`${count__number} mods`)
	
};

const de_ui_domain_kit_mods = /** @type {(inputs: Ui_Domain_Kit_ModsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Mod`);
	return /** @type {LocalizedString} */ (`${count__number} Mods`)
	
};

const fr_ui_domain_kit_mods = /** @type {(inputs: Ui_Domain_Kit_ModsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod`);
	return /** @type {LocalizedString} */ (`${count__number} mods`)
	
};

const it_ui_domain_kit_mods = /** @type {(inputs: Ui_Domain_Kit_ModsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod`);
	return /** @type {LocalizedString} */ (`${count__number} mod`)
	
};

const nl_ui_domain_kit_mods = /** @type {(inputs: Ui_Domain_Kit_ModsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod`);
	return /** @type {LocalizedString} */ (`${count__number} mods`)
	
};

const pl_ui_domain_kit_mods = /** @type {(inputs: Ui_Domain_Kit_ModsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} mody`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} modów`);
	return /** @type {LocalizedString} */ (`${count__number} moda`)
	
};

const pt_ui_domain_kit_mods = /** @type {(inputs: Ui_Domain_Kit_ModsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod`);
	return /** @type {LocalizedString} */ (`${count__number} mods`)
	
};

const ru_ui_domain_kit_mods = /** @type {(inputs: Ui_Domain_Kit_ModsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} мод`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} мода`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} модов`);
	return /** @type {LocalizedString} */ (`${count__number} мода`)
	
};

const sv_ui_domain_kit_mods = /** @type {(inputs: Ui_Domain_Kit_ModsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} modd`);
	return /** @type {LocalizedString} */ (`${count__number} moddar`)
	
};

const tr_ui_domain_kit_mods = /** @type {(inputs: Ui_Domain_Kit_ModsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod`);
	return /** @type {LocalizedString} */ (`${count__number} mod`)
	
};

const zh_ui_domain_kit_mods = /** @type {(inputs: Ui_Domain_Kit_ModsInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 个模组`)
};

const ja_ui_domain_kit_mods = /** @type {(inputs: Ui_Domain_Kit_ModsInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 件の MOD`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} mod" |
* | * | "{count__number} mods" |
*
* @param {Ui_Domain_Kit_ModsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_kit_mods = /** @type {((inputs: Ui_Domain_Kit_ModsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Kit_ModsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_kit_mods(inputs)
	if (locale === "de") return de_ui_domain_kit_mods(inputs)
	if (locale === "fr") return fr_ui_domain_kit_mods(inputs)
	if (locale === "it") return it_ui_domain_kit_mods(inputs)
	if (locale === "nl") return nl_ui_domain_kit_mods(inputs)
	if (locale === "pl") return pl_ui_domain_kit_mods(inputs)
	if (locale === "pt") return pt_ui_domain_kit_mods(inputs)
	if (locale === "ru") return ru_ui_domain_kit_mods(inputs)
	if (locale === "sv") return sv_ui_domain_kit_mods(inputs)
	if (locale === "tr") return tr_ui_domain_kit_mods(inputs)
	if (locale === "zh") return zh_ui_domain_kit_mods(inputs)
	if (locale === "ja") return ja_ui_domain_kit_mods(inputs)
	return en_ui_domain_kit_mods(inputs)
});
