/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Dev_Col_StatusInputs */

const en_content_dev_col_status = /** @type {(inputs: Content_Dev_Col_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Status`)
};

const es_content_dev_col_status = /** @type {(inputs: Content_Dev_Col_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Estado`)
};

const de_content_dev_col_status = /** @type {(inputs: Content_Dev_Col_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Status`)
};

const fr_content_dev_col_status = /** @type {(inputs: Content_Dev_Col_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Statut`)
};

const it_content_dev_col_status = /** @type {(inputs: Content_Dev_Col_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stato`)
};

const nl_content_dev_col_status = /** @type {(inputs: Content_Dev_Col_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Status`)
};

const pl_content_dev_col_status = /** @type {(inputs: Content_Dev_Col_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Status`)
};

const pt_content_dev_col_status = /** @type {(inputs: Content_Dev_Col_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Status`)
};

const ru_content_dev_col_status = /** @type {(inputs: Content_Dev_Col_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Статус`)
};

const sv_content_dev_col_status = /** @type {(inputs: Content_Dev_Col_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Status`)
};

const tr_content_dev_col_status = /** @type {(inputs: Content_Dev_Col_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Durum`)
};

const zh_content_dev_col_status = /** @type {(inputs: Content_Dev_Col_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`状态`)
};

const ja_content_dev_col_status = /** @type {(inputs: Content_Dev_Col_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ステータス`)
};

/**
* | output |
* | --- |
* | "Status" |
*
* @param {Content_Dev_Col_StatusInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_dev_col_status = /** @type {((inputs?: Content_Dev_Col_StatusInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Dev_Col_StatusInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_dev_col_status(inputs)
	if (locale === "de") return de_content_dev_col_status(inputs)
	if (locale === "fr") return fr_content_dev_col_status(inputs)
	if (locale === "it") return it_content_dev_col_status(inputs)
	if (locale === "nl") return nl_content_dev_col_status(inputs)
	if (locale === "pl") return pl_content_dev_col_status(inputs)
	if (locale === "pt") return pt_content_dev_col_status(inputs)
	if (locale === "ru") return ru_content_dev_col_status(inputs)
	if (locale === "sv") return sv_content_dev_col_status(inputs)
	if (locale === "tr") return tr_content_dev_col_status(inputs)
	if (locale === "zh") return zh_content_dev_col_status(inputs)
	if (locale === "ja") return ja_content_dev_col_status(inputs)
	return en_content_dev_col_status(inputs)
});
