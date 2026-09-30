/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Step_ReviewInputs */

const en_upload_step_review = /** @type {(inputs: Upload_Step_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Review`)
};

const es_upload_step_review = /** @type {(inputs: Upload_Step_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Revisión`)
};

const de_upload_step_review = /** @type {(inputs: Upload_Step_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prüfung`)
};

const fr_upload_step_review = /** @type {(inputs: Upload_Step_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Relecture`)
};

const it_upload_step_review = /** @type {(inputs: Upload_Step_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Revisione`)
};

const nl_upload_step_review = /** @type {(inputs: Upload_Step_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Controle`)
};

const pl_upload_step_review = /** @type {(inputs: Upload_Step_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przegląd`)
};

const pt_upload_step_review = /** @type {(inputs: Upload_Step_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Revisão`)
};

const ru_upload_step_review = /** @type {(inputs: Upload_Step_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Проверка`)
};

const sv_upload_step_review = /** @type {(inputs: Upload_Step_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Granskning`)
};

const tr_upload_step_review = /** @type {(inputs: Upload_Step_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gözden geçirme`)
};

const zh_upload_step_review = /** @type {(inputs: Upload_Step_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`检查`)
};

const ja_upload_step_review = /** @type {(inputs: Upload_Step_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`確認`)
};

/**
* | output |
* | --- |
* | "Review" |
*
* @param {Upload_Step_ReviewInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_step_review = /** @type {((inputs?: Upload_Step_ReviewInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Step_ReviewInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_step_review(inputs)
	if (locale === "de") return de_upload_step_review(inputs)
	if (locale === "fr") return fr_upload_step_review(inputs)
	if (locale === "it") return it_upload_step_review(inputs)
	if (locale === "nl") return nl_upload_step_review(inputs)
	if (locale === "pl") return pl_upload_step_review(inputs)
	if (locale === "pt") return pt_upload_step_review(inputs)
	if (locale === "ru") return ru_upload_step_review(inputs)
	if (locale === "sv") return sv_upload_step_review(inputs)
	if (locale === "tr") return tr_upload_step_review(inputs)
	if (locale === "zh") return zh_upload_step_review(inputs)
	if (locale === "ja") return ja_upload_step_review(inputs)
	return en_upload_step_review(inputs)
});
