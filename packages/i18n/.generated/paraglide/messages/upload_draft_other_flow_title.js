/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Draft_Other_Flow_TitleInputs */

const en_upload_draft_other_flow_title = /** @type {(inputs: Upload_Draft_Other_Flow_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This draft belongs to another flow.`)
};

const es_upload_draft_other_flow_title = /** @type {(inputs: Upload_Draft_Other_Flow_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este borrador pertenece a otro flujo.`)
};

const de_upload_draft_other_flow_title = /** @type {(inputs: Upload_Draft_Other_Flow_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dieser Entwurf gehört zu einem anderen Ablauf.`)
};

const fr_upload_draft_other_flow_title = /** @type {(inputs: Upload_Draft_Other_Flow_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce brouillon appartient à un autre parcours.`)
};

const it_upload_draft_other_flow_title = /** @type {(inputs: Upload_Draft_Other_Flow_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questa bozza appartiene a un altro percorso.`)
};

const nl_upload_draft_other_flow_title = /** @type {(inputs: Upload_Draft_Other_Flow_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dit concept hoort bij een andere flow.`)
};

const pl_upload_draft_other_flow_title = /** @type {(inputs: Upload_Draft_Other_Flow_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ten szkic należy do innego kreatora.`)
};

const pt_upload_draft_other_flow_title = /** @type {(inputs: Upload_Draft_Other_Flow_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este rascunho pertence a outro fluxo.`)
};

const ru_upload_draft_other_flow_title = /** @type {(inputs: Upload_Draft_Other_Flow_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Этот черновик относится к другому мастеру.`)
};

const sv_upload_draft_other_flow_title = /** @type {(inputs: Upload_Draft_Other_Flow_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det här utkastet hör till ett annat flöde.`)
};

const tr_upload_draft_other_flow_title = /** @type {(inputs: Upload_Draft_Other_Flow_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu taslak başka bir akışa ait.`)
};

const zh_upload_draft_other_flow_title = /** @type {(inputs: Upload_Draft_Other_Flow_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`这个草稿属于另一个流程。`)
};

const ja_upload_draft_other_flow_title = /** @type {(inputs: Upload_Draft_Other_Flow_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この下書きは別の手順のものです。`)
};

/**
* | output |
* | --- |
* | "This draft belongs to another flow." |
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
