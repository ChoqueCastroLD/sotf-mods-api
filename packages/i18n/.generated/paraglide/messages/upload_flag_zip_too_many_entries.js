/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Flag_Zip_Too_Many_EntriesInputs */

const en_upload_flag_zip_too_many_entries = /** @type {(inputs: Upload_Flag_Zip_Too_Many_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The zip has too many files (5,000 max).`)
};

const es_upload_flag_zip_too_many_entries = /** @type {(inputs: Upload_Flag_Zip_Too_Many_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El zip tiene demasiados archivos (máximo 5000).`)
};

const de_upload_flag_zip_too_many_entries = /** @type {(inputs: Upload_Flag_Zip_Too_Many_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das Zip enthält zu viele Dateien (höchstens 5.000).`)
};

const fr_upload_flag_zip_too_many_entries = /** @type {(inputs: Upload_Flag_Zip_Too_Many_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le zip contient trop de fichiers (5 000 au maximum).`)
};

const it_upload_flag_zip_too_many_entries = /** @type {(inputs: Upload_Flag_Zip_Too_Many_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lo zip ha troppi file (massimo 5.000).`)
};

const nl_upload_flag_zip_too_many_entries = /** @type {(inputs: Upload_Flag_Zip_Too_Many_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De zip bevat te veel bestanden (maximaal 5.000).`)
};

const pl_upload_flag_zip_too_many_entries = /** @type {(inputs: Upload_Flag_Zip_Too_Many_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zip ma za dużo plików (maksymalnie 5000).`)
};

const pt_upload_flag_zip_too_many_entries = /** @type {(inputs: Upload_Flag_Zip_Too_Many_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O zip tem arquivos demais (máximo de 5.000).`)
};

const ru_upload_flag_zip_too_many_entries = /** @type {(inputs: Upload_Flag_Zip_Too_Many_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`В архиве слишком много файлов (не больше 5000).`)
};

const sv_upload_flag_zip_too_many_entries = /** @type {(inputs: Upload_Flag_Zip_Too_Many_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zip-filen har för många filer (högst 5 000).`)
};

const tr_upload_flag_zip_too_many_entries = /** @type {(inputs: Upload_Flag_Zip_Too_Many_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zip’te çok fazla dosya var (en fazla 5.000).`)
};

const zh_upload_flag_zip_too_many_entries = /** @type {(inputs: Upload_Flag_Zip_Too_Many_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`zip 中文件过多（最多 5000 个）。`)
};

const ja_upload_flag_zip_too_many_entries = /** @type {(inputs: Upload_Flag_Zip_Too_Many_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`zip 内のファイルが多すぎます（最大 5,000 件）。`)
};

/**
* | output |
* | --- |
* | "The zip has too many files (5,000 max)." |
*
* @param {Upload_Flag_Zip_Too_Many_EntriesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_flag_zip_too_many_entries = /** @type {((inputs?: Upload_Flag_Zip_Too_Many_EntriesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Flag_Zip_Too_Many_EntriesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_flag_zip_too_many_entries(inputs)
	if (locale === "de") return de_upload_flag_zip_too_many_entries(inputs)
	if (locale === "fr") return fr_upload_flag_zip_too_many_entries(inputs)
	if (locale === "it") return it_upload_flag_zip_too_many_entries(inputs)
	if (locale === "nl") return nl_upload_flag_zip_too_many_entries(inputs)
	if (locale === "pl") return pl_upload_flag_zip_too_many_entries(inputs)
	if (locale === "pt") return pt_upload_flag_zip_too_many_entries(inputs)
	if (locale === "ru") return ru_upload_flag_zip_too_many_entries(inputs)
	if (locale === "sv") return sv_upload_flag_zip_too_many_entries(inputs)
	if (locale === "tr") return tr_upload_flag_zip_too_many_entries(inputs)
	if (locale === "zh") return zh_upload_flag_zip_too_many_entries(inputs)
	if (locale === "ja") return ja_upload_flag_zip_too_many_entries(inputs)
	return en_upload_flag_zip_too_many_entries(inputs)
});
