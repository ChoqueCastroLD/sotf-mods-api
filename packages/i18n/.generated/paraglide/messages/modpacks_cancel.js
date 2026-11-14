/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_CancelInputs */

const en_modpacks_cancel = /** @type {(inputs: Modpacks_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancel`)
};

const es_modpacks_cancel = /** @type {(inputs: Modpacks_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancelar`)
};

const de_modpacks_cancel = /** @type {(inputs: Modpacks_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abbrechen`)
};

const fr_modpacks_cancel = /** @type {(inputs: Modpacks_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annuler`)
};

const it_modpacks_cancel = /** @type {(inputs: Modpacks_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annulla`)
};

const nl_modpacks_cancel = /** @type {(inputs: Modpacks_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annuleren`)
};

const pl_modpacks_cancel = /** @type {(inputs: Modpacks_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anuluj`)
};

const pt_modpacks_cancel = /** @type {(inputs: Modpacks_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancelar`)
};

const ru_modpacks_cancel = /** @type {(inputs: Modpacks_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отмена`)
};

const sv_modpacks_cancel = /** @type {(inputs: Modpacks_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avbryt`)
};

const tr_modpacks_cancel = /** @type {(inputs: Modpacks_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İptal`)
};

const zh_modpacks_cancel = /** @type {(inputs: Modpacks_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`取消`)
};

const ja_modpacks_cancel = /** @type {(inputs: Modpacks_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キャンセル`)
};

/**
* | output |
* | --- |
* | "Cancel" |
*
* @param {Modpacks_CancelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_cancel = /** @type {((inputs?: Modpacks_CancelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_CancelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_cancel(inputs)
	if (locale === "de") return de_modpacks_cancel(inputs)
	if (locale === "fr") return fr_modpacks_cancel(inputs)
	if (locale === "it") return it_modpacks_cancel(inputs)
	if (locale === "nl") return nl_modpacks_cancel(inputs)
	if (locale === "pl") return pl_modpacks_cancel(inputs)
	if (locale === "pt") return pt_modpacks_cancel(inputs)
	if (locale === "ru") return ru_modpacks_cancel(inputs)
	if (locale === "sv") return sv_modpacks_cancel(inputs)
	if (locale === "tr") return tr_modpacks_cancel(inputs)
	if (locale === "zh") return zh_modpacks_cancel(inputs)
	if (locale === "ja") return ja_modpacks_cancel(inputs)
	return en_modpacks_cancel(inputs)
});
