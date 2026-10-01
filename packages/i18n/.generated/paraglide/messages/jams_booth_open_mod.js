/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Booth_Open_ModInputs */

const en_jams_booth_open_mod = /** @type {(inputs: Jams_Booth_Open_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open the mod page`)
};

const es_jams_booth_open_mod = /** @type {(inputs: Jams_Booth_Open_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abrir la página del mod`)
};

const de_jams_booth_open_mod = /** @type {(inputs: Jams_Booth_Open_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod-Seite öffnen`)
};

const fr_jams_booth_open_mod = /** @type {(inputs: Jams_Booth_Open_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ouvrir la page du mod`)
};

const it_jams_booth_open_mod = /** @type {(inputs: Jams_Booth_Open_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apri la pagina del mod`)
};

const nl_jams_booth_open_mod = /** @type {(inputs: Jams_Booth_Open_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open de modpagina`)
};

const pl_jams_booth_open_mod = /** @type {(inputs: Jams_Booth_Open_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otwórz stronę moda`)
};

const pt_jams_booth_open_mod = /** @type {(inputs: Jams_Booth_Open_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abrir a página do mod`)
};

const ru_jams_booth_open_mod = /** @type {(inputs: Jams_Booth_Open_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Открыть страницу мода`)
};

const sv_jams_booth_open_mod = /** @type {(inputs: Jams_Booth_Open_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öppna modsidan`)
};

const tr_jams_booth_open_mod = /** @type {(inputs: Jams_Booth_Open_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod sayfasını aç`)
};

const zh_jams_booth_open_mod = /** @type {(inputs: Jams_Booth_Open_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`打开模组页面`)
};

const ja_jams_booth_open_mod = /** @type {(inputs: Jams_Booth_Open_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MODのページを開く`)
};

/**
* | output |
* | --- |
* | "Open the mod page" |
*
* @param {Jams_Booth_Open_ModInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_booth_open_mod = /** @type {((inputs?: Jams_Booth_Open_ModInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Booth_Open_ModInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_booth_open_mod(inputs)
	if (locale === "de") return de_jams_booth_open_mod(inputs)
	if (locale === "fr") return fr_jams_booth_open_mod(inputs)
	if (locale === "it") return it_jams_booth_open_mod(inputs)
	if (locale === "nl") return nl_jams_booth_open_mod(inputs)
	if (locale === "pl") return pl_jams_booth_open_mod(inputs)
	if (locale === "pt") return pt_jams_booth_open_mod(inputs)
	if (locale === "ru") return ru_jams_booth_open_mod(inputs)
	if (locale === "sv") return sv_jams_booth_open_mod(inputs)
	if (locale === "tr") return tr_jams_booth_open_mod(inputs)
	if (locale === "zh") return zh_jams_booth_open_mod(inputs)
	if (locale === "ja") return ja_jams_booth_open_mod(inputs)
	return en_jams_booth_open_mod(inputs)
});
