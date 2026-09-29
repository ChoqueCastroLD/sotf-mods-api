/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Pagination_LabelInputs */

const en_common_pagination_label = /** @type {(inputs: Common_Pagination_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pagination`)
};

const es_common_pagination_label = /** @type {(inputs: Common_Pagination_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paginación`)
};

const de_common_pagination_label = /** @type {(inputs: Common_Pagination_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seitennavigation`)
};

const fr_common_pagination_label = /** @type {(inputs: Common_Pagination_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pagination`)
};

const it_common_pagination_label = /** @type {(inputs: Common_Pagination_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paginazione`)
};

const nl_common_pagination_label = /** @type {(inputs: Common_Pagination_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paginering`)
};

const pl_common_pagination_label = /** @type {(inputs: Common_Pagination_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paginacja`)
};

const pt_common_pagination_label = /** @type {(inputs: Common_Pagination_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paginação`)
};

const ru_common_pagination_label = /** @type {(inputs: Common_Pagination_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Страницы`)
};

const sv_common_pagination_label = /** @type {(inputs: Common_Pagination_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sidnumrering`)
};

const tr_common_pagination_label = /** @type {(inputs: Common_Pagination_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sayfalama`)
};

const zh_common_pagination_label = /** @type {(inputs: Common_Pagination_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`分页`)
};

const ja_common_pagination_label = /** @type {(inputs: Common_Pagination_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ページ送り`)
};

/**
* | output |
* | --- |
* | "Pagination" |
*
* @param {Common_Pagination_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_pagination_label = /** @type {((inputs?: Common_Pagination_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Pagination_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_pagination_label(inputs)
	if (locale === "de") return de_common_pagination_label(inputs)
	if (locale === "fr") return fr_common_pagination_label(inputs)
	if (locale === "it") return it_common_pagination_label(inputs)
	if (locale === "nl") return nl_common_pagination_label(inputs)
	if (locale === "pl") return pl_common_pagination_label(inputs)
	if (locale === "pt") return pt_common_pagination_label(inputs)
	if (locale === "ru") return ru_common_pagination_label(inputs)
	if (locale === "sv") return sv_common_pagination_label(inputs)
	if (locale === "tr") return tr_common_pagination_label(inputs)
	if (locale === "zh") return zh_common_pagination_label(inputs)
	if (locale === "ja") return ja_common_pagination_label(inputs)
	return en_common_pagination_label(inputs)
});
