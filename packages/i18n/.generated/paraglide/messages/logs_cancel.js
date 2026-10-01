/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_CancelInputs */

const en_logs_cancel = /** @type {(inputs: Logs_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancel`)
};

const es_logs_cancel = /** @type {(inputs: Logs_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancelar`)
};

const de_logs_cancel = /** @type {(inputs: Logs_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abbrechen`)
};

const fr_logs_cancel = /** @type {(inputs: Logs_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annuler`)
};

const it_logs_cancel = /** @type {(inputs: Logs_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annulla`)
};

const nl_logs_cancel = /** @type {(inputs: Logs_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annuleren`)
};

const pl_logs_cancel = /** @type {(inputs: Logs_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anuluj`)
};

const pt_logs_cancel = /** @type {(inputs: Logs_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancelar`)
};

const ru_logs_cancel = /** @type {(inputs: Logs_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отмена`)
};

const sv_logs_cancel = /** @type {(inputs: Logs_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avbryt`)
};

const tr_logs_cancel = /** @type {(inputs: Logs_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İptal`)
};

const zh_logs_cancel = /** @type {(inputs: Logs_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`取消`)
};

const ja_logs_cancel = /** @type {(inputs: Logs_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キャンセル`)
};

/**
* | output |
* | --- |
* | "Cancel" |
*
* @param {Logs_CancelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_cancel = /** @type {((inputs?: Logs_CancelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_CancelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_cancel(inputs)
	if (locale === "de") return de_logs_cancel(inputs)
	if (locale === "fr") return fr_logs_cancel(inputs)
	if (locale === "it") return it_logs_cancel(inputs)
	if (locale === "nl") return nl_logs_cancel(inputs)
	if (locale === "pl") return pl_logs_cancel(inputs)
	if (locale === "pt") return pt_logs_cancel(inputs)
	if (locale === "ru") return ru_logs_cancel(inputs)
	if (locale === "sv") return sv_logs_cancel(inputs)
	if (locale === "tr") return tr_logs_cancel(inputs)
	if (locale === "zh") return zh_logs_cancel(inputs)
	if (locale === "ja") return ja_logs_cancel(inputs)
	return en_logs_cancel(inputs)
});
