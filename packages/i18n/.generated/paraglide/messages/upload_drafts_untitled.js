/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Drafts_UntitledInputs */

const en_upload_drafts_untitled = /** @type {(inputs: Upload_Drafts_UntitledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Untitled draft`)
};

const es_upload_drafts_untitled = /** @type {(inputs: Upload_Drafts_UntitledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Borrador sin título`)
};

const de_upload_drafts_untitled = /** @type {(inputs: Upload_Drafts_UntitledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entwurf ohne Titel`)
};

const fr_upload_drafts_untitled = /** @type {(inputs: Upload_Drafts_UntitledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brouillon sans titre`)
};

const it_upload_drafts_untitled = /** @type {(inputs: Upload_Drafts_UntitledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bozza senza titolo`)
};

const nl_upload_drafts_untitled = /** @type {(inputs: Upload_Drafts_UntitledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Concept zonder titel`)
};

const pl_upload_drafts_untitled = /** @type {(inputs: Upload_Drafts_UntitledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szkic bez tytułu`)
};

const pt_upload_drafts_untitled = /** @type {(inputs: Upload_Drafts_UntitledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rascunho sem título`)
};

const ru_upload_drafts_untitled = /** @type {(inputs: Upload_Drafts_UntitledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Черновик без названия`)
};

const sv_upload_drafts_untitled = /** @type {(inputs: Upload_Drafts_UntitledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Namnlöst utkast`)
};

const tr_upload_drafts_untitled = /** @type {(inputs: Upload_Drafts_UntitledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adsız taslak`)
};

const zh_upload_drafts_untitled = /** @type {(inputs: Upload_Drafts_UntitledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未命名草稿`)
};

const ja_upload_drafts_untitled = /** @type {(inputs: Upload_Drafts_UntitledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`無題の下書き`)
};

/**
* | output |
* | --- |
* | "Untitled draft" |
*
* @param {Upload_Drafts_UntitledInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_drafts_untitled = /** @type {((inputs?: Upload_Drafts_UntitledInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Drafts_UntitledInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_drafts_untitled(inputs)
	if (locale === "de") return de_upload_drafts_untitled(inputs)
	if (locale === "fr") return fr_upload_drafts_untitled(inputs)
	if (locale === "it") return it_upload_drafts_untitled(inputs)
	if (locale === "nl") return nl_upload_drafts_untitled(inputs)
	if (locale === "pl") return pl_upload_drafts_untitled(inputs)
	if (locale === "pt") return pt_upload_drafts_untitled(inputs)
	if (locale === "ru") return ru_upload_drafts_untitled(inputs)
	if (locale === "sv") return sv_upload_drafts_untitled(inputs)
	if (locale === "tr") return tr_upload_drafts_untitled(inputs)
	if (locale === "zh") return zh_upload_drafts_untitled(inputs)
	if (locale === "ja") return ja_upload_drafts_untitled(inputs)
	return en_upload_drafts_untitled(inputs)
});
