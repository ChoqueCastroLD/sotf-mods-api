/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Landing_Pin_KitInputs */

const en_landing_pin_kit = /** @type {(inputs: Landing_Pin_KitInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Kit · ${count__number} mod`);
	return /** @type {LocalizedString} */ (`Kit · ${count__number} mods`)
	
};

const es_landing_pin_kit = /** @type {(inputs: Landing_Pin_KitInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Kit · ${count__number} mod`);
	return /** @type {LocalizedString} */ (`Kit · ${count__number} mods`)
	
};

const de_landing_pin_kit = /** @type {(inputs: Landing_Pin_KitInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Kit · ${count__number} Mod`);
	return /** @type {LocalizedString} */ (`Kit · ${count__number} Mods`)
	
};

const fr_landing_pin_kit = /** @type {(inputs: Landing_Pin_KitInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Kit · ${count__number} mod`);
	return /** @type {LocalizedString} */ (`Kit · ${count__number} mods`)
	
};

const it_landing_pin_kit = /** @type {(inputs: Landing_Pin_KitInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Kit · ${count__number} mod`);
	return /** @type {LocalizedString} */ (`Kit · ${count__number} mod`)
	
};

const nl_landing_pin_kit = /** @type {(inputs: Landing_Pin_KitInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Kit · ${count__number} mod`);
	return /** @type {LocalizedString} */ (`Kit · ${count__number} mods`)
	
};

const pl_landing_pin_kit = /** @type {(inputs: Landing_Pin_KitInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Zestaw · ${count__number} mod`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Zestaw · ${count__number} mody`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Zestaw · ${count__number} modów`);
	return /** @type {LocalizedString} */ (`Zestaw · ${count__number} modu`)
	
};

const pt_landing_pin_kit = /** @type {(inputs: Landing_Pin_KitInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Kit · ${count__number} mod`);
	return /** @type {LocalizedString} */ (`Kit · ${count__number} mods`)
	
};

const ru_landing_pin_kit = /** @type {(inputs: Landing_Pin_KitInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Набор · ${count__number} мод`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Набор · ${count__number} мода`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Набор · ${count__number} модов`);
	return /** @type {LocalizedString} */ (`Набор · ${count__number} мода`)
	
};

const sv_landing_pin_kit = /** @type {(inputs: Landing_Pin_KitInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Kit · ${count__number} modd`);
	return /** @type {LocalizedString} */ (`Kit · ${count__number} moddar`)
	
};

const tr_landing_pin_kit = /** @type {(inputs: Landing_Pin_KitInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Kit · ${count__number} mod`);
	return /** @type {LocalizedString} */ (`Kit · ${count__number} mod`)
	
};

const zh_landing_pin_kit = /** @type {(inputs: Landing_Pin_KitInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`套装 · ${count__number} 个模组`)
};

const ja_landing_pin_kit = /** @type {(inputs: Landing_Pin_KitInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`キット · MOD ${count__number} 件`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "Kit · {count__number} mod" |
* | * | "Kit · {count__number} mods" |
*
* @param {Landing_Pin_KitInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_pin_kit = /** @type {((inputs: Landing_Pin_KitInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Pin_KitInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_pin_kit(inputs)
	if (locale === "de") return de_landing_pin_kit(inputs)
	if (locale === "fr") return fr_landing_pin_kit(inputs)
	if (locale === "it") return it_landing_pin_kit(inputs)
	if (locale === "nl") return nl_landing_pin_kit(inputs)
	if (locale === "pl") return pl_landing_pin_kit(inputs)
	if (locale === "pt") return pt_landing_pin_kit(inputs)
	if (locale === "ru") return ru_landing_pin_kit(inputs)
	if (locale === "sv") return sv_landing_pin_kit(inputs)
	if (locale === "tr") return tr_landing_pin_kit(inputs)
	if (locale === "zh") return zh_landing_pin_kit(inputs)
	if (locale === "ja") return ja_landing_pin_kit(inputs)
	return en_landing_pin_kit(inputs)
});
