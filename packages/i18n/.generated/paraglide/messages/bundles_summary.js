/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ kit: NonNullable<unknown>, files: NonNullable<unknown>, size: NonNullable<unknown> }} Bundles_SummaryInputs */

const en_bundles_summary = /** @type {(inputs: Bundles_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.kit}: ${i?.files} files, ${i?.size}`)
};

const es_bundles_summary = /** @type {(inputs: Bundles_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.kit}: ${i?.files} archivos, ${i?.size}`)
};

const de_bundles_summary = /** @type {(inputs: Bundles_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.kit}: ${i?.files} Dateien, ${i?.size}`)
};

const fr_bundles_summary = /** @type {(inputs: Bundles_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.kit} : ${i?.files} fichiers, ${i?.size}`)
};

const it_bundles_summary = /** @type {(inputs: Bundles_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.kit}: ${i?.files} file, ${i?.size}`)
};

const nl_bundles_summary = /** @type {(inputs: Bundles_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.kit}: ${i?.files} bestanden, ${i?.size}`)
};

const pl_bundles_summary = /** @type {(inputs: Bundles_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.kit}: ${i?.files} plików, ${i?.size}`)
};

const pt_bundles_summary = /** @type {(inputs: Bundles_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.kit}: ${i?.files} ficheiros, ${i?.size}`)
};

const ru_bundles_summary = /** @type {(inputs: Bundles_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.kit}: файлов ${i?.files}, ${i?.size}`)
};

const sv_bundles_summary = /** @type {(inputs: Bundles_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.kit}: ${i?.files} filer, ${i?.size}`)
};

const tr_bundles_summary = /** @type {(inputs: Bundles_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.kit}: ${i?.files} dosya, ${i?.size}`)
};

const zh_bundles_summary = /** @type {(inputs: Bundles_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.kit}：${i?.files} 个文件，${i?.size}`)
};

const ja_bundles_summary = /** @type {(inputs: Bundles_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.kit}：${i?.files} ファイル、${i?.size}`)
};

/**
* | output |
* | --- |
* | "{kit}: {files} files, {size}" |
*
* @param {Bundles_SummaryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const bundles_summary = /** @type {((inputs: Bundles_SummaryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Bundles_SummaryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_bundles_summary(inputs)
	if (locale === "de") return de_bundles_summary(inputs)
	if (locale === "fr") return fr_bundles_summary(inputs)
	if (locale === "it") return it_bundles_summary(inputs)
	if (locale === "nl") return nl_bundles_summary(inputs)
	if (locale === "pl") return pl_bundles_summary(inputs)
	if (locale === "pt") return pt_bundles_summary(inputs)
	if (locale === "ru") return ru_bundles_summary(inputs)
	if (locale === "sv") return sv_bundles_summary(inputs)
	if (locale === "tr") return tr_bundles_summary(inputs)
	if (locale === "zh") return zh_bundles_summary(inputs)
	if (locale === "ja") return ja_bundles_summary(inputs)
	return en_bundles_summary(inputs)
});
