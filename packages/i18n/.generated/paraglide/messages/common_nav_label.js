/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Nav_LabelInputs */

const en_common_nav_label = /** @type {(inputs: Common_Nav_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Main`)
};

const es_common_nav_label = /** @type {(inputs: Common_Nav_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Principal`)
};

const de_common_nav_label = /** @type {(inputs: Common_Nav_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hauptmenü`)
};

const fr_common_nav_label = /** @type {(inputs: Common_Nav_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Principale`)
};

const it_common_nav_label = /** @type {(inputs: Common_Nav_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Principale`)
};

const nl_common_nav_label = /** @type {(inputs: Common_Nav_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hoofdmenu`)
};

const pl_common_nav_label = /** @type {(inputs: Common_Nav_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Główna`)
};

const pt_common_nav_label = /** @type {(inputs: Common_Nav_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Principal`)
};

const ru_common_nav_label = /** @type {(inputs: Common_Nav_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Главное меню`)
};

const sv_common_nav_label = /** @type {(inputs: Common_Nav_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Huvudmeny`)
};

const tr_common_nav_label = /** @type {(inputs: Common_Nav_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ana menü`)
};

const zh_common_nav_label = /** @type {(inputs: Common_Nav_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`主导航`)
};

const ja_common_nav_label = /** @type {(inputs: Common_Nav_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メイン`)
};

/**
* | output |
* | --- |
* | "Main" |
*
* @param {Common_Nav_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_nav_label = /** @type {((inputs?: Common_Nav_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Nav_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_nav_label(inputs)
	if (locale === "de") return de_common_nav_label(inputs)
	if (locale === "fr") return fr_common_nav_label(inputs)
	if (locale === "it") return it_common_nav_label(inputs)
	if (locale === "nl") return nl_common_nav_label(inputs)
	if (locale === "pl") return pl_common_nav_label(inputs)
	if (locale === "pt") return pt_common_nav_label(inputs)
	if (locale === "ru") return ru_common_nav_label(inputs)
	if (locale === "sv") return sv_common_nav_label(inputs)
	if (locale === "tr") return tr_common_nav_label(inputs)
	if (locale === "zh") return zh_common_nav_label(inputs)
	if (locale === "ja") return ja_common_nav_label(inputs)
	return en_common_nav_label(inputs)
});
