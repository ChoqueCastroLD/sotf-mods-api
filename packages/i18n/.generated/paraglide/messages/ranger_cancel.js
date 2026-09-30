/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_CancelInputs */

const en_ranger_cancel = /** @type {(inputs: Ranger_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancel`)
};

const es_ranger_cancel = /** @type {(inputs: Ranger_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancelar`)
};

const de_ranger_cancel = /** @type {(inputs: Ranger_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abbrechen`)
};

const fr_ranger_cancel = /** @type {(inputs: Ranger_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annuler`)
};

const it_ranger_cancel = /** @type {(inputs: Ranger_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annulla`)
};

const nl_ranger_cancel = /** @type {(inputs: Ranger_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annuleren`)
};

const pl_ranger_cancel = /** @type {(inputs: Ranger_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anuluj`)
};

const pt_ranger_cancel = /** @type {(inputs: Ranger_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancelar`)
};

const ru_ranger_cancel = /** @type {(inputs: Ranger_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отмена`)
};

const sv_ranger_cancel = /** @type {(inputs: Ranger_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avbryt`)
};

const tr_ranger_cancel = /** @type {(inputs: Ranger_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İptal`)
};

const zh_ranger_cancel = /** @type {(inputs: Ranger_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`取消`)
};

const ja_ranger_cancel = /** @type {(inputs: Ranger_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キャンセル`)
};

/**
* | output |
* | --- |
* | "Cancel" |
*
* @param {Ranger_CancelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_cancel = /** @type {((inputs?: Ranger_CancelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_CancelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_cancel(inputs)
	if (locale === "de") return de_ranger_cancel(inputs)
	if (locale === "fr") return fr_ranger_cancel(inputs)
	if (locale === "it") return it_ranger_cancel(inputs)
	if (locale === "nl") return nl_ranger_cancel(inputs)
	if (locale === "pl") return pl_ranger_cancel(inputs)
	if (locale === "pt") return pt_ranger_cancel(inputs)
	if (locale === "ru") return ru_ranger_cancel(inputs)
	if (locale === "sv") return sv_ranger_cancel(inputs)
	if (locale === "tr") return tr_ranger_cancel(inputs)
	if (locale === "zh") return zh_ranger_cancel(inputs)
	if (locale === "ja") return ja_ranger_cancel(inputs)
	return en_ranger_cancel(inputs)
});
