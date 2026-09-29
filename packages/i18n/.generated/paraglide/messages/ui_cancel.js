/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_CancelInputs */

const en_ui_cancel = /** @type {(inputs: Ui_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancel`)
};

const es_ui_cancel = /** @type {(inputs: Ui_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancelar`)
};

const de_ui_cancel = /** @type {(inputs: Ui_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abbrechen`)
};

const fr_ui_cancel = /** @type {(inputs: Ui_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annuler`)
};

const it_ui_cancel = /** @type {(inputs: Ui_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annulla`)
};

const nl_ui_cancel = /** @type {(inputs: Ui_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annuleren`)
};

const pl_ui_cancel = /** @type {(inputs: Ui_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anuluj`)
};

const pt_ui_cancel = /** @type {(inputs: Ui_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancelar`)
};

const ru_ui_cancel = /** @type {(inputs: Ui_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отмена`)
};

const sv_ui_cancel = /** @type {(inputs: Ui_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avbryt`)
};

const tr_ui_cancel = /** @type {(inputs: Ui_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İptal`)
};

const zh_ui_cancel = /** @type {(inputs: Ui_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`取消`)
};

const ja_ui_cancel = /** @type {(inputs: Ui_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キャンセル`)
};

/**
* | output |
* | --- |
* | "Cancel" |
*
* @param {Ui_CancelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_cancel = /** @type {((inputs?: Ui_CancelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_CancelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_cancel(inputs)
	if (locale === "de") return de_ui_cancel(inputs)
	if (locale === "fr") return fr_ui_cancel(inputs)
	if (locale === "it") return it_ui_cancel(inputs)
	if (locale === "nl") return nl_ui_cancel(inputs)
	if (locale === "pl") return pl_ui_cancel(inputs)
	if (locale === "pt") return pt_ui_cancel(inputs)
	if (locale === "ru") return ru_ui_cancel(inputs)
	if (locale === "sv") return sv_ui_cancel(inputs)
	if (locale === "tr") return tr_ui_cancel(inputs)
	if (locale === "zh") return zh_ui_cancel(inputs)
	if (locale === "ja") return ja_ui_cancel(inputs)
	return en_ui_cancel(inputs)
});
