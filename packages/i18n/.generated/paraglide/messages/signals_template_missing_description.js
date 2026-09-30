/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_Template_Missing_DescriptionInputs */

const en_signals_template_missing_description = /** @type {(inputs: Signals_Template_Missing_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Please describe what the mod does, how to install it and how to use it.`)
};

const es_signals_template_missing_description = /** @type {(inputs: Signals_Template_Missing_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Describe qué hace el mod, cómo instalarlo y cómo usarlo.`)
};

const de_signals_template_missing_description = /** @type {(inputs: Signals_Template_Missing_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beschreibe bitte, was der Mod macht, wie man ihn installiert und benutzt.`)
};

const fr_signals_template_missing_description = /** @type {(inputs: Signals_Template_Missing_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Décrivez ce que fait le mod, comment l’installer et comment l’utiliser.`)
};

const it_signals_template_missing_description = /** @type {(inputs: Signals_Template_Missing_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descrivi cosa fa la mod, come installarla e come usarla.`)
};

const nl_signals_template_missing_description = /** @type {(inputs: Signals_Template_Missing_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beschrijf wat de mod doet, hoe je hem installeert en hoe je hem gebruikt.`)
};

const pl_signals_template_missing_description = /** @type {(inputs: Signals_Template_Missing_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opisz, co robi mod, jak go zainstalować i jak go używać.`)
};

const pt_signals_template_missing_description = /** @type {(inputs: Signals_Template_Missing_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descreva o que o mod faz, como instalar e como usar.`)
};

const ru_signals_template_missing_description = /** @type {(inputs: Signals_Template_Missing_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Опишите, что делает мод, как его установить и как им пользоваться.`)
};

const sv_signals_template_missing_description = /** @type {(inputs: Signals_Template_Missing_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beskriv vad modden gör, hur man installerar den och hur man använder den.`)
};

const tr_signals_template_missing_description = /** @type {(inputs: Signals_Template_Missing_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lütfen modun ne yaptığını, nasıl kurulduğunu ve nasıl kullanıldığını açıklayın.`)
};

const zh_signals_template_missing_description = /** @type {(inputs: Signals_Template_Missing_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请说明模组的功能、安装方法和使用方法。`)
};

const ja_signals_template_missing_description = /** @type {(inputs: Signals_Template_Missing_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MODの機能、インストール方法、使い方を説明してください。`)
};

/**
* | output |
* | --- |
* | "Please describe what the mod does, how to install it and how to use it." |
*
* @param {Signals_Template_Missing_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_template_missing_description = /** @type {((inputs?: Signals_Template_Missing_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Template_Missing_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_template_missing_description(inputs)
	if (locale === "de") return de_signals_template_missing_description(inputs)
	if (locale === "fr") return fr_signals_template_missing_description(inputs)
	if (locale === "it") return it_signals_template_missing_description(inputs)
	if (locale === "nl") return nl_signals_template_missing_description(inputs)
	if (locale === "pl") return pl_signals_template_missing_description(inputs)
	if (locale === "pt") return pt_signals_template_missing_description(inputs)
	if (locale === "ru") return ru_signals_template_missing_description(inputs)
	if (locale === "sv") return sv_signals_template_missing_description(inputs)
	if (locale === "tr") return tr_signals_template_missing_description(inputs)
	if (locale === "zh") return zh_signals_template_missing_description(inputs)
	if (locale === "ja") return ja_signals_template_missing_description(inputs)
	return en_signals_template_missing_description(inputs)
});
