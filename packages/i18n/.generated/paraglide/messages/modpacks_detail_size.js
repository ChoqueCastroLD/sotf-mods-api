/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Detail_SizeInputs */

const en_modpacks_detail_size = /** @type {(inputs: Modpacks_Detail_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Total size`)
};

const es_modpacks_detail_size = /** @type {(inputs: Modpacks_Detail_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tamaño total`)
};

const de_modpacks_detail_size = /** @type {(inputs: Modpacks_Detail_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gesamtgröße`)
};

const fr_modpacks_detail_size = /** @type {(inputs: Modpacks_Detail_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Taille totale`)
};

const it_modpacks_detail_size = /** @type {(inputs: Modpacks_Detail_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dimensione totale`)
};

const nl_modpacks_detail_size = /** @type {(inputs: Modpacks_Detail_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Totale grootte`)
};

const pl_modpacks_detail_size = /** @type {(inputs: Modpacks_Detail_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Łączny rozmiar`)
};

const pt_modpacks_detail_size = /** @type {(inputs: Modpacks_Detail_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tamanho total`)
};

const ru_modpacks_detail_size = /** @type {(inputs: Modpacks_Detail_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Общий размер`)
};

const sv_modpacks_detail_size = /** @type {(inputs: Modpacks_Detail_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Total storlek`)
};

const tr_modpacks_detail_size = /** @type {(inputs: Modpacks_Detail_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toplam boyut`)
};

const zh_modpacks_detail_size = /** @type {(inputs: Modpacks_Detail_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`总大小`)
};

const ja_modpacks_detail_size = /** @type {(inputs: Modpacks_Detail_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`合計サイズ`)
};

/**
* | output |
* | --- |
* | "Total size" |
*
* @param {Modpacks_Detail_SizeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_detail_size = /** @type {((inputs?: Modpacks_Detail_SizeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Detail_SizeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_detail_size(inputs)
	if (locale === "de") return de_modpacks_detail_size(inputs)
	if (locale === "fr") return fr_modpacks_detail_size(inputs)
	if (locale === "it") return it_modpacks_detail_size(inputs)
	if (locale === "nl") return nl_modpacks_detail_size(inputs)
	if (locale === "pl") return pl_modpacks_detail_size(inputs)
	if (locale === "pt") return pt_modpacks_detail_size(inputs)
	if (locale === "ru") return ru_modpacks_detail_size(inputs)
	if (locale === "sv") return sv_modpacks_detail_size(inputs)
	if (locale === "tr") return tr_modpacks_detail_size(inputs)
	if (locale === "zh") return zh_modpacks_detail_size(inputs)
	if (locale === "ja") return ja_modpacks_detail_size(inputs)
	return en_modpacks_detail_size(inputs)
});
