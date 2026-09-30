/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ title: NonNullable<unknown> }} Ranger_Item_Document_TitleInputs */

const en_ranger_item_document_title = /** @type {(inputs: Ranger_Item_Document_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Review: ${i?.title}`)
};

const es_ranger_item_document_title = /** @type {(inputs: Ranger_Item_Document_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Revisión: ${i?.title}`)
};

const de_ranger_item_document_title = /** @type {(inputs: Ranger_Item_Document_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Prüfung: ${i?.title}`)
};

const fr_ranger_item_document_title = /** @type {(inputs: Ranger_Item_Document_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Examen : ${i?.title}`)
};

const it_ranger_item_document_title = /** @type {(inputs: Ranger_Item_Document_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Esame: ${i?.title}`)
};

const nl_ranger_item_document_title = /** @type {(inputs: Ranger_Item_Document_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Beoordeling: ${i?.title}`)
};

const pl_ranger_item_document_title = /** @type {(inputs: Ranger_Item_Document_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Przegląd: ${i?.title}`)
};

const pt_ranger_item_document_title = /** @type {(inputs: Ranger_Item_Document_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Revisão: ${i?.title}`)
};

const ru_ranger_item_document_title = /** @type {(inputs: Ranger_Item_Document_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Проверка: ${i?.title}`)
};

const sv_ranger_item_document_title = /** @type {(inputs: Ranger_Item_Document_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Granskning: ${i?.title}`)
};

const tr_ranger_item_document_title = /** @type {(inputs: Ranger_Item_Document_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`İnceleme: ${i?.title}`)
};

const zh_ranger_item_document_title = /** @type {(inputs: Ranger_Item_Document_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`审核：${i?.title}`)
};

const ja_ranger_item_document_title = /** @type {(inputs: Ranger_Item_Document_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`レビュー：${i?.title}`)
};

/**
* | output |
* | --- |
* | "Review: {title}" |
*
* @param {Ranger_Item_Document_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_item_document_title = /** @type {((inputs: Ranger_Item_Document_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Item_Document_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_item_document_title(inputs)
	if (locale === "de") return de_ranger_item_document_title(inputs)
	if (locale === "fr") return fr_ranger_item_document_title(inputs)
	if (locale === "it") return it_ranger_item_document_title(inputs)
	if (locale === "nl") return nl_ranger_item_document_title(inputs)
	if (locale === "pl") return pl_ranger_item_document_title(inputs)
	if (locale === "pt") return pt_ranger_item_document_title(inputs)
	if (locale === "ru") return ru_ranger_item_document_title(inputs)
	if (locale === "sv") return sv_ranger_item_document_title(inputs)
	if (locale === "tr") return tr_ranger_item_document_title(inputs)
	if (locale === "zh") return zh_ranger_item_document_title(inputs)
	if (locale === "ja") return ja_ranger_item_document_title(inputs)
	return en_ranger_item_document_title(inputs)
});
