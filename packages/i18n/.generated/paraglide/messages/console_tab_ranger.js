/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Tab_RangerInputs */

const en_console_tab_ranger = /** @type {(inputs: Console_Tab_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ranger`)
};

const es_console_tab_ranger = /** @type {(inputs: Console_Tab_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guardas`)
};

const de_console_tab_ranger = /** @type {(inputs: Console_Tab_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ranger`)
};

const fr_console_tab_ranger = /** @type {(inputs: Console_Tab_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rangers`)
};

const it_console_tab_ranger = /** @type {(inputs: Console_Tab_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ranger`)
};

const nl_console_tab_ranger = /** @type {(inputs: Console_Tab_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ranger`)
};

const pl_console_tab_ranger = /** @type {(inputs: Console_Tab_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Strażnicy`)
};

const pt_console_tab_ranger = /** @type {(inputs: Console_Tab_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guardas`)
};

const ru_console_tab_ranger = /** @type {(inputs: Console_Tab_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Рейнджеры`)
};

const sv_console_tab_ranger = /** @type {(inputs: Console_Tab_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ranger`)
};

const tr_console_tab_ranger = /** @type {(inputs: Console_Tab_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Korucular`)
};

const zh_console_tab_ranger = /** @type {(inputs: Console_Tab_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`护林`)
};

const ja_console_tab_ranger = /** @type {(inputs: Console_Tab_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レンジャー`)
};

/**
* | output |
* | --- |
* | "Ranger" |
*
* @param {Console_Tab_RangerInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_tab_ranger = /** @type {((inputs?: Console_Tab_RangerInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Tab_RangerInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_tab_ranger(inputs)
	if (locale === "de") return de_console_tab_ranger(inputs)
	if (locale === "fr") return fr_console_tab_ranger(inputs)
	if (locale === "it") return it_console_tab_ranger(inputs)
	if (locale === "nl") return nl_console_tab_ranger(inputs)
	if (locale === "pl") return pl_console_tab_ranger(inputs)
	if (locale === "pt") return pt_console_tab_ranger(inputs)
	if (locale === "ru") return ru_console_tab_ranger(inputs)
	if (locale === "sv") return sv_console_tab_ranger(inputs)
	if (locale === "tr") return tr_console_tab_ranger(inputs)
	if (locale === "zh") return zh_console_tab_ranger(inputs)
	if (locale === "ja") return ja_console_tab_ranger(inputs)
	return en_console_tab_ranger(inputs)
});
