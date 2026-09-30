/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Audit_ActionInputs */

const en_ranger_audit_action = /** @type {(inputs: Ranger_Audit_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Action`)
};

const es_ranger_audit_action = /** @type {(inputs: Ranger_Audit_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Acción`)
};

const de_ranger_audit_action = /** @type {(inputs: Ranger_Audit_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktion`)
};

const fr_ranger_audit_action = /** @type {(inputs: Ranger_Audit_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Action`)
};

const it_ranger_audit_action = /** @type {(inputs: Ranger_Audit_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Azione`)
};

const nl_ranger_audit_action = /** @type {(inputs: Ranger_Audit_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actie`)
};

const pl_ranger_audit_action = /** @type {(inputs: Ranger_Audit_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Działanie`)
};

const pt_ranger_audit_action = /** @type {(inputs: Ranger_Audit_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ação`)
};

const ru_ranger_audit_action = /** @type {(inputs: Ranger_Audit_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Действие`)
};

const sv_ranger_audit_action = /** @type {(inputs: Ranger_Audit_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Åtgärd`)
};

const tr_ranger_audit_action = /** @type {(inputs: Ranger_Audit_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İşlem`)
};

const zh_ranger_audit_action = /** @type {(inputs: Ranger_Audit_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`操作`)
};

const ja_ranger_audit_action = /** @type {(inputs: Ranger_Audit_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`操作`)
};

/**
* | output |
* | --- |
* | "Action" |
*
* @param {Ranger_Audit_ActionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_audit_action = /** @type {((inputs?: Ranger_Audit_ActionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Audit_ActionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_audit_action(inputs)
	if (locale === "de") return de_ranger_audit_action(inputs)
	if (locale === "fr") return fr_ranger_audit_action(inputs)
	if (locale === "it") return it_ranger_audit_action(inputs)
	if (locale === "nl") return nl_ranger_audit_action(inputs)
	if (locale === "pl") return pl_ranger_audit_action(inputs)
	if (locale === "pt") return pt_ranger_audit_action(inputs)
	if (locale === "ru") return ru_ranger_audit_action(inputs)
	if (locale === "sv") return sv_ranger_audit_action(inputs)
	if (locale === "tr") return tr_ranger_audit_action(inputs)
	if (locale === "zh") return zh_ranger_audit_action(inputs)
	if (locale === "ja") return ja_ranger_audit_action(inputs)
	return en_ranger_audit_action(inputs)
});
