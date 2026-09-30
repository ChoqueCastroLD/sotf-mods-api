/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown>, display: NonNullable<unknown> }} Ranger_Waiting_DaysInputs */

const en_ranger_waiting_days = /** @type {(inputs: Ranger_Waiting_DaysInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} day`);
	return /** @type {LocalizedString} */ (`${i?.display} days`)
	
};

const es_ranger_waiting_days = /** @type {(inputs: Ranger_Waiting_DaysInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} día`);
	return /** @type {LocalizedString} */ (`${i?.display} días`)
	
};

const de_ranger_waiting_days = /** @type {(inputs: Ranger_Waiting_DaysInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} Tag`);
	return /** @type {LocalizedString} */ (`${i?.display} Tage`)
	
};

const fr_ranger_waiting_days = /** @type {(inputs: Ranger_Waiting_DaysInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} jour`);
	return /** @type {LocalizedString} */ (`${i?.display} jours`)
	
};

const it_ranger_waiting_days = /** @type {(inputs: Ranger_Waiting_DaysInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} giorno`);
	return /** @type {LocalizedString} */ (`${i?.display} giorni`)
	
};

const nl_ranger_waiting_days = /** @type {(inputs: Ranger_Waiting_DaysInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} dag`);
	return /** @type {LocalizedString} */ (`${i?.display} dagen`)
	
};

const pl_ranger_waiting_days = /** @type {(inputs: Ranger_Waiting_DaysInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} dzień`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${i?.display} dni`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${i?.display} dni`);
	return /** @type {LocalizedString} */ (`${i?.display} dnia`)
	
};

const pt_ranger_waiting_days = /** @type {(inputs: Ranger_Waiting_DaysInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} dia`);
	return /** @type {LocalizedString} */ (`${i?.display} dias`)
	
};

const ru_ranger_waiting_days = /** @type {(inputs: Ranger_Waiting_DaysInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} день`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${i?.display} дня`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${i?.display} дней`);
	return /** @type {LocalizedString} */ (`${i?.display} дня`)
	
};

const sv_ranger_waiting_days = /** @type {(inputs: Ranger_Waiting_DaysInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} dag`);
	return /** @type {LocalizedString} */ (`${i?.display} dagar`)
	
};

const tr_ranger_waiting_days = /** @type {(inputs: Ranger_Waiting_DaysInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} gün`);
	return /** @type {LocalizedString} */ (`${i?.display} gün`)
	
};

const zh_ranger_waiting_days = /** @type {(inputs: Ranger_Waiting_DaysInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});return /** @type {LocalizedString} */ (`${i?.display} 天`)
};

const ja_ranger_waiting_days = /** @type {(inputs: Ranger_Waiting_DaysInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});return /** @type {LocalizedString} */ (`${i?.display} 日`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{display} day" |
* | * | "{display} days" |
*
* @param {Ranger_Waiting_DaysInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_waiting_days = /** @type {((inputs: Ranger_Waiting_DaysInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Waiting_DaysInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_waiting_days(inputs)
	if (locale === "de") return de_ranger_waiting_days(inputs)
	if (locale === "fr") return fr_ranger_waiting_days(inputs)
	if (locale === "it") return it_ranger_waiting_days(inputs)
	if (locale === "nl") return nl_ranger_waiting_days(inputs)
	if (locale === "pl") return pl_ranger_waiting_days(inputs)
	if (locale === "pt") return pt_ranger_waiting_days(inputs)
	if (locale === "ru") return ru_ranger_waiting_days(inputs)
	if (locale === "sv") return sv_ranger_waiting_days(inputs)
	if (locale === "tr") return tr_ranger_waiting_days(inputs)
	if (locale === "zh") return zh_ranger_waiting_days(inputs)
	if (locale === "ja") return ja_ranger_waiting_days(inputs)
	return en_ranger_waiting_days(inputs)
});
