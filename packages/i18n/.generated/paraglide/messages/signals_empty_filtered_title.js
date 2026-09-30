/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_Empty_Filtered_TitleInputs */

const en_signals_empty_filtered_title = /** @type {(inputs: Signals_Empty_Filtered_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nothing on this channel`)
};

const es_signals_empty_filtered_title = /** @type {(inputs: Signals_Empty_Filtered_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nada en este canal`)
};

const de_signals_empty_filtered_title = /** @type {(inputs: Signals_Empty_Filtered_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nichts auf diesem Kanal`)
};

const fr_signals_empty_filtered_title = /** @type {(inputs: Signals_Empty_Filtered_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rien sur ce canal`)
};

const it_signals_empty_filtered_title = /** @type {(inputs: Signals_Empty_Filtered_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niente su questo canale`)
};

const nl_signals_empty_filtered_title = /** @type {(inputs: Signals_Empty_Filtered_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niets op dit kanaal`)
};

const pl_signals_empty_filtered_title = /** @type {(inputs: Signals_Empty_Filtered_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nic na tym kanale`)
};

const pt_signals_empty_filtered_title = /** @type {(inputs: Signals_Empty_Filtered_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nada neste canal`)
};

const ru_signals_empty_filtered_title = /** @type {(inputs: Signals_Empty_Filtered_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`На этом канале пусто`)
};

const sv_signals_empty_filtered_title = /** @type {(inputs: Signals_Empty_Filtered_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inget på den här kanalen`)
};

const tr_signals_empty_filtered_title = /** @type {(inputs: Signals_Empty_Filtered_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu kanalda bir şey yok`)
};

const zh_signals_empty_filtered_title = /** @type {(inputs: Signals_Empty_Filtered_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`这个频道没有内容`)
};

const ja_signals_empty_filtered_title = /** @type {(inputs: Signals_Empty_Filtered_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このチャンネルには何もありません`)
};

/**
* | output |
* | --- |
* | "Nothing on this channel" |
*
* @param {Signals_Empty_Filtered_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_empty_filtered_title = /** @type {((inputs?: Signals_Empty_Filtered_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Empty_Filtered_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_empty_filtered_title(inputs)
	if (locale === "de") return de_signals_empty_filtered_title(inputs)
	if (locale === "fr") return fr_signals_empty_filtered_title(inputs)
	if (locale === "it") return it_signals_empty_filtered_title(inputs)
	if (locale === "nl") return nl_signals_empty_filtered_title(inputs)
	if (locale === "pl") return pl_signals_empty_filtered_title(inputs)
	if (locale === "pt") return pt_signals_empty_filtered_title(inputs)
	if (locale === "ru") return ru_signals_empty_filtered_title(inputs)
	if (locale === "sv") return sv_signals_empty_filtered_title(inputs)
	if (locale === "tr") return tr_signals_empty_filtered_title(inputs)
	if (locale === "zh") return zh_signals_empty_filtered_title(inputs)
	if (locale === "ja") return ja_signals_empty_filtered_title(inputs)
	return en_signals_empty_filtered_title(inputs)
});
