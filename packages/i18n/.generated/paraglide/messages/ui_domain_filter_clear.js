/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Filter_ClearInputs */

const en_ui_domain_filter_clear = /** @type {(inputs: Ui_Domain_Filter_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clear filters`)
};

const es_ui_domain_filter_clear = /** @type {(inputs: Ui_Domain_Filter_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quitar filtros`)
};

const de_ui_domain_filter_clear = /** @type {(inputs: Ui_Domain_Filter_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filter zurücksetzen`)
};

const fr_ui_domain_filter_clear = /** @type {(inputs: Ui_Domain_Filter_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Effacer les filtres`)
};

const it_ui_domain_filter_clear = /** @type {(inputs: Ui_Domain_Filter_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rimuovi i filtri`)
};

const nl_ui_domain_filter_clear = /** @type {(inputs: Ui_Domain_Filter_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filters wissen`)
};

const pl_ui_domain_filter_clear = /** @type {(inputs: Ui_Domain_Filter_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyczyść filtry`)
};

const pt_ui_domain_filter_clear = /** @type {(inputs: Ui_Domain_Filter_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Limpar filtros`)
};

const ru_ui_domain_filter_clear = /** @type {(inputs: Ui_Domain_Filter_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сбросить фильтры`)
};

const sv_ui_domain_filter_clear = /** @type {(inputs: Ui_Domain_Filter_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rensa filter`)
};

const tr_ui_domain_filter_clear = /** @type {(inputs: Ui_Domain_Filter_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtreleri temizle`)
};

const zh_ui_domain_filter_clear = /** @type {(inputs: Ui_Domain_Filter_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`清除筛选`)
};

const ja_ui_domain_filter_clear = /** @type {(inputs: Ui_Domain_Filter_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フィルターをクリア`)
};

/**
* | output |
* | --- |
* | "Clear filters" |
*
* @param {Ui_Domain_Filter_ClearInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_filter_clear = /** @type {((inputs?: Ui_Domain_Filter_ClearInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Filter_ClearInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_filter_clear(inputs)
	if (locale === "de") return de_ui_domain_filter_clear(inputs)
	if (locale === "fr") return fr_ui_domain_filter_clear(inputs)
	if (locale === "it") return it_ui_domain_filter_clear(inputs)
	if (locale === "nl") return nl_ui_domain_filter_clear(inputs)
	if (locale === "pl") return pl_ui_domain_filter_clear(inputs)
	if (locale === "pt") return pt_ui_domain_filter_clear(inputs)
	if (locale === "ru") return ru_ui_domain_filter_clear(inputs)
	if (locale === "sv") return sv_ui_domain_filter_clear(inputs)
	if (locale === "tr") return tr_ui_domain_filter_clear(inputs)
	if (locale === "zh") return zh_ui_domain_filter_clear(inputs)
	if (locale === "ja") return ja_ui_domain_filter_clear(inputs)
	return en_ui_domain_filter_clear(inputs)
});
