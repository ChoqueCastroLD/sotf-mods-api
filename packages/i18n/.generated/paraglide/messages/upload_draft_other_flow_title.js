/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Draft_Other_Flow_TitleInputs */

const en_upload_draft_other_flow_title = /** @type {(inputs: Upload_Draft_Other_Flow_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This draft is for another kind of upload.`)
};

const es_upload_draft_other_flow_title = /** @type {(inputs: Upload_Draft_Other_Flow_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este borrador es de otro tipo de subida.`)
};

const de_upload_draft_other_flow_title = /** @type {(inputs: Upload_Draft_Other_Flow_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dieser Entwurf gehört zu einer anderen Art von Upload.`)
};

const fr_upload_draft_other_flow_title = /** @type {(inputs: Upload_Draft_Other_Flow_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce brouillon correspond à un autre type d’envoi.`)
};

const it_upload_draft_other_flow_title = /** @type {(inputs: Upload_Draft_Other_Flow_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questa bozza riguarda un altro tipo di caricamento.`)
};

const nl_upload_draft_other_flow_title = /** @type {(inputs: Upload_Draft_Other_Flow_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dit concept hoort bij een ander soort upload.`)
};

const pl_upload_draft_other_flow_title = /** @type {(inputs: Upload_Draft_Other_Flow_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ten szkic dotyczy innego rodzaju wysyłki.`)
};

const pt_upload_draft_other_flow_title = /** @type {(inputs: Upload_Draft_Other_Flow_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este rascunho é de outro tipo de envio.`)
};

const ru_upload_draft_other_flow_title = /** @type {(inputs: Upload_Draft_Other_Flow_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Этот черновик относится к другому типу загрузки.`)
};

const sv_upload_draft_other_flow_title = /** @type {(inputs: Upload_Draft_Other_Flow_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det här utkastet hör till en annan typ av uppladdning.`)
};

const tr_upload_draft_other_flow_title = /** @type {(inputs: Upload_Draft_Other_Flow_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu taslak başka bir yükleme türüne ait.`)
};

const zh_upload_draft_other_flow_title = /** @type {(inputs: Upload_Draft_Other_Flow_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`这个草稿属于另一种上传类型。`)
};

const ja_upload_draft_other_flow_title = /** @type {(inputs: Upload_Draft_Other_Flow_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この下書きは別の種類のアップロードのものです。`)
};

/**
* | output |
* | --- |
* | "This draft is for another kind of upload." |
*
* @param {Upload_Draft_Other_Flow_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_draft_other_flow_title = /** @type {((inputs?: Upload_Draft_Other_Flow_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Draft_Other_Flow_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_draft_other_flow_title(inputs)
	if (locale === "de") return de_upload_draft_other_flow_title(inputs)
	if (locale === "fr") return fr_upload_draft_other_flow_title(inputs)
	if (locale === "it") return it_upload_draft_other_flow_title(inputs)
	if (locale === "nl") return nl_upload_draft_other_flow_title(inputs)
	if (locale === "pl") return pl_upload_draft_other_flow_title(inputs)
	if (locale === "pt") return pt_upload_draft_other_flow_title(inputs)
	if (locale === "ru") return ru_upload_draft_other_flow_title(inputs)
	if (locale === "sv") return sv_upload_draft_other_flow_title(inputs)
	if (locale === "tr") return tr_upload_draft_other_flow_title(inputs)
	if (locale === "zh") return zh_upload_draft_other_flow_title(inputs)
	if (locale === "ja") return ja_upload_draft_other_flow_title(inputs)
	return en_upload_draft_other_flow_title(inputs)
});
