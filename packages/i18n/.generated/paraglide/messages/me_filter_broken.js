/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Filter_BrokenInputs */

const en_me_filter_broken = /** @type {(inputs: Me_Filter_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Broken on this build`)
};

const es_me_filter_broken = /** @type {(inputs: Me_Filter_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rotos en esta build`)
};

const de_me_filter_broken = /** @type {(inputs: Me_Filter_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kaputt auf diesem Build`)
};

const fr_me_filter_broken = /** @type {(inputs: Me_Filter_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cassés sur cette build`)
};

const it_me_filter_broken = /** @type {(inputs: Me_Filter_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non funzionanti su questa build`)
};

const nl_me_filter_broken = /** @type {(inputs: Me_Filter_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kapot op deze build`)
};

const pl_me_filter_broken = /** @type {(inputs: Me_Filter_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niedziałające na tym buildzie`)
};

const pt_me_filter_broken = /** @type {(inputs: Me_Filter_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quebrados nesta build`)
};

const ru_me_filter_broken = /** @type {(inputs: Me_Filter_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не работают на этой сборке`)
};

const sv_me_filter_broken = /** @type {(inputs: Me_Filter_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trasiga på det här bygget`)
};

const tr_me_filter_broken = /** @type {(inputs: Me_Filter_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu sürümde bozuk olanlar`)
};

const zh_me_filter_broken = /** @type {(inputs: Me_Filter_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`当前版本失效`)
};

const ja_me_filter_broken = /** @type {(inputs: Me_Filter_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このビルドで動作しない`)
};

/**
* | output |
* | --- |
* | "Broken on this build" |
*
* @param {Me_Filter_BrokenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_filter_broken = /** @type {((inputs?: Me_Filter_BrokenInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Filter_BrokenInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_filter_broken(inputs)
	if (locale === "de") return de_me_filter_broken(inputs)
	if (locale === "fr") return fr_me_filter_broken(inputs)
	if (locale === "it") return it_me_filter_broken(inputs)
	if (locale === "nl") return nl_me_filter_broken(inputs)
	if (locale === "pl") return pl_me_filter_broken(inputs)
	if (locale === "pt") return pt_me_filter_broken(inputs)
	if (locale === "ru") return ru_me_filter_broken(inputs)
	if (locale === "sv") return sv_me_filter_broken(inputs)
	if (locale === "tr") return tr_me_filter_broken(inputs)
	if (locale === "zh") return zh_me_filter_broken(inputs)
	if (locale === "ja") return ja_me_filter_broken(inputs)
	return en_me_filter_broken(inputs)
});
