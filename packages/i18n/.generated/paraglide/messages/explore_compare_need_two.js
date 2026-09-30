/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Compare_Need_TwoInputs */

const en_explore_compare_need_two = /** @type {(inputs: Explore_Compare_Need_TwoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choose at least two mods to compare.`)
};

const es_explore_compare_need_two = /** @type {(inputs: Explore_Compare_Need_TwoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elige al menos dos mods para comparar.`)
};

const de_explore_compare_need_two = /** @type {(inputs: Explore_Compare_Need_TwoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wähle mindestens zwei Mods zum Vergleichen.`)
};

const fr_explore_compare_need_two = /** @type {(inputs: Explore_Compare_Need_TwoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choisissez au moins deux mods à comparer.`)
};

const it_explore_compare_need_two = /** @type {(inputs: Explore_Compare_Need_TwoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scegli almeno due mod da confrontare.`)
};

const nl_explore_compare_need_two = /** @type {(inputs: Explore_Compare_Need_TwoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kies minstens twee mods om te vergelijken.`)
};

const pl_explore_compare_need_two = /** @type {(inputs: Explore_Compare_Need_TwoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wybierz co najmniej dwa mody do porównania.`)
};

const pt_explore_compare_need_two = /** @type {(inputs: Explore_Compare_Need_TwoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escolha pelo menos dois mods para comparar.`)
};

const ru_explore_compare_need_two = /** @type {(inputs: Explore_Compare_Need_TwoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выберите не менее двух модов для сравнения.`)
};

const sv_explore_compare_need_two = /** @type {(inputs: Explore_Compare_Need_TwoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Välj minst två mods att jämföra.`)
};

const tr_explore_compare_need_two = /** @type {(inputs: Explore_Compare_Need_TwoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Karşılaştırmak için en az iki mod seç.`)
};

const zh_explore_compare_need_two = /** @type {(inputs: Explore_Compare_Need_TwoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请至少选择两个模组进行对比。`)
};

const ja_explore_compare_need_two = /** @type {(inputs: Explore_Compare_Need_TwoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`比較する Mod を 2 個以上選んでください。`)
};

/**
* | output |
* | --- |
* | "Choose at least two mods to compare." |
*
* @param {Explore_Compare_Need_TwoInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_compare_need_two = /** @type {((inputs?: Explore_Compare_Need_TwoInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Compare_Need_TwoInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_compare_need_two(inputs)
	if (locale === "de") return de_explore_compare_need_two(inputs)
	if (locale === "fr") return fr_explore_compare_need_two(inputs)
	if (locale === "it") return it_explore_compare_need_two(inputs)
	if (locale === "nl") return nl_explore_compare_need_two(inputs)
	if (locale === "pl") return pl_explore_compare_need_two(inputs)
	if (locale === "pt") return pt_explore_compare_need_two(inputs)
	if (locale === "ru") return ru_explore_compare_need_two(inputs)
	if (locale === "sv") return sv_explore_compare_need_two(inputs)
	if (locale === "tr") return tr_explore_compare_need_two(inputs)
	if (locale === "zh") return zh_explore_compare_need_two(inputs)
	if (locale === "ja") return ja_explore_compare_need_two(inputs)
	return en_explore_compare_need_two(inputs)
});
