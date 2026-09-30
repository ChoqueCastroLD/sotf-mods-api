/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Item_Note_LabelInputs */

const en_kits_item_note_label = /** @type {(inputs: Kits_Item_Note_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Curator’s note:`)
};

const es_kits_item_note_label = /** @type {(inputs: Kits_Item_Note_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nota del autor:`)
};

const de_kits_item_note_label = /** @type {(inputs: Kits_Item_Note_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notiz:`)
};

const fr_kits_item_note_label = /** @type {(inputs: Kits_Item_Note_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Note :`)
};

const it_kits_item_note_label = /** @type {(inputs: Kits_Item_Note_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nota:`)
};

const nl_kits_item_note_label = /** @type {(inputs: Kits_Item_Note_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notitie:`)
};

const pl_kits_item_note_label = /** @type {(inputs: Kits_Item_Note_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notatka:`)
};

const pt_kits_item_note_label = /** @type {(inputs: Kits_Item_Note_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nota:`)
};

const ru_kits_item_note_label = /** @type {(inputs: Kits_Item_Note_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Заметка:`)
};

const sv_kits_item_note_label = /** @type {(inputs: Kits_Item_Note_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anteckning:`)
};

const tr_kits_item_note_label = /** @type {(inputs: Kits_Item_Note_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Not:`)
};

const zh_kits_item_note_label = /** @type {(inputs: Kits_Item_Note_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`备注：`)
};

const ja_kits_item_note_label = /** @type {(inputs: Kits_Item_Note_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メモ：`)
};

/**
* | output |
* | --- |
* | "Curator’s note:" |
*
* @param {Kits_Item_Note_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_item_note_label = /** @type {((inputs?: Kits_Item_Note_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Item_Note_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_item_note_label(inputs)
	if (locale === "de") return de_kits_item_note_label(inputs)
	if (locale === "fr") return fr_kits_item_note_label(inputs)
	if (locale === "it") return it_kits_item_note_label(inputs)
	if (locale === "nl") return nl_kits_item_note_label(inputs)
	if (locale === "pl") return pl_kits_item_note_label(inputs)
	if (locale === "pt") return pt_kits_item_note_label(inputs)
	if (locale === "ru") return ru_kits_item_note_label(inputs)
	if (locale === "sv") return sv_kits_item_note_label(inputs)
	if (locale === "tr") return tr_kits_item_note_label(inputs)
	if (locale === "zh") return zh_kits_item_note_label(inputs)
	if (locale === "ja") return ja_kits_item_note_label(inputs)
	return en_kits_item_note_label(inputs)
});
