/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Builds_Meta_Title_ShortInputs */

const en_builds_meta_title_short = /** @type {(inputs: Builds_Meta_Title_ShortInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name}: SOTF build`)
};

const es_builds_meta_title_short = /** @type {(inputs: Builds_Meta_Title_ShortInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name}: build de SOTF`)
};

const de_builds_meta_title_short = /** @type {(inputs: Builds_Meta_Title_ShortInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name}: SOTF-Build`)
};

const fr_builds_meta_title_short = /** @type {(inputs: Builds_Meta_Title_ShortInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} : build SOTF`)
};

const it_builds_meta_title_short = /** @type {(inputs: Builds_Meta_Title_ShortInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name}: build di SOTF`)
};

const nl_builds_meta_title_short = /** @type {(inputs: Builds_Meta_Title_ShortInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name}: SOTF-build`)
};

const pl_builds_meta_title_short = /** @type {(inputs: Builds_Meta_Title_ShortInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name}: build do SOTF`)
};

const pt_builds_meta_title_short = /** @type {(inputs: Builds_Meta_Title_ShortInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name}: build de SOTF`)
};

const ru_builds_meta_title_short = /** @type {(inputs: Builds_Meta_Title_ShortInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name}: постройка SOTF`)
};

const sv_builds_meta_title_short = /** @type {(inputs: Builds_Meta_Title_ShortInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name}: SOTF-bygge`)
};

const tr_builds_meta_title_short = /** @type {(inputs: Builds_Meta_Title_ShortInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name}: SOTF yapısı`)
};

const zh_builds_meta_title_short = /** @type {(inputs: Builds_Meta_Title_ShortInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name}：SOTF 建筑`)
};

const ja_builds_meta_title_short = /** @type {(inputs: Builds_Meta_Title_ShortInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name}：SOTF 建築`)
};

/**
* | output |
* | --- |
* | "{name}: SOTF build" |
*
* @param {Builds_Meta_Title_ShortInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_meta_title_short = /** @type {((inputs: Builds_Meta_Title_ShortInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Meta_Title_ShortInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_meta_title_short(inputs)
	if (locale === "de") return de_builds_meta_title_short(inputs)
	if (locale === "fr") return fr_builds_meta_title_short(inputs)
	if (locale === "it") return it_builds_meta_title_short(inputs)
	if (locale === "nl") return nl_builds_meta_title_short(inputs)
	if (locale === "pl") return pl_builds_meta_title_short(inputs)
	if (locale === "pt") return pt_builds_meta_title_short(inputs)
	if (locale === "ru") return ru_builds_meta_title_short(inputs)
	if (locale === "sv") return sv_builds_meta_title_short(inputs)
	if (locale === "tr") return tr_builds_meta_title_short(inputs)
	if (locale === "zh") return zh_builds_meta_title_short(inputs)
	if (locale === "ja") return ja_builds_meta_title_short(inputs)
	return en_builds_meta_title_short(inputs)
});
