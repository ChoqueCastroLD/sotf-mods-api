/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Tab_RangerInputs */

const en_console_tab_ranger = /** @type {(inputs: Console_Tab_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderation`)
};

const es_console_tab_ranger = /** @type {(inputs: Console_Tab_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderación`)
};

const de_console_tab_ranger = /** @type {(inputs: Console_Tab_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderation`)
};

const fr_console_tab_ranger = /** @type {(inputs: Console_Tab_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modération`)
};

const it_console_tab_ranger = /** @type {(inputs: Console_Tab_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderazione`)
};

const nl_console_tab_ranger = /** @type {(inputs: Console_Tab_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderatie`)
};

const pl_console_tab_ranger = /** @type {(inputs: Console_Tab_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderacja`)
};

const pt_console_tab_ranger = /** @type {(inputs: Console_Tab_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderação`)
};

const ru_console_tab_ranger = /** @type {(inputs: Console_Tab_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Модерация`)
};

const sv_console_tab_ranger = /** @type {(inputs: Console_Tab_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderering`)
};

const tr_console_tab_ranger = /** @type {(inputs: Console_Tab_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderasyon`)
};

const zh_console_tab_ranger = /** @type {(inputs: Console_Tab_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`审核`)
};

const ja_console_tab_ranger = /** @type {(inputs: Console_Tab_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`モデレーション`)
};

/**
* | output |
* | --- |
* | "Moderation" |
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
