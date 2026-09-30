/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Progress_FinishingInputs */

const en_upload_progress_finishing = /** @type {(inputs: Upload_Progress_FinishingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Finishing…`)
};

const es_upload_progress_finishing = /** @type {(inputs: Upload_Progress_FinishingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Terminando…`)
};

const de_upload_progress_finishing = /** @type {(inputs: Upload_Progress_FinishingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wird abgeschlossen…`)
};

const fr_upload_progress_finishing = /** @type {(inputs: Upload_Progress_FinishingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Finalisation…`)
};

const it_upload_progress_finishing = /** @type {(inputs: Upload_Progress_FinishingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Completamento…`)
};

const nl_upload_progress_finishing = /** @type {(inputs: Upload_Progress_FinishingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afronden…`)
};

const pl_upload_progress_finishing = /** @type {(inputs: Upload_Progress_FinishingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kończenie…`)
};

const pt_upload_progress_finishing = /** @type {(inputs: Upload_Progress_FinishingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Finalizando…`)
};

const ru_upload_progress_finishing = /** @type {(inputs: Upload_Progress_FinishingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Завершаем…`)
};

const sv_upload_progress_finishing = /** @type {(inputs: Upload_Progress_FinishingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slutför…`)
};

const tr_upload_progress_finishing = /** @type {(inputs: Upload_Progress_FinishingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tamamlanıyor…`)
};

const zh_upload_progress_finishing = /** @type {(inputs: Upload_Progress_FinishingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`即将完成…`)
};

const ja_upload_progress_finishing = /** @type {(inputs: Upload_Progress_FinishingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`仕上げ中…`)
};

/**
* | output |
* | --- |
* | "Finishing…" |
*
* @param {Upload_Progress_FinishingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_progress_finishing = /** @type {((inputs?: Upload_Progress_FinishingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Progress_FinishingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_progress_finishing(inputs)
	if (locale === "de") return de_upload_progress_finishing(inputs)
	if (locale === "fr") return fr_upload_progress_finishing(inputs)
	if (locale === "it") return it_upload_progress_finishing(inputs)
	if (locale === "nl") return nl_upload_progress_finishing(inputs)
	if (locale === "pl") return pl_upload_progress_finishing(inputs)
	if (locale === "pt") return pt_upload_progress_finishing(inputs)
	if (locale === "ru") return ru_upload_progress_finishing(inputs)
	if (locale === "sv") return sv_upload_progress_finishing(inputs)
	if (locale === "tr") return tr_upload_progress_finishing(inputs)
	if (locale === "zh") return zh_upload_progress_finishing(inputs)
	if (locale === "ja") return ja_upload_progress_finishing(inputs)
	return en_upload_progress_finishing(inputs)
});
