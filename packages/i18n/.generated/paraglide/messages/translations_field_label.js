/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ language: NonNullable<unknown> }} Translations_Field_LabelInputs */

const en_translations_field_label = /** @type {(inputs: Translations_Field_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Translation in ${i?.language}`)
};

const es_translations_field_label = /** @type {(inputs: Translations_Field_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Traducción al ${i?.language}`)
};

const de_translations_field_label = /** @type {(inputs: Translations_Field_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Übersetzung auf ${i?.language}`)
};

const fr_translations_field_label = /** @type {(inputs: Translations_Field_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Traduction en ${i?.language}`)
};

const it_translations_field_label = /** @type {(inputs: Translations_Field_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Traduzione in ${i?.language}`)
};

const nl_translations_field_label = /** @type {(inputs: Translations_Field_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Vertaling in het ${i?.language}`)
};

const pl_translations_field_label = /** @type {(inputs: Translations_Field_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tłumaczenie: ${i?.language}`)
};

const pt_translations_field_label = /** @type {(inputs: Translations_Field_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tradução em ${i?.language}`)
};

const ru_translations_field_label = /** @type {(inputs: Translations_Field_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Перевод: ${i?.language}`)
};

const sv_translations_field_label = /** @type {(inputs: Translations_Field_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Översättning till ${i?.language}`)
};

const tr_translations_field_label = /** @type {(inputs: Translations_Field_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.language} çevirisi`)
};

const zh_translations_field_label = /** @type {(inputs: Translations_Field_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.language}译文`)
};

const ja_translations_field_label = /** @type {(inputs: Translations_Field_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.language}の翻訳`)
};

/**
* | output |
* | --- |
* | "Translation in {language}" |
*
* @param {Translations_Field_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const translations_field_label = /** @type {((inputs: Translations_Field_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Translations_Field_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_translations_field_label(inputs)
	if (locale === "de") return de_translations_field_label(inputs)
	if (locale === "fr") return fr_translations_field_label(inputs)
	if (locale === "it") return it_translations_field_label(inputs)
	if (locale === "nl") return nl_translations_field_label(inputs)
	if (locale === "pl") return pl_translations_field_label(inputs)
	if (locale === "pt") return pt_translations_field_label(inputs)
	if (locale === "ru") return ru_translations_field_label(inputs)
	if (locale === "sv") return sv_translations_field_label(inputs)
	if (locale === "tr") return tr_translations_field_label(inputs)
	if (locale === "zh") return zh_translations_field_label(inputs)
	if (locale === "ja") return ja_translations_field_label(inputs)
	return en_translations_field_label(inputs)
});
