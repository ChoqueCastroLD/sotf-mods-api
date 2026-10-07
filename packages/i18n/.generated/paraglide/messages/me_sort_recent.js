/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Sort_RecentInputs */

const en_me_sort_recent = /** @type {(inputs: Me_Sort_RecentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Most recent`)
};

const es_me_sort_recent = /** @type {(inputs: Me_Sort_RecentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Más recientes`)
};

const de_me_sort_recent = /** @type {(inputs: Me_Sort_RecentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zuletzt`)
};

const fr_me_sort_recent = /** @type {(inputs: Me_Sort_RecentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plus récents`)
};

const it_me_sort_recent = /** @type {(inputs: Me_Sort_RecentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Più recenti`)
};

const nl_me_sort_recent = /** @type {(inputs: Me_Sort_RecentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meest recent`)
};

const pl_me_sort_recent = /** @type {(inputs: Me_Sort_RecentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najnowsze`)
};

const pt_me_sort_recent = /** @type {(inputs: Me_Sort_RecentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mais recentes`)
};

const ru_me_sort_recent = /** @type {(inputs: Me_Sort_RecentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сначала новые`)
};

const sv_me_sort_recent = /** @type {(inputs: Me_Sort_RecentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Senaste`)
};

const tr_me_sort_recent = /** @type {(inputs: Me_Sort_RecentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En yeni`)
};

const zh_me_sort_recent = /** @type {(inputs: Me_Sort_RecentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最近`)
};

const ja_me_sort_recent = /** @type {(inputs: Me_Sort_RecentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新しい順`)
};

/**
* | output |
* | --- |
* | "Most recent" |
*
* @param {Me_Sort_RecentInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_sort_recent = /** @type {((inputs?: Me_Sort_RecentInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Sort_RecentInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_sort_recent(inputs)
	if (locale === "de") return de_me_sort_recent(inputs)
	if (locale === "fr") return fr_me_sort_recent(inputs)
	if (locale === "it") return it_me_sort_recent(inputs)
	if (locale === "nl") return nl_me_sort_recent(inputs)
	if (locale === "pl") return pl_me_sort_recent(inputs)
	if (locale === "pt") return pt_me_sort_recent(inputs)
	if (locale === "ru") return ru_me_sort_recent(inputs)
	if (locale === "sv") return sv_me_sort_recent(inputs)
	if (locale === "tr") return tr_me_sort_recent(inputs)
	if (locale === "zh") return zh_me_sort_recent(inputs)
	if (locale === "ja") return ja_me_sort_recent(inputs)
	return en_me_sort_recent(inputs)
});
