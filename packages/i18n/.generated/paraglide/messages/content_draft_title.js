/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Draft_TitleInputs */

const en_content_draft_title = /** @type {(inputs: Content_Draft_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Draft: pending legal review`)
};

const es_content_draft_title = /** @type {(inputs: Content_Draft_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Borrador: pendiente de revisión legal`)
};

const de_content_draft_title = /** @type {(inputs: Content_Draft_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entwurf: rechtliche Prüfung ausstehend`)
};

const fr_content_draft_title = /** @type {(inputs: Content_Draft_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brouillon : en attente de relecture juridique`)
};

const it_content_draft_title = /** @type {(inputs: Content_Draft_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bozza: in attesa di revisione legale`)
};

const nl_content_draft_title = /** @type {(inputs: Content_Draft_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Concept: juridische controle volgt nog`)
};

const pl_content_draft_title = /** @type {(inputs: Content_Draft_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wersja robocza: czeka na weryfikację prawną`)
};

const pt_content_draft_title = /** @type {(inputs: Content_Draft_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rascunho: aguardando revisão jurídica`)
};

const ru_content_draft_title = /** @type {(inputs: Content_Draft_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Черновик: ждёт юридической проверки`)
};

const sv_content_draft_title = /** @type {(inputs: Content_Draft_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utkast: väntar på juridisk granskning`)
};

const tr_content_draft_title = /** @type {(inputs: Content_Draft_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Taslak: hukuki inceleme bekleniyor`)
};

const zh_content_draft_title = /** @type {(inputs: Content_Draft_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`草稿：等待法律审核`)
};

const ja_content_draft_title = /** @type {(inputs: Content_Draft_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`草案：法務レビュー待ち`)
};

/**
* | output |
* | --- |
* | "Draft: pending legal review" |
*
* @param {Content_Draft_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_draft_title = /** @type {((inputs?: Content_Draft_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Draft_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_draft_title(inputs)
	if (locale === "de") return de_content_draft_title(inputs)
	if (locale === "fr") return fr_content_draft_title(inputs)
	if (locale === "it") return it_content_draft_title(inputs)
	if (locale === "nl") return nl_content_draft_title(inputs)
	if (locale === "pl") return pl_content_draft_title(inputs)
	if (locale === "pt") return pt_content_draft_title(inputs)
	if (locale === "ru") return ru_content_draft_title(inputs)
	if (locale === "sv") return sv_content_draft_title(inputs)
	if (locale === "tr") return tr_content_draft_title(inputs)
	if (locale === "zh") return zh_content_draft_title(inputs)
	if (locale === "ja") return ja_content_draft_title(inputs)
	return en_content_draft_title(inputs)
});
