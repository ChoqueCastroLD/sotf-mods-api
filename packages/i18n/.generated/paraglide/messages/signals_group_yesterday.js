/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_Group_YesterdayInputs */

const en_signals_group_yesterday = /** @type {(inputs: Signals_Group_YesterdayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yesterday`)
};

const es_signals_group_yesterday = /** @type {(inputs: Signals_Group_YesterdayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ayer`)
};

const de_signals_group_yesterday = /** @type {(inputs: Signals_Group_YesterdayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gestern`)
};

const fr_signals_group_yesterday = /** @type {(inputs: Signals_Group_YesterdayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hier`)
};

const it_signals_group_yesterday = /** @type {(inputs: Signals_Group_YesterdayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ieri`)
};

const nl_signals_group_yesterday = /** @type {(inputs: Signals_Group_YesterdayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gisteren`)
};

const pl_signals_group_yesterday = /** @type {(inputs: Signals_Group_YesterdayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wczoraj`)
};

const pt_signals_group_yesterday = /** @type {(inputs: Signals_Group_YesterdayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ontem`)
};

const ru_signals_group_yesterday = /** @type {(inputs: Signals_Group_YesterdayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вчера`)
};

const sv_signals_group_yesterday = /** @type {(inputs: Signals_Group_YesterdayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I går`)
};

const tr_signals_group_yesterday = /** @type {(inputs: Signals_Group_YesterdayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dün`)
};

const zh_signals_group_yesterday = /** @type {(inputs: Signals_Group_YesterdayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`昨天`)
};

const ja_signals_group_yesterday = /** @type {(inputs: Signals_Group_YesterdayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`昨日`)
};

/**
* | output |
* | --- |
* | "Yesterday" |
*
* @param {Signals_Group_YesterdayInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_group_yesterday = /** @type {((inputs?: Signals_Group_YesterdayInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Group_YesterdayInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_group_yesterday(inputs)
	if (locale === "de") return de_signals_group_yesterday(inputs)
	if (locale === "fr") return fr_signals_group_yesterday(inputs)
	if (locale === "it") return it_signals_group_yesterday(inputs)
	if (locale === "nl") return nl_signals_group_yesterday(inputs)
	if (locale === "pl") return pl_signals_group_yesterday(inputs)
	if (locale === "pt") return pt_signals_group_yesterday(inputs)
	if (locale === "ru") return ru_signals_group_yesterday(inputs)
	if (locale === "sv") return sv_signals_group_yesterday(inputs)
	if (locale === "tr") return tr_signals_group_yesterday(inputs)
	if (locale === "zh") return zh_signals_group_yesterday(inputs)
	if (locale === "ja") return ja_signals_group_yesterday(inputs)
	return en_signals_group_yesterday(inputs)
});
