/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_ResumeInputs */

const en_upload_resume = /** @type {(inputs: Upload_ResumeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resume upload`)
};

const es_upload_resume = /** @type {(inputs: Upload_ResumeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reanudar subida`)
};

const de_upload_resume = /** @type {(inputs: Upload_ResumeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upload fortsetzen`)
};

const fr_upload_resume = /** @type {(inputs: Upload_ResumeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reprendre l’envoi`)
};

const it_upload_resume = /** @type {(inputs: Upload_ResumeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Riprendi caricamento`)
};

const nl_upload_resume = /** @type {(inputs: Upload_ResumeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upload hervatten`)
};

const pl_upload_resume = /** @type {(inputs: Upload_ResumeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wznów wysyłanie`)
};

const pt_upload_resume = /** @type {(inputs: Upload_ResumeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retomar envio`)
};

const ru_upload_resume = /** @type {(inputs: Upload_ResumeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Продолжить загрузку`)
};

const sv_upload_resume = /** @type {(inputs: Upload_ResumeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Återuppta uppladdningen`)
};

const tr_upload_resume = /** @type {(inputs: Upload_ResumeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yüklemeye devam et`)
};

const zh_upload_resume = /** @type {(inputs: Upload_ResumeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`继续上传`)
};

const ja_upload_resume = /** @type {(inputs: Upload_ResumeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アップロードを再開`)
};

/**
* | output |
* | --- |
* | "Resume upload" |
*
* @param {Upload_ResumeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_resume = /** @type {((inputs?: Upload_ResumeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_ResumeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_resume(inputs)
	if (locale === "de") return de_upload_resume(inputs)
	if (locale === "fr") return fr_upload_resume(inputs)
	if (locale === "it") return it_upload_resume(inputs)
	if (locale === "nl") return nl_upload_resume(inputs)
	if (locale === "pl") return pl_upload_resume(inputs)
	if (locale === "pt") return pt_upload_resume(inputs)
	if (locale === "ru") return ru_upload_resume(inputs)
	if (locale === "sv") return sv_upload_resume(inputs)
	if (locale === "tr") return tr_upload_resume(inputs)
	if (locale === "zh") return zh_upload_resume(inputs)
	if (locale === "ja") return ja_upload_resume(inputs)
	return en_upload_resume(inputs)
});
