/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Step_DetailsInputs */

const en_upload_step_details = /** @type {(inputs: Upload_Step_DetailsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Details`)
};

const es_upload_step_details = /** @type {(inputs: Upload_Step_DetailsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ficha`)
};

const de_upload_step_details = /** @type {(inputs: Upload_Step_DetailsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Details`)
};

const fr_upload_step_details = /** @type {(inputs: Upload_Step_DetailsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fiche`)
};

const it_upload_step_details = /** @type {(inputs: Upload_Step_DetailsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scheda`)
};

const nl_upload_step_details = /** @type {(inputs: Upload_Step_DetailsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Details`)
};

const pl_upload_step_details = /** @type {(inputs: Upload_Step_DetailsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opis`)
};

const pt_upload_step_details = /** @type {(inputs: Upload_Step_DetailsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ficha`)
};

const ru_upload_step_details = /** @type {(inputs: Upload_Step_DetailsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Описание`)
};

const sv_upload_step_details = /** @type {(inputs: Upload_Step_DetailsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Detaljer`)
};

const tr_upload_step_details = /** @type {(inputs: Upload_Step_DetailsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ayrıntılar`)
};

const zh_upload_step_details = /** @type {(inputs: Upload_Step_DetailsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`详情`)
};

const ja_upload_step_details = /** @type {(inputs: Upload_Step_DetailsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`詳細`)
};

/**
* | output |
* | --- |
* | "Details" |
*
* @param {Upload_Step_DetailsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_step_details = /** @type {((inputs?: Upload_Step_DetailsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Step_DetailsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_step_details(inputs)
	if (locale === "de") return de_upload_step_details(inputs)
	if (locale === "fr") return fr_upload_step_details(inputs)
	if (locale === "it") return it_upload_step_details(inputs)
	if (locale === "nl") return nl_upload_step_details(inputs)
	if (locale === "pl") return pl_upload_step_details(inputs)
	if (locale === "pt") return pt_upload_step_details(inputs)
	if (locale === "ru") return ru_upload_step_details(inputs)
	if (locale === "sv") return sv_upload_step_details(inputs)
	if (locale === "tr") return tr_upload_step_details(inputs)
	if (locale === "zh") return zh_upload_step_details(inputs)
	if (locale === "ja") return ja_upload_step_details(inputs)
	return en_upload_step_details(inputs)
});
