/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Action_ApproveInputs */

const en_ranger_action_approve = /** @type {(inputs: Ranger_Action_ApproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Approve`)
};

const es_ranger_action_approve = /** @type {(inputs: Ranger_Action_ApproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aprobar`)
};

const de_ranger_action_approve = /** @type {(inputs: Ranger_Action_ApproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Freigeben`)
};

const fr_ranger_action_approve = /** @type {(inputs: Ranger_Action_ApproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Approuver`)
};

const it_ranger_action_approve = /** @type {(inputs: Ranger_Action_ApproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Approva`)
};

const nl_ranger_action_approve = /** @type {(inputs: Ranger_Action_ApproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Goedkeuren`)
};

const pl_ranger_action_approve = /** @type {(inputs: Ranger_Action_ApproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zatwierdź`)
};

const pt_ranger_action_approve = /** @type {(inputs: Ranger_Action_ApproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aprovar`)
};

const ru_ranger_action_approve = /** @type {(inputs: Ranger_Action_ApproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Одобрить`)
};

const sv_ranger_action_approve = /** @type {(inputs: Ranger_Action_ApproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Godkänn`)
};

const tr_ranger_action_approve = /** @type {(inputs: Ranger_Action_ApproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Onayla`)
};

const zh_ranger_action_approve = /** @type {(inputs: Ranger_Action_ApproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`批准`)
};

const ja_ranger_action_approve = /** @type {(inputs: Ranger_Action_ApproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`承認`)
};

/**
* | output |
* | --- |
* | "Approve" |
*
* @param {Ranger_Action_ApproveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_action_approve = /** @type {((inputs?: Ranger_Action_ApproveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Action_ApproveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_action_approve(inputs)
	if (locale === "de") return de_ranger_action_approve(inputs)
	if (locale === "fr") return fr_ranger_action_approve(inputs)
	if (locale === "it") return it_ranger_action_approve(inputs)
	if (locale === "nl") return nl_ranger_action_approve(inputs)
	if (locale === "pl") return pl_ranger_action_approve(inputs)
	if (locale === "pt") return pt_ranger_action_approve(inputs)
	if (locale === "ru") return ru_ranger_action_approve(inputs)
	if (locale === "sv") return sv_ranger_action_approve(inputs)
	if (locale === "tr") return tr_ranger_action_approve(inputs)
	if (locale === "zh") return zh_ranger_action_approve(inputs)
	if (locale === "ja") return ja_ranger_action_approve(inputs)
	return en_ranger_action_approve(inputs)
});
