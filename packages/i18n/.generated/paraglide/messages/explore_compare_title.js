/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Compare_TitleInputs */

const en_explore_compare_title = /** @type {(inputs: Explore_Compare_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compare mods`)
};

const es_explore_compare_title = /** @type {(inputs: Explore_Compare_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comparar mods`)
};

const de_explore_compare_title = /** @type {(inputs: Explore_Compare_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods vergleichen`)
};

const fr_explore_compare_title = /** @type {(inputs: Explore_Compare_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comparer les mods`)
};

const it_explore_compare_title = /** @type {(inputs: Explore_Compare_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confronta i mod`)
};

const nl_explore_compare_title = /** @type {(inputs: Explore_Compare_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods vergelijken`)
};

const pl_explore_compare_title = /** @type {(inputs: Explore_Compare_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Porównaj mody`)
};

const pt_explore_compare_title = /** @type {(inputs: Explore_Compare_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comparar mods`)
};

const ru_explore_compare_title = /** @type {(inputs: Explore_Compare_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сравнение модов`)
};

const sv_explore_compare_title = /** @type {(inputs: Explore_Compare_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jämför mods`)
};

const tr_explore_compare_title = /** @type {(inputs: Explore_Compare_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modları karşılaştır`)
};

const zh_explore_compare_title = /** @type {(inputs: Explore_Compare_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`对比模组`)
};

const ja_explore_compare_title = /** @type {(inputs: Explore_Compare_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod を比較`)
};

/**
* | output |
* | --- |
* | "Compare mods" |
*
* @param {Explore_Compare_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_compare_title = /** @type {((inputs?: Explore_Compare_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Compare_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_compare_title(inputs)
	if (locale === "de") return de_explore_compare_title(inputs)
	if (locale === "fr") return fr_explore_compare_title(inputs)
	if (locale === "it") return it_explore_compare_title(inputs)
	if (locale === "nl") return nl_explore_compare_title(inputs)
	if (locale === "pl") return pl_explore_compare_title(inputs)
	if (locale === "pt") return pt_explore_compare_title(inputs)
	if (locale === "ru") return ru_explore_compare_title(inputs)
	if (locale === "sv") return sv_explore_compare_title(inputs)
	if (locale === "tr") return tr_explore_compare_title(inputs)
	if (locale === "zh") return zh_explore_compare_title(inputs)
	if (locale === "ja") return ja_explore_compare_title(inputs)
	return en_explore_compare_title(inputs)
});
