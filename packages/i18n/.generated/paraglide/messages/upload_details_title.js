/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Details_TitleInputs */

const en_upload_details_title = /** @type {(inputs: Upload_Details_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Details`)
};

const es_upload_details_title = /** @type {(inputs: Upload_Details_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ficha`)
};

const de_upload_details_title = /** @type {(inputs: Upload_Details_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Details`)
};

const fr_upload_details_title = /** @type {(inputs: Upload_Details_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fiche`)
};

const it_upload_details_title = /** @type {(inputs: Upload_Details_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scheda`)
};

const nl_upload_details_title = /** @type {(inputs: Upload_Details_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Details`)
};

const pl_upload_details_title = /** @type {(inputs: Upload_Details_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opis`)
};

const pt_upload_details_title = /** @type {(inputs: Upload_Details_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ficha`)
};

const ru_upload_details_title = /** @type {(inputs: Upload_Details_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Описание`)
};

const sv_upload_details_title = /** @type {(inputs: Upload_Details_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Detaljer`)
};

const tr_upload_details_title = /** @type {(inputs: Upload_Details_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ayrıntılar`)
};

const zh_upload_details_title = /** @type {(inputs: Upload_Details_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`详情`)
};

const ja_upload_details_title = /** @type {(inputs: Upload_Details_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`詳細`)
};

/**
* | output |
* | --- |
* | "Details" |
*
* @param {Upload_Details_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_details_title = /** @type {((inputs?: Upload_Details_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Details_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_details_title(inputs)
	if (locale === "de") return de_upload_details_title(inputs)
	if (locale === "fr") return fr_upload_details_title(inputs)
	if (locale === "it") return it_upload_details_title(inputs)
	if (locale === "nl") return nl_upload_details_title(inputs)
	if (locale === "pl") return pl_upload_details_title(inputs)
	if (locale === "pt") return pt_upload_details_title(inputs)
	if (locale === "ru") return ru_upload_details_title(inputs)
	if (locale === "sv") return sv_upload_details_title(inputs)
	if (locale === "tr") return tr_upload_details_title(inputs)
	if (locale === "zh") return zh_upload_details_title(inputs)
	if (locale === "ja") return ja_upload_details_title(inputs)
	return en_upload_details_title(inputs)
});
