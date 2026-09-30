/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Kind_LabelInputs */

const en_builds_kind_label = /** @type {(inputs: Builds_Kind_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`BuildShare blueprint`)
};

const es_builds_kind_label = /** @type {(inputs: Builds_Kind_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plano de BuildShare`)
};

const de_builds_kind_label = /** @type {(inputs: Builds_Kind_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`BuildShare-Bauplan`)
};

const fr_builds_kind_label = /** @type {(inputs: Builds_Kind_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plan BuildShare`)
};

const it_builds_kind_label = /** @type {(inputs: Builds_Kind_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Progetto BuildShare`)
};

const nl_builds_kind_label = /** @type {(inputs: Builds_Kind_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`BuildShare-bouwtekening`)
};

const pl_builds_kind_label = /** @type {(inputs: Builds_Kind_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plan BuildShare`)
};

const pt_builds_kind_label = /** @type {(inputs: Builds_Kind_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Planta do BuildShare`)
};

const ru_builds_kind_label = /** @type {(inputs: Builds_Kind_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Чертёж BuildShare`)
};

const sv_builds_kind_label = /** @type {(inputs: Builds_Kind_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`BuildShare-ritning`)
};

const tr_builds_kind_label = /** @type {(inputs: Builds_Kind_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`BuildShare planı`)
};

const zh_builds_kind_label = /** @type {(inputs: Builds_Kind_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`BuildShare 蓝图`)
};

const ja_builds_kind_label = /** @type {(inputs: Builds_Kind_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`BuildShare 設計図`)
};

/**
* | output |
* | --- |
* | "BuildShare blueprint" |
*
* @param {Builds_Kind_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_kind_label = /** @type {((inputs?: Builds_Kind_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Kind_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_kind_label(inputs)
	if (locale === "de") return de_builds_kind_label(inputs)
	if (locale === "fr") return fr_builds_kind_label(inputs)
	if (locale === "it") return it_builds_kind_label(inputs)
	if (locale === "nl") return nl_builds_kind_label(inputs)
	if (locale === "pl") return pl_builds_kind_label(inputs)
	if (locale === "pt") return pt_builds_kind_label(inputs)
	if (locale === "ru") return ru_builds_kind_label(inputs)
	if (locale === "sv") return sv_builds_kind_label(inputs)
	if (locale === "tr") return tr_builds_kind_label(inputs)
	if (locale === "zh") return zh_builds_kind_label(inputs)
	if (locale === "ja") return ja_builds_kind_label(inputs)
	return en_builds_kind_label(inputs)
});
