/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ label: NonNullable<unknown> }} Basecamp_Chart_PatchInputs */

const en_basecamp_chart_patch = /** @type {(inputs: Basecamp_Chart_PatchInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Patch ${i?.label}`)
};

const es_basecamp_chart_patch = /** @type {(inputs: Basecamp_Chart_PatchInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Parche ${i?.label}`)
};

const de_basecamp_chart_patch = /** @type {(inputs: Basecamp_Chart_PatchInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Patch ${i?.label}`)
};

const fr_basecamp_chart_patch = /** @type {(inputs: Basecamp_Chart_PatchInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Patch ${i?.label}`)
};

const it_basecamp_chart_patch = /** @type {(inputs: Basecamp_Chart_PatchInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Patch ${i?.label}`)
};

const nl_basecamp_chart_patch = /** @type {(inputs: Basecamp_Chart_PatchInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Patch ${i?.label}`)
};

const pl_basecamp_chart_patch = /** @type {(inputs: Basecamp_Chart_PatchInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Łatka ${i?.label}`)
};

const pt_basecamp_chart_patch = /** @type {(inputs: Basecamp_Chart_PatchInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Patch ${i?.label}`)
};

const ru_basecamp_chart_patch = /** @type {(inputs: Basecamp_Chart_PatchInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Патч ${i?.label}`)
};

const sv_basecamp_chart_patch = /** @type {(inputs: Basecamp_Chart_PatchInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Patch ${i?.label}`)
};

const tr_basecamp_chart_patch = /** @type {(inputs: Basecamp_Chart_PatchInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Yama ${i?.label}`)
};

const zh_basecamp_chart_patch = /** @type {(inputs: Basecamp_Chart_PatchInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`补丁 ${i?.label}`)
};

const ja_basecamp_chart_patch = /** @type {(inputs: Basecamp_Chart_PatchInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`パッチ ${i?.label}`)
};

/**
* | output |
* | --- |
* | "Patch {label}" |
*
* @param {Basecamp_Chart_PatchInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_chart_patch = /** @type {((inputs: Basecamp_Chart_PatchInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Chart_PatchInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_chart_patch(inputs)
	if (locale === "de") return de_basecamp_chart_patch(inputs)
	if (locale === "fr") return fr_basecamp_chart_patch(inputs)
	if (locale === "it") return it_basecamp_chart_patch(inputs)
	if (locale === "nl") return nl_basecamp_chart_patch(inputs)
	if (locale === "pl") return pl_basecamp_chart_patch(inputs)
	if (locale === "pt") return pt_basecamp_chart_patch(inputs)
	if (locale === "ru") return ru_basecamp_chart_patch(inputs)
	if (locale === "sv") return sv_basecamp_chart_patch(inputs)
	if (locale === "tr") return tr_basecamp_chart_patch(inputs)
	if (locale === "zh") return zh_basecamp_chart_patch(inputs)
	if (locale === "ja") return ja_basecamp_chart_patch(inputs)
	return en_basecamp_chart_patch(inputs)
});
