/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Audit_Target_InvalidInputs */

const en_ranger_audit_target_invalid = /** @type {(inputs: Ranger_Audit_Target_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Use type:id, for example user:12.`)
};

const es_ranger_audit_target_invalid = /** @type {(inputs: Ranger_Audit_Target_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usa tipo:id, por ejemplo user:12.`)
};

const de_ranger_audit_target_invalid = /** @type {(inputs: Ranger_Audit_Target_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nutze typ:id, zum Beispiel user:12.`)
};

const fr_ranger_audit_target_invalid = /** @type {(inputs: Ranger_Audit_Target_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utilisez type:id, par exemple user:12.`)
};

const it_ranger_audit_target_invalid = /** @type {(inputs: Ranger_Audit_Target_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usa tipo:id, per esempio user:12.`)
};

const nl_ranger_audit_target_invalid = /** @type {(inputs: Ranger_Audit_Target_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gebruik type:id, bijvoorbeeld user:12.`)
};

const pl_ranger_audit_target_invalid = /** @type {(inputs: Ranger_Audit_Target_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Użyj formatu typ:id, na przykład user:12.`)
};

const pt_ranger_audit_target_invalid = /** @type {(inputs: Ranger_Audit_Target_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Use tipo:id, por exemplo user:12.`)
};

const ru_ranger_audit_target_invalid = /** @type {(inputs: Ranger_Audit_Target_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Используйте формат тип:id, например user:12.`)
};

const sv_ranger_audit_target_invalid = /** @type {(inputs: Ranger_Audit_Target_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Använd typ:id, till exempel user:12.`)
};

const tr_ranger_audit_target_invalid = /** @type {(inputs: Ranger_Audit_Target_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`tür:id biçimini kullanın, örneğin user:12.`)
};

const zh_ranger_audit_target_invalid = /** @type {(inputs: Ranger_Audit_Target_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请使用 类型:id，例如 user:12。`)
};

const ja_ranger_audit_target_invalid = /** @type {(inputs: Ranger_Audit_Target_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`種類:id の形式で入力してください（例：user:12）。`)
};

/**
* | output |
* | --- |
* | "Use type:id, for example user:12." |
*
* @param {Ranger_Audit_Target_InvalidInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_audit_target_invalid = /** @type {((inputs?: Ranger_Audit_Target_InvalidInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Audit_Target_InvalidInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_audit_target_invalid(inputs)
	if (locale === "de") return de_ranger_audit_target_invalid(inputs)
	if (locale === "fr") return fr_ranger_audit_target_invalid(inputs)
	if (locale === "it") return it_ranger_audit_target_invalid(inputs)
	if (locale === "nl") return nl_ranger_audit_target_invalid(inputs)
	if (locale === "pl") return pl_ranger_audit_target_invalid(inputs)
	if (locale === "pt") return pt_ranger_audit_target_invalid(inputs)
	if (locale === "ru") return ru_ranger_audit_target_invalid(inputs)
	if (locale === "sv") return sv_ranger_audit_target_invalid(inputs)
	if (locale === "tr") return tr_ranger_audit_target_invalid(inputs)
	if (locale === "zh") return zh_ranger_audit_target_invalid(inputs)
	if (locale === "ja") return ja_ranger_audit_target_invalid(inputs)
	return en_ranger_audit_target_invalid(inputs)
});
