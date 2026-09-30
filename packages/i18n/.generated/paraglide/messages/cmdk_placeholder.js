/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_PlaceholderInputs */

const en_cmdk_placeholder = /** @type {(inputs: Cmdk_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search mods, builds, kits, creators…`)
};

const es_cmdk_placeholder = /** @type {(inputs: Cmdk_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Busca mods, builds, kits, creadores…`)
};

const de_cmdk_placeholder = /** @type {(inputs: Cmdk_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods, Builds, Kits, Creator suchen…`)
};

const fr_cmdk_placeholder = /** @type {(inputs: Cmdk_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rechercher des mods, builds, kits, créateurs…`)
};

const it_cmdk_placeholder = /** @type {(inputs: Cmdk_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cerca mod, build, kit, creatori…`)
};

const nl_cmdk_placeholder = /** @type {(inputs: Cmdk_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zoek mods, builds, kits, makers…`)
};

const pl_cmdk_placeholder = /** @type {(inputs: Cmdk_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szukaj modów, buildów, zestawów, twórców…`)
};

const pt_cmdk_placeholder = /** @type {(inputs: Cmdk_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Busque mods, builds, kits, criadores…`)
};

const ru_cmdk_placeholder = /** @type {(inputs: Cmdk_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Моды, постройки, наборы, авторы…`)
};

const sv_cmdk_placeholder = /** @type {(inputs: Cmdk_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sök moddar, byggen, kit, skapare…`)
};

const tr_cmdk_placeholder = /** @type {(inputs: Cmdk_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod, yapı, kit, üretici ara…`)
};

const zh_cmdk_placeholder = /** @type {(inputs: Cmdk_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`搜索模组、建筑、套装、创作者…`)
};

const ja_cmdk_placeholder = /** @type {(inputs: Cmdk_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD、建築、キット、クリエイターを検索…`)
};

/**
* | output |
* | --- |
* | "Search mods, builds, kits, creators…" |
*
* @param {Cmdk_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_placeholder = /** @type {((inputs?: Cmdk_PlaceholderInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_PlaceholderInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_placeholder(inputs)
	if (locale === "de") return de_cmdk_placeholder(inputs)
	if (locale === "fr") return fr_cmdk_placeholder(inputs)
	if (locale === "it") return it_cmdk_placeholder(inputs)
	if (locale === "nl") return nl_cmdk_placeholder(inputs)
	if (locale === "pl") return pl_cmdk_placeholder(inputs)
	if (locale === "pt") return pt_cmdk_placeholder(inputs)
	if (locale === "ru") return ru_cmdk_placeholder(inputs)
	if (locale === "sv") return sv_cmdk_placeholder(inputs)
	if (locale === "tr") return tr_cmdk_placeholder(inputs)
	if (locale === "zh") return zh_cmdk_placeholder(inputs)
	if (locale === "ja") return ja_cmdk_placeholder(inputs)
	return en_cmdk_placeholder(inputs)
});
