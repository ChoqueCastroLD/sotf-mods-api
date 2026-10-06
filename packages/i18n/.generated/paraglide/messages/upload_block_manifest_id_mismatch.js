/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ found: NonNullable<unknown>, expected: NonNullable<unknown> }} Upload_Block_Manifest_Id_MismatchInputs */

const en_upload_block_manifest_id_mismatch = /** @type {(inputs: Upload_Block_Manifest_Id_MismatchInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`This file is a different mod: its manifest id is ${i?.found}, expected ${i?.expected}.`)
};

const es_upload_block_manifest_id_mismatch = /** @type {(inputs: Upload_Block_Manifest_Id_MismatchInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Este archivo es otro mod: su id de manifest es ${i?.found} y se esperaba ${i?.expected}.`)
};

const de_upload_block_manifest_id_mismatch = /** @type {(inputs: Upload_Block_Manifest_Id_MismatchInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Diese Datei ist ein anderer Mod: Ihre Manifest-ID ist ${i?.found}, erwartet wurde ${i?.expected}.`)
};

const fr_upload_block_manifest_id_mismatch = /** @type {(inputs: Upload_Block_Manifest_Id_MismatchInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ce fichier est un autre mod : son id de manifest est ${i?.found}, ${i?.expected} était attendu.`)
};

const it_upload_block_manifest_id_mismatch = /** @type {(inputs: Upload_Block_Manifest_Id_MismatchInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Questo file è un’altra mod: l’id del manifest è ${i?.found}, era atteso ${i?.expected}.`)
};

const nl_upload_block_manifest_id_mismatch = /** @type {(inputs: Upload_Block_Manifest_Id_MismatchInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dit bestand is een andere mod: het manifest-id is ${i?.found}, verwacht werd ${i?.expected}.`)
};

const pl_upload_block_manifest_id_mismatch = /** @type {(inputs: Upload_Block_Manifest_Id_MismatchInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`To inny mod: jego identyfikator manifestu to ${i?.found}, a oczekiwano ${i?.expected}.`)
};

const pt_upload_block_manifest_id_mismatch = /** @type {(inputs: Upload_Block_Manifest_Id_MismatchInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Este arquivo é outro mod: o id do manifest é ${i?.found}, mas o esperado era ${i?.expected}.`)
};

const ru_upload_block_manifest_id_mismatch = /** @type {(inputs: Upload_Block_Manifest_Id_MismatchInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Это другой мод: его id в манифесте ${i?.found}, а ожидался ${i?.expected}.`)
};

const sv_upload_block_manifest_id_mismatch = /** @type {(inputs: Upload_Block_Manifest_Id_MismatchInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Den här filen är en annan mod: manifest-id är ${i?.found}, förväntat var ${i?.expected}.`)
};

const tr_upload_block_manifest_id_mismatch = /** @type {(inputs: Upload_Block_Manifest_Id_MismatchInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bu dosya farklı bir mod: manifest kimliği ${i?.found}, beklenen ${i?.expected}.`)
};

const zh_upload_block_manifest_id_mismatch = /** @type {(inputs: Upload_Block_Manifest_Id_MismatchInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`这是另一个模组：清单 ID 为 ${i?.found}，应为 ${i?.expected}。`)
};

const ja_upload_block_manifest_id_mismatch = /** @type {(inputs: Upload_Block_Manifest_Id_MismatchInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`これは別のMODです。マニフェストIDは ${i?.found} ですが、${i?.expected} である必要があります。`)
};

/**
* | output |
* | --- |
* | "This file is a different mod: its manifest id is {found}, expected {expected}." |
*
* @param {Upload_Block_Manifest_Id_MismatchInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_block_manifest_id_mismatch = /** @type {((inputs: Upload_Block_Manifest_Id_MismatchInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Block_Manifest_Id_MismatchInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_block_manifest_id_mismatch(inputs)
	if (locale === "de") return de_upload_block_manifest_id_mismatch(inputs)
	if (locale === "fr") return fr_upload_block_manifest_id_mismatch(inputs)
	if (locale === "it") return it_upload_block_manifest_id_mismatch(inputs)
	if (locale === "nl") return nl_upload_block_manifest_id_mismatch(inputs)
	if (locale === "pl") return pl_upload_block_manifest_id_mismatch(inputs)
	if (locale === "pt") return pt_upload_block_manifest_id_mismatch(inputs)
	if (locale === "ru") return ru_upload_block_manifest_id_mismatch(inputs)
	if (locale === "sv") return sv_upload_block_manifest_id_mismatch(inputs)
	if (locale === "tr") return tr_upload_block_manifest_id_mismatch(inputs)
	if (locale === "zh") return zh_upload_block_manifest_id_mismatch(inputs)
	if (locale === "ja") return ja_upload_block_manifest_id_mismatch(inputs)
	return en_upload_block_manifest_id_mismatch(inputs)
});
