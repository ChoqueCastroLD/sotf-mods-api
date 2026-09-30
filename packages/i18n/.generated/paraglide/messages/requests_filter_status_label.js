/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_Filter_Status_LabelInputs */

const en_requests_filter_status_label = /** @type {(inputs: Requests_Filter_Status_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Status`)
};

const es_requests_filter_status_label = /** @type {(inputs: Requests_Filter_Status_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Estado`)
};

const de_requests_filter_status_label = /** @type {(inputs: Requests_Filter_Status_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Status`)
};

const fr_requests_filter_status_label = /** @type {(inputs: Requests_Filter_Status_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Statut`)
};

const it_requests_filter_status_label = /** @type {(inputs: Requests_Filter_Status_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stato`)
};

const nl_requests_filter_status_label = /** @type {(inputs: Requests_Filter_Status_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Status`)
};

const pl_requests_filter_status_label = /** @type {(inputs: Requests_Filter_Status_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Status`)
};

const pt_requests_filter_status_label = /** @type {(inputs: Requests_Filter_Status_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Estado`)
};

const ru_requests_filter_status_label = /** @type {(inputs: Requests_Filter_Status_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Статус`)
};

const sv_requests_filter_status_label = /** @type {(inputs: Requests_Filter_Status_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Status`)
};

const tr_requests_filter_status_label = /** @type {(inputs: Requests_Filter_Status_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Durum`)
};

const zh_requests_filter_status_label = /** @type {(inputs: Requests_Filter_Status_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`状态`)
};

const ja_requests_filter_status_label = /** @type {(inputs: Requests_Filter_Status_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ステータス`)
};

/**
* | output |
* | --- |
* | "Status" |
*
* @param {Requests_Filter_Status_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_filter_status_label = /** @type {((inputs?: Requests_Filter_Status_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_Filter_Status_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_filter_status_label(inputs)
	if (locale === "de") return de_requests_filter_status_label(inputs)
	if (locale === "fr") return fr_requests_filter_status_label(inputs)
	if (locale === "it") return it_requests_filter_status_label(inputs)
	if (locale === "nl") return nl_requests_filter_status_label(inputs)
	if (locale === "pl") return pl_requests_filter_status_label(inputs)
	if (locale === "pt") return pt_requests_filter_status_label(inputs)
	if (locale === "ru") return ru_requests_filter_status_label(inputs)
	if (locale === "sv") return sv_requests_filter_status_label(inputs)
	if (locale === "tr") return tr_requests_filter_status_label(inputs)
	if (locale === "zh") return zh_requests_filter_status_label(inputs)
	if (locale === "ja") return ja_requests_filter_status_label(inputs)
	return en_requests_filter_status_label(inputs)
});
