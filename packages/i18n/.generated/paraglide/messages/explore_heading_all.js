/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Heading_AllInputs */

const en_explore_heading_all = /** @type {(inputs: Explore_Heading_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Explore everything`)
};

const es_explore_heading_all = /** @type {(inputs: Explore_Heading_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Explorar todo`)
};

const de_explore_heading_all = /** @type {(inputs: Explore_Heading_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alles entdecken`)
};

const fr_explore_heading_all = /** @type {(inputs: Explore_Heading_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tout explorer`)
};

const it_explore_heading_all = /** @type {(inputs: Explore_Heading_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esplora tutto`)
};

const nl_explore_heading_all = /** @type {(inputs: Explore_Heading_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alles verkennen`)
};

const pl_explore_heading_all = /** @type {(inputs: Explore_Heading_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przeglądaj wszystko`)
};

const pt_explore_heading_all = /** @type {(inputs: Explore_Heading_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Explorar tudo`)
};

const ru_explore_heading_all = /** @type {(inputs: Explore_Heading_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Обзор всего`)
};

const sv_explore_heading_all = /** @type {(inputs: Explore_Heading_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utforska allt`)
};

const tr_explore_heading_all = /** @type {(inputs: Explore_Heading_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Her şeyi keşfet`)
};

const zh_explore_heading_all = /** @type {(inputs: Explore_Heading_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`探索全部`)
};

const ja_explore_heading_all = /** @type {(inputs: Explore_Heading_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべてを探す`)
};

/**
* | output |
* | --- |
* | "Explore everything" |
*
* @param {Explore_Heading_AllInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_heading_all = /** @type {((inputs?: Explore_Heading_AllInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Heading_AllInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_heading_all(inputs)
	if (locale === "de") return de_explore_heading_all(inputs)
	if (locale === "fr") return fr_explore_heading_all(inputs)
	if (locale === "it") return it_explore_heading_all(inputs)
	if (locale === "nl") return nl_explore_heading_all(inputs)
	if (locale === "pl") return pl_explore_heading_all(inputs)
	if (locale === "pt") return pt_explore_heading_all(inputs)
	if (locale === "ru") return ru_explore_heading_all(inputs)
	if (locale === "sv") return sv_explore_heading_all(inputs)
	if (locale === "tr") return tr_explore_heading_all(inputs)
	if (locale === "zh") return zh_explore_heading_all(inputs)
	if (locale === "ja") return ja_explore_heading_all(inputs)
	return en_explore_heading_all(inputs)
});
