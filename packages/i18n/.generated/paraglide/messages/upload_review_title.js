/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Review_TitleInputs */

const en_upload_review_title = /** @type {(inputs: Upload_Review_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Review`)
};

const es_upload_review_title = /** @type {(inputs: Upload_Review_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Revisión`)
};

const de_upload_review_title = /** @type {(inputs: Upload_Review_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prüfung`)
};

const fr_upload_review_title = /** @type {(inputs: Upload_Review_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Relecture`)
};

const it_upload_review_title = /** @type {(inputs: Upload_Review_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Revisione`)
};

const nl_upload_review_title = /** @type {(inputs: Upload_Review_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Controle`)
};

const pl_upload_review_title = /** @type {(inputs: Upload_Review_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przegląd`)
};

const pt_upload_review_title = /** @type {(inputs: Upload_Review_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Revisão`)
};

const ru_upload_review_title = /** @type {(inputs: Upload_Review_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Проверка`)
};

const sv_upload_review_title = /** @type {(inputs: Upload_Review_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Granskning`)
};

const tr_upload_review_title = /** @type {(inputs: Upload_Review_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gözden geçirme`)
};

const zh_upload_review_title = /** @type {(inputs: Upload_Review_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`检查`)
};

const ja_upload_review_title = /** @type {(inputs: Upload_Review_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`確認`)
};

/**
* | output |
* | --- |
* | "Review" |
*
* @param {Upload_Review_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_review_title = /** @type {((inputs?: Upload_Review_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Review_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_review_title(inputs)
	if (locale === "de") return de_upload_review_title(inputs)
	if (locale === "fr") return fr_upload_review_title(inputs)
	if (locale === "it") return it_upload_review_title(inputs)
	if (locale === "nl") return nl_upload_review_title(inputs)
	if (locale === "pl") return pl_upload_review_title(inputs)
	if (locale === "pt") return pt_upload_review_title(inputs)
	if (locale === "ru") return ru_upload_review_title(inputs)
	if (locale === "sv") return sv_upload_review_title(inputs)
	if (locale === "tr") return tr_upload_review_title(inputs)
	if (locale === "zh") return zh_upload_review_title(inputs)
	if (locale === "ja") return ja_upload_review_title(inputs)
	return en_upload_review_title(inputs)
});
