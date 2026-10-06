/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ day: NonNullable<unknown> }} Settings_Day_On_IslandInputs */

const en_settings_day_on_island = /** @type {(inputs: Settings_Day_On_IslandInputs) => LocalizedString} */ (i) => {const day__plural = registry.plural("en", i?.day, {});
	const day__number = registry.number("en", i?.day, {});
	if (day__plural === "one") return /** @type {LocalizedString} */ (`${day__number} day ago`);
	return /** @type {LocalizedString} */ (`${day__number} days ago`)
	
};

const es_settings_day_on_island = /** @type {(inputs: Settings_Day_On_IslandInputs) => LocalizedString} */ (i) => {const day__plural = registry.plural("es", i?.day, {});
	const day__number = registry.number("es", i?.day, {});
	if (day__plural === "one") return /** @type {LocalizedString} */ (`hace ${day__number} día`);
	return /** @type {LocalizedString} */ (`hace ${day__number} días`)
	
};

const de_settings_day_on_island = /** @type {(inputs: Settings_Day_On_IslandInputs) => LocalizedString} */ (i) => {const day__plural = registry.plural("de", i?.day, {});
	const day__number = registry.number("de", i?.day, {});
	if (day__plural === "one") return /** @type {LocalizedString} */ (`vor ${day__number} Tag`);
	return /** @type {LocalizedString} */ (`vor ${day__number} Tagen`)
	
};

const fr_settings_day_on_island = /** @type {(inputs: Settings_Day_On_IslandInputs) => LocalizedString} */ (i) => {const day__plural = registry.plural("fr", i?.day, {});
	const day__number = registry.number("fr", i?.day, {});
	if (day__plural === "one") return /** @type {LocalizedString} */ (`il y a ${day__number} jour`);
	return /** @type {LocalizedString} */ (`il y a ${day__number} jours`)
	
};

const it_settings_day_on_island = /** @type {(inputs: Settings_Day_On_IslandInputs) => LocalizedString} */ (i) => {const day__plural = registry.plural("it", i?.day, {});
	const day__number = registry.number("it", i?.day, {});
	if (day__plural === "one") return /** @type {LocalizedString} */ (`${day__number} giorno fa`);
	return /** @type {LocalizedString} */ (`${day__number} giorni fa`)
	
};

const nl_settings_day_on_island = /** @type {(inputs: Settings_Day_On_IslandInputs) => LocalizedString} */ (i) => {const day__plural = registry.plural("nl", i?.day, {});
	const day__number = registry.number("nl", i?.day, {});
	if (day__plural === "one") return /** @type {LocalizedString} */ (`${day__number} dag geleden`);
	return /** @type {LocalizedString} */ (`${day__number} dagen geleden`)
	
};

const pl_settings_day_on_island = /** @type {(inputs: Settings_Day_On_IslandInputs) => LocalizedString} */ (i) => {const day__plural = registry.plural("pl", i?.day, {});
	const day__number = registry.number("pl", i?.day, {});
	if (day__plural === "one") return /** @type {LocalizedString} */ (`${day__number} dzień temu`);
	if (day__plural === "few") return /** @type {LocalizedString} */ (`${day__number} dni temu`);
	if (day__plural === "many") return /** @type {LocalizedString} */ (`${day__number} dni temu`);
	return /** @type {LocalizedString} */ (`${day__number} dnia temu`)
	
};

const pt_settings_day_on_island = /** @type {(inputs: Settings_Day_On_IslandInputs) => LocalizedString} */ (i) => {const day__plural = registry.plural("pt", i?.day, {});
	const day__number = registry.number("pt", i?.day, {});
	if (day__plural === "one") return /** @type {LocalizedString} */ (`há ${day__number} dia`);
	return /** @type {LocalizedString} */ (`há ${day__number} dias`)
	
};

const ru_settings_day_on_island = /** @type {(inputs: Settings_Day_On_IslandInputs) => LocalizedString} */ (i) => {const day__plural = registry.plural("ru", i?.day, {});
	const day__number = registry.number("ru", i?.day, {});
	if (day__plural === "one") return /** @type {LocalizedString} */ (`${day__number} день назад`);
	if (day__plural === "few") return /** @type {LocalizedString} */ (`${day__number} дня назад`);
	if (day__plural === "many") return /** @type {LocalizedString} */ (`${day__number} дней назад`);
	return /** @type {LocalizedString} */ (`${day__number} дня назад`)
	
};

const sv_settings_day_on_island = /** @type {(inputs: Settings_Day_On_IslandInputs) => LocalizedString} */ (i) => {const day__plural = registry.plural("sv", i?.day, {});
	const day__number = registry.number("sv", i?.day, {});
	if (day__plural === "one") return /** @type {LocalizedString} */ (`${day__number} dag sedan`);
	return /** @type {LocalizedString} */ (`${day__number} dagar sedan`)
	
};

const tr_settings_day_on_island = /** @type {(inputs: Settings_Day_On_IslandInputs) => LocalizedString} */ (i) => {const day__plural = registry.plural("tr", i?.day, {});
	const day__number = registry.number("tr", i?.day, {});
	if (day__plural === "one") return /** @type {LocalizedString} */ (`${day__number} gün önce`);
	return /** @type {LocalizedString} */ (`${day__number} gün önce`)
	
};

const zh_settings_day_on_island = /** @type {(inputs: Settings_Day_On_IslandInputs) => LocalizedString} */ (i) => {
	const day__plural = registry.plural("zh", i?.day, {});
	const day__number = registry.number("zh", i?.day, {});return /** @type {LocalizedString} */ (`${day__number} 天前`)
};

const ja_settings_day_on_island = /** @type {(inputs: Settings_Day_On_IslandInputs) => LocalizedString} */ (i) => {
	const day__plural = registry.plural("ja", i?.day, {});
	const day__number = registry.number("ja", i?.day, {});return /** @type {LocalizedString} */ (`${day__number} 日前`)
};

/**
* | day__plural | output |
* | --- | --- |
* | "one" | "{day__number} day ago" |
* | * | "{day__number} days ago" |
*
* @param {Settings_Day_On_IslandInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_day_on_island = /** @type {((inputs: Settings_Day_On_IslandInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Day_On_IslandInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_day_on_island(inputs)
	if (locale === "de") return de_settings_day_on_island(inputs)
	if (locale === "fr") return fr_settings_day_on_island(inputs)
	if (locale === "it") return it_settings_day_on_island(inputs)
	if (locale === "nl") return nl_settings_day_on_island(inputs)
	if (locale === "pl") return pl_settings_day_on_island(inputs)
	if (locale === "pt") return pt_settings_day_on_island(inputs)
	if (locale === "ru") return ru_settings_day_on_island(inputs)
	if (locale === "sv") return sv_settings_day_on_island(inputs)
	if (locale === "tr") return tr_settings_day_on_island(inputs)
	if (locale === "zh") return zh_settings_day_on_island(inputs)
	if (locale === "ja") return ja_settings_day_on_island(inputs)
	return en_settings_day_on_island(inputs)
});
