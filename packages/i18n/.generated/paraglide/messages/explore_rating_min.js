/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ rating: NonNullable<unknown> }} Explore_Rating_MinInputs */

const en_explore_rating_min = /** @type {(inputs: Explore_Rating_MinInputs) => LocalizedString} */ (i) => {
	const rating__number = registry.number("en", i?.rating, {});return /** @type {LocalizedString} */ (`${rating__number}★ and up`)
};

const es_explore_rating_min = /** @type {(inputs: Explore_Rating_MinInputs) => LocalizedString} */ (i) => {
	const rating__number = registry.number("es", i?.rating, {});return /** @type {LocalizedString} */ (`${rating__number}★ o más`)
};

const de_explore_rating_min = /** @type {(inputs: Explore_Rating_MinInputs) => LocalizedString} */ (i) => {
	const rating__number = registry.number("de", i?.rating, {});return /** @type {LocalizedString} */ (`Ab ${rating__number}★`)
};

const fr_explore_rating_min = /** @type {(inputs: Explore_Rating_MinInputs) => LocalizedString} */ (i) => {
	const rating__number = registry.number("fr", i?.rating, {});return /** @type {LocalizedString} */ (`${rating__number} ★ et plus`)
};

const it_explore_rating_min = /** @type {(inputs: Explore_Rating_MinInputs) => LocalizedString} */ (i) => {
	const rating__number = registry.number("it", i?.rating, {});return /** @type {LocalizedString} */ (`${rating__number}★ o più`)
};

const nl_explore_rating_min = /** @type {(inputs: Explore_Rating_MinInputs) => LocalizedString} */ (i) => {
	const rating__number = registry.number("nl", i?.rating, {});return /** @type {LocalizedString} */ (`${rating__number}★ en hoger`)
};

const pl_explore_rating_min = /** @type {(inputs: Explore_Rating_MinInputs) => LocalizedString} */ (i) => {
	const rating__number = registry.number("pl", i?.rating, {});return /** @type {LocalizedString} */ (`Od ${rating__number}★`)
};

const pt_explore_rating_min = /** @type {(inputs: Explore_Rating_MinInputs) => LocalizedString} */ (i) => {
	const rating__number = registry.number("pt", i?.rating, {});return /** @type {LocalizedString} */ (`${rating__number}★ ou mais`)
};

const ru_explore_rating_min = /** @type {(inputs: Explore_Rating_MinInputs) => LocalizedString} */ (i) => {
	const rating__number = registry.number("ru", i?.rating, {});return /** @type {LocalizedString} */ (`От ${rating__number}★`)
};

const sv_explore_rating_min = /** @type {(inputs: Explore_Rating_MinInputs) => LocalizedString} */ (i) => {
	const rating__number = registry.number("sv", i?.rating, {});return /** @type {LocalizedString} */ (`${rating__number}★ och uppåt`)
};

const tr_explore_rating_min = /** @type {(inputs: Explore_Rating_MinInputs) => LocalizedString} */ (i) => {
	const rating__number = registry.number("tr", i?.rating, {});return /** @type {LocalizedString} */ (`${rating__number}★ ve üzeri`)
};

const zh_explore_rating_min = /** @type {(inputs: Explore_Rating_MinInputs) => LocalizedString} */ (i) => {
	const rating__number = registry.number("zh", i?.rating, {});return /** @type {LocalizedString} */ (`${rating__number}★ 及以上`)
};

const ja_explore_rating_min = /** @type {(inputs: Explore_Rating_MinInputs) => LocalizedString} */ (i) => {
	const rating__number = registry.number("ja", i?.rating, {});return /** @type {LocalizedString} */ (`${rating__number}★ 以上`)
};

/**
* | output |
* | --- |
* | "{rating__number}★ and up" |
*
* @param {Explore_Rating_MinInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_rating_min = /** @type {((inputs: Explore_Rating_MinInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Rating_MinInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_rating_min(inputs)
	if (locale === "de") return de_explore_rating_min(inputs)
	if (locale === "fr") return fr_explore_rating_min(inputs)
	if (locale === "it") return it_explore_rating_min(inputs)
	if (locale === "nl") return nl_explore_rating_min(inputs)
	if (locale === "pl") return pl_explore_rating_min(inputs)
	if (locale === "pt") return pt_explore_rating_min(inputs)
	if (locale === "ru") return ru_explore_rating_min(inputs)
	if (locale === "sv") return sv_explore_rating_min(inputs)
	if (locale === "tr") return tr_explore_rating_min(inputs)
	if (locale === "zh") return zh_explore_rating_min(inputs)
	if (locale === "ja") return ja_explore_rating_min(inputs)
	return en_explore_rating_min(inputs)
});
