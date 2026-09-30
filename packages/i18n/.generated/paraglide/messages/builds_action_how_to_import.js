/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Action_How_To_ImportInputs */

const en_builds_action_how_to_import = /** @type {(inputs: Builds_Action_How_To_ImportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How to import`)
};

const es_builds_action_how_to_import = /** @type {(inputs: Builds_Action_How_To_ImportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cómo importar`)
};

const de_builds_action_how_to_import = /** @type {(inputs: Builds_Action_How_To_ImportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`So importierst du`)
};

const fr_builds_action_how_to_import = /** @type {(inputs: Builds_Action_How_To_ImportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comment l’importer`)
};

const it_builds_action_how_to_import = /** @type {(inputs: Builds_Action_How_To_ImportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Come importarla`)
};

const nl_builds_action_how_to_import = /** @type {(inputs: Builds_Action_How_To_ImportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zo importeer je`)
};

const pl_builds_action_how_to_import = /** @type {(inputs: Builds_Action_How_To_ImportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jak zaimportować`)
};

const pt_builds_action_how_to_import = /** @type {(inputs: Builds_Action_How_To_ImportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Como importar`)
};

const ru_builds_action_how_to_import = /** @type {(inputs: Builds_Action_How_To_ImportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Как импортировать`)
};

const sv_builds_action_how_to_import = /** @type {(inputs: Builds_Action_How_To_ImportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Så importerar du`)
};

const tr_builds_action_how_to_import = /** @type {(inputs: Builds_Action_How_To_ImportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nasıl içe aktarılır`)
};

const zh_builds_action_how_to_import = /** @type {(inputs: Builds_Action_How_To_ImportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`如何导入`)
};

const ja_builds_action_how_to_import = /** @type {(inputs: Builds_Action_How_To_ImportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`インポート方法`)
};

/**
* | output |
* | --- |
* | "How to import" |
*
* @param {Builds_Action_How_To_ImportInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_action_how_to_import = /** @type {((inputs?: Builds_Action_How_To_ImportInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Action_How_To_ImportInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_action_how_to_import(inputs)
	if (locale === "de") return de_builds_action_how_to_import(inputs)
	if (locale === "fr") return fr_builds_action_how_to_import(inputs)
	if (locale === "it") return it_builds_action_how_to_import(inputs)
	if (locale === "nl") return nl_builds_action_how_to_import(inputs)
	if (locale === "pl") return pl_builds_action_how_to_import(inputs)
	if (locale === "pt") return pt_builds_action_how_to_import(inputs)
	if (locale === "ru") return ru_builds_action_how_to_import(inputs)
	if (locale === "sv") return sv_builds_action_how_to_import(inputs)
	if (locale === "tr") return tr_builds_action_how_to_import(inputs)
	if (locale === "zh") return zh_builds_action_how_to_import(inputs)
	if (locale === "ja") return ja_builds_action_how_to_import(inputs)
	return en_builds_action_how_to_import(inputs)
});
