/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Draft_Missing_TitleInputs */

const en_upload_draft_missing_title = /** @type {(inputs: Upload_Draft_Missing_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This draft no longer exists.`)
};

const es_upload_draft_missing_title = /** @type {(inputs: Upload_Draft_Missing_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este borrador ya no existe.`)
};

const de_upload_draft_missing_title = /** @type {(inputs: Upload_Draft_Missing_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dieser Entwurf existiert nicht mehr.`)
};

const fr_upload_draft_missing_title = /** @type {(inputs: Upload_Draft_Missing_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce brouillon n’existe plus.`)
};

const it_upload_draft_missing_title = /** @type {(inputs: Upload_Draft_Missing_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questa bozza non esiste più.`)
};

const nl_upload_draft_missing_title = /** @type {(inputs: Upload_Draft_Missing_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dit concept bestaat niet meer.`)
};

const pl_upload_draft_missing_title = /** @type {(inputs: Upload_Draft_Missing_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ten szkic już nie istnieje.`)
};

const pt_upload_draft_missing_title = /** @type {(inputs: Upload_Draft_Missing_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este rascunho não existe mais.`)
};

const ru_upload_draft_missing_title = /** @type {(inputs: Upload_Draft_Missing_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Этого черновика больше нет.`)
};

const sv_upload_draft_missing_title = /** @type {(inputs: Upload_Draft_Missing_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det här utkastet finns inte längre.`)
};

const tr_upload_draft_missing_title = /** @type {(inputs: Upload_Draft_Missing_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu taslak artık yok.`)
};

const zh_upload_draft_missing_title = /** @type {(inputs: Upload_Draft_Missing_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`这个草稿已不存在。`)
};

const ja_upload_draft_missing_title = /** @type {(inputs: Upload_Draft_Missing_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この下書きはもう存在しません。`)
};

/**
* | output |
* | --- |
* | "This draft no longer exists." |
*
* @param {Upload_Draft_Missing_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_draft_missing_title = /** @type {((inputs?: Upload_Draft_Missing_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Draft_Missing_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_draft_missing_title(inputs)
	if (locale === "de") return de_upload_draft_missing_title(inputs)
	if (locale === "fr") return fr_upload_draft_missing_title(inputs)
	if (locale === "it") return it_upload_draft_missing_title(inputs)
	if (locale === "nl") return nl_upload_draft_missing_title(inputs)
	if (locale === "pl") return pl_upload_draft_missing_title(inputs)
	if (locale === "pt") return pt_upload_draft_missing_title(inputs)
	if (locale === "ru") return ru_upload_draft_missing_title(inputs)
	if (locale === "sv") return sv_upload_draft_missing_title(inputs)
	if (locale === "tr") return tr_upload_draft_missing_title(inputs)
	if (locale === "zh") return zh_upload_draft_missing_title(inputs)
	if (locale === "ja") return ja_upload_draft_missing_title(inputs)
	return en_upload_draft_missing_title(inputs)
});
