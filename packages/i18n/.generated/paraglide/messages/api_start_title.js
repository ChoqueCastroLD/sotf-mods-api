/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Api_Start_TitleInputs */

const en_api_start_title = /** @type {(inputs: Api_Start_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quick start`)
};

const es_api_start_title = /** @type {(inputs: Api_Start_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Primeros pasos`)
};

const de_api_start_title = /** @type {(inputs: Api_Start_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schnellstart`)
};

const fr_api_start_title = /** @type {(inputs: Api_Start_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Démarrage rapide`)
};

const it_api_start_title = /** @type {(inputs: Api_Start_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Per iniziare`)
};

const nl_api_start_title = /** @type {(inputs: Api_Start_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Snel starten`)
};

const pl_api_start_title = /** @type {(inputs: Api_Start_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szybki start`)
};

const pt_api_start_title = /** @type {(inputs: Api_Start_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Primeiros passos`)
};

const ru_api_start_title = /** @type {(inputs: Api_Start_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Быстрый старт`)
};

const sv_api_start_title = /** @type {(inputs: Api_Start_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kom igång`)
};

const tr_api_start_title = /** @type {(inputs: Api_Start_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hızlı başlangıç`)
};

const zh_api_start_title = /** @type {(inputs: Api_Start_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`快速开始`)
};

const ja_api_start_title = /** @type {(inputs: Api_Start_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`クイックスタート`)
};

/**
* | output |
* | --- |
* | "Quick start" |
*
* @param {Api_Start_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const api_start_title = /** @type {((inputs?: Api_Start_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Api_Start_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_api_start_title(inputs)
	if (locale === "de") return de_api_start_title(inputs)
	if (locale === "fr") return fr_api_start_title(inputs)
	if (locale === "it") return it_api_start_title(inputs)
	if (locale === "nl") return nl_api_start_title(inputs)
	if (locale === "pl") return pl_api_start_title(inputs)
	if (locale === "pt") return pt_api_start_title(inputs)
	if (locale === "ru") return ru_api_start_title(inputs)
	if (locale === "sv") return sv_api_start_title(inputs)
	if (locale === "tr") return tr_api_start_title(inputs)
	if (locale === "zh") return zh_api_start_title(inputs)
	if (locale === "ja") return ja_api_start_title(inputs)
	return en_api_start_title(inputs)
});
