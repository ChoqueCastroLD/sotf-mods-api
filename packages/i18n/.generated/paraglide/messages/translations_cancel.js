/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Translations_CancelInputs */

const en_translations_cancel = /** @type {(inputs: Translations_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancel`)
};

const es_translations_cancel = /** @type {(inputs: Translations_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancelar`)
};

const de_translations_cancel = /** @type {(inputs: Translations_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abbrechen`)
};

const fr_translations_cancel = /** @type {(inputs: Translations_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annuler`)
};

const it_translations_cancel = /** @type {(inputs: Translations_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annulla`)
};

const nl_translations_cancel = /** @type {(inputs: Translations_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annuleren`)
};

const pl_translations_cancel = /** @type {(inputs: Translations_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anuluj`)
};

const pt_translations_cancel = /** @type {(inputs: Translations_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancelar`)
};

const ru_translations_cancel = /** @type {(inputs: Translations_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отмена`)
};

const sv_translations_cancel = /** @type {(inputs: Translations_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avbryt`)
};

const tr_translations_cancel = /** @type {(inputs: Translations_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İptal`)
};

const zh_translations_cancel = /** @type {(inputs: Translations_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`取消`)
};

const ja_translations_cancel = /** @type {(inputs: Translations_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キャンセル`)
};

/**
* | output |
* | --- |
* | "Cancel" |
*
* @param {Translations_CancelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const translations_cancel = /** @type {((inputs?: Translations_CancelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Translations_CancelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_translations_cancel(inputs)
	if (locale === "de") return de_translations_cancel(inputs)
	if (locale === "fr") return fr_translations_cancel(inputs)
	if (locale === "it") return it_translations_cancel(inputs)
	if (locale === "nl") return nl_translations_cancel(inputs)
	if (locale === "pl") return pl_translations_cancel(inputs)
	if (locale === "pt") return pt_translations_cancel(inputs)
	if (locale === "ru") return ru_translations_cancel(inputs)
	if (locale === "sv") return sv_translations_cancel(inputs)
	if (locale === "tr") return tr_translations_cancel(inputs)
	if (locale === "zh") return zh_translations_cancel(inputs)
	if (locale === "ja") return ja_translations_cancel(inputs)
	return en_translations_cancel(inputs)
});
