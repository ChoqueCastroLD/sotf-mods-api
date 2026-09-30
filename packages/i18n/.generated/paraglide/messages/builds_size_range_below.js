/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ max: NonNullable<unknown> }} Builds_Size_Range_BelowInputs */

const en_builds_size_range_below = /** @type {(inputs: Builds_Size_Range_BelowInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Fewer than ${i?.max} pieces`)
};

const es_builds_size_range_below = /** @type {(inputs: Builds_Size_Range_BelowInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Menos de ${i?.max} piezas`)
};

const de_builds_size_range_below = /** @type {(inputs: Builds_Size_Range_BelowInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Weniger als ${i?.max} Teile`)
};

const fr_builds_size_range_below = /** @type {(inputs: Builds_Size_Range_BelowInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Moins de ${i?.max} pièces`)
};

const it_builds_size_range_below = /** @type {(inputs: Builds_Size_Range_BelowInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Meno di ${i?.max} pezzi`)
};

const nl_builds_size_range_below = /** @type {(inputs: Builds_Size_Range_BelowInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Minder dan ${i?.max} onderdelen`)
};

const pl_builds_size_range_below = /** @type {(inputs: Builds_Size_Range_BelowInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mniej niż ${i?.max} elementów`)
};

const pt_builds_size_range_below = /** @type {(inputs: Builds_Size_Range_BelowInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Menos de ${i?.max} peças`)
};

const ru_builds_size_range_below = /** @type {(inputs: Builds_Size_Range_BelowInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Меньше ${i?.max} деталей`)
};

const sv_builds_size_range_below = /** @type {(inputs: Builds_Size_Range_BelowInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Färre än ${i?.max} delar`)
};

const tr_builds_size_range_below = /** @type {(inputs: Builds_Size_Range_BelowInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.max} parçadan az`)
};

const zh_builds_size_range_below = /** @type {(inputs: Builds_Size_Range_BelowInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`少于 ${i?.max} 个部件`)
};

const ja_builds_size_range_below = /** @type {(inputs: Builds_Size_Range_BelowInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.max} パーツ未満`)
};

/**
* | output |
* | --- |
* | "Fewer than {max} pieces" |
*
* @param {Builds_Size_Range_BelowInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_size_range_below = /** @type {((inputs: Builds_Size_Range_BelowInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Size_Range_BelowInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_size_range_below(inputs)
	if (locale === "de") return de_builds_size_range_below(inputs)
	if (locale === "fr") return fr_builds_size_range_below(inputs)
	if (locale === "it") return it_builds_size_range_below(inputs)
	if (locale === "nl") return nl_builds_size_range_below(inputs)
	if (locale === "pl") return pl_builds_size_range_below(inputs)
	if (locale === "pt") return pt_builds_size_range_below(inputs)
	if (locale === "ru") return ru_builds_size_range_below(inputs)
	if (locale === "sv") return sv_builds_size_range_below(inputs)
	if (locale === "tr") return tr_builds_size_range_below(inputs)
	if (locale === "zh") return zh_builds_size_range_below(inputs)
	if (locale === "ja") return ja_builds_size_range_below(inputs)
	return en_builds_size_range_below(inputs)
});
