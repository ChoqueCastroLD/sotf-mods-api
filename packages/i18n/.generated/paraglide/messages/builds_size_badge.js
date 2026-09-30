/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ size: NonNullable<unknown> }} Builds_Size_BadgeInputs */

const en_builds_size_badge = /** @type {(inputs: Builds_Size_BadgeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Size ${i?.size}`)
};

const es_builds_size_badge = /** @type {(inputs: Builds_Size_BadgeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tamaño ${i?.size}`)
};

const de_builds_size_badge = /** @type {(inputs: Builds_Size_BadgeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Größe ${i?.size}`)
};

const fr_builds_size_badge = /** @type {(inputs: Builds_Size_BadgeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Taille ${i?.size}`)
};

const it_builds_size_badge = /** @type {(inputs: Builds_Size_BadgeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Taglia ${i?.size}`)
};

const nl_builds_size_badge = /** @type {(inputs: Builds_Size_BadgeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Grootte ${i?.size}`)
};

const pl_builds_size_badge = /** @type {(inputs: Builds_Size_BadgeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Rozmiar ${i?.size}`)
};

const pt_builds_size_badge = /** @type {(inputs: Builds_Size_BadgeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tamanho ${i?.size}`)
};

const ru_builds_size_badge = /** @type {(inputs: Builds_Size_BadgeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Размер ${i?.size}`)
};

const sv_builds_size_badge = /** @type {(inputs: Builds_Size_BadgeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Storlek ${i?.size}`)
};

const tr_builds_size_badge = /** @type {(inputs: Builds_Size_BadgeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Boyut ${i?.size}`)
};

const zh_builds_size_badge = /** @type {(inputs: Builds_Size_BadgeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`尺寸 ${i?.size}`)
};

const ja_builds_size_badge = /** @type {(inputs: Builds_Size_BadgeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`サイズ ${i?.size}`)
};

/**
* | output |
* | --- |
* | "Size {size}" |
*
* @param {Builds_Size_BadgeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_size_badge = /** @type {((inputs: Builds_Size_BadgeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Size_BadgeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_size_badge(inputs)
	if (locale === "de") return de_builds_size_badge(inputs)
	if (locale === "fr") return fr_builds_size_badge(inputs)
	if (locale === "it") return it_builds_size_badge(inputs)
	if (locale === "nl") return nl_builds_size_badge(inputs)
	if (locale === "pl") return pl_builds_size_badge(inputs)
	if (locale === "pt") return pt_builds_size_badge(inputs)
	if (locale === "ru") return ru_builds_size_badge(inputs)
	if (locale === "sv") return sv_builds_size_badge(inputs)
	if (locale === "tr") return tr_builds_size_badge(inputs)
	if (locale === "zh") return zh_builds_size_badge(inputs)
	if (locale === "ja") return ja_builds_size_badge(inputs)
	return en_builds_size_badge(inputs)
});
