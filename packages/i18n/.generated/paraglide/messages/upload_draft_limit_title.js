/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Draft_Limit_TitleInputs */

const en_upload_draft_limit_title = /** @type {(inputs: Upload_Draft_Limit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You have 20 drafts.`)
};

const es_upload_draft_limit_title = /** @type {(inputs: Upload_Draft_Limit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tienes 20 borradores.`)
};

const de_upload_draft_limit_title = /** @type {(inputs: Upload_Draft_Limit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du hast 20 Entwürfe.`)
};

const fr_upload_draft_limit_title = /** @type {(inputs: Upload_Draft_Limit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous avez 20 brouillons.`)
};

const it_upload_draft_limit_title = /** @type {(inputs: Upload_Draft_Limit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hai 20 bozze.`)
};

const nl_upload_draft_limit_title = /** @type {(inputs: Upload_Draft_Limit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je hebt 20 concepten.`)
};

const pl_upload_draft_limit_title = /** @type {(inputs: Upload_Draft_Limit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Masz 20 szkiców.`)
};

const pt_upload_draft_limit_title = /** @type {(inputs: Upload_Draft_Limit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você tem 20 rascunhos.`)
};

const ru_upload_draft_limit_title = /** @type {(inputs: Upload_Draft_Limit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`У вас 20 черновиков.`)
};

const sv_upload_draft_limit_title = /** @type {(inputs: Upload_Draft_Limit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du har 20 utkast.`)
};

const tr_upload_draft_limit_title = /** @type {(inputs: Upload_Draft_Limit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`20 taslağın var.`)
};

const zh_upload_draft_limit_title = /** @type {(inputs: Upload_Draft_Limit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你已有 20 个草稿。`)
};

const ja_upload_draft_limit_title = /** @type {(inputs: Upload_Draft_Limit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下書きが20件あります。`)
};

/**
* | output |
* | --- |
* | "You have 20 drafts." |
*
* @param {Upload_Draft_Limit_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_draft_limit_title = /** @type {((inputs?: Upload_Draft_Limit_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Draft_Limit_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_draft_limit_title(inputs)
	if (locale === "de") return de_upload_draft_limit_title(inputs)
	if (locale === "fr") return fr_upload_draft_limit_title(inputs)
	if (locale === "it") return it_upload_draft_limit_title(inputs)
	if (locale === "nl") return nl_upload_draft_limit_title(inputs)
	if (locale === "pl") return pl_upload_draft_limit_title(inputs)
	if (locale === "pt") return pt_upload_draft_limit_title(inputs)
	if (locale === "ru") return ru_upload_draft_limit_title(inputs)
	if (locale === "sv") return sv_upload_draft_limit_title(inputs)
	if (locale === "tr") return tr_upload_draft_limit_title(inputs)
	if (locale === "zh") return zh_upload_draft_limit_title(inputs)
	if (locale === "ja") return ja_upload_draft_limit_title(inputs)
	return en_upload_draft_limit_title(inputs)
});
