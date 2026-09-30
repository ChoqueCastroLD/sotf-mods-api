/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_CancelInputs */

const en_upload_cancel = /** @type {(inputs: Upload_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancel`)
};

const es_upload_cancel = /** @type {(inputs: Upload_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancelar`)
};

const de_upload_cancel = /** @type {(inputs: Upload_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abbrechen`)
};

const fr_upload_cancel = /** @type {(inputs: Upload_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annuler`)
};

const it_upload_cancel = /** @type {(inputs: Upload_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annulla`)
};

const nl_upload_cancel = /** @type {(inputs: Upload_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annuleren`)
};

const pl_upload_cancel = /** @type {(inputs: Upload_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anuluj`)
};

const pt_upload_cancel = /** @type {(inputs: Upload_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancelar`)
};

const ru_upload_cancel = /** @type {(inputs: Upload_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отмена`)
};

const sv_upload_cancel = /** @type {(inputs: Upload_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avbryt`)
};

const tr_upload_cancel = /** @type {(inputs: Upload_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İptal`)
};

const zh_upload_cancel = /** @type {(inputs: Upload_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`取消`)
};

const ja_upload_cancel = /** @type {(inputs: Upload_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キャンセル`)
};

/**
* | output |
* | --- |
* | "Cancel" |
*
* @param {Upload_CancelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_cancel = /** @type {((inputs?: Upload_CancelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_CancelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_cancel(inputs)
	if (locale === "de") return de_upload_cancel(inputs)
	if (locale === "fr") return fr_upload_cancel(inputs)
	if (locale === "it") return it_upload_cancel(inputs)
	if (locale === "nl") return nl_upload_cancel(inputs)
	if (locale === "pl") return pl_upload_cancel(inputs)
	if (locale === "pt") return pt_upload_cancel(inputs)
	if (locale === "ru") return ru_upload_cancel(inputs)
	if (locale === "sv") return sv_upload_cancel(inputs)
	if (locale === "tr") return tr_upload_cancel(inputs)
	if (locale === "zh") return zh_upload_cancel(inputs)
	if (locale === "ja") return ja_upload_cancel(inputs)
	return en_upload_cancel(inputs)
});
