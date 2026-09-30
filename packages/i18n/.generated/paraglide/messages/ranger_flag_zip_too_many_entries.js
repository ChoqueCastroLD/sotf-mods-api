/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Flag_Zip_Too_Many_EntriesInputs */

const en_ranger_flag_zip_too_many_entries = /** @type {(inputs: Ranger_Flag_Zip_Too_Many_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Too many files in the zip`)
};

const es_ranger_flag_zip_too_many_entries = /** @type {(inputs: Ranger_Flag_Zip_Too_Many_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Demasiados archivos en el zip`)
};

const de_ranger_flag_zip_too_many_entries = /** @type {(inputs: Ranger_Flag_Zip_Too_Many_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zu viele Dateien im Zip`)
};

const fr_ranger_flag_zip_too_many_entries = /** @type {(inputs: Ranger_Flag_Zip_Too_Many_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trop de fichiers dans le zip`)
};

const it_ranger_flag_zip_too_many_entries = /** @type {(inputs: Ranger_Flag_Zip_Too_Many_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Troppi file nello zip`)
};

const nl_ranger_flag_zip_too_many_entries = /** @type {(inputs: Ranger_Flag_Zip_Too_Many_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Te veel bestanden in de zip`)
};

const pl_ranger_flag_zip_too_many_entries = /** @type {(inputs: Ranger_Flag_Zip_Too_Many_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Za dużo plików w zipie`)
};

const pt_ranger_flag_zip_too_many_entries = /** @type {(inputs: Ranger_Flag_Zip_Too_Many_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arquivos demais no zip`)
};

const ru_ranger_flag_zip_too_many_entries = /** @type {(inputs: Ranger_Flag_Zip_Too_Many_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Слишком много файлов в zip`)
};

const sv_ranger_flag_zip_too_many_entries = /** @type {(inputs: Ranger_Flag_Zip_Too_Many_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`För många filer i zip-filen`)
};

const tr_ranger_flag_zip_too_many_entries = /** @type {(inputs: Ranger_Flag_Zip_Too_Many_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zip içinde çok fazla dosya`)
};

const zh_ranger_flag_zip_too_many_entries = /** @type {(inputs: Ranger_Flag_Zip_Too_Many_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`zip 中文件过多`)
};

const ja_ranger_flag_zip_too_many_entries = /** @type {(inputs: Ranger_Flag_Zip_Too_Many_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`zip 内のファイルが多すぎます`)
};

/**
* | output |
* | --- |
* | "Too many files in the zip" |
*
* @param {Ranger_Flag_Zip_Too_Many_EntriesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_flag_zip_too_many_entries = /** @type {((inputs?: Ranger_Flag_Zip_Too_Many_EntriesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Flag_Zip_Too_Many_EntriesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_flag_zip_too_many_entries(inputs)
	if (locale === "de") return de_ranger_flag_zip_too_many_entries(inputs)
	if (locale === "fr") return fr_ranger_flag_zip_too_many_entries(inputs)
	if (locale === "it") return it_ranger_flag_zip_too_many_entries(inputs)
	if (locale === "nl") return nl_ranger_flag_zip_too_many_entries(inputs)
	if (locale === "pl") return pl_ranger_flag_zip_too_many_entries(inputs)
	if (locale === "pt") return pt_ranger_flag_zip_too_many_entries(inputs)
	if (locale === "ru") return ru_ranger_flag_zip_too_many_entries(inputs)
	if (locale === "sv") return sv_ranger_flag_zip_too_many_entries(inputs)
	if (locale === "tr") return tr_ranger_flag_zip_too_many_entries(inputs)
	if (locale === "zh") return zh_ranger_flag_zip_too_many_entries(inputs)
	if (locale === "ja") return ja_ranger_flag_zip_too_many_entries(inputs)
	return en_ranger_flag_zip_too_many_entries(inputs)
});
