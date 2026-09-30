/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Rejected_DetailInputs */

const en_upload_rejected_detail = /** @type {(inputs: Upload_Rejected_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fix the errors below and upload it again.`)
};

const es_upload_rejected_detail = /** @type {(inputs: Upload_Rejected_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Corrige los errores de abajo y vuelve a subirlo.`)
};

const de_upload_rejected_detail = /** @type {(inputs: Upload_Rejected_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Behebe die Fehler unten und lade sie erneut hoch.`)
};

const fr_upload_rejected_detail = /** @type {(inputs: Upload_Rejected_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Corrigez les erreurs ci-dessous et renvoyez-le.`)
};

const it_upload_rejected_detail = /** @type {(inputs: Upload_Rejected_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Correggi gli errori qui sotto e ricaricalo.`)
};

const nl_upload_rejected_detail = /** @type {(inputs: Upload_Rejected_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los de fouten hieronder op en upload het opnieuw.`)
};

const pl_upload_rejected_detail = /** @type {(inputs: Upload_Rejected_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Popraw błędy poniżej i wyślij go ponownie.`)
};

const pt_upload_rejected_detail = /** @type {(inputs: Upload_Rejected_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Corrija os erros abaixo e envie de novo.`)
};

const ru_upload_rejected_detail = /** @type {(inputs: Upload_Rejected_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Исправьте ошибки ниже и загрузите его снова.`)
};

const sv_upload_rejected_detail = /** @type {(inputs: Upload_Rejected_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rätta felen nedan och ladda upp den igen.`)
};

const tr_upload_rejected_detail = /** @type {(inputs: Upload_Rejected_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aşağıdaki hataları düzelt ve tekrar yükle.`)
};

const zh_upload_rejected_detail = /** @type {(inputs: Upload_Rejected_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请修正下方错误后重新上传。`)
};

const ja_upload_rejected_detail = /** @type {(inputs: Upload_Rejected_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下のエラーを修正して、もう一度アップロードしてください。`)
};

/**
* | output |
* | --- |
* | "Fix the errors below and upload it again." |
*
* @param {Upload_Rejected_DetailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_rejected_detail = /** @type {((inputs?: Upload_Rejected_DetailInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Rejected_DetailInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_rejected_detail(inputs)
	if (locale === "de") return de_upload_rejected_detail(inputs)
	if (locale === "fr") return fr_upload_rejected_detail(inputs)
	if (locale === "it") return it_upload_rejected_detail(inputs)
	if (locale === "nl") return nl_upload_rejected_detail(inputs)
	if (locale === "pl") return pl_upload_rejected_detail(inputs)
	if (locale === "pt") return pt_upload_rejected_detail(inputs)
	if (locale === "ru") return ru_upload_rejected_detail(inputs)
	if (locale === "sv") return sv_upload_rejected_detail(inputs)
	if (locale === "tr") return tr_upload_rejected_detail(inputs)
	if (locale === "zh") return zh_upload_rejected_detail(inputs)
	if (locale === "ja") return ja_upload_rejected_detail(inputs)
	return en_upload_rejected_detail(inputs)
});
