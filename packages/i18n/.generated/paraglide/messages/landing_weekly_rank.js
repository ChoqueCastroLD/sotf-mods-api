/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ rank: NonNullable<unknown> }} Landing_Weekly_RankInputs */

const en_landing_weekly_rank = /** @type {(inputs: Landing_Weekly_RankInputs) => LocalizedString} */ (i) => {
	const rank__number = registry.number("en", i?.rank, {});return /** @type {LocalizedString} */ (`Rank ${rank__number}`)
};

const es_landing_weekly_rank = /** @type {(inputs: Landing_Weekly_RankInputs) => LocalizedString} */ (i) => {
	const rank__number = registry.number("es", i?.rank, {});return /** @type {LocalizedString} */ (`Puesto ${rank__number}`)
};

const de_landing_weekly_rank = /** @type {(inputs: Landing_Weekly_RankInputs) => LocalizedString} */ (i) => {
	const rank__number = registry.number("de", i?.rank, {});return /** @type {LocalizedString} */ (`Platz ${rank__number}`)
};

const fr_landing_weekly_rank = /** @type {(inputs: Landing_Weekly_RankInputs) => LocalizedString} */ (i) => {
	const rank__number = registry.number("fr", i?.rank, {});return /** @type {LocalizedString} */ (`Rang ${rank__number}`)
};

const it_landing_weekly_rank = /** @type {(inputs: Landing_Weekly_RankInputs) => LocalizedString} */ (i) => {
	const rank__number = registry.number("it", i?.rank, {});return /** @type {LocalizedString} */ (`Posizione ${rank__number}`)
};

const nl_landing_weekly_rank = /** @type {(inputs: Landing_Weekly_RankInputs) => LocalizedString} */ (i) => {
	const rank__number = registry.number("nl", i?.rank, {});return /** @type {LocalizedString} */ (`Plaats ${rank__number}`)
};

const pl_landing_weekly_rank = /** @type {(inputs: Landing_Weekly_RankInputs) => LocalizedString} */ (i) => {
	const rank__number = registry.number("pl", i?.rank, {});return /** @type {LocalizedString} */ (`Miejsce ${rank__number}`)
};

const pt_landing_weekly_rank = /** @type {(inputs: Landing_Weekly_RankInputs) => LocalizedString} */ (i) => {
	const rank__number = registry.number("pt", i?.rank, {});return /** @type {LocalizedString} */ (`Posição ${rank__number}`)
};

const ru_landing_weekly_rank = /** @type {(inputs: Landing_Weekly_RankInputs) => LocalizedString} */ (i) => {
	const rank__number = registry.number("ru", i?.rank, {});return /** @type {LocalizedString} */ (`Место ${rank__number}`)
};

const sv_landing_weekly_rank = /** @type {(inputs: Landing_Weekly_RankInputs) => LocalizedString} */ (i) => {
	const rank__number = registry.number("sv", i?.rank, {});return /** @type {LocalizedString} */ (`Plats ${rank__number}`)
};

const tr_landing_weekly_rank = /** @type {(inputs: Landing_Weekly_RankInputs) => LocalizedString} */ (i) => {
	const rank__number = registry.number("tr", i?.rank, {});return /** @type {LocalizedString} */ (`${rank__number}. sıra`)
};

const zh_landing_weekly_rank = /** @type {(inputs: Landing_Weekly_RankInputs) => LocalizedString} */ (i) => {
	const rank__number = registry.number("zh", i?.rank, {});return /** @type {LocalizedString} */ (`第 ${rank__number} 名`)
};

const ja_landing_weekly_rank = /** @type {(inputs: Landing_Weekly_RankInputs) => LocalizedString} */ (i) => {
	const rank__number = registry.number("ja", i?.rank, {});return /** @type {LocalizedString} */ (`${rank__number}位`)
};

/**
* | output |
* | --- |
* | "Rank {rank__number}" |
*
* @param {Landing_Weekly_RankInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_weekly_rank = /** @type {((inputs: Landing_Weekly_RankInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Weekly_RankInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_weekly_rank(inputs)
	if (locale === "de") return de_landing_weekly_rank(inputs)
	if (locale === "fr") return fr_landing_weekly_rank(inputs)
	if (locale === "it") return it_landing_weekly_rank(inputs)
	if (locale === "nl") return nl_landing_weekly_rank(inputs)
	if (locale === "pl") return pl_landing_weekly_rank(inputs)
	if (locale === "pt") return pt_landing_weekly_rank(inputs)
	if (locale === "ru") return ru_landing_weekly_rank(inputs)
	if (locale === "sv") return sv_landing_weekly_rank(inputs)
	if (locale === "tr") return tr_landing_weekly_rank(inputs)
	if (locale === "zh") return zh_landing_weekly_rank(inputs)
	if (locale === "ja") return ja_landing_weekly_rank(inputs)
	return en_landing_weekly_rank(inputs)
});
