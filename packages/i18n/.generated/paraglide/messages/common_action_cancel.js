/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Action_CancelInputs */

const en_common_action_cancel = /** @type {(inputs: Common_Action_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancel`)
};

const es_common_action_cancel = /** @type {(inputs: Common_Action_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancelar`)
};

const de_common_action_cancel = /** @type {(inputs: Common_Action_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abbrechen`)
};

const fr_common_action_cancel = /** @type {(inputs: Common_Action_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annuler`)
};

const it_common_action_cancel = /** @type {(inputs: Common_Action_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annulla`)
};

const nl_common_action_cancel = /** @type {(inputs: Common_Action_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annuleren`)
};

const pl_common_action_cancel = /** @type {(inputs: Common_Action_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anuluj`)
};

const pt_common_action_cancel = /** @type {(inputs: Common_Action_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancelar`)
};

const ru_common_action_cancel = /** @type {(inputs: Common_Action_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отмена`)
};

const sv_common_action_cancel = /** @type {(inputs: Common_Action_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avbryt`)
};

const tr_common_action_cancel = /** @type {(inputs: Common_Action_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İptal`)
};

const zh_common_action_cancel = /** @type {(inputs: Common_Action_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`取消`)
};

const ja_common_action_cancel = /** @type {(inputs: Common_Action_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キャンセル`)
};

/**
* | output |
* | --- |
* | "Cancel" |
*
* @param {Common_Action_CancelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_action_cancel = /** @type {((inputs?: Common_Action_CancelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Action_CancelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_action_cancel(inputs)
	if (locale === "de") return de_common_action_cancel(inputs)
	if (locale === "fr") return fr_common_action_cancel(inputs)
	if (locale === "it") return it_common_action_cancel(inputs)
	if (locale === "nl") return nl_common_action_cancel(inputs)
	if (locale === "pl") return pl_common_action_cancel(inputs)
	if (locale === "pt") return pt_common_action_cancel(inputs)
	if (locale === "ru") return ru_common_action_cancel(inputs)
	if (locale === "sv") return sv_common_action_cancel(inputs)
	if (locale === "tr") return tr_common_action_cancel(inputs)
	if (locale === "zh") return zh_common_action_cancel(inputs)
	if (locale === "ja") return ja_common_action_cancel(inputs)
	return en_common_action_cancel(inputs)
});
