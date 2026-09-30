/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Flag_Zip_InvalidInputs */

const en_upload_flag_zip_invalid = /** @type {(inputs: Upload_Flag_Zip_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The zip is damaged or encrypted.`)
};

const es_upload_flag_zip_invalid = /** @type {(inputs: Upload_Flag_Zip_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El zip está dañado o cifrado.`)
};

const de_upload_flag_zip_invalid = /** @type {(inputs: Upload_Flag_Zip_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das Zip ist beschädigt oder verschlüsselt.`)
};

const fr_upload_flag_zip_invalid = /** @type {(inputs: Upload_Flag_Zip_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le zip est endommagé ou chiffré.`)
};

const it_upload_flag_zip_invalid = /** @type {(inputs: Upload_Flag_Zip_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lo zip è danneggiato o cifrato.`)
};

const nl_upload_flag_zip_invalid = /** @type {(inputs: Upload_Flag_Zip_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De zip is beschadigd of versleuteld.`)
};

const pl_upload_flag_zip_invalid = /** @type {(inputs: Upload_Flag_Zip_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plik zip jest uszkodzony lub zaszyfrowany.`)
};

const pt_upload_flag_zip_invalid = /** @type {(inputs: Upload_Flag_Zip_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O zip está danificado ou criptografado.`)
};

const ru_upload_flag_zip_invalid = /** @type {(inputs: Upload_Flag_Zip_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Архив повреждён или зашифрован.`)
};

const sv_upload_flag_zip_invalid = /** @type {(inputs: Upload_Flag_Zip_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zip-filen är skadad eller krypterad.`)
};

const tr_upload_flag_zip_invalid = /** @type {(inputs: Upload_Flag_Zip_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zip hasarlı ya da şifreli.`)
};

const zh_upload_flag_zip_invalid = /** @type {(inputs: Upload_Flag_Zip_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`zip 已损坏或已加密。`)
};

const ja_upload_flag_zip_invalid = /** @type {(inputs: Upload_Flag_Zip_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`zip が壊れているか暗号化されています。`)
};

/**
* | output |
* | --- |
* | "The zip is damaged or encrypted." |
*
* @param {Upload_Flag_Zip_InvalidInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_flag_zip_invalid = /** @type {((inputs?: Upload_Flag_Zip_InvalidInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Flag_Zip_InvalidInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_flag_zip_invalid(inputs)
	if (locale === "de") return de_upload_flag_zip_invalid(inputs)
	if (locale === "fr") return fr_upload_flag_zip_invalid(inputs)
	if (locale === "it") return it_upload_flag_zip_invalid(inputs)
	if (locale === "nl") return nl_upload_flag_zip_invalid(inputs)
	if (locale === "pl") return pl_upload_flag_zip_invalid(inputs)
	if (locale === "pt") return pt_upload_flag_zip_invalid(inputs)
	if (locale === "ru") return ru_upload_flag_zip_invalid(inputs)
	if (locale === "sv") return sv_upload_flag_zip_invalid(inputs)
	if (locale === "tr") return tr_upload_flag_zip_invalid(inputs)
	if (locale === "zh") return zh_upload_flag_zip_invalid(inputs)
	if (locale === "ja") return ja_upload_flag_zip_invalid(inputs)
	return en_upload_flag_zip_invalid(inputs)
});
