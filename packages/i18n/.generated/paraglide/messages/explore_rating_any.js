/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Rating_AnyInputs */

const en_explore_rating_any = /** @type {(inputs: Explore_Rating_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Any rating`)
};

const es_explore_rating_any = /** @type {(inputs: Explore_Rating_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cualquier valoración`)
};

const de_explore_rating_any = /** @type {(inputs: Explore_Rating_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jede Bewertung`)
};

const fr_explore_rating_any = /** @type {(inputs: Explore_Rating_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toutes les notes`)
};

const it_explore_rating_any = /** @type {(inputs: Explore_Rating_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qualsiasi valutazione`)
};

const nl_explore_rating_any = /** @type {(inputs: Explore_Rating_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elke beoordeling`)
};

const pl_explore_rating_any = /** @type {(inputs: Explore_Rating_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dowolna ocena`)
};

const pt_explore_rating_any = /** @type {(inputs: Explore_Rating_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qualquer avaliação`)
};

const ru_explore_rating_any = /** @type {(inputs: Explore_Rating_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Любая оценка`)
};

const sv_explore_rating_any = /** @type {(inputs: Explore_Rating_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alla betyg`)
};

const tr_explore_rating_any = /** @type {(inputs: Explore_Rating_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tüm puanlar`)
};

const zh_explore_rating_any = /** @type {(inputs: Explore_Rating_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不限评分`)
};

const ja_explore_rating_any = /** @type {(inputs: Explore_Rating_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`評価指定なし`)
};

/**
* | output |
* | --- |
* | "Any rating" |
*
* @param {Explore_Rating_AnyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_rating_any = /** @type {((inputs?: Explore_Rating_AnyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Rating_AnyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_rating_any(inputs)
	if (locale === "de") return de_explore_rating_any(inputs)
	if (locale === "fr") return fr_explore_rating_any(inputs)
	if (locale === "it") return it_explore_rating_any(inputs)
	if (locale === "nl") return nl_explore_rating_any(inputs)
	if (locale === "pl") return pl_explore_rating_any(inputs)
	if (locale === "pt") return pt_explore_rating_any(inputs)
	if (locale === "ru") return ru_explore_rating_any(inputs)
	if (locale === "sv") return sv_explore_rating_any(inputs)
	if (locale === "tr") return tr_explore_rating_any(inputs)
	if (locale === "zh") return zh_explore_rating_any(inputs)
	if (locale === "ja") return ja_explore_rating_any(inputs)
	return en_explore_rating_any(inputs)
});
