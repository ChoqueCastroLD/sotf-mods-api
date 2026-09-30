/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Cmdk_Mods_CountInputs */

const en_cmdk_mods_count = /** @type {(inputs: Cmdk_Mods_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod`);
	return /** @type {LocalizedString} */ (`${count__number} mods`)
	
};

const es_cmdk_mods_count = /** @type {(inputs: Cmdk_Mods_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod`);
	return /** @type {LocalizedString} */ (`${count__number} mods`)
	
};

const de_cmdk_mods_count = /** @type {(inputs: Cmdk_Mods_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Mod`);
	return /** @type {LocalizedString} */ (`${count__number} Mods`)
	
};

const fr_cmdk_mods_count = /** @type {(inputs: Cmdk_Mods_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod`);
	return /** @type {LocalizedString} */ (`${count__number} mods`)
	
};

const it_cmdk_mods_count = /** @type {(inputs: Cmdk_Mods_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod`);
	return /** @type {LocalizedString} */ (`${count__number} mod`)
	
};

const nl_cmdk_mods_count = /** @type {(inputs: Cmdk_Mods_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod`);
	return /** @type {LocalizedString} */ (`${count__number} mods`)
	
};

const pl_cmdk_mods_count = /** @type {(inputs: Cmdk_Mods_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} mody`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} modów`);
	return /** @type {LocalizedString} */ (`${count__number} moda`)
	
};

const pt_cmdk_mods_count = /** @type {(inputs: Cmdk_Mods_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod`);
	return /** @type {LocalizedString} */ (`${count__number} mods`)
	
};

const ru_cmdk_mods_count = /** @type {(inputs: Cmdk_Mods_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} мод`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} мода`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} модов`);
	return /** @type {LocalizedString} */ (`${count__number} мода`)
	
};

const sv_cmdk_mods_count = /** @type {(inputs: Cmdk_Mods_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} modd`);
	return /** @type {LocalizedString} */ (`${count__number} moddar`)
	
};

const tr_cmdk_mods_count = /** @type {(inputs: Cmdk_Mods_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod`);
	return /** @type {LocalizedString} */ (`${count__number} mod`)
	
};

const zh_cmdk_mods_count = /** @type {(inputs: Cmdk_Mods_CountInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 个模组`)
};

const ja_cmdk_mods_count = /** @type {(inputs: Cmdk_Mods_CountInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 件の MOD`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} mod" |
* | * | "{count__number} mods" |
*
* @param {Cmdk_Mods_CountInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_mods_count = /** @type {((inputs: Cmdk_Mods_CountInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Mods_CountInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_mods_count(inputs)
	if (locale === "de") return de_cmdk_mods_count(inputs)
	if (locale === "fr") return fr_cmdk_mods_count(inputs)
	if (locale === "it") return it_cmdk_mods_count(inputs)
	if (locale === "nl") return nl_cmdk_mods_count(inputs)
	if (locale === "pl") return pl_cmdk_mods_count(inputs)
	if (locale === "pt") return pt_cmdk_mods_count(inputs)
	if (locale === "ru") return ru_cmdk_mods_count(inputs)
	if (locale === "sv") return sv_cmdk_mods_count(inputs)
	if (locale === "tr") return tr_cmdk_mods_count(inputs)
	if (locale === "zh") return zh_cmdk_mods_count(inputs)
	if (locale === "ja") return ja_cmdk_mods_count(inputs)
	return en_cmdk_mods_count(inputs)
});
