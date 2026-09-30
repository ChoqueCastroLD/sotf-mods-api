/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Tabs_LabelInputs */

const en_mod_tabs_label = /** @type {(inputs: Mod_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod sections`)
};

const es_mod_tabs_label = /** @type {(inputs: Mod_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Secciones del mod`)
};

const de_mod_tabs_label = /** @type {(inputs: Mod_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bereiche des Mods`)
};

const fr_mod_tabs_label = /** @type {(inputs: Mod_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sections du mod`)
};

const it_mod_tabs_label = /** @type {(inputs: Mod_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sezioni della mod`)
};

const nl_mod_tabs_label = /** @type {(inputs: Mod_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Onderdelen van de mod`)
};

const pl_mod_tabs_label = /** @type {(inputs: Mod_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sekcje moda`)
};

const pt_mod_tabs_label = /** @type {(inputs: Mod_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seções do mod`)
};

const ru_mod_tabs_label = /** @type {(inputs: Mod_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Разделы мода`)
};

const sv_mod_tabs_label = /** @type {(inputs: Mod_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modens avsnitt`)
};

const tr_mod_tabs_label = /** @type {(inputs: Mod_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod bölümleri`)
};

const zh_mod_tabs_label = /** @type {(inputs: Mod_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`模组页面分区`)
};

const ja_mod_tabs_label = /** @type {(inputs: Mod_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD のセクション`)
};

/**
* | output |
* | --- |
* | "Mod sections" |
*
* @param {Mod_Tabs_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_tabs_label = /** @type {((inputs?: Mod_Tabs_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Tabs_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_tabs_label(inputs)
	if (locale === "de") return de_mod_tabs_label(inputs)
	if (locale === "fr") return fr_mod_tabs_label(inputs)
	if (locale === "it") return it_mod_tabs_label(inputs)
	if (locale === "nl") return nl_mod_tabs_label(inputs)
	if (locale === "pl") return pl_mod_tabs_label(inputs)
	if (locale === "pt") return pt_mod_tabs_label(inputs)
	if (locale === "ru") return ru_mod_tabs_label(inputs)
	if (locale === "sv") return sv_mod_tabs_label(inputs)
	if (locale === "tr") return tr_mod_tabs_label(inputs)
	if (locale === "zh") return zh_mod_tabs_label(inputs)
	if (locale === "ja") return ja_mod_tabs_label(inputs)
	return en_mod_tabs_label(inputs)
});
