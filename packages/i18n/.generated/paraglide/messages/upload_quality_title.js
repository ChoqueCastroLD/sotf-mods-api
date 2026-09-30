/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Quality_TitleInputs */

const en_upload_quality_title = /** @type {(inputs: Upload_Quality_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Listing quality`)
};

const es_upload_quality_title = /** @type {(inputs: Upload_Quality_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Calidad de la ficha`)
};

const de_upload_quality_title = /** @type {(inputs: Upload_Quality_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qualität des Eintrags`)
};

const fr_upload_quality_title = /** @type {(inputs: Upload_Quality_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qualité de la fiche`)
};

const it_upload_quality_title = /** @type {(inputs: Upload_Quality_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qualità della scheda`)
};

const nl_upload_quality_title = /** @type {(inputs: Upload_Quality_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kwaliteit van de vermelding`)
};

const pl_upload_quality_title = /** @type {(inputs: Upload_Quality_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jakość wpisu`)
};

const pt_upload_quality_title = /** @type {(inputs: Upload_Quality_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qualidade da ficha`)
};

const ru_upload_quality_title = /** @type {(inputs: Upload_Quality_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Качество карточки`)
};

const sv_upload_quality_title = /** @type {(inputs: Upload_Quality_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sidans kvalitet`)
};

const tr_upload_quality_title = /** @type {(inputs: Upload_Quality_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sayfa kalitesi`)
};

const zh_upload_quality_title = /** @type {(inputs: Upload_Quality_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`页面质量`)
};

const ja_upload_quality_title = /** @type {(inputs: Upload_Quality_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ページの完成度`)
};

/**
* | output |
* | --- |
* | "Listing quality" |
*
* @param {Upload_Quality_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_quality_title = /** @type {((inputs?: Upload_Quality_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Quality_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_quality_title(inputs)
	if (locale === "de") return de_upload_quality_title(inputs)
	if (locale === "fr") return fr_upload_quality_title(inputs)
	if (locale === "it") return it_upload_quality_title(inputs)
	if (locale === "nl") return nl_upload_quality_title(inputs)
	if (locale === "pl") return pl_upload_quality_title(inputs)
	if (locale === "pt") return pt_upload_quality_title(inputs)
	if (locale === "ru") return ru_upload_quality_title(inputs)
	if (locale === "sv") return sv_upload_quality_title(inputs)
	if (locale === "tr") return tr_upload_quality_title(inputs)
	if (locale === "zh") return zh_upload_quality_title(inputs)
	if (locale === "ja") return ja_upload_quality_title(inputs)
	return en_upload_quality_title(inputs)
});
