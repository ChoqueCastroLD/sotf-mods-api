/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Template_Broken_Or_Empty_TitleInputs */

const en_ranger_template_broken_or_empty_title = /** @type {(inputs: Ranger_Template_Broken_Or_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Broken or empty`)
};

const es_ranger_template_broken_or_empty_title = /** @type {(inputs: Ranger_Template_Broken_Or_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Roto o vacío`)
};

const de_ranger_template_broken_or_empty_title = /** @type {(inputs: Ranger_Template_Broken_Or_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Defekt oder leer`)
};

const fr_ranger_template_broken_or_empty_title = /** @type {(inputs: Ranger_Template_Broken_Or_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cassé ou vide`)
};

const it_ranger_template_broken_or_empty_title = /** @type {(inputs: Ranger_Template_Broken_Or_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Danneggiato o vuoto`)
};

const nl_ranger_template_broken_or_empty_title = /** @type {(inputs: Ranger_Template_Broken_Or_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kapot of leeg`)
};

const pl_ranger_template_broken_or_empty_title = /** @type {(inputs: Ranger_Template_Broken_Or_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uszkodzony lub pusty`)
};

const pt_ranger_template_broken_or_empty_title = /** @type {(inputs: Ranger_Template_Broken_Or_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quebrado ou vazio`)
};

const ru_ranger_template_broken_or_empty_title = /** @type {(inputs: Ranger_Template_Broken_Or_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сломан или пуст`)
};

const sv_ranger_template_broken_or_empty_title = /** @type {(inputs: Ranger_Template_Broken_Or_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trasig eller tom`)
};

const tr_ranger_template_broken_or_empty_title = /** @type {(inputs: Ranger_Template_Broken_Or_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bozuk veya boş`)
};

const zh_ranger_template_broken_or_empty_title = /** @type {(inputs: Ranger_Template_Broken_Or_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`损坏或为空`)
};

const ja_ranger_template_broken_or_empty_title = /** @type {(inputs: Ranger_Template_Broken_Or_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`破損または空`)
};

/**
* | output |
* | --- |
* | "Broken or empty" |
*
* @param {Ranger_Template_Broken_Or_Empty_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_template_broken_or_empty_title = /** @type {((inputs?: Ranger_Template_Broken_Or_Empty_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Template_Broken_Or_Empty_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_template_broken_or_empty_title(inputs)
	if (locale === "de") return de_ranger_template_broken_or_empty_title(inputs)
	if (locale === "fr") return fr_ranger_template_broken_or_empty_title(inputs)
	if (locale === "it") return it_ranger_template_broken_or_empty_title(inputs)
	if (locale === "nl") return nl_ranger_template_broken_or_empty_title(inputs)
	if (locale === "pl") return pl_ranger_template_broken_or_empty_title(inputs)
	if (locale === "pt") return pt_ranger_template_broken_or_empty_title(inputs)
	if (locale === "ru") return ru_ranger_template_broken_or_empty_title(inputs)
	if (locale === "sv") return sv_ranger_template_broken_or_empty_title(inputs)
	if (locale === "tr") return tr_ranger_template_broken_or_empty_title(inputs)
	if (locale === "zh") return zh_ranger_template_broken_or_empty_title(inputs)
	if (locale === "ja") return ja_ranger_template_broken_or_empty_title(inputs)
	return en_ranger_template_broken_or_empty_title(inputs)
});
