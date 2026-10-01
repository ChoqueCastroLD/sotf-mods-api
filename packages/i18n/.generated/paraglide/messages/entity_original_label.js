/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Entity_Original_LabelInputs */

const en_entity_original_label = /** @type {(inputs: Entity_Original_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Original title`)
};

const es_entity_original_label = /** @type {(inputs: Entity_Original_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Título original`)
};

const de_entity_original_label = /** @type {(inputs: Entity_Original_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Originaltitel`)
};

const fr_entity_original_label = /** @type {(inputs: Entity_Original_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Titre original`)
};

const it_entity_original_label = /** @type {(inputs: Entity_Original_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Titolo originale`)
};

const nl_entity_original_label = /** @type {(inputs: Entity_Original_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Originele titel`)
};

const pl_entity_original_label = /** @type {(inputs: Entity_Original_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tytuł oryginalny`)
};

const pt_entity_original_label = /** @type {(inputs: Entity_Original_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Título original`)
};

const ru_entity_original_label = /** @type {(inputs: Entity_Original_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Оригинальное название`)
};

const sv_entity_original_label = /** @type {(inputs: Entity_Original_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Originaltitel`)
};

const tr_entity_original_label = /** @type {(inputs: Entity_Original_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Orijinal başlık`)
};

const zh_entity_original_label = /** @type {(inputs: Entity_Original_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`原标题`)
};

const ja_entity_original_label = /** @type {(inputs: Entity_Original_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`原題`)
};

/**
* | output |
* | --- |
* | "Original title" |
*
* @param {Entity_Original_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const entity_original_label = /** @type {((inputs?: Entity_Original_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Entity_Original_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_entity_original_label(inputs)
	if (locale === "de") return de_entity_original_label(inputs)
	if (locale === "fr") return fr_entity_original_label(inputs)
	if (locale === "it") return it_entity_original_label(inputs)
	if (locale === "nl") return nl_entity_original_label(inputs)
	if (locale === "pl") return pl_entity_original_label(inputs)
	if (locale === "pt") return pt_entity_original_label(inputs)
	if (locale === "ru") return ru_entity_original_label(inputs)
	if (locale === "sv") return sv_entity_original_label(inputs)
	if (locale === "tr") return tr_entity_original_label(inputs)
	if (locale === "zh") return zh_entity_original_label(inputs)
	if (locale === "ja") return ja_entity_original_label(inputs)
	return en_entity_original_label(inputs)
});
