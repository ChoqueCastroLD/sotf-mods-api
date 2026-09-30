/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Editor_Empty_TitleInputs */

const en_kits_editor_empty_title = /** @type {(inputs: Kits_Editor_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lay out your first item`)
};

const es_kits_editor_empty_title = /** @type {(inputs: Kits_Editor_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Coloca tu primer elemento`)
};

const de_kits_editor_empty_title = /** @type {(inputs: Kits_Editor_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leg deinen ersten Eintrag aus`)
};

const fr_kits_editor_empty_title = /** @type {(inputs: Kits_Editor_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Posez votre premier élément`)
};

const it_kits_editor_empty_title = /** @type {(inputs: Kits_Editor_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Disponi il primo elemento`)
};

const nl_kits_editor_empty_title = /** @type {(inputs: Kits_Editor_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leg je eerste item neer`)
};

const pl_kits_editor_empty_title = /** @type {(inputs: Kits_Editor_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rozłóż pierwszy element`)
};

const pt_kits_editor_empty_title = /** @type {(inputs: Kits_Editor_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Coloque seu primeiro item`)
};

const ru_kits_editor_empty_title = /** @type {(inputs: Kits_Editor_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Разложите первый элемент`)
};

const sv_kits_editor_empty_title = /** @type {(inputs: Kits_Editor_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lägg ut ditt första objekt`)
};

const tr_kits_editor_empty_title = /** @type {(inputs: Kits_Editor_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İlk öğeni yerleştir`)
};

const zh_kits_editor_empty_title = /** @type {(inputs: Kits_Editor_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`摆上第一项`)
};

const ja_kits_editor_empty_title = /** @type {(inputs: Kits_Editor_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最初のアイテムを並べましょう`)
};

/**
* | output |
* | --- |
* | "Lay out your first item" |
*
* @param {Kits_Editor_Empty_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_editor_empty_title = /** @type {((inputs?: Kits_Editor_Empty_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Editor_Empty_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_editor_empty_title(inputs)
	if (locale === "de") return de_kits_editor_empty_title(inputs)
	if (locale === "fr") return fr_kits_editor_empty_title(inputs)
	if (locale === "it") return it_kits_editor_empty_title(inputs)
	if (locale === "nl") return nl_kits_editor_empty_title(inputs)
	if (locale === "pl") return pl_kits_editor_empty_title(inputs)
	if (locale === "pt") return pt_kits_editor_empty_title(inputs)
	if (locale === "ru") return ru_kits_editor_empty_title(inputs)
	if (locale === "sv") return sv_kits_editor_empty_title(inputs)
	if (locale === "tr") return tr_kits_editor_empty_title(inputs)
	if (locale === "zh") return zh_kits_editor_empty_title(inputs)
	if (locale === "ja") return ja_kits_editor_empty_title(inputs)
	return en_kits_editor_empty_title(inputs)
});
