/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ days: NonNullable<unknown> }} Tokens_Expiry_DaysInputs */

const en_tokens_expiry_days = /** @type {(inputs: Tokens_Expiry_DaysInputs) => LocalizedString} */ (i) => {const days__plural = registry.plural("en", i?.days, {});
	const days__number = registry.number("en", i?.days, {});
	if (days__plural === "one") return /** @type {LocalizedString} */ (`${days__number} day`);
	return /** @type {LocalizedString} */ (`${days__number} days`)
	
};

const es_tokens_expiry_days = /** @type {(inputs: Tokens_Expiry_DaysInputs) => LocalizedString} */ (i) => {const days__plural = registry.plural("es", i?.days, {});
	const days__number = registry.number("es", i?.days, {});
	if (days__plural === "one") return /** @type {LocalizedString} */ (`${days__number} día`);
	return /** @type {LocalizedString} */ (`${days__number} días`)
	
};

const de_tokens_expiry_days = /** @type {(inputs: Tokens_Expiry_DaysInputs) => LocalizedString} */ (i) => {const days__plural = registry.plural("de", i?.days, {});
	const days__number = registry.number("de", i?.days, {});
	if (days__plural === "one") return /** @type {LocalizedString} */ (`${days__number} Tag`);
	return /** @type {LocalizedString} */ (`${days__number} Tage`)
	
};

const fr_tokens_expiry_days = /** @type {(inputs: Tokens_Expiry_DaysInputs) => LocalizedString} */ (i) => {const days__plural = registry.plural("fr", i?.days, {});
	const days__number = registry.number("fr", i?.days, {});
	if (days__plural === "one") return /** @type {LocalizedString} */ (`${days__number} jour`);
	return /** @type {LocalizedString} */ (`${days__number} jours`)
	
};

const it_tokens_expiry_days = /** @type {(inputs: Tokens_Expiry_DaysInputs) => LocalizedString} */ (i) => {const days__plural = registry.plural("it", i?.days, {});
	const days__number = registry.number("it", i?.days, {});
	if (days__plural === "one") return /** @type {LocalizedString} */ (`${days__number} giorno`);
	return /** @type {LocalizedString} */ (`${days__number} giorni`)
	
};

const nl_tokens_expiry_days = /** @type {(inputs: Tokens_Expiry_DaysInputs) => LocalizedString} */ (i) => {const days__plural = registry.plural("nl", i?.days, {});
	const days__number = registry.number("nl", i?.days, {});
	if (days__plural === "one") return /** @type {LocalizedString} */ (`${days__number} dag`);
	return /** @type {LocalizedString} */ (`${days__number} dagen`)
	
};

const pl_tokens_expiry_days = /** @type {(inputs: Tokens_Expiry_DaysInputs) => LocalizedString} */ (i) => {const days__plural = registry.plural("pl", i?.days, {});
	const days__number = registry.number("pl", i?.days, {});
	if (days__plural === "one") return /** @type {LocalizedString} */ (`${days__number} dzień`);
	if (days__plural === "few") return /** @type {LocalizedString} */ (`${days__number} dni`);
	if (days__plural === "many") return /** @type {LocalizedString} */ (`${days__number} dni`);
	return /** @type {LocalizedString} */ (`${days__number} dnia`)
	
};

const pt_tokens_expiry_days = /** @type {(inputs: Tokens_Expiry_DaysInputs) => LocalizedString} */ (i) => {const days__plural = registry.plural("pt", i?.days, {});
	const days__number = registry.number("pt", i?.days, {});
	if (days__plural === "one") return /** @type {LocalizedString} */ (`${days__number} dia`);
	return /** @type {LocalizedString} */ (`${days__number} dias`)
	
};

const ru_tokens_expiry_days = /** @type {(inputs: Tokens_Expiry_DaysInputs) => LocalizedString} */ (i) => {const days__plural = registry.plural("ru", i?.days, {});
	const days__number = registry.number("ru", i?.days, {});
	if (days__plural === "one") return /** @type {LocalizedString} */ (`${days__number} день`);
	if (days__plural === "few") return /** @type {LocalizedString} */ (`${days__number} дня`);
	if (days__plural === "many") return /** @type {LocalizedString} */ (`${days__number} дней`);
	return /** @type {LocalizedString} */ (`${days__number} дня`)
	
};

const sv_tokens_expiry_days = /** @type {(inputs: Tokens_Expiry_DaysInputs) => LocalizedString} */ (i) => {const days__plural = registry.plural("sv", i?.days, {});
	const days__number = registry.number("sv", i?.days, {});
	if (days__plural === "one") return /** @type {LocalizedString} */ (`${days__number} dag`);
	return /** @type {LocalizedString} */ (`${days__number} dagar`)
	
};

const tr_tokens_expiry_days = /** @type {(inputs: Tokens_Expiry_DaysInputs) => LocalizedString} */ (i) => {const days__plural = registry.plural("tr", i?.days, {});
	const days__number = registry.number("tr", i?.days, {});
	if (days__plural === "one") return /** @type {LocalizedString} */ (`${days__number} gün`);
	return /** @type {LocalizedString} */ (`${days__number} gün`)
	
};

const zh_tokens_expiry_days = /** @type {(inputs: Tokens_Expiry_DaysInputs) => LocalizedString} */ (i) => {
	const days__plural = registry.plural("zh", i?.days, {});
	const days__number = registry.number("zh", i?.days, {});return /** @type {LocalizedString} */ (`${days__number} 天`)
};

const ja_tokens_expiry_days = /** @type {(inputs: Tokens_Expiry_DaysInputs) => LocalizedString} */ (i) => {
	const days__plural = registry.plural("ja", i?.days, {});
	const days__number = registry.number("ja", i?.days, {});return /** @type {LocalizedString} */ (`${days__number} 日`)
};

/**
* | days__plural | output |
* | --- | --- |
* | "one" | "{days__number} day" |
* | * | "{days__number} days" |
*
* @param {Tokens_Expiry_DaysInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const tokens_expiry_days = /** @type {((inputs: Tokens_Expiry_DaysInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tokens_Expiry_DaysInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_tokens_expiry_days(inputs)
	if (locale === "de") return de_tokens_expiry_days(inputs)
	if (locale === "fr") return fr_tokens_expiry_days(inputs)
	if (locale === "it") return it_tokens_expiry_days(inputs)
	if (locale === "nl") return nl_tokens_expiry_days(inputs)
	if (locale === "pl") return pl_tokens_expiry_days(inputs)
	if (locale === "pt") return pt_tokens_expiry_days(inputs)
	if (locale === "ru") return ru_tokens_expiry_days(inputs)
	if (locale === "sv") return sv_tokens_expiry_days(inputs)
	if (locale === "tr") return tr_tokens_expiry_days(inputs)
	if (locale === "zh") return zh_tokens_expiry_days(inputs)
	if (locale === "ja") return ja_tokens_expiry_days(inputs)
	return en_tokens_expiry_days(inputs)
});
