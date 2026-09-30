/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Drafts_Empty_TitleInputs */

const en_upload_drafts_empty_title = /** @type {(inputs: Upload_Drafts_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No drafts`)
};

const es_upload_drafts_empty_title = /** @type {(inputs: Upload_Drafts_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sin borradores`)
};

const de_upload_drafts_empty_title = /** @type {(inputs: Upload_Drafts_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine Entwürfe`)
};

const fr_upload_drafts_empty_title = /** @type {(inputs: Upload_Drafts_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun brouillon`)
};

const it_upload_drafts_empty_title = /** @type {(inputs: Upload_Drafts_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessuna bozza`)
};

const nl_upload_drafts_empty_title = /** @type {(inputs: Upload_Drafts_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen concepten`)
};

const pl_upload_drafts_empty_title = /** @type {(inputs: Upload_Drafts_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak szkiców`)
};

const pt_upload_drafts_empty_title = /** @type {(inputs: Upload_Drafts_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhum rascunho`)
};

const ru_upload_drafts_empty_title = /** @type {(inputs: Upload_Drafts_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Черновиков нет`)
};

const sv_upload_drafts_empty_title = /** @type {(inputs: Upload_Drafts_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga utkast`)
};

const tr_upload_drafts_empty_title = /** @type {(inputs: Upload_Drafts_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Taslak yok`)
};

const zh_upload_drafts_empty_title = /** @type {(inputs: Upload_Drafts_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有草稿`)
};

const ja_upload_drafts_empty_title = /** @type {(inputs: Upload_Drafts_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下書きはありません`)
};

/**
* | output |
* | --- |
* | "No drafts" |
*
* @param {Upload_Drafts_Empty_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_drafts_empty_title = /** @type {((inputs?: Upload_Drafts_Empty_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Drafts_Empty_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_drafts_empty_title(inputs)
	if (locale === "de") return de_upload_drafts_empty_title(inputs)
	if (locale === "fr") return fr_upload_drafts_empty_title(inputs)
	if (locale === "it") return it_upload_drafts_empty_title(inputs)
	if (locale === "nl") return nl_upload_drafts_empty_title(inputs)
	if (locale === "pl") return pl_upload_drafts_empty_title(inputs)
	if (locale === "pt") return pt_upload_drafts_empty_title(inputs)
	if (locale === "ru") return ru_upload_drafts_empty_title(inputs)
	if (locale === "sv") return sv_upload_drafts_empty_title(inputs)
	if (locale === "tr") return tr_upload_drafts_empty_title(inputs)
	if (locale === "zh") return zh_upload_drafts_empty_title(inputs)
	if (locale === "ja") return ja_upload_drafts_empty_title(inputs)
	return en_upload_drafts_empty_title(inputs)
});
