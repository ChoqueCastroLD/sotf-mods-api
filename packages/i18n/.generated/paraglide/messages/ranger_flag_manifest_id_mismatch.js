/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Flag_Manifest_Id_MismatchInputs */

const en_ranger_flag_manifest_id_mismatch = /** @type {(inputs: Ranger_Flag_Manifest_Id_MismatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Manifest id differs from the mod`)
};

const es_ranger_flag_manifest_id_mismatch = /** @type {(inputs: Ranger_Flag_Manifest_Id_MismatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El id del manifest no coincide con el del mod`)
};

const de_ranger_flag_manifest_id_mismatch = /** @type {(inputs: Ranger_Flag_Manifest_Id_MismatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Manifest-ID weicht vom Mod ab`)
};

const fr_ranger_flag_manifest_id_mismatch = /** @type {(inputs: Ranger_Flag_Manifest_Id_MismatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’id du manifest diffère de celui du mod`)
};

const it_ranger_flag_manifest_id_mismatch = /** @type {(inputs: Ranger_Flag_Manifest_Id_MismatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’id del manifest non corrisponde alla mod`)
};

const nl_ranger_flag_manifest_id_mismatch = /** @type {(inputs: Ranger_Flag_Manifest_Id_MismatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Manifest-id wijkt af van de mod`)
};

const pl_ranger_flag_manifest_id_mismatch = /** @type {(inputs: Ranger_Flag_Manifest_Id_MismatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Id w manifeście różni się od moda`)
};

const pt_ranger_flag_manifest_id_mismatch = /** @type {(inputs: Ranger_Flag_Manifest_Id_MismatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O id do manifest difere do mod`)
};

const ru_ranger_flag_manifest_id_mismatch = /** @type {(inputs: Ranger_Flag_Manifest_Id_MismatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Id в манифесте не совпадает с модом`)
};

const sv_ranger_flag_manifest_id_mismatch = /** @type {(inputs: Ranger_Flag_Manifest_Id_MismatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Manifestets id skiljer sig från modden`)
};

const tr_ranger_flag_manifest_id_mismatch = /** @type {(inputs: Ranger_Flag_Manifest_Id_MismatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Manifest kimliği modunkinden farklı`)
};

const zh_ranger_flag_manifest_id_mismatch = /** @type {(inputs: Ranger_Flag_Manifest_Id_MismatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`清单 id 与模组不一致`)
};

const ja_ranger_flag_manifest_id_mismatch = /** @type {(inputs: Ranger_Flag_Manifest_Id_MismatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`マニフェストの ID がMODと一致しません`)
};

/**
* | output |
* | --- |
* | "Manifest id differs from the mod" |
*
* @param {Ranger_Flag_Manifest_Id_MismatchInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_flag_manifest_id_mismatch = /** @type {((inputs?: Ranger_Flag_Manifest_Id_MismatchInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Flag_Manifest_Id_MismatchInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_flag_manifest_id_mismatch(inputs)
	if (locale === "de") return de_ranger_flag_manifest_id_mismatch(inputs)
	if (locale === "fr") return fr_ranger_flag_manifest_id_mismatch(inputs)
	if (locale === "it") return it_ranger_flag_manifest_id_mismatch(inputs)
	if (locale === "nl") return nl_ranger_flag_manifest_id_mismatch(inputs)
	if (locale === "pl") return pl_ranger_flag_manifest_id_mismatch(inputs)
	if (locale === "pt") return pt_ranger_flag_manifest_id_mismatch(inputs)
	if (locale === "ru") return ru_ranger_flag_manifest_id_mismatch(inputs)
	if (locale === "sv") return sv_ranger_flag_manifest_id_mismatch(inputs)
	if (locale === "tr") return tr_ranger_flag_manifest_id_mismatch(inputs)
	if (locale === "zh") return zh_ranger_flag_manifest_id_mismatch(inputs)
	if (locale === "ja") return ja_ranger_flag_manifest_id_mismatch(inputs)
	return en_ranger_flag_manifest_id_mismatch(inputs)
});
