/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Empty_TitleInputs */

const en_explore_empty_title = /** @type {(inputs: Explore_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nothing on this trail`)
};

const es_explore_empty_title = /** @type {(inputs: Explore_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nada por este sendero`)
};

const de_explore_empty_title = /** @type {(inputs: Explore_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Auf diesem Pfad ist nichts`)
};

const fr_explore_empty_title = /** @type {(inputs: Explore_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rien sur ce sentier`)
};

const it_explore_empty_title = /** @type {(inputs: Explore_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niente su questo sentiero`)
};

const nl_explore_empty_title = /** @type {(inputs: Explore_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niets op dit pad`)
};

const pl_explore_empty_title = /** @type {(inputs: Explore_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Na tym szlaku nic nie ma`)
};

const pt_explore_empty_title = /** @type {(inputs: Explore_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nada nesta trilha`)
};

const ru_explore_empty_title = /** @type {(inputs: Explore_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`На этой тропе пусто`)
};

const sv_explore_empty_title = /** @type {(inputs: Explore_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inget på den här stigen`)
};

const tr_explore_empty_title = /** @type {(inputs: Explore_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu patikada bir şey yok`)
};

const zh_explore_empty_title = /** @type {(inputs: Explore_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`这条小路上什么也没有`)
};

const ja_explore_empty_title = /** @type {(inputs: Explore_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この道には何もありません`)
};

/**
* | output |
* | --- |
* | "Nothing on this trail" |
*
* @param {Explore_Empty_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_empty_title = /** @type {((inputs?: Explore_Empty_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Empty_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_empty_title(inputs)
	if (locale === "de") return de_explore_empty_title(inputs)
	if (locale === "fr") return fr_explore_empty_title(inputs)
	if (locale === "it") return it_explore_empty_title(inputs)
	if (locale === "nl") return nl_explore_empty_title(inputs)
	if (locale === "pl") return pl_explore_empty_title(inputs)
	if (locale === "pt") return pt_explore_empty_title(inputs)
	if (locale === "ru") return ru_explore_empty_title(inputs)
	if (locale === "sv") return sv_explore_empty_title(inputs)
	if (locale === "tr") return tr_explore_empty_title(inputs)
	if (locale === "zh") return zh_explore_empty_title(inputs)
	if (locale === "ja") return ja_explore_empty_title(inputs)
	return en_explore_empty_title(inputs)
});
