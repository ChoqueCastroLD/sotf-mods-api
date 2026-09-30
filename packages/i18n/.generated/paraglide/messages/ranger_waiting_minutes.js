/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Ranger_Waiting_MinutesInputs */

const en_ranger_waiting_minutes = /** @type {(inputs: Ranger_Waiting_MinutesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} min`);
	return /** @type {LocalizedString} */ (`${count__number} min`)
	
};

const es_ranger_waiting_minutes = /** @type {(inputs: Ranger_Waiting_MinutesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} min`);
	return /** @type {LocalizedString} */ (`${count__number} min`)
	
};

const de_ranger_waiting_minutes = /** @type {(inputs: Ranger_Waiting_MinutesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Min.`);
	return /** @type {LocalizedString} */ (`${count__number} Min.`)
	
};

const fr_ranger_waiting_minutes = /** @type {(inputs: Ranger_Waiting_MinutesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} min`);
	return /** @type {LocalizedString} */ (`${count__number} min`)
	
};

const it_ranger_waiting_minutes = /** @type {(inputs: Ranger_Waiting_MinutesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} min`);
	return /** @type {LocalizedString} */ (`${count__number} min`)
	
};

const nl_ranger_waiting_minutes = /** @type {(inputs: Ranger_Waiting_MinutesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} min`);
	return /** @type {LocalizedString} */ (`${count__number} min`)
	
};

const pl_ranger_waiting_minutes = /** @type {(inputs: Ranger_Waiting_MinutesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} min`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} min`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} min`);
	return /** @type {LocalizedString} */ (`${count__number} min`)
	
};

const pt_ranger_waiting_minutes = /** @type {(inputs: Ranger_Waiting_MinutesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} min`);
	return /** @type {LocalizedString} */ (`${count__number} min`)
	
};

const ru_ranger_waiting_minutes = /** @type {(inputs: Ranger_Waiting_MinutesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} мин`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} мин`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} мин`);
	return /** @type {LocalizedString} */ (`${count__number} мин`)
	
};

const sv_ranger_waiting_minutes = /** @type {(inputs: Ranger_Waiting_MinutesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} min`);
	return /** @type {LocalizedString} */ (`${count__number} min`)
	
};

const tr_ranger_waiting_minutes = /** @type {(inputs: Ranger_Waiting_MinutesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} dk`);
	return /** @type {LocalizedString} */ (`${count__number} dk`)
	
};

const zh_ranger_waiting_minutes = /** @type {(inputs: Ranger_Waiting_MinutesInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 分钟`)
};

const ja_ranger_waiting_minutes = /** @type {(inputs: Ranger_Waiting_MinutesInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 分`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} min" |
* | * | "{count__number} min" |
*
* @param {Ranger_Waiting_MinutesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_waiting_minutes = /** @type {((inputs: Ranger_Waiting_MinutesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Waiting_MinutesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_waiting_minutes(inputs)
	if (locale === "de") return de_ranger_waiting_minutes(inputs)
	if (locale === "fr") return fr_ranger_waiting_minutes(inputs)
	if (locale === "it") return it_ranger_waiting_minutes(inputs)
	if (locale === "nl") return nl_ranger_waiting_minutes(inputs)
	if (locale === "pl") return pl_ranger_waiting_minutes(inputs)
	if (locale === "pt") return pt_ranger_waiting_minutes(inputs)
	if (locale === "ru") return ru_ranger_waiting_minutes(inputs)
	if (locale === "sv") return sv_ranger_waiting_minutes(inputs)
	if (locale === "tr") return tr_ranger_waiting_minutes(inputs)
	if (locale === "zh") return zh_ranger_waiting_minutes(inputs)
	if (locale === "ja") return ja_ranger_waiting_minutes(inputs)
	return en_ranger_waiting_minutes(inputs)
});
