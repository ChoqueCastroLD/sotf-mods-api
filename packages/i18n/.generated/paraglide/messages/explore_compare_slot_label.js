/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ n: NonNullable<unknown> }} Explore_Compare_Slot_LabelInputs */

const en_explore_compare_slot_label = /** @type {(inputs: Explore_Compare_Slot_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mod ${i?.n}`)
};

const es_explore_compare_slot_label = /** @type {(inputs: Explore_Compare_Slot_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mod ${i?.n}`)
};

const de_explore_compare_slot_label = /** @type {(inputs: Explore_Compare_Slot_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mod ${i?.n}`)
};

const fr_explore_compare_slot_label = /** @type {(inputs: Explore_Compare_Slot_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mod ${i?.n}`)
};

const it_explore_compare_slot_label = /** @type {(inputs: Explore_Compare_Slot_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mod ${i?.n}`)
};

const nl_explore_compare_slot_label = /** @type {(inputs: Explore_Compare_Slot_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mod ${i?.n}`)
};

const pl_explore_compare_slot_label = /** @type {(inputs: Explore_Compare_Slot_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mod ${i?.n}`)
};

const pt_explore_compare_slot_label = /** @type {(inputs: Explore_Compare_Slot_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mod ${i?.n}`)
};

const ru_explore_compare_slot_label = /** @type {(inputs: Explore_Compare_Slot_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Мод ${i?.n}`)
};

const sv_explore_compare_slot_label = /** @type {(inputs: Explore_Compare_Slot_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mod ${i?.n}`)
};

const tr_explore_compare_slot_label = /** @type {(inputs: Explore_Compare_Slot_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mod ${i?.n}`)
};

const zh_explore_compare_slot_label = /** @type {(inputs: Explore_Compare_Slot_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`模组 ${i?.n}`)
};

const ja_explore_compare_slot_label = /** @type {(inputs: Explore_Compare_Slot_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mod ${i?.n}`)
};

/**
* | output |
* | --- |
* | "Mod {n}" |
*
* @param {Explore_Compare_Slot_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_compare_slot_label = /** @type {((inputs: Explore_Compare_Slot_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Compare_Slot_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_compare_slot_label(inputs)
	if (locale === "de") return de_explore_compare_slot_label(inputs)
	if (locale === "fr") return fr_explore_compare_slot_label(inputs)
	if (locale === "it") return it_explore_compare_slot_label(inputs)
	if (locale === "nl") return nl_explore_compare_slot_label(inputs)
	if (locale === "pl") return pl_explore_compare_slot_label(inputs)
	if (locale === "pt") return pt_explore_compare_slot_label(inputs)
	if (locale === "ru") return ru_explore_compare_slot_label(inputs)
	if (locale === "sv") return sv_explore_compare_slot_label(inputs)
	if (locale === "tr") return tr_explore_compare_slot_label(inputs)
	if (locale === "zh") return zh_explore_compare_slot_label(inputs)
	if (locale === "ja") return ja_explore_compare_slot_label(inputs)
	return en_explore_compare_slot_label(inputs)
});
