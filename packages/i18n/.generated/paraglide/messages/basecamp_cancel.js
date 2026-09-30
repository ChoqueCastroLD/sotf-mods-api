/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_CancelInputs */

const en_basecamp_cancel = /** @type {(inputs: Basecamp_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancel`)
};

const es_basecamp_cancel = /** @type {(inputs: Basecamp_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancelar`)
};

const de_basecamp_cancel = /** @type {(inputs: Basecamp_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abbrechen`)
};

const fr_basecamp_cancel = /** @type {(inputs: Basecamp_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annuler`)
};

const it_basecamp_cancel = /** @type {(inputs: Basecamp_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annulla`)
};

const nl_basecamp_cancel = /** @type {(inputs: Basecamp_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annuleren`)
};

const pl_basecamp_cancel = /** @type {(inputs: Basecamp_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anuluj`)
};

const pt_basecamp_cancel = /** @type {(inputs: Basecamp_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancelar`)
};

const ru_basecamp_cancel = /** @type {(inputs: Basecamp_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отмена`)
};

const sv_basecamp_cancel = /** @type {(inputs: Basecamp_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avbryt`)
};

const tr_basecamp_cancel = /** @type {(inputs: Basecamp_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İptal`)
};

const zh_basecamp_cancel = /** @type {(inputs: Basecamp_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`取消`)
};

const ja_basecamp_cancel = /** @type {(inputs: Basecamp_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キャンセル`)
};

/**
* | output |
* | --- |
* | "Cancel" |
*
* @param {Basecamp_CancelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_cancel = /** @type {((inputs?: Basecamp_CancelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_CancelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_cancel(inputs)
	if (locale === "de") return de_basecamp_cancel(inputs)
	if (locale === "fr") return fr_basecamp_cancel(inputs)
	if (locale === "it") return it_basecamp_cancel(inputs)
	if (locale === "nl") return nl_basecamp_cancel(inputs)
	if (locale === "pl") return pl_basecamp_cancel(inputs)
	if (locale === "pt") return pt_basecamp_cancel(inputs)
	if (locale === "ru") return ru_basecamp_cancel(inputs)
	if (locale === "sv") return sv_basecamp_cancel(inputs)
	if (locale === "tr") return tr_basecamp_cancel(inputs)
	if (locale === "zh") return zh_basecamp_cancel(inputs)
	if (locale === "ja") return ja_basecamp_cancel(inputs)
	return en_basecamp_cancel(inputs)
});
