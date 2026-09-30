/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Dev_Col_PathInputs */

const en_content_dev_col_path = /** @type {(inputs: Content_Dev_Col_PathInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Path`)
};

const es_content_dev_col_path = /** @type {(inputs: Content_Dev_Col_PathInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ruta`)
};

const de_content_dev_col_path = /** @type {(inputs: Content_Dev_Col_PathInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pfad`)
};

const fr_content_dev_col_path = /** @type {(inputs: Content_Dev_Col_PathInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chemin`)
};

const it_content_dev_col_path = /** @type {(inputs: Content_Dev_Col_PathInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Percorso`)
};

const nl_content_dev_col_path = /** @type {(inputs: Content_Dev_Col_PathInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pad`)
};

const pl_content_dev_col_path = /** @type {(inputs: Content_Dev_Col_PathInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ścieżka`)
};

const pt_content_dev_col_path = /** @type {(inputs: Content_Dev_Col_PathInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Caminho`)
};

const ru_content_dev_col_path = /** @type {(inputs: Content_Dev_Col_PathInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Путь`)
};

const sv_content_dev_col_path = /** @type {(inputs: Content_Dev_Col_PathInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sökväg`)
};

const tr_content_dev_col_path = /** @type {(inputs: Content_Dev_Col_PathInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yol`)
};

const zh_content_dev_col_path = /** @type {(inputs: Content_Dev_Col_PathInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`路径`)
};

const ja_content_dev_col_path = /** @type {(inputs: Content_Dev_Col_PathInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`パス`)
};

/**
* | output |
* | --- |
* | "Path" |
*
* @param {Content_Dev_Col_PathInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_dev_col_path = /** @type {((inputs?: Content_Dev_Col_PathInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Dev_Col_PathInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_dev_col_path(inputs)
	if (locale === "de") return de_content_dev_col_path(inputs)
	if (locale === "fr") return fr_content_dev_col_path(inputs)
	if (locale === "it") return it_content_dev_col_path(inputs)
	if (locale === "nl") return nl_content_dev_col_path(inputs)
	if (locale === "pl") return pl_content_dev_col_path(inputs)
	if (locale === "pt") return pt_content_dev_col_path(inputs)
	if (locale === "ru") return ru_content_dev_col_path(inputs)
	if (locale === "sv") return sv_content_dev_col_path(inputs)
	if (locale === "tr") return tr_content_dev_col_path(inputs)
	if (locale === "zh") return zh_content_dev_col_path(inputs)
	if (locale === "ja") return ja_content_dev_col_path(inputs)
	return en_content_dev_col_path(inputs)
});
