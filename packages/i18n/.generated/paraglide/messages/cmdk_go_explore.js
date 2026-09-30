/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Go_ExploreInputs */

const en_cmdk_go_explore = /** @type {(inputs: Cmdk_Go_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Explore mods`)
};

const es_cmdk_go_explore = /** @type {(inputs: Cmdk_Go_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Explorar mods`)
};

const de_cmdk_go_explore = /** @type {(inputs: Cmdk_Go_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods erkunden`)
};

const fr_cmdk_go_explore = /** @type {(inputs: Cmdk_Go_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Explorer les mods`)
};

const it_cmdk_go_explore = /** @type {(inputs: Cmdk_Go_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esplora le mod`)
};

const nl_cmdk_go_explore = /** @type {(inputs: Cmdk_Go_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods verkennen`)
};

const pl_cmdk_go_explore = /** @type {(inputs: Cmdk_Go_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przeglądaj mody`)
};

const pt_cmdk_go_explore = /** @type {(inputs: Cmdk_Go_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Explorar mods`)
};

const ru_cmdk_go_explore = /** @type {(inputs: Cmdk_Go_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Обзор модов`)
};

const sv_cmdk_go_explore = /** @type {(inputs: Cmdk_Go_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utforska mods`)
};

const tr_cmdk_go_explore = /** @type {(inputs: Cmdk_Go_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modlara göz at`)
};

const zh_cmdk_go_explore = /** @type {(inputs: Cmdk_Go_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`浏览模组`)
};

const ja_cmdk_go_explore = /** @type {(inputs: Cmdk_Go_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod を探す`)
};

/**
* | output |
* | --- |
* | "Explore mods" |
*
* @param {Cmdk_Go_ExploreInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_go_explore = /** @type {((inputs?: Cmdk_Go_ExploreInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Go_ExploreInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_go_explore(inputs)
	if (locale === "de") return de_cmdk_go_explore(inputs)
	if (locale === "fr") return fr_cmdk_go_explore(inputs)
	if (locale === "it") return it_cmdk_go_explore(inputs)
	if (locale === "nl") return nl_cmdk_go_explore(inputs)
	if (locale === "pl") return pl_cmdk_go_explore(inputs)
	if (locale === "pt") return pt_cmdk_go_explore(inputs)
	if (locale === "ru") return ru_cmdk_go_explore(inputs)
	if (locale === "sv") return sv_cmdk_go_explore(inputs)
	if (locale === "tr") return tr_cmdk_go_explore(inputs)
	if (locale === "zh") return zh_cmdk_go_explore(inputs)
	if (locale === "ja") return ja_cmdk_go_explore(inputs)
	return en_cmdk_go_explore(inputs)
});
