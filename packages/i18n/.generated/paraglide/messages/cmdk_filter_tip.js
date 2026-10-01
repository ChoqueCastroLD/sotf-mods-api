/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Filter_TipInputs */

const en_cmdk_filter_tip = /** @type {(inputs: Cmdk_Filter_TipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tip: narrow the search with by:, cat:, sort:, type: and mp:.`)
};

const es_cmdk_filter_tip = /** @type {(inputs: Cmdk_Filter_TipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Consejo: afina la búsqueda con by:, cat:, sort:, type: y mp:.`)
};

const de_cmdk_filter_tip = /** @type {(inputs: Cmdk_Filter_TipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tipp: Mit by:, cat:, sort:, type: und mp: grenzt du die Suche ein.`)
};

const fr_cmdk_filter_tip = /** @type {(inputs: Cmdk_Filter_TipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Astuce : affinez avec by:, cat:, sort:, mp:, type:.`)
};

const it_cmdk_filter_tip = /** @type {(inputs: Cmdk_Filter_TipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suggerimento: restringi la ricerca con by:, cat:, sort:, type: e mp:.`)
};

const nl_cmdk_filter_tip = /** @type {(inputs: Cmdk_Filter_TipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tip: verfijn met by:, cat:, sort:, type: en mp:.`)
};

const pl_cmdk_filter_tip = /** @type {(inputs: Cmdk_Filter_TipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wskazówka: zawęź wyniki przez by:, cat:, sort:, type: i mp:.`)
};

const pt_cmdk_filter_tip = /** @type {(inputs: Cmdk_Filter_TipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dica: refine a pesquisa com by:, cat:, sort:, type: e mp:.`)
};

const ru_cmdk_filter_tip = /** @type {(inputs: Cmdk_Filter_TipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подсказка: сузьте поиск с помощью by:, cat:, sort:, type: и mp:.`)
};

const sv_cmdk_filter_tip = /** @type {(inputs: Cmdk_Filter_TipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tips: begränsa med by:, cat:, sort:, type: och mp:.`)
};

const tr_cmdk_filter_tip = /** @type {(inputs: Cmdk_Filter_TipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İpucu: aramayı by:, cat:, sort:, type: ve mp: ile daraltın.`)
};

const zh_cmdk_filter_tip = /** @type {(inputs: Cmdk_Filter_TipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`提示：用 by:、cat:、sort:、type:、mp: 缩小范围。`)
};

const ja_cmdk_filter_tip = /** @type {(inputs: Cmdk_Filter_TipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ヒント: by:、cat:、sort:、type:、mp: で絞り込めます。`)
};

/**
* | output |
* | --- |
* | "Tip: narrow the search with by:, cat:, sort:, type: and mp:." |
*
* @param {Cmdk_Filter_TipInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_filter_tip = /** @type {((inputs?: Cmdk_Filter_TipInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Filter_TipInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_filter_tip(inputs)
	if (locale === "de") return de_cmdk_filter_tip(inputs)
	if (locale === "fr") return fr_cmdk_filter_tip(inputs)
	if (locale === "it") return it_cmdk_filter_tip(inputs)
	if (locale === "nl") return nl_cmdk_filter_tip(inputs)
	if (locale === "pl") return pl_cmdk_filter_tip(inputs)
	if (locale === "pt") return pt_cmdk_filter_tip(inputs)
	if (locale === "ru") return ru_cmdk_filter_tip(inputs)
	if (locale === "sv") return sv_cmdk_filter_tip(inputs)
	if (locale === "tr") return tr_cmdk_filter_tip(inputs)
	if (locale === "zh") return zh_cmdk_filter_tip(inputs)
	if (locale === "ja") return ja_cmdk_filter_tip(inputs)
	return en_cmdk_filter_tip(inputs)
});
