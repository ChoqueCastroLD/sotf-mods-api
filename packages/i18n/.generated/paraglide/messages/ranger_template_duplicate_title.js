/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Template_Duplicate_TitleInputs */

const en_ranger_template_duplicate_title = /** @type {(inputs: Ranger_Template_Duplicate_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Duplicate`)
};

const es_ranger_template_duplicate_title = /** @type {(inputs: Ranger_Template_Duplicate_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Duplicado`)
};

const de_ranger_template_duplicate_title = /** @type {(inputs: Ranger_Template_Duplicate_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Duplikat`)
};

const fr_ranger_template_duplicate_title = /** @type {(inputs: Ranger_Template_Duplicate_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Doublon`)
};

const it_ranger_template_duplicate_title = /** @type {(inputs: Ranger_Template_Duplicate_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Duplicato`)
};

const nl_ranger_template_duplicate_title = /** @type {(inputs: Ranger_Template_Duplicate_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Duplicaat`)
};

const pl_ranger_template_duplicate_title = /** @type {(inputs: Ranger_Template_Duplicate_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Duplikat`)
};

const pt_ranger_template_duplicate_title = /** @type {(inputs: Ranger_Template_Duplicate_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Duplicado`)
};

const ru_ranger_template_duplicate_title = /** @type {(inputs: Ranger_Template_Duplicate_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Дубликат`)
};

const sv_ranger_template_duplicate_title = /** @type {(inputs: Ranger_Template_Duplicate_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dubblett`)
};

const tr_ranger_template_duplicate_title = /** @type {(inputs: Ranger_Template_Duplicate_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopya`)
};

const zh_ranger_template_duplicate_title = /** @type {(inputs: Ranger_Template_Duplicate_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重复`)
};

const ja_ranger_template_duplicate_title = /** @type {(inputs: Ranger_Template_Duplicate_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重複`)
};

/**
* | output |
* | --- |
* | "Duplicate" |
*
* @param {Ranger_Template_Duplicate_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_template_duplicate_title = /** @type {((inputs?: Ranger_Template_Duplicate_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Template_Duplicate_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_template_duplicate_title(inputs)
	if (locale === "de") return de_ranger_template_duplicate_title(inputs)
	if (locale === "fr") return fr_ranger_template_duplicate_title(inputs)
	if (locale === "it") return it_ranger_template_duplicate_title(inputs)
	if (locale === "nl") return nl_ranger_template_duplicate_title(inputs)
	if (locale === "pl") return pl_ranger_template_duplicate_title(inputs)
	if (locale === "pt") return pt_ranger_template_duplicate_title(inputs)
	if (locale === "ru") return ru_ranger_template_duplicate_title(inputs)
	if (locale === "sv") return sv_ranger_template_duplicate_title(inputs)
	if (locale === "tr") return tr_ranger_template_duplicate_title(inputs)
	if (locale === "zh") return zh_ranger_template_duplicate_title(inputs)
	if (locale === "ja") return ja_ranger_template_duplicate_title(inputs)
	return en_ranger_template_duplicate_title(inputs)
});
