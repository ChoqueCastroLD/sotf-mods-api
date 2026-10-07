/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Fill_RequiredInputs */

const en_jams_editor_fill_required = /** @type {(inputs: Jams_Editor_Fill_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Set the title, the dates and a category first.`)
};

const es_jams_editor_fill_required = /** @type {(inputs: Jams_Editor_Fill_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Primero define el título, las fechas y una categoría.`)
};

const de_jams_editor_fill_required = /** @type {(inputs: Jams_Editor_Fill_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lege zuerst Titel, Termine und eine Kategorie fest.`)
};

const fr_jams_editor_fill_required = /** @type {(inputs: Jams_Editor_Fill_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Définissez d’abord le titre, les dates et une catégorie.`)
};

const it_jams_editor_fill_required = /** @type {(inputs: Jams_Editor_Fill_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Imposta prima titolo, date e una categoria.`)
};

const nl_jams_editor_fill_required = /** @type {(inputs: Jams_Editor_Fill_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stel eerst de titel, de data en een categorie in.`)
};

const pl_jams_editor_fill_required = /** @type {(inputs: Jams_Editor_Fill_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najpierw ustaw tytuł, daty i kategorię.`)
};

const pt_jams_editor_fill_required = /** @type {(inputs: Jams_Editor_Fill_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Defina primeiro o título, as datas e uma categoria.`)
};

const ru_jams_editor_fill_required = /** @type {(inputs: Jams_Editor_Fill_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сначала задайте название, даты и категорию.`)
};

const sv_jams_editor_fill_required = /** @type {(inputs: Jams_Editor_Fill_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ange först titel, datum och en kategori.`)
};

const tr_jams_editor_fill_required = /** @type {(inputs: Jams_Editor_Fill_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Önce başlığı, tarihleri ve bir kategoriyi belirleyin.`)
};

const zh_jams_editor_fill_required = /** @type {(inputs: Jams_Editor_Fill_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请先设置标题、日期和一个类别。`)
};

const ja_jams_editor_fill_required = /** @type {(inputs: Jams_Editor_Fill_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`先にタイトル、日程、カテゴリーを設定してください。`)
};

/**
* | output |
* | --- |
* | "Set the title, the dates and a category first." |
*
* @param {Jams_Editor_Fill_RequiredInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_fill_required = /** @type {((inputs?: Jams_Editor_Fill_RequiredInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Fill_RequiredInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_fill_required(inputs)
	if (locale === "de") return de_jams_editor_fill_required(inputs)
	if (locale === "fr") return fr_jams_editor_fill_required(inputs)
	if (locale === "it") return it_jams_editor_fill_required(inputs)
	if (locale === "nl") return nl_jams_editor_fill_required(inputs)
	if (locale === "pl") return pl_jams_editor_fill_required(inputs)
	if (locale === "pt") return pt_jams_editor_fill_required(inputs)
	if (locale === "ru") return ru_jams_editor_fill_required(inputs)
	if (locale === "sv") return sv_jams_editor_fill_required(inputs)
	if (locale === "tr") return tr_jams_editor_fill_required(inputs)
	if (locale === "zh") return zh_jams_editor_fill_required(inputs)
	if (locale === "ja") return ja_jams_editor_fill_required(inputs)
	return en_jams_editor_fill_required(inputs)
});
