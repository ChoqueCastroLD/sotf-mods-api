/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ ratio: NonNullable<unknown> }} Ranger_Checks_RatioInputs */

const en_ranger_checks_ratio = /** @type {(inputs: Ranger_Checks_RatioInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Compression ratio ${i?.ratio}`)
};

const es_ranger_checks_ratio = /** @type {(inputs: Ranger_Checks_RatioInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ratio de compresión ${i?.ratio}`)
};

const de_ranger_checks_ratio = /** @type {(inputs: Ranger_Checks_RatioInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Kompressionsverhältnis ${i?.ratio}`)
};

const fr_ranger_checks_ratio = /** @type {(inputs: Ranger_Checks_RatioInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Taux de compression ${i?.ratio}`)
};

const it_ranger_checks_ratio = /** @type {(inputs: Ranger_Checks_RatioInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Rapporto di compressione ${i?.ratio}`)
};

const nl_ranger_checks_ratio = /** @type {(inputs: Ranger_Checks_RatioInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Compressieverhouding ${i?.ratio}`)
};

const pl_ranger_checks_ratio = /** @type {(inputs: Ranger_Checks_RatioInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Współczynnik kompresji ${i?.ratio}`)
};

const pt_ranger_checks_ratio = /** @type {(inputs: Ranger_Checks_RatioInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Taxa de compressão ${i?.ratio}`)
};

const ru_ranger_checks_ratio = /** @type {(inputs: Ranger_Checks_RatioInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Степень сжатия ${i?.ratio}`)
};

const sv_ranger_checks_ratio = /** @type {(inputs: Ranger_Checks_RatioInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Komprimeringsgrad ${i?.ratio}`)
};

const tr_ranger_checks_ratio = /** @type {(inputs: Ranger_Checks_RatioInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sıkıştırma oranı ${i?.ratio}`)
};

const zh_ranger_checks_ratio = /** @type {(inputs: Ranger_Checks_RatioInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`压缩比 ${i?.ratio}`)
};

const ja_ranger_checks_ratio = /** @type {(inputs: Ranger_Checks_RatioInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`圧縮率 ${i?.ratio}`)
};

/**
* | output |
* | --- |
* | "Compression ratio {ratio}" |
*
* @param {Ranger_Checks_RatioInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_checks_ratio = /** @type {((inputs: Ranger_Checks_RatioInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Checks_RatioInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_checks_ratio(inputs)
	if (locale === "de") return de_ranger_checks_ratio(inputs)
	if (locale === "fr") return fr_ranger_checks_ratio(inputs)
	if (locale === "it") return it_ranger_checks_ratio(inputs)
	if (locale === "nl") return nl_ranger_checks_ratio(inputs)
	if (locale === "pl") return pl_ranger_checks_ratio(inputs)
	if (locale === "pt") return pt_ranger_checks_ratio(inputs)
	if (locale === "ru") return ru_ranger_checks_ratio(inputs)
	if (locale === "sv") return sv_ranger_checks_ratio(inputs)
	if (locale === "tr") return tr_ranger_checks_ratio(inputs)
	if (locale === "zh") return zh_ranger_checks_ratio(inputs)
	if (locale === "ja") return ja_ranger_checks_ratio(inputs)
	return en_ranger_checks_ratio(inputs)
});
