/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Builds_Meta_TitleInputs */

const en_builds_meta_title = /** @type {(inputs: Builds_Meta_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name}: SOTF build (BuildShare)`)
};

const es_builds_meta_title = /** @type {(inputs: Builds_Meta_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name}: build de SOTF (BuildShare)`)
};

const de_builds_meta_title = /** @type {(inputs: Builds_Meta_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name}: SOTF-Build (BuildShare)`)
};

const fr_builds_meta_title = /** @type {(inputs: Builds_Meta_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} : build SOTF (BuildShare)`)
};

const it_builds_meta_title = /** @type {(inputs: Builds_Meta_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name}: build di SOTF (BuildShare)`)
};

const nl_builds_meta_title = /** @type {(inputs: Builds_Meta_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name}: SOTF-build (BuildShare)`)
};

const pl_builds_meta_title = /** @type {(inputs: Builds_Meta_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name}: build do SOTF (BuildShare)`)
};

const pt_builds_meta_title = /** @type {(inputs: Builds_Meta_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name}: build de SOTF (BuildShare)`)
};

const ru_builds_meta_title = /** @type {(inputs: Builds_Meta_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name}: постройка SOTF (BuildShare)`)
};

const sv_builds_meta_title = /** @type {(inputs: Builds_Meta_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name}: SOTF-bygge (BuildShare)`)
};

const tr_builds_meta_title = /** @type {(inputs: Builds_Meta_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name}: SOTF yapısı (BuildShare)`)
};

const zh_builds_meta_title = /** @type {(inputs: Builds_Meta_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name}：SOTF 建筑（BuildShare）`)
};

const ja_builds_meta_title = /** @type {(inputs: Builds_Meta_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name}：SOTF 建築（BuildShare）`)
};

/**
* | output |
* | --- |
* | "{name}: SOTF build (BuildShare)" |
*
* @param {Builds_Meta_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_meta_title = /** @type {((inputs: Builds_Meta_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Meta_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_meta_title(inputs)
	if (locale === "de") return de_builds_meta_title(inputs)
	if (locale === "fr") return fr_builds_meta_title(inputs)
	if (locale === "it") return it_builds_meta_title(inputs)
	if (locale === "nl") return nl_builds_meta_title(inputs)
	if (locale === "pl") return pl_builds_meta_title(inputs)
	if (locale === "pt") return pt_builds_meta_title(inputs)
	if (locale === "ru") return ru_builds_meta_title(inputs)
	if (locale === "sv") return sv_builds_meta_title(inputs)
	if (locale === "tr") return tr_builds_meta_title(inputs)
	if (locale === "zh") return zh_builds_meta_title(inputs)
	if (locale === "ja") return ja_builds_meta_title(inputs)
	return en_builds_meta_title(inputs)
});
