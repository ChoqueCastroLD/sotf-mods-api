/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Draft_Other_Flow_DetailInputs */

const en_upload_draft_other_flow_detail = /** @type {(inputs: Upload_Draft_Other_Flow_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open it where it was started to keep its steps.`)
};

const es_upload_draft_other_flow_detail = /** @type {(inputs: Upload_Draft_Other_Flow_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ábrelo donde lo empezaste para conservar sus pasos.`)
};

const de_upload_draft_other_flow_detail = /** @type {(inputs: Upload_Draft_Other_Flow_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öffne ihn dort, wo er begonnen wurde, damit seine Schritte erhalten bleiben.`)
};

const fr_upload_draft_other_flow_detail = /** @type {(inputs: Upload_Draft_Other_Flow_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ouvrez-le là où il a été commencé pour garder ses étapes.`)
};

const it_upload_draft_other_flow_detail = /** @type {(inputs: Upload_Draft_Other_Flow_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aprila dove l’hai iniziata per mantenere i suoi passaggi.`)
};

const nl_upload_draft_other_flow_detail = /** @type {(inputs: Upload_Draft_Other_Flow_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open het waar het begonnen is om de stappen te behouden.`)
};

const pl_upload_draft_other_flow_detail = /** @type {(inputs: Upload_Draft_Other_Flow_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otwórz go tam, gdzie został rozpoczęty, aby zachować jego kroki.`)
};

const pt_upload_draft_other_flow_detail = /** @type {(inputs: Upload_Draft_Other_Flow_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abra-o onde ele foi iniciado para manter suas etapas.`)
};

const ru_upload_draft_other_flow_detail = /** @type {(inputs: Upload_Draft_Other_Flow_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Откройте его там, где он был начат, чтобы сохранить шаги.`)
};

const sv_upload_draft_other_flow_detail = /** @type {(inputs: Upload_Draft_Other_Flow_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öppna det där det påbörjades så att stegen behålls.`)
};

const tr_upload_draft_other_flow_detail = /** @type {(inputs: Upload_Draft_Other_Flow_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adımlarını korumak için başladığı yerde aç.`)
};

const zh_upload_draft_other_flow_detail = /** @type {(inputs: Upload_Draft_Other_Flow_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请在开始它的地方打开，以保留其步骤。`)
};

const ja_upload_draft_other_flow_detail = /** @type {(inputs: Upload_Draft_Other_Flow_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`手順を保つため、始めた場所で開いてください。`)
};

/**
* | output |
* | --- |
* | "Open it where it was started to keep its steps." |
*
* @param {Upload_Draft_Other_Flow_DetailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_draft_other_flow_detail = /** @type {((inputs?: Upload_Draft_Other_Flow_DetailInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Draft_Other_Flow_DetailInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_draft_other_flow_detail(inputs)
	if (locale === "de") return de_upload_draft_other_flow_detail(inputs)
	if (locale === "fr") return fr_upload_draft_other_flow_detail(inputs)
	if (locale === "it") return it_upload_draft_other_flow_detail(inputs)
	if (locale === "nl") return nl_upload_draft_other_flow_detail(inputs)
	if (locale === "pl") return pl_upload_draft_other_flow_detail(inputs)
	if (locale === "pt") return pt_upload_draft_other_flow_detail(inputs)
	if (locale === "ru") return ru_upload_draft_other_flow_detail(inputs)
	if (locale === "sv") return sv_upload_draft_other_flow_detail(inputs)
	if (locale === "tr") return tr_upload_draft_other_flow_detail(inputs)
	if (locale === "zh") return zh_upload_draft_other_flow_detail(inputs)
	if (locale === "ja") return ja_upload_draft_other_flow_detail(inputs)
	return en_upload_draft_other_flow_detail(inputs)
});
