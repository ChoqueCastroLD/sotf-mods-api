/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Category_NameInputs */

const en_jams_editor_category_name = /** @type {(inputs: Jams_Editor_Category_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Name`)
};

const es_jams_editor_category_name = /** @type {(inputs: Jams_Editor_Category_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nombre`)
};

const de_jams_editor_category_name = /** @type {(inputs: Jams_Editor_Category_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Name`)
};

const fr_jams_editor_category_name = /** @type {(inputs: Jams_Editor_Category_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nom`)
};

const it_jams_editor_category_name = /** @type {(inputs: Jams_Editor_Category_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nome`)
};

const nl_jams_editor_category_name = /** @type {(inputs: Jams_Editor_Category_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Naam`)
};

const pl_jams_editor_category_name = /** @type {(inputs: Jams_Editor_Category_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nazwa`)
};

const pt_jams_editor_category_name = /** @type {(inputs: Jams_Editor_Category_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nome`)
};

const ru_jams_editor_category_name = /** @type {(inputs: Jams_Editor_Category_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Название`)
};

const sv_jams_editor_category_name = /** @type {(inputs: Jams_Editor_Category_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Namn`)
};

const tr_jams_editor_category_name = /** @type {(inputs: Jams_Editor_Category_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ad`)
};

const zh_jams_editor_category_name = /** @type {(inputs: Jams_Editor_Category_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`名称`)
};

const ja_jams_editor_category_name = /** @type {(inputs: Jams_Editor_Category_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`名前`)
};

/**
* | output |
* | --- |
* | "Name" |
*
* @param {Jams_Editor_Category_NameInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_category_name = /** @type {((inputs?: Jams_Editor_Category_NameInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Category_NameInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_category_name(inputs)
	if (locale === "de") return de_jams_editor_category_name(inputs)
	if (locale === "fr") return fr_jams_editor_category_name(inputs)
	if (locale === "it") return it_jams_editor_category_name(inputs)
	if (locale === "nl") return nl_jams_editor_category_name(inputs)
	if (locale === "pl") return pl_jams_editor_category_name(inputs)
	if (locale === "pt") return pt_jams_editor_category_name(inputs)
	if (locale === "ru") return ru_jams_editor_category_name(inputs)
	if (locale === "sv") return sv_jams_editor_category_name(inputs)
	if (locale === "tr") return tr_jams_editor_category_name(inputs)
	if (locale === "zh") return zh_jams_editor_category_name(inputs)
	if (locale === "ja") return ja_jams_editor_category_name(inputs)
	return en_jams_editor_category_name(inputs)
});
