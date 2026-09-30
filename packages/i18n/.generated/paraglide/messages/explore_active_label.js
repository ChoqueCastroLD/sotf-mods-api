/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Active_LabelInputs */

const en_explore_active_label = /** @type {(inputs: Explore_Active_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Active filters`)
};

const es_explore_active_label = /** @type {(inputs: Explore_Active_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtros activos`)
};

const de_explore_active_label = /** @type {(inputs: Explore_Active_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktive Filter`)
};

const fr_explore_active_label = /** @type {(inputs: Explore_Active_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtres actifs`)
};

const it_explore_active_label = /** @type {(inputs: Explore_Active_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtri attivi`)
};

const nl_explore_active_label = /** @type {(inputs: Explore_Active_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actieve filters`)
};

const pl_explore_active_label = /** @type {(inputs: Explore_Active_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktywne filtry`)
};

const pt_explore_active_label = /** @type {(inputs: Explore_Active_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtros ativos`)
};

const ru_explore_active_label = /** @type {(inputs: Explore_Active_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Активные фильтры`)
};

const sv_explore_active_label = /** @type {(inputs: Explore_Active_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktiva filter`)
};

const tr_explore_active_label = /** @type {(inputs: Explore_Active_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Etkin filtreler`)
};

const zh_explore_active_label = /** @type {(inputs: Explore_Active_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`当前筛选`)
};

const ja_explore_active_label = /** @type {(inputs: Explore_Active_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`適用中の絞り込み`)
};

/**
* | output |
* | --- |
* | "Active filters" |
*
* @param {Explore_Active_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_active_label = /** @type {((inputs?: Explore_Active_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Active_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_active_label(inputs)
	if (locale === "de") return de_explore_active_label(inputs)
	if (locale === "fr") return fr_explore_active_label(inputs)
	if (locale === "it") return it_explore_active_label(inputs)
	if (locale === "nl") return nl_explore_active_label(inputs)
	if (locale === "pl") return pl_explore_active_label(inputs)
	if (locale === "pt") return pt_explore_active_label(inputs)
	if (locale === "ru") return ru_explore_active_label(inputs)
	if (locale === "sv") return sv_explore_active_label(inputs)
	if (locale === "tr") return tr_explore_active_label(inputs)
	if (locale === "zh") return zh_explore_active_label(inputs)
	if (locale === "ja") return ja_explore_active_label(inputs)
	return en_explore_active_label(inputs)
});
