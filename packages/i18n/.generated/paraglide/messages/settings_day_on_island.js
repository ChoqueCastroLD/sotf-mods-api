/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ day: NonNullable<unknown> }} Settings_Day_On_IslandInputs */

const en_settings_day_on_island = /** @type {(inputs: Settings_Day_On_IslandInputs) => LocalizedString} */ (i) => {
	const day__number = registry.number("en", i?.day, {});return /** @type {LocalizedString} */ (`Day ${day__number} on the island`)
};

const es_settings_day_on_island = /** @type {(inputs: Settings_Day_On_IslandInputs) => LocalizedString} */ (i) => {
	const day__number = registry.number("es", i?.day, {});return /** @type {LocalizedString} */ (`Día ${day__number} en la isla`)
};

const de_settings_day_on_island = /** @type {(inputs: Settings_Day_On_IslandInputs) => LocalizedString} */ (i) => {
	const day__number = registry.number("de", i?.day, {});return /** @type {LocalizedString} */ (`Tag ${day__number} auf der Insel`)
};

const fr_settings_day_on_island = /** @type {(inputs: Settings_Day_On_IslandInputs) => LocalizedString} */ (i) => {
	const day__number = registry.number("fr", i?.day, {});return /** @type {LocalizedString} */ (`Jour ${day__number} sur l’île`)
};

const it_settings_day_on_island = /** @type {(inputs: Settings_Day_On_IslandInputs) => LocalizedString} */ (i) => {
	const day__number = registry.number("it", i?.day, {});return /** @type {LocalizedString} */ (`Giorno ${day__number} sull’isola`)
};

const nl_settings_day_on_island = /** @type {(inputs: Settings_Day_On_IslandInputs) => LocalizedString} */ (i) => {
	const day__number = registry.number("nl", i?.day, {});return /** @type {LocalizedString} */ (`Dag ${day__number} op het eiland`)
};

const pl_settings_day_on_island = /** @type {(inputs: Settings_Day_On_IslandInputs) => LocalizedString} */ (i) => {
	const day__number = registry.number("pl", i?.day, {});return /** @type {LocalizedString} */ (`Dzień ${day__number} na wyspie`)
};

const pt_settings_day_on_island = /** @type {(inputs: Settings_Day_On_IslandInputs) => LocalizedString} */ (i) => {
	const day__number = registry.number("pt", i?.day, {});return /** @type {LocalizedString} */ (`Dia ${day__number} na ilha`)
};

const ru_settings_day_on_island = /** @type {(inputs: Settings_Day_On_IslandInputs) => LocalizedString} */ (i) => {
	const day__number = registry.number("ru", i?.day, {});return /** @type {LocalizedString} */ (`День ${day__number} на острове`)
};

const sv_settings_day_on_island = /** @type {(inputs: Settings_Day_On_IslandInputs) => LocalizedString} */ (i) => {
	const day__number = registry.number("sv", i?.day, {});return /** @type {LocalizedString} */ (`Dag ${day__number} på ön`)
};

const tr_settings_day_on_island = /** @type {(inputs: Settings_Day_On_IslandInputs) => LocalizedString} */ (i) => {
	const day__number = registry.number("tr", i?.day, {});return /** @type {LocalizedString} */ (`Adada ${day__number}. gün`)
};

const zh_settings_day_on_island = /** @type {(inputs: Settings_Day_On_IslandInputs) => LocalizedString} */ (i) => {
	const day__number = registry.number("zh", i?.day, {});return /** @type {LocalizedString} */ (`登岛第 ${day__number} 天`)
};

const ja_settings_day_on_island = /** @type {(inputs: Settings_Day_On_IslandInputs) => LocalizedString} */ (i) => {
	const day__number = registry.number("ja", i?.day, {});return /** @type {LocalizedString} */ (`島での ${day__number} 日目`)
};

/**
* | output |
* | --- |
* | "Day {day__number} on the island" |
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
