/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Audit_Target_HintInputs */

const en_ranger_audit_target_hint = /** @type {(inputs: Ranger_Audit_Target_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`type:id, for example user:12 or mod:312`)
};

const es_ranger_audit_target_hint = /** @type {(inputs: Ranger_Audit_Target_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`tipo:id, por ejemplo user:12 o mod:312`)
};

const de_ranger_audit_target_hint = /** @type {(inputs: Ranger_Audit_Target_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`typ:id, zum Beispiel user:12 oder mod:312`)
};

const fr_ranger_audit_target_hint = /** @type {(inputs: Ranger_Audit_Target_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`type:id, par exemple user:12 ou mod:312`)
};

const it_ranger_audit_target_hint = /** @type {(inputs: Ranger_Audit_Target_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`tipo:id, per esempio user:12 o mod:312`)
};

const nl_ranger_audit_target_hint = /** @type {(inputs: Ranger_Audit_Target_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`type:id, bijvoorbeeld user:12 of mod:312`)
};

const pl_ranger_audit_target_hint = /** @type {(inputs: Ranger_Audit_Target_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`typ:id, na przykład user:12 lub mod:312`)
};

const pt_ranger_audit_target_hint = /** @type {(inputs: Ranger_Audit_Target_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`tipo:id, por exemplo user:12 ou mod:312`)
};

const ru_ranger_audit_target_hint = /** @type {(inputs: Ranger_Audit_Target_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`тип:id, например user:12 или mod:312`)
};

const sv_ranger_audit_target_hint = /** @type {(inputs: Ranger_Audit_Target_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`typ:id, till exempel user:12 eller mod:312`)
};

const tr_ranger_audit_target_hint = /** @type {(inputs: Ranger_Audit_Target_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`tür:id, örneğin user:12 veya mod:312`)
};

const zh_ranger_audit_target_hint = /** @type {(inputs: Ranger_Audit_Target_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`类型:id，例如 user:12 或 mod:312`)
};

const ja_ranger_audit_target_hint = /** @type {(inputs: Ranger_Audit_Target_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`種類:id（例：user:12、mod:312）`)
};

/**
* | output |
* | --- |
* | "type:id, for example user:12 or mod:312" |
*
* @param {Ranger_Audit_Target_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_audit_target_hint = /** @type {((inputs?: Ranger_Audit_Target_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Audit_Target_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_audit_target_hint(inputs)
	if (locale === "de") return de_ranger_audit_target_hint(inputs)
	if (locale === "fr") return fr_ranger_audit_target_hint(inputs)
	if (locale === "it") return it_ranger_audit_target_hint(inputs)
	if (locale === "nl") return nl_ranger_audit_target_hint(inputs)
	if (locale === "pl") return pl_ranger_audit_target_hint(inputs)
	if (locale === "pt") return pt_ranger_audit_target_hint(inputs)
	if (locale === "ru") return ru_ranger_audit_target_hint(inputs)
	if (locale === "sv") return sv_ranger_audit_target_hint(inputs)
	if (locale === "tr") return tr_ranger_audit_target_hint(inputs)
	if (locale === "zh") return zh_ranger_audit_target_hint(inputs)
	if (locale === "ja") return ja_ranger_audit_target_hint(inputs)
	return en_ranger_audit_target_hint(inputs)
});
