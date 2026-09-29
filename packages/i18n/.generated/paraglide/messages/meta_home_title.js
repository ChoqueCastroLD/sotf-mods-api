/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Meta_Home_TitleInputs */

const en_meta_home_title = /** @type {(inputs: Meta_Home_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods — Sons of the Forest mods, builds & kits`)
};

const es_meta_home_title = /** @type {(inputs: Meta_Home_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods — mods, builds y kits de Sons of the Forest`)
};

const de_meta_home_title = /** @type {(inputs: Meta_Home_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods – Mods, Builds & Kits für Sons of the Forest`)
};

const fr_meta_home_title = /** @type {(inputs: Meta_Home_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods — mods, builds et kits pour Sons of the Forest`)
};

const it_meta_home_title = /** @type {(inputs: Meta_Home_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods — mod, build e kit per Sons of the Forest`)
};

const nl_meta_home_title = /** @type {(inputs: Meta_Home_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods — mods, builds en kits voor Sons of the Forest`)
};

const pl_meta_home_title = /** @type {(inputs: Meta_Home_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods — mody, buildy i zestawy do Sons of the Forest`)
};

const pt_meta_home_title = /** @type {(inputs: Meta_Home_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods — mods, builds e kits de Sons of the Forest`)
};

const ru_meta_home_title = /** @type {(inputs: Meta_Home_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods — моды, постройки и наборы для Sons of the Forest`)
};

const sv_meta_home_title = /** @type {(inputs: Meta_Home_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods – moddar, byggen och kit till Sons of the Forest`)
};

const tr_meta_home_title = /** @type {(inputs: Meta_Home_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods — Sons of the Forest modları, yapıları ve kitleri`)
};

const zh_meta_home_title = /** @type {(inputs: Meta_Home_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods — 森林之子模组、建筑与套装`)
};

const ja_meta_home_title = /** @type {(inputs: Meta_Home_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods — Sons of the Forest の MOD・建築・キット`)
};

/**
* | output |
* | --- |
* | "SOTF Mods — Sons of the Forest mods, builds & kits" |
*
* @param {Meta_Home_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const meta_home_title = /** @type {((inputs?: Meta_Home_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Meta_Home_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_meta_home_title(inputs)
	if (locale === "de") return de_meta_home_title(inputs)
	if (locale === "fr") return fr_meta_home_title(inputs)
	if (locale === "it") return it_meta_home_title(inputs)
	if (locale === "nl") return nl_meta_home_title(inputs)
	if (locale === "pl") return pl_meta_home_title(inputs)
	if (locale === "pt") return pt_meta_home_title(inputs)
	if (locale === "ru") return ru_meta_home_title(inputs)
	if (locale === "sv") return sv_meta_home_title(inputs)
	if (locale === "tr") return tr_meta_home_title(inputs)
	if (locale === "zh") return zh_meta_home_title(inputs)
	if (locale === "ja") return ja_meta_home_title(inputs)
	return en_meta_home_title(inputs)
});
