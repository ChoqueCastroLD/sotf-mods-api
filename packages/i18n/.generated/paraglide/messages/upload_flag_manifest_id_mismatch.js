/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Flag_Manifest_Id_MismatchInputs */

const en_upload_flag_manifest_id_mismatch = /** @type {(inputs: Upload_Flag_Manifest_Id_MismatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The manifest id doesn’t match this mod.`)
};

const es_upload_flag_manifest_id_mismatch = /** @type {(inputs: Upload_Flag_Manifest_Id_MismatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El id de manifest no coincide con este mod.`)
};

const de_upload_flag_manifest_id_mismatch = /** @type {(inputs: Upload_Flag_Manifest_Id_MismatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Manifest-ID passt nicht zu diesem Mod.`)
};

const fr_upload_flag_manifest_id_mismatch = /** @type {(inputs: Upload_Flag_Manifest_Id_MismatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’id de manifest ne correspond pas à ce mod.`)
};

const it_upload_flag_manifest_id_mismatch = /** @type {(inputs: Upload_Flag_Manifest_Id_MismatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’id del manifest non corrisponde a questa mod.`)
};

const nl_upload_flag_manifest_id_mismatch = /** @type {(inputs: Upload_Flag_Manifest_Id_MismatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Het manifest-id past niet bij deze mod.`)
};

const pl_upload_flag_manifest_id_mismatch = /** @type {(inputs: Upload_Flag_Manifest_Id_MismatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Identyfikator manifestu nie pasuje do tego moda.`)
};

const pt_upload_flag_manifest_id_mismatch = /** @type {(inputs: Upload_Flag_Manifest_Id_MismatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O id do manifest não corresponde a este mod.`)
};

const ru_upload_flag_manifest_id_mismatch = /** @type {(inputs: Upload_Flag_Manifest_Id_MismatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Id в манифесте не совпадает с этим модом.`)
};

const sv_upload_flag_manifest_id_mismatch = /** @type {(inputs: Upload_Flag_Manifest_Id_MismatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Manifest-id matchar inte den här modden.`)
};

const tr_upload_flag_manifest_id_mismatch = /** @type {(inputs: Upload_Flag_Manifest_Id_MismatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Manifest kimliği bu modla eşleşmiyor.`)
};

const zh_upload_flag_manifest_id_mismatch = /** @type {(inputs: Upload_Flag_Manifest_Id_MismatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`清单 ID 与此模组不符。`)
};

const ja_upload_flag_manifest_id_mismatch = /** @type {(inputs: Upload_Flag_Manifest_Id_MismatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`マニフェストIDがこのMODと一致しません。`)
};

/**
* | output |
* | --- |
* | "The manifest id doesn’t match this mod." |
*
* @param {Upload_Flag_Manifest_Id_MismatchInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_flag_manifest_id_mismatch = /** @type {((inputs?: Upload_Flag_Manifest_Id_MismatchInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Flag_Manifest_Id_MismatchInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_flag_manifest_id_mismatch(inputs)
	if (locale === "de") return de_upload_flag_manifest_id_mismatch(inputs)
	if (locale === "fr") return fr_upload_flag_manifest_id_mismatch(inputs)
	if (locale === "it") return it_upload_flag_manifest_id_mismatch(inputs)
	if (locale === "nl") return nl_upload_flag_manifest_id_mismatch(inputs)
	if (locale === "pl") return pl_upload_flag_manifest_id_mismatch(inputs)
	if (locale === "pt") return pt_upload_flag_manifest_id_mismatch(inputs)
	if (locale === "ru") return ru_upload_flag_manifest_id_mismatch(inputs)
	if (locale === "sv") return sv_upload_flag_manifest_id_mismatch(inputs)
	if (locale === "tr") return tr_upload_flag_manifest_id_mismatch(inputs)
	if (locale === "zh") return zh_upload_flag_manifest_id_mismatch(inputs)
	if (locale === "ja") return ja_upload_flag_manifest_id_mismatch(inputs)
	return en_upload_flag_manifest_id_mismatch(inputs)
});
