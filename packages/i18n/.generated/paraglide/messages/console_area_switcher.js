/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Area_SwitcherInputs */

const en_console_area_switcher = /** @type {(inputs: Console_Area_SwitcherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Console areas`)
};

const es_console_area_switcher = /** @type {(inputs: Console_Area_SwitcherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Áreas de la consola`)
};

const de_console_area_switcher = /** @type {(inputs: Console_Area_SwitcherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bereiche der Konsole`)
};

const fr_console_area_switcher = /** @type {(inputs: Console_Area_SwitcherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Espaces de la console`)
};

const it_console_area_switcher = /** @type {(inputs: Console_Area_SwitcherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aree della console`)
};

const nl_console_area_switcher = /** @type {(inputs: Console_Area_SwitcherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Onderdelen van de console`)
};

const pl_console_area_switcher = /** @type {(inputs: Console_Area_SwitcherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obszary konsoli`)
};

const pt_console_area_switcher = /** @type {(inputs: Console_Area_SwitcherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Áreas do console`)
};

const ru_console_area_switcher = /** @type {(inputs: Console_Area_SwitcherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Разделы консоли`)
};

const sv_console_area_switcher = /** @type {(inputs: Console_Area_SwitcherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Konsolens delar`)
};

const tr_console_area_switcher = /** @type {(inputs: Console_Area_SwitcherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Konsol bölümleri`)
};

const zh_console_area_switcher = /** @type {(inputs: Console_Area_SwitcherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`控制台区域`)
};

const ja_console_area_switcher = /** @type {(inputs: Console_Area_SwitcherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コンソールのエリア`)
};

/**
* | output |
* | --- |
* | "Console areas" |
*
* @param {Console_Area_SwitcherInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_area_switcher = /** @type {((inputs?: Console_Area_SwitcherInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Area_SwitcherInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_area_switcher(inputs)
	if (locale === "de") return de_console_area_switcher(inputs)
	if (locale === "fr") return fr_console_area_switcher(inputs)
	if (locale === "it") return it_console_area_switcher(inputs)
	if (locale === "nl") return nl_console_area_switcher(inputs)
	if (locale === "pl") return pl_console_area_switcher(inputs)
	if (locale === "pt") return pt_console_area_switcher(inputs)
	if (locale === "ru") return ru_console_area_switcher(inputs)
	if (locale === "sv") return sv_console_area_switcher(inputs)
	if (locale === "tr") return tr_console_area_switcher(inputs)
	if (locale === "zh") return zh_console_area_switcher(inputs)
	if (locale === "ja") return ja_console_area_switcher(inputs)
	return en_console_area_switcher(inputs)
});
