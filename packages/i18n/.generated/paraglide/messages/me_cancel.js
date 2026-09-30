/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_CancelInputs */

const en_me_cancel = /** @type {(inputs: Me_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancel`)
};

const es_me_cancel = /** @type {(inputs: Me_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancelar`)
};

const de_me_cancel = /** @type {(inputs: Me_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abbrechen`)
};

const fr_me_cancel = /** @type {(inputs: Me_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annuler`)
};

const it_me_cancel = /** @type {(inputs: Me_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annulla`)
};

const nl_me_cancel = /** @type {(inputs: Me_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annuleren`)
};

const pl_me_cancel = /** @type {(inputs: Me_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anuluj`)
};

const pt_me_cancel = /** @type {(inputs: Me_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancelar`)
};

const ru_me_cancel = /** @type {(inputs: Me_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отмена`)
};

const sv_me_cancel = /** @type {(inputs: Me_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avbryt`)
};

const tr_me_cancel = /** @type {(inputs: Me_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İptal`)
};

const zh_me_cancel = /** @type {(inputs: Me_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`取消`)
};

const ja_me_cancel = /** @type {(inputs: Me_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キャンセル`)
};

/**
* | output |
* | --- |
* | "Cancel" |
*
* @param {Me_CancelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_cancel = /** @type {((inputs?: Me_CancelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_CancelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_cancel(inputs)
	if (locale === "de") return de_me_cancel(inputs)
	if (locale === "fr") return fr_me_cancel(inputs)
	if (locale === "it") return it_me_cancel(inputs)
	if (locale === "nl") return nl_me_cancel(inputs)
	if (locale === "pl") return pl_me_cancel(inputs)
	if (locale === "pt") return pt_me_cancel(inputs)
	if (locale === "ru") return ru_me_cancel(inputs)
	if (locale === "sv") return sv_me_cancel(inputs)
	if (locale === "tr") return tr_me_cancel(inputs)
	if (locale === "zh") return zh_me_cancel(inputs)
	if (locale === "ja") return ja_me_cancel(inputs)
	return en_me_cancel(inputs)
});
