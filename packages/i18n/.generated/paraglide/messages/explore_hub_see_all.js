/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Hub_See_AllInputs */

const en_explore_hub_see_all = /** @type {(inputs: Explore_Hub_See_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`See all in Explore`)
};

const es_explore_hub_see_all = /** @type {(inputs: Explore_Hub_See_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver todos en Explorar`)
};

const de_explore_hub_see_all = /** @type {(inputs: Explore_Hub_See_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle unter Entdecken ansehen`)
};

const fr_explore_hub_see_all = /** @type {(inputs: Explore_Hub_See_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tout voir dans Explorer`)
};

const it_explore_hub_see_all = /** @type {(inputs: Explore_Hub_See_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vedi tutto in Esplora`)
};

const nl_explore_hub_see_all = /** @type {(inputs: Explore_Hub_See_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alles bekijken in Verkennen`)
};

const pl_explore_hub_see_all = /** @type {(inputs: Explore_Hub_See_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zobacz wszystko w Przeglądaj`)
};

const pt_explore_hub_see_all = /** @type {(inputs: Explore_Hub_See_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver tudo em Explorar`)
};

const ru_explore_hub_see_all = /** @type {(inputs: Explore_Hub_See_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Смотреть все в обзоре`)
};

const sv_explore_hub_see_all = /** @type {(inputs: Explore_Hub_See_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se alla i Utforska`)
};

const tr_explore_hub_see_all = /** @type {(inputs: Explore_Hub_See_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tümünü Keşfet’te gör`)
};

const zh_explore_hub_see_all = /** @type {(inputs: Explore_Hub_See_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在探索中查看全部`)
};

const ja_explore_hub_see_all = /** @type {(inputs: Explore_Hub_See_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`探すですべて見る`)
};

/**
* | output |
* | --- |
* | "See all in Explore" |
*
* @param {Explore_Hub_See_AllInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_hub_see_all = /** @type {((inputs?: Explore_Hub_See_AllInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Hub_See_AllInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_hub_see_all(inputs)
	if (locale === "de") return de_explore_hub_see_all(inputs)
	if (locale === "fr") return fr_explore_hub_see_all(inputs)
	if (locale === "it") return it_explore_hub_see_all(inputs)
	if (locale === "nl") return nl_explore_hub_see_all(inputs)
	if (locale === "pl") return pl_explore_hub_see_all(inputs)
	if (locale === "pt") return pt_explore_hub_see_all(inputs)
	if (locale === "ru") return ru_explore_hub_see_all(inputs)
	if (locale === "sv") return sv_explore_hub_see_all(inputs)
	if (locale === "tr") return tr_explore_hub_see_all(inputs)
	if (locale === "zh") return zh_explore_hub_see_all(inputs)
	if (locale === "ja") return ja_explore_hub_see_all(inputs)
	return en_explore_hub_see_all(inputs)
});
