/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Compare_Slot_HintInputs */

const en_explore_compare_slot_hint = /** @type {(inputs: Explore_Compare_Slot_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`creator/mod-name`)
};

const es_explore_compare_slot_hint = /** @type {(inputs: Explore_Compare_Slot_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`creador/nombre-del-mod`)
};

const de_explore_compare_slot_hint = /** @type {(inputs: Explore_Compare_Slot_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ersteller/mod-name`)
};

const fr_explore_compare_slot_hint = /** @type {(inputs: Explore_Compare_Slot_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`créateur/nom-du-mod`)
};

const it_explore_compare_slot_hint = /** @type {(inputs: Explore_Compare_Slot_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`creatore/nome-del-mod`)
};

const nl_explore_compare_slot_hint = /** @type {(inputs: Explore_Compare_Slot_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`maker/mod-naam`)
};

const pl_explore_compare_slot_hint = /** @type {(inputs: Explore_Compare_Slot_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`twórca/nazwa-moda`)
};

const pt_explore_compare_slot_hint = /** @type {(inputs: Explore_Compare_Slot_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`criador/nome-do-mod`)
};

const ru_explore_compare_slot_hint = /** @type {(inputs: Explore_Compare_Slot_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`автор/название-мода`)
};

const sv_explore_compare_slot_hint = /** @type {(inputs: Explore_Compare_Slot_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`skapare/mod-namn`)
};

const tr_explore_compare_slot_hint = /** @type {(inputs: Explore_Compare_Slot_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`yapimci/mod-adi`)
};

const zh_explore_compare_slot_hint = /** @type {(inputs: Explore_Compare_Slot_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创作者/模组名称`)
};

const ja_explore_compare_slot_hint = /** @type {(inputs: Explore_Compare_Slot_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`作者/mod-name`)
};

/**
* | output |
* | --- |
* | "creator/mod-name" |
*
* @param {Explore_Compare_Slot_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_compare_slot_hint = /** @type {((inputs?: Explore_Compare_Slot_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Compare_Slot_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_compare_slot_hint(inputs)
	if (locale === "de") return de_explore_compare_slot_hint(inputs)
	if (locale === "fr") return fr_explore_compare_slot_hint(inputs)
	if (locale === "it") return it_explore_compare_slot_hint(inputs)
	if (locale === "nl") return nl_explore_compare_slot_hint(inputs)
	if (locale === "pl") return pl_explore_compare_slot_hint(inputs)
	if (locale === "pt") return pt_explore_compare_slot_hint(inputs)
	if (locale === "ru") return ru_explore_compare_slot_hint(inputs)
	if (locale === "sv") return sv_explore_compare_slot_hint(inputs)
	if (locale === "tr") return tr_explore_compare_slot_hint(inputs)
	if (locale === "zh") return zh_explore_compare_slot_hint(inputs)
	if (locale === "ja") return ja_explore_compare_slot_hint(inputs)
	return en_explore_compare_slot_hint(inputs)
});
