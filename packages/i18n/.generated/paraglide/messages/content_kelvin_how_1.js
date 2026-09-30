/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Kelvin_How_1Inputs */

const en_content_kelvin_how_1 = /** @type {(inputs: Content_Kelvin_How_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Install RedLoader and the KelvinSeek mod.`)
};

const es_content_kelvin_how_1 = /** @type {(inputs: Content_Kelvin_How_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instala RedLoader y el mod KelvinSeek.`)
};

const de_content_kelvin_how_1 = /** @type {(inputs: Content_Kelvin_How_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installiere RedLoader und den Mod KelvinSeek.`)
};

const fr_content_kelvin_how_1 = /** @type {(inputs: Content_Kelvin_How_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installez RedLoader et le mod KelvinSeek.`)
};

const it_content_kelvin_how_1 = /** @type {(inputs: Content_Kelvin_How_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installa RedLoader e la mod KelvinSeek.`)
};

const nl_content_kelvin_how_1 = /** @type {(inputs: Content_Kelvin_How_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installeer RedLoader en de mod KelvinSeek.`)
};

const pl_content_kelvin_how_1 = /** @type {(inputs: Content_Kelvin_How_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zainstaluj RedLoader i mod KelvinSeek.`)
};

const pt_content_kelvin_how_1 = /** @type {(inputs: Content_Kelvin_How_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instale o RedLoader e o mod KelvinSeek.`)
};

const ru_content_kelvin_how_1 = /** @type {(inputs: Content_Kelvin_How_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Установите RedLoader и мод KelvinSeek.`)
};

const sv_content_kelvin_how_1 = /** @type {(inputs: Content_Kelvin_How_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installera RedLoader och modden KelvinSeek.`)
};

const tr_content_kelvin_how_1 = /** @type {(inputs: Content_Kelvin_How_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader’ı ve KelvinSeek modunu kur.`)
};

const zh_content_kelvin_how_1 = /** @type {(inputs: Content_Kelvin_How_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`安装 RedLoader 和 KelvinSeek 模组。`)
};

const ja_content_kelvin_how_1 = /** @type {(inputs: Content_Kelvin_How_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader と KelvinSeek MOD をインストールします。`)
};

/**
* | output |
* | --- |
* | "Install RedLoader and the KelvinSeek mod." |
*
* @param {Content_Kelvin_How_1Inputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_kelvin_how_1 = /** @type {((inputs?: Content_Kelvin_How_1Inputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Kelvin_How_1Inputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_kelvin_how_1(inputs)
	if (locale === "de") return de_content_kelvin_how_1(inputs)
	if (locale === "fr") return fr_content_kelvin_how_1(inputs)
	if (locale === "it") return it_content_kelvin_how_1(inputs)
	if (locale === "nl") return nl_content_kelvin_how_1(inputs)
	if (locale === "pl") return pl_content_kelvin_how_1(inputs)
	if (locale === "pt") return pt_content_kelvin_how_1(inputs)
	if (locale === "ru") return ru_content_kelvin_how_1(inputs)
	if (locale === "sv") return sv_content_kelvin_how_1(inputs)
	if (locale === "tr") return tr_content_kelvin_how_1(inputs)
	if (locale === "zh") return zh_content_kelvin_how_1(inputs)
	if (locale === "ja") return ja_content_kelvin_how_1(inputs)
	return en_content_kelvin_how_1(inputs)
});
