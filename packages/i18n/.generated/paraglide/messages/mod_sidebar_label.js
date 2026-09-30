/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Sidebar_LabelInputs */

const en_mod_sidebar_label = /** @type {(inputs: Mod_Sidebar_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`About this mod`)
};

const es_mod_sidebar_label = /** @type {(inputs: Mod_Sidebar_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sobre este mod`)
};

const de_mod_sidebar_label = /** @type {(inputs: Mod_Sidebar_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Über diesen Mod`)
};

const fr_mod_sidebar_label = /** @type {(inputs: Mod_Sidebar_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`À propos de ce mod`)
};

const it_mod_sidebar_label = /** @type {(inputs: Mod_Sidebar_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Informazioni su questa mod`)
};

const nl_mod_sidebar_label = /** @type {(inputs: Mod_Sidebar_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Over deze mod`)
};

const pl_mod_sidebar_label = /** @type {(inputs: Mod_Sidebar_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O tym modzie`)
};

const pt_mod_sidebar_label = /** @type {(inputs: Mod_Sidebar_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sobre este mod`)
};

const ru_mod_sidebar_label = /** @type {(inputs: Mod_Sidebar_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Об этом моде`)
};

const sv_mod_sidebar_label = /** @type {(inputs: Mod_Sidebar_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Om den här moden`)
};

const tr_mod_sidebar_label = /** @type {(inputs: Mod_Sidebar_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu mod hakkında`)
};

const zh_mod_sidebar_label = /** @type {(inputs: Mod_Sidebar_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`关于此模组`)
};

const ja_mod_sidebar_label = /** @type {(inputs: Mod_Sidebar_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この MOD について`)
};

/**
* | output |
* | --- |
* | "About this mod" |
*
* @param {Mod_Sidebar_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_sidebar_label = /** @type {((inputs?: Mod_Sidebar_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Sidebar_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_sidebar_label(inputs)
	if (locale === "de") return de_mod_sidebar_label(inputs)
	if (locale === "fr") return fr_mod_sidebar_label(inputs)
	if (locale === "it") return it_mod_sidebar_label(inputs)
	if (locale === "nl") return nl_mod_sidebar_label(inputs)
	if (locale === "pl") return pl_mod_sidebar_label(inputs)
	if (locale === "pt") return pt_mod_sidebar_label(inputs)
	if (locale === "ru") return ru_mod_sidebar_label(inputs)
	if (locale === "sv") return sv_mod_sidebar_label(inputs)
	if (locale === "tr") return tr_mod_sidebar_label(inputs)
	if (locale === "zh") return zh_mod_sidebar_label(inputs)
	if (locale === "ja") return ja_mod_sidebar_label(inputs)
	return en_mod_sidebar_label(inputs)
});
