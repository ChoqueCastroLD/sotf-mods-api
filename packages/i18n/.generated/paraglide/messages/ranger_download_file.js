/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Download_FileInputs */

const en_ranger_download_file = /** @type {(inputs: Ranger_Download_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download file`)
};

const es_ranger_download_file = /** @type {(inputs: Ranger_Download_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descargar archivo`)
};

const de_ranger_download_file = /** @type {(inputs: Ranger_Download_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Datei herunterladen`)
};

const fr_ranger_download_file = /** @type {(inputs: Ranger_Download_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Télécharger le fichier`)
};

const it_ranger_download_file = /** @type {(inputs: Ranger_Download_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scarica il file`)
};

const nl_ranger_download_file = /** @type {(inputs: Ranger_Download_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bestand downloaden`)
};

const pl_ranger_download_file = /** @type {(inputs: Ranger_Download_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pobierz plik`)
};

const pt_ranger_download_file = /** @type {(inputs: Ranger_Download_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Baixar arquivo`)
};

const ru_ranger_download_file = /** @type {(inputs: Ranger_Download_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скачать файл`)
};

const sv_ranger_download_file = /** @type {(inputs: Ranger_Download_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ladda ner filen`)
};

const tr_ranger_download_file = /** @type {(inputs: Ranger_Download_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dosyayı indir`)
};

const zh_ranger_download_file = /** @type {(inputs: Ranger_Download_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下载文件`)
};

const ja_ranger_download_file = /** @type {(inputs: Ranger_Download_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ファイルをダウンロード`)
};

/**
* | output |
* | --- |
* | "Download file" |
*
* @param {Ranger_Download_FileInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_download_file = /** @type {((inputs?: Ranger_Download_FileInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Download_FileInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_download_file(inputs)
	if (locale === "de") return de_ranger_download_file(inputs)
	if (locale === "fr") return fr_ranger_download_file(inputs)
	if (locale === "it") return it_ranger_download_file(inputs)
	if (locale === "nl") return nl_ranger_download_file(inputs)
	if (locale === "pl") return pl_ranger_download_file(inputs)
	if (locale === "pt") return pt_ranger_download_file(inputs)
	if (locale === "ru") return ru_ranger_download_file(inputs)
	if (locale === "sv") return sv_ranger_download_file(inputs)
	if (locale === "tr") return tr_ranger_download_file(inputs)
	if (locale === "zh") return zh_ranger_download_file(inputs)
	if (locale === "ja") return ja_ranger_download_file(inputs)
	return en_ranger_download_file(inputs)
});
