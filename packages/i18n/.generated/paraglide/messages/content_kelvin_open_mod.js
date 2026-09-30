/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Kelvin_Open_ModInputs */

const en_content_kelvin_open_mod = /** @type {(inputs: Content_Kelvin_Open_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open the mod page`)
};

const es_content_kelvin_open_mod = /** @type {(inputs: Content_Kelvin_Open_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abrir la página del mod`)
};

const de_content_kelvin_open_mod = /** @type {(inputs: Content_Kelvin_Open_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod-Seite öffnen`)
};

const fr_content_kelvin_open_mod = /** @type {(inputs: Content_Kelvin_Open_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ouvrir la page du mod`)
};

const it_content_kelvin_open_mod = /** @type {(inputs: Content_Kelvin_Open_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apri la pagina della mod`)
};

const nl_content_kelvin_open_mod = /** @type {(inputs: Content_Kelvin_Open_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpagina openen`)
};

const pl_content_kelvin_open_mod = /** @type {(inputs: Content_Kelvin_Open_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otwórz stronę moda`)
};

const pt_content_kelvin_open_mod = /** @type {(inputs: Content_Kelvin_Open_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abrir a página do mod`)
};

const ru_content_kelvin_open_mod = /** @type {(inputs: Content_Kelvin_Open_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Открыть страницу мода`)
};

const sv_content_kelvin_open_mod = /** @type {(inputs: Content_Kelvin_Open_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öppna moddsidan`)
};

const tr_content_kelvin_open_mod = /** @type {(inputs: Content_Kelvin_Open_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod sayfasını aç`)
};

const zh_content_kelvin_open_mod = /** @type {(inputs: Content_Kelvin_Open_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`打开模组页面`)
};

const ja_content_kelvin_open_mod = /** @type {(inputs: Content_Kelvin_Open_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD のページを開く`)
};

/**
* | output |
* | --- |
* | "Open the mod page" |
*
* @param {Content_Kelvin_Open_ModInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_kelvin_open_mod = /** @type {((inputs?: Content_Kelvin_Open_ModInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Kelvin_Open_ModInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_kelvin_open_mod(inputs)
	if (locale === "de") return de_content_kelvin_open_mod(inputs)
	if (locale === "fr") return fr_content_kelvin_open_mod(inputs)
	if (locale === "it") return it_content_kelvin_open_mod(inputs)
	if (locale === "nl") return nl_content_kelvin_open_mod(inputs)
	if (locale === "pl") return pl_content_kelvin_open_mod(inputs)
	if (locale === "pt") return pt_content_kelvin_open_mod(inputs)
	if (locale === "ru") return ru_content_kelvin_open_mod(inputs)
	if (locale === "sv") return sv_content_kelvin_open_mod(inputs)
	if (locale === "tr") return tr_content_kelvin_open_mod(inputs)
	if (locale === "zh") return zh_content_kelvin_open_mod(inputs)
	if (locale === "ja") return ja_content_kelvin_open_mod(inputs)
	return en_content_kelvin_open_mod(inputs)
});
