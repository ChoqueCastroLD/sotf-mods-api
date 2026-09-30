/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Action_RejectInputs */

const en_ranger_action_reject = /** @type {(inputs: Ranger_Action_RejectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reject`)
};

const es_ranger_action_reject = /** @type {(inputs: Ranger_Action_RejectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rechazar`)
};

const de_ranger_action_reject = /** @type {(inputs: Ranger_Action_RejectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ablehnen`)
};

const fr_ranger_action_reject = /** @type {(inputs: Ranger_Action_RejectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Refuser`)
};

const it_ranger_action_reject = /** @type {(inputs: Ranger_Action_RejectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rifiuta`)
};

const nl_ranger_action_reject = /** @type {(inputs: Ranger_Action_RejectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afwijzen`)
};

const pl_ranger_action_reject = /** @type {(inputs: Ranger_Action_RejectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odrzuć`)
};

const pt_ranger_action_reject = /** @type {(inputs: Ranger_Action_RejectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rejeitar`)
};

const ru_ranger_action_reject = /** @type {(inputs: Ranger_Action_RejectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отклонить`)
};

const sv_ranger_action_reject = /** @type {(inputs: Ranger_Action_RejectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avvisa`)
};

const tr_ranger_action_reject = /** @type {(inputs: Ranger_Action_RejectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reddet`)
};

const zh_ranger_action_reject = /** @type {(inputs: Ranger_Action_RejectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`拒绝`)
};

const ja_ranger_action_reject = /** @type {(inputs: Ranger_Action_RejectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`却下`)
};

/**
* | output |
* | --- |
* | "Reject" |
*
* @param {Ranger_Action_RejectInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_action_reject = /** @type {((inputs?: Ranger_Action_RejectInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Action_RejectInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_action_reject(inputs)
	if (locale === "de") return de_ranger_action_reject(inputs)
	if (locale === "fr") return fr_ranger_action_reject(inputs)
	if (locale === "it") return it_ranger_action_reject(inputs)
	if (locale === "nl") return nl_ranger_action_reject(inputs)
	if (locale === "pl") return pl_ranger_action_reject(inputs)
	if (locale === "pt") return pt_ranger_action_reject(inputs)
	if (locale === "ru") return ru_ranger_action_reject(inputs)
	if (locale === "sv") return sv_ranger_action_reject(inputs)
	if (locale === "tr") return tr_ranger_action_reject(inputs)
	if (locale === "zh") return zh_ranger_action_reject(inputs)
	if (locale === "ja") return ja_ranger_action_reject(inputs)
	return en_ranger_action_reject(inputs)
});
