/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Spec_SizeInputs */

const en_builds_spec_size = /** @type {(inputs: Builds_Spec_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Size`)
};

const es_builds_spec_size = /** @type {(inputs: Builds_Spec_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tamaño`)
};

const de_builds_spec_size = /** @type {(inputs: Builds_Spec_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Größe`)
};

const fr_builds_spec_size = /** @type {(inputs: Builds_Spec_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Taille`)
};

const it_builds_spec_size = /** @type {(inputs: Builds_Spec_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Taglia`)
};

const nl_builds_spec_size = /** @type {(inputs: Builds_Spec_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Grootte`)
};

const pl_builds_spec_size = /** @type {(inputs: Builds_Spec_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rozmiar`)
};

const pt_builds_spec_size = /** @type {(inputs: Builds_Spec_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tamanho`)
};

const ru_builds_spec_size = /** @type {(inputs: Builds_Spec_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Размер`)
};

const sv_builds_spec_size = /** @type {(inputs: Builds_Spec_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Storlek`)
};

const tr_builds_spec_size = /** @type {(inputs: Builds_Spec_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Boyut`)
};

const zh_builds_spec_size = /** @type {(inputs: Builds_Spec_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`尺寸`)
};

const ja_builds_spec_size = /** @type {(inputs: Builds_Spec_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`サイズ`)
};

/**
* | output |
* | --- |
* | "Size" |
*
* @param {Builds_Spec_SizeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_spec_size = /** @type {((inputs?: Builds_Spec_SizeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Spec_SizeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_spec_size(inputs)
	if (locale === "de") return de_builds_spec_size(inputs)
	if (locale === "fr") return fr_builds_spec_size(inputs)
	if (locale === "it") return it_builds_spec_size(inputs)
	if (locale === "nl") return nl_builds_spec_size(inputs)
	if (locale === "pl") return pl_builds_spec_size(inputs)
	if (locale === "pt") return pt_builds_spec_size(inputs)
	if (locale === "ru") return ru_builds_spec_size(inputs)
	if (locale === "sv") return sv_builds_spec_size(inputs)
	if (locale === "tr") return tr_builds_spec_size(inputs)
	if (locale === "zh") return zh_builds_spec_size(inputs)
	if (locale === "ja") return ja_builds_spec_size(inputs)
	return en_builds_spec_size(inputs)
});
