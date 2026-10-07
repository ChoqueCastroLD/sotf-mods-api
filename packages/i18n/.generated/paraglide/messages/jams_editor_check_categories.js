/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Check_CategoriesInputs */

const en_jams_editor_check_categories = /** @type {(inputs: Jams_Editor_Check_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`At least one voting category`)
};

const es_jams_editor_check_categories = /** @type {(inputs: Jams_Editor_Check_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Al menos una categoría de votación`)
};

const de_jams_editor_check_categories = /** @type {(inputs: Jams_Editor_Check_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mindestens eine Wertungskategorie`)
};

const fr_jams_editor_check_categories = /** @type {(inputs: Jams_Editor_Check_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Au moins une catégorie de vote`)
};

const it_jams_editor_check_categories = /** @type {(inputs: Jams_Editor_Check_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Almeno una categoria di voto`)
};

const nl_jams_editor_check_categories = /** @type {(inputs: Jams_Editor_Check_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Minstens één stemcategorie`)
};

const pl_jams_editor_check_categories = /** @type {(inputs: Jams_Editor_Check_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Co najmniej jedna kategoria głosowania`)
};

const pt_jams_editor_check_categories = /** @type {(inputs: Jams_Editor_Check_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pelo menos uma categoria de votação`)
};

const ru_jams_editor_check_categories = /** @type {(inputs: Jams_Editor_Check_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Хотя бы одна категория голосования`)
};

const sv_jams_editor_check_categories = /** @type {(inputs: Jams_Editor_Check_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Minst en röstningskategori`)
};

const tr_jams_editor_check_categories = /** @type {(inputs: Jams_Editor_Check_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En az bir oylama kategorisi`)
};

const zh_jams_editor_check_categories = /** @type {(inputs: Jams_Editor_Check_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`至少一个投票类别`)
};

const ja_jams_editor_check_categories = /** @type {(inputs: Jams_Editor_Check_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`投票カテゴリーが 1 つ以上`)
};

/**
* | output |
* | --- |
* | "At least one voting category" |
*
* @param {Jams_Editor_Check_CategoriesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_check_categories = /** @type {((inputs?: Jams_Editor_Check_CategoriesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Check_CategoriesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_check_categories(inputs)
	if (locale === "de") return de_jams_editor_check_categories(inputs)
	if (locale === "fr") return fr_jams_editor_check_categories(inputs)
	if (locale === "it") return it_jams_editor_check_categories(inputs)
	if (locale === "nl") return nl_jams_editor_check_categories(inputs)
	if (locale === "pl") return pl_jams_editor_check_categories(inputs)
	if (locale === "pt") return pt_jams_editor_check_categories(inputs)
	if (locale === "ru") return ru_jams_editor_check_categories(inputs)
	if (locale === "sv") return sv_jams_editor_check_categories(inputs)
	if (locale === "tr") return tr_jams_editor_check_categories(inputs)
	if (locale === "zh") return zh_jams_editor_check_categories(inputs)
	if (locale === "ja") return ja_jams_editor_check_categories(inputs)
	return en_jams_editor_check_categories(inputs)
});
