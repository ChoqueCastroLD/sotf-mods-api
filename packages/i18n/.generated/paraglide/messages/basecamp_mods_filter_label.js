/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Mods_Filter_LabelInputs */

const en_basecamp_mods_filter_label = /** @type {(inputs: Basecamp_Mods_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Status`)
};

const es_basecamp_mods_filter_label = /** @type {(inputs: Basecamp_Mods_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Estado`)
};

const de_basecamp_mods_filter_label = /** @type {(inputs: Basecamp_Mods_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Status`)
};

const fr_basecamp_mods_filter_label = /** @type {(inputs: Basecamp_Mods_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`État`)
};

const it_basecamp_mods_filter_label = /** @type {(inputs: Basecamp_Mods_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stato`)
};

const nl_basecamp_mods_filter_label = /** @type {(inputs: Basecamp_Mods_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Status`)
};

const pl_basecamp_mods_filter_label = /** @type {(inputs: Basecamp_Mods_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stan`)
};

const pt_basecamp_mods_filter_label = /** @type {(inputs: Basecamp_Mods_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Estado`)
};

const ru_basecamp_mods_filter_label = /** @type {(inputs: Basecamp_Mods_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Статус`)
};

const sv_basecamp_mods_filter_label = /** @type {(inputs: Basecamp_Mods_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Status`)
};

const tr_basecamp_mods_filter_label = /** @type {(inputs: Basecamp_Mods_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Durum`)
};

const zh_basecamp_mods_filter_label = /** @type {(inputs: Basecamp_Mods_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`状态`)
};

const ja_basecamp_mods_filter_label = /** @type {(inputs: Basecamp_Mods_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`状態`)
};

/**
* | output |
* | --- |
* | "Status" |
*
* @param {Basecamp_Mods_Filter_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_mods_filter_label = /** @type {((inputs?: Basecamp_Mods_Filter_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Mods_Filter_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_mods_filter_label(inputs)
	if (locale === "de") return de_basecamp_mods_filter_label(inputs)
	if (locale === "fr") return fr_basecamp_mods_filter_label(inputs)
	if (locale === "it") return it_basecamp_mods_filter_label(inputs)
	if (locale === "nl") return nl_basecamp_mods_filter_label(inputs)
	if (locale === "pl") return pl_basecamp_mods_filter_label(inputs)
	if (locale === "pt") return pt_basecamp_mods_filter_label(inputs)
	if (locale === "ru") return ru_basecamp_mods_filter_label(inputs)
	if (locale === "sv") return sv_basecamp_mods_filter_label(inputs)
	if (locale === "tr") return tr_basecamp_mods_filter_label(inputs)
	if (locale === "zh") return zh_basecamp_mods_filter_label(inputs)
	if (locale === "ja") return ja_basecamp_mods_filter_label(inputs)
	return en_basecamp_mods_filter_label(inputs)
});
