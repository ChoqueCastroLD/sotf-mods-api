/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Ranger_History_DaysInputs */

const en_ranger_history_days = /** @type {(inputs: Ranger_History_DaysInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} day`);
	return /** @type {LocalizedString} */ (`${count__number} days`)
	
};

const es_ranger_history_days = /** @type {(inputs: Ranger_History_DaysInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} día`);
	return /** @type {LocalizedString} */ (`${count__number} días`)
	
};

const de_ranger_history_days = /** @type {(inputs: Ranger_History_DaysInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Tag`);
	return /** @type {LocalizedString} */ (`${count__number} Tage`)
	
};

const fr_ranger_history_days = /** @type {(inputs: Ranger_History_DaysInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} jour`);
	return /** @type {LocalizedString} */ (`${count__number} jours`)
	
};

const it_ranger_history_days = /** @type {(inputs: Ranger_History_DaysInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} giorno`);
	return /** @type {LocalizedString} */ (`${count__number} giorni`)
	
};

const nl_ranger_history_days = /** @type {(inputs: Ranger_History_DaysInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} dag`);
	return /** @type {LocalizedString} */ (`${count__number} dagen`)
	
};

const pl_ranger_history_days = /** @type {(inputs: Ranger_History_DaysInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} dzień`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} dni`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} dni`);
	return /** @type {LocalizedString} */ (`${count__number} dnia`)
	
};

const pt_ranger_history_days = /** @type {(inputs: Ranger_History_DaysInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} dia`);
	return /** @type {LocalizedString} */ (`${count__number} dias`)
	
};

const ru_ranger_history_days = /** @type {(inputs: Ranger_History_DaysInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} день`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} дня`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} дней`);
	return /** @type {LocalizedString} */ (`${count__number} дня`)
	
};

const sv_ranger_history_days = /** @type {(inputs: Ranger_History_DaysInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} dag`);
	return /** @type {LocalizedString} */ (`${count__number} dagar`)
	
};

const tr_ranger_history_days = /** @type {(inputs: Ranger_History_DaysInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} gün`);
	return /** @type {LocalizedString} */ (`${count__number} gün`)
	
};

const zh_ranger_history_days = /** @type {(inputs: Ranger_History_DaysInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 天`)
};

const ja_ranger_history_days = /** @type {(inputs: Ranger_History_DaysInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 日`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} day" |
* | * | "{count__number} days" |
*
* @param {Ranger_History_DaysInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_history_days = /** @type {((inputs: Ranger_History_DaysInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_History_DaysInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_history_days(inputs)
	if (locale === "de") return de_ranger_history_days(inputs)
	if (locale === "fr") return fr_ranger_history_days(inputs)
	if (locale === "it") return it_ranger_history_days(inputs)
	if (locale === "nl") return nl_ranger_history_days(inputs)
	if (locale === "pl") return pl_ranger_history_days(inputs)
	if (locale === "pt") return pt_ranger_history_days(inputs)
	if (locale === "ru") return ru_ranger_history_days(inputs)
	if (locale === "sv") return sv_ranger_history_days(inputs)
	if (locale === "tr") return tr_ranger_history_days(inputs)
	if (locale === "zh") return zh_ranger_history_days(inputs)
	if (locale === "ja") return ja_ranger_history_days(inputs)
	return en_ranger_history_days(inputs)
});
