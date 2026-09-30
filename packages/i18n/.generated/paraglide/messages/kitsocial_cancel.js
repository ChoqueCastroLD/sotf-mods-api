/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kitsocial_CancelInputs */

const en_kitsocial_cancel = /** @type {(inputs: Kitsocial_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancel`)
};

const es_kitsocial_cancel = /** @type {(inputs: Kitsocial_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancelar`)
};

const de_kitsocial_cancel = /** @type {(inputs: Kitsocial_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abbrechen`)
};

const fr_kitsocial_cancel = /** @type {(inputs: Kitsocial_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annuler`)
};

const it_kitsocial_cancel = /** @type {(inputs: Kitsocial_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annulla`)
};

const nl_kitsocial_cancel = /** @type {(inputs: Kitsocial_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annuleren`)
};

const pl_kitsocial_cancel = /** @type {(inputs: Kitsocial_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anuluj`)
};

const pt_kitsocial_cancel = /** @type {(inputs: Kitsocial_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancelar`)
};

const ru_kitsocial_cancel = /** @type {(inputs: Kitsocial_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отмена`)
};

const sv_kitsocial_cancel = /** @type {(inputs: Kitsocial_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avbryt`)
};

const tr_kitsocial_cancel = /** @type {(inputs: Kitsocial_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İptal`)
};

const zh_kitsocial_cancel = /** @type {(inputs: Kitsocial_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`取消`)
};

const ja_kitsocial_cancel = /** @type {(inputs: Kitsocial_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キャンセル`)
};

/**
* | output |
* | --- |
* | "Cancel" |
*
* @param {Kitsocial_CancelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kitsocial_cancel = /** @type {((inputs?: Kitsocial_CancelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kitsocial_CancelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kitsocial_cancel(inputs)
	if (locale === "de") return de_kitsocial_cancel(inputs)
	if (locale === "fr") return fr_kitsocial_cancel(inputs)
	if (locale === "it") return it_kitsocial_cancel(inputs)
	if (locale === "nl") return nl_kitsocial_cancel(inputs)
	if (locale === "pl") return pl_kitsocial_cancel(inputs)
	if (locale === "pt") return pt_kitsocial_cancel(inputs)
	if (locale === "ru") return ru_kitsocial_cancel(inputs)
	if (locale === "sv") return sv_kitsocial_cancel(inputs)
	if (locale === "tr") return tr_kitsocial_cancel(inputs)
	if (locale === "zh") return zh_kitsocial_cancel(inputs)
	if (locale === "ja") return ja_kitsocial_cancel(inputs)
	return en_kitsocial_cancel(inputs)
});
