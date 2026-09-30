/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Sidebar_LabelInputs */

const en_kits_sidebar_label = /** @type {(inputs: Kits_Sidebar_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`About this kit`)
};

const es_kits_sidebar_label = /** @type {(inputs: Kits_Sidebar_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sobre este kit`)
};

const de_kits_sidebar_label = /** @type {(inputs: Kits_Sidebar_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Über dieses Kit`)
};

const fr_kits_sidebar_label = /** @type {(inputs: Kits_Sidebar_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`À propos de ce kit`)
};

const it_kits_sidebar_label = /** @type {(inputs: Kits_Sidebar_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Informazioni sul kit`)
};

const nl_kits_sidebar_label = /** @type {(inputs: Kits_Sidebar_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Over deze kit`)
};

const pl_kits_sidebar_label = /** @type {(inputs: Kits_Sidebar_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O tym zestawie`)
};

const pt_kits_sidebar_label = /** @type {(inputs: Kits_Sidebar_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sobre este kit`)
};

const ru_kits_sidebar_label = /** @type {(inputs: Kits_Sidebar_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Об этом наборе`)
};

const sv_kits_sidebar_label = /** @type {(inputs: Kits_Sidebar_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Om det här kitet`)
};

const tr_kits_sidebar_label = /** @type {(inputs: Kits_Sidebar_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu kit hakkında`)
};

const zh_kits_sidebar_label = /** @type {(inputs: Kits_Sidebar_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`关于这个套装`)
};

const ja_kits_sidebar_label = /** @type {(inputs: Kits_Sidebar_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このキットについて`)
};

/**
* | output |
* | --- |
* | "About this kit" |
*
* @param {Kits_Sidebar_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_sidebar_label = /** @type {((inputs?: Kits_Sidebar_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Sidebar_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_sidebar_label(inputs)
	if (locale === "de") return de_kits_sidebar_label(inputs)
	if (locale === "fr") return fr_kits_sidebar_label(inputs)
	if (locale === "it") return it_kits_sidebar_label(inputs)
	if (locale === "nl") return nl_kits_sidebar_label(inputs)
	if (locale === "pl") return pl_kits_sidebar_label(inputs)
	if (locale === "pt") return pt_kits_sidebar_label(inputs)
	if (locale === "ru") return ru_kits_sidebar_label(inputs)
	if (locale === "sv") return sv_kits_sidebar_label(inputs)
	if (locale === "tr") return tr_kits_sidebar_label(inputs)
	if (locale === "zh") return zh_kits_sidebar_label(inputs)
	if (locale === "ja") return ja_kits_sidebar_label(inputs)
	return en_kits_sidebar_label(inputs)
});
