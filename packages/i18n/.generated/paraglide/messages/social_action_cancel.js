/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Action_CancelInputs */

const en_social_action_cancel = /** @type {(inputs: Social_Action_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancel`)
};

const es_social_action_cancel = /** @type {(inputs: Social_Action_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancelar`)
};

const de_social_action_cancel = /** @type {(inputs: Social_Action_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abbrechen`)
};

const fr_social_action_cancel = /** @type {(inputs: Social_Action_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annuler`)
};

const it_social_action_cancel = /** @type {(inputs: Social_Action_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annulla`)
};

const nl_social_action_cancel = /** @type {(inputs: Social_Action_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annuleren`)
};

const pl_social_action_cancel = /** @type {(inputs: Social_Action_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anuluj`)
};

const pt_social_action_cancel = /** @type {(inputs: Social_Action_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancelar`)
};

const ru_social_action_cancel = /** @type {(inputs: Social_Action_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отмена`)
};

const sv_social_action_cancel = /** @type {(inputs: Social_Action_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avbryt`)
};

const tr_social_action_cancel = /** @type {(inputs: Social_Action_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İptal`)
};

const zh_social_action_cancel = /** @type {(inputs: Social_Action_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`取消`)
};

const ja_social_action_cancel = /** @type {(inputs: Social_Action_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キャンセル`)
};

/**
* | output |
* | --- |
* | "Cancel" |
*
* @param {Social_Action_CancelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_action_cancel = /** @type {((inputs?: Social_Action_CancelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Action_CancelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_action_cancel(inputs)
	if (locale === "de") return de_social_action_cancel(inputs)
	if (locale === "fr") return fr_social_action_cancel(inputs)
	if (locale === "it") return it_social_action_cancel(inputs)
	if (locale === "nl") return nl_social_action_cancel(inputs)
	if (locale === "pl") return pl_social_action_cancel(inputs)
	if (locale === "pt") return pt_social_action_cancel(inputs)
	if (locale === "ru") return ru_social_action_cancel(inputs)
	if (locale === "sv") return sv_social_action_cancel(inputs)
	if (locale === "tr") return tr_social_action_cancel(inputs)
	if (locale === "zh") return zh_social_action_cancel(inputs)
	if (locale === "ja") return ja_social_action_cancel(inputs)
	return en_social_action_cancel(inputs)
});
