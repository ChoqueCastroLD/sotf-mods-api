/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ author: NonNullable<unknown> }} Modpacks_ByInputs */

const en_modpacks_by = /** @type {(inputs: Modpacks_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`by ${i?.author}`)
};

const es_modpacks_by = /** @type {(inputs: Modpacks_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`de ${i?.author}`)
};

const de_modpacks_by = /** @type {(inputs: Modpacks_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`von ${i?.author}`)
};

const fr_modpacks_by = /** @type {(inputs: Modpacks_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`par ${i?.author}`)
};

const it_modpacks_by = /** @type {(inputs: Modpacks_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`di ${i?.author}`)
};

const nl_modpacks_by = /** @type {(inputs: Modpacks_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`door ${i?.author}`)
};

const pl_modpacks_by = /** @type {(inputs: Modpacks_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`autor: ${i?.author}`)
};

const pt_modpacks_by = /** @type {(inputs: Modpacks_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`por ${i?.author}`)
};

const ru_modpacks_by = /** @type {(inputs: Modpacks_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`автор: ${i?.author}`)
};

const sv_modpacks_by = /** @type {(inputs: Modpacks_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`av ${i?.author}`)
};

const tr_modpacks_by = /** @type {(inputs: Modpacks_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`yapan: ${i?.author}`)
};

const zh_modpacks_by = /** @type {(inputs: Modpacks_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`作者：${i?.author}`)
};

const ja_modpacks_by = /** @type {(inputs: Modpacks_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`作者: ${i?.author}`)
};

/**
* | output |
* | --- |
* | "by {author}" |
*
* @param {Modpacks_ByInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_by = /** @type {((inputs: Modpacks_ByInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_ByInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_by(inputs)
	if (locale === "de") return de_modpacks_by(inputs)
	if (locale === "fr") return fr_modpacks_by(inputs)
	if (locale === "it") return it_modpacks_by(inputs)
	if (locale === "nl") return nl_modpacks_by(inputs)
	if (locale === "pl") return pl_modpacks_by(inputs)
	if (locale === "pt") return pt_modpacks_by(inputs)
	if (locale === "ru") return ru_modpacks_by(inputs)
	if (locale === "sv") return sv_modpacks_by(inputs)
	if (locale === "tr") return tr_modpacks_by(inputs)
	if (locale === "zh") return zh_modpacks_by(inputs)
	if (locale === "ja") return ja_modpacks_by(inputs)
	return en_modpacks_by(inputs)
});
