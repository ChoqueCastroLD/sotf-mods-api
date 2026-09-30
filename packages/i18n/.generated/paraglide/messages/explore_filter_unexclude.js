/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ label: NonNullable<unknown> }} Explore_Filter_UnexcludeInputs */

const en_explore_filter_unexclude = /** @type {(inputs: Explore_Filter_UnexcludeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Stop excluding ${i?.label}`)
};

const es_explore_filter_unexclude = /** @type {(inputs: Explore_Filter_UnexcludeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dejar de excluir ${i?.label}`)
};

const de_explore_filter_unexclude = /** @type {(inputs: Explore_Filter_UnexcludeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} nicht mehr ausschließen`)
};

const fr_explore_filter_unexclude = /** @type {(inputs: Explore_Filter_UnexcludeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ne plus exclure ${i?.label}`)
};

const it_explore_filter_unexclude = /** @type {(inputs: Explore_Filter_UnexcludeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Non escludere più ${i?.label}`)
};

const nl_explore_filter_unexclude = /** @type {(inputs: Explore_Filter_UnexcludeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} niet meer uitsluiten`)
};

const pl_explore_filter_unexclude = /** @type {(inputs: Explore_Filter_UnexcludeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Przestań wykluczać: ${i?.label}`)
};

const pt_explore_filter_unexclude = /** @type {(inputs: Explore_Filter_UnexcludeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Parar de excluir ${i?.label}`)
};

const ru_explore_filter_unexclude = /** @type {(inputs: Explore_Filter_UnexcludeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Больше не исключать: ${i?.label}`)
};

const sv_explore_filter_unexclude = /** @type {(inputs: Explore_Filter_UnexcludeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sluta utesluta ${i?.label}`)
};

const tr_explore_filter_unexclude = /** @type {(inputs: Explore_Filter_UnexcludeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} artık hariç tutulmasın`)
};

const zh_explore_filter_unexclude = /** @type {(inputs: Explore_Filter_UnexcludeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`取消排除 ${i?.label}`)
};

const ja_explore_filter_unexclude = /** @type {(inputs: Explore_Filter_UnexcludeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} の除外をやめる`)
};

/**
* | output |
* | --- |
* | "Stop excluding {label}" |
*
* @param {Explore_Filter_UnexcludeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_filter_unexclude = /** @type {((inputs: Explore_Filter_UnexcludeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Filter_UnexcludeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_filter_unexclude(inputs)
	if (locale === "de") return de_explore_filter_unexclude(inputs)
	if (locale === "fr") return fr_explore_filter_unexclude(inputs)
	if (locale === "it") return it_explore_filter_unexclude(inputs)
	if (locale === "nl") return nl_explore_filter_unexclude(inputs)
	if (locale === "pl") return pl_explore_filter_unexclude(inputs)
	if (locale === "pt") return pt_explore_filter_unexclude(inputs)
	if (locale === "ru") return ru_explore_filter_unexclude(inputs)
	if (locale === "sv") return sv_explore_filter_unexclude(inputs)
	if (locale === "tr") return tr_explore_filter_unexclude(inputs)
	if (locale === "zh") return zh_explore_filter_unexclude(inputs)
	if (locale === "ja") return ja_explore_filter_unexclude(inputs)
	return en_explore_filter_unexclude(inputs)
});
