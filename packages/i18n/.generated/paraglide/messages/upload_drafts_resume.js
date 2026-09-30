/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Drafts_ResumeInputs */

const en_upload_drafts_resume = /** @type {(inputs: Upload_Drafts_ResumeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resume`)
};

const es_upload_drafts_resume = /** @type {(inputs: Upload_Drafts_ResumeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retomar`)
};

const de_upload_drafts_resume = /** @type {(inputs: Upload_Drafts_ResumeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fortsetzen`)
};

const fr_upload_drafts_resume = /** @type {(inputs: Upload_Drafts_ResumeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reprendre`)
};

const it_upload_drafts_resume = /** @type {(inputs: Upload_Drafts_ResumeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Riprendi`)
};

const nl_upload_drafts_resume = /** @type {(inputs: Upload_Drafts_ResumeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verdergaan`)
};

const pl_upload_drafts_resume = /** @type {(inputs: Upload_Drafts_ResumeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wznów`)
};

const pt_upload_drafts_resume = /** @type {(inputs: Upload_Drafts_ResumeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retomar`)
};

const ru_upload_drafts_resume = /** @type {(inputs: Upload_Drafts_ResumeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Продолжить`)
};

const sv_upload_drafts_resume = /** @type {(inputs: Upload_Drafts_ResumeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fortsätt`)
};

const tr_upload_drafts_resume = /** @type {(inputs: Upload_Drafts_ResumeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Devam et`)
};

const zh_upload_drafts_resume = /** @type {(inputs: Upload_Drafts_ResumeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`继续`)
};

const ja_upload_drafts_resume = /** @type {(inputs: Upload_Drafts_ResumeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`再開`)
};

/**
* | output |
* | --- |
* | "Resume" |
*
* @param {Upload_Drafts_ResumeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_drafts_resume = /** @type {((inputs?: Upload_Drafts_ResumeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Drafts_ResumeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_drafts_resume(inputs)
	if (locale === "de") return de_upload_drafts_resume(inputs)
	if (locale === "fr") return fr_upload_drafts_resume(inputs)
	if (locale === "it") return it_upload_drafts_resume(inputs)
	if (locale === "nl") return nl_upload_drafts_resume(inputs)
	if (locale === "pl") return pl_upload_drafts_resume(inputs)
	if (locale === "pt") return pt_upload_drafts_resume(inputs)
	if (locale === "ru") return ru_upload_drafts_resume(inputs)
	if (locale === "sv") return sv_upload_drafts_resume(inputs)
	if (locale === "tr") return tr_upload_drafts_resume(inputs)
	if (locale === "zh") return zh_upload_drafts_resume(inputs)
	if (locale === "ja") return ja_upload_drafts_resume(inputs)
	return en_upload_drafts_resume(inputs)
});
