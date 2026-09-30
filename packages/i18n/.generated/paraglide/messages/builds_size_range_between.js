/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ min: NonNullable<unknown>, max: NonNullable<unknown> }} Builds_Size_Range_BetweenInputs */

const en_builds_size_range_between = /** @type {(inputs: Builds_Size_Range_BetweenInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.min} to ${i?.max} pieces`)
};

const es_builds_size_range_between = /** @type {(inputs: Builds_Size_Range_BetweenInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`De ${i?.min} a ${i?.max} piezas`)
};

const de_builds_size_range_between = /** @type {(inputs: Builds_Size_Range_BetweenInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.min} bis ${i?.max} Teile`)
};

const fr_builds_size_range_between = /** @type {(inputs: Builds_Size_Range_BetweenInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`De ${i?.min} à ${i?.max} pièces`)
};

const it_builds_size_range_between = /** @type {(inputs: Builds_Size_Range_BetweenInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Da ${i?.min} a ${i?.max} pezzi`)
};

const nl_builds_size_range_between = /** @type {(inputs: Builds_Size_Range_BetweenInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.min} tot ${i?.max} onderdelen`)
};

const pl_builds_size_range_between = /** @type {(inputs: Builds_Size_Range_BetweenInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Od ${i?.min} do ${i?.max} elementów`)
};

const pt_builds_size_range_between = /** @type {(inputs: Builds_Size_Range_BetweenInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`De ${i?.min} a ${i?.max} peças`)
};

const ru_builds_size_range_between = /** @type {(inputs: Builds_Size_Range_BetweenInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`От ${i?.min} до ${i?.max} деталей`)
};

const sv_builds_size_range_between = /** @type {(inputs: Builds_Size_Range_BetweenInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.min} till ${i?.max} delar`)
};

const tr_builds_size_range_between = /** @type {(inputs: Builds_Size_Range_BetweenInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.min} ile ${i?.max} parça arası`)
};

const zh_builds_size_range_between = /** @type {(inputs: Builds_Size_Range_BetweenInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.min} 至 ${i?.max} 个部件`)
};

const ja_builds_size_range_between = /** @type {(inputs: Builds_Size_Range_BetweenInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.min}〜${i?.max} パーツ`)
};

/**
* | output |
* | --- |
* | "{min} to {max} pieces" |
*
* @param {Builds_Size_Range_BetweenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_size_range_between = /** @type {((inputs: Builds_Size_Range_BetweenInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Size_Range_BetweenInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_size_range_between(inputs)
	if (locale === "de") return de_builds_size_range_between(inputs)
	if (locale === "fr") return fr_builds_size_range_between(inputs)
	if (locale === "it") return it_builds_size_range_between(inputs)
	if (locale === "nl") return nl_builds_size_range_between(inputs)
	if (locale === "pl") return pl_builds_size_range_between(inputs)
	if (locale === "pt") return pt_builds_size_range_between(inputs)
	if (locale === "ru") return ru_builds_size_range_between(inputs)
	if (locale === "sv") return sv_builds_size_range_between(inputs)
	if (locale === "tr") return tr_builds_size_range_between(inputs)
	if (locale === "zh") return zh_builds_size_range_between(inputs)
	if (locale === "ja") return ja_builds_size_range_between(inputs)
	return en_builds_size_range_between(inputs)
});
