/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Filter_AllInputs */

const en_me_filter_all = /** @type {(inputs: Me_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All`)
};

const es_me_filter_all = /** @type {(inputs: Me_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todo`)
};

const de_me_filter_all = /** @type {(inputs: Me_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle`)
};

const fr_me_filter_all = /** @type {(inputs: Me_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tout`)
};

const it_me_filter_all = /** @type {(inputs: Me_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tutte`)
};

const nl_me_filter_all = /** @type {(inputs: Me_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alles`)
};

const pl_me_filter_all = /** @type {(inputs: Me_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wszystkie`)
};

const pt_me_filter_all = /** @type {(inputs: Me_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todos`)
};

const ru_me_filter_all = /** @type {(inputs: Me_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Все`)
};

const sv_me_filter_all = /** @type {(inputs: Me_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alla`)
};

const tr_me_filter_all = /** @type {(inputs: Me_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tümü`)
};

const zh_me_filter_all = /** @type {(inputs: Me_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`全部`)
};

const ja_me_filter_all = /** @type {(inputs: Me_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべて`)
};

/**
* | output |
* | --- |
* | "All" |
*
* @param {Me_Filter_AllInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_filter_all = /** @type {((inputs?: Me_Filter_AllInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Filter_AllInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_filter_all(inputs)
	if (locale === "de") return de_me_filter_all(inputs)
	if (locale === "fr") return fr_me_filter_all(inputs)
	if (locale === "it") return it_me_filter_all(inputs)
	if (locale === "nl") return nl_me_filter_all(inputs)
	if (locale === "pl") return pl_me_filter_all(inputs)
	if (locale === "pt") return pt_me_filter_all(inputs)
	if (locale === "ru") return ru_me_filter_all(inputs)
	if (locale === "sv") return sv_me_filter_all(inputs)
	if (locale === "tr") return tr_me_filter_all(inputs)
	if (locale === "zh") return zh_me_filter_all(inputs)
	if (locale === "ja") return ja_me_filter_all(inputs)
	return en_me_filter_all(inputs)
});
