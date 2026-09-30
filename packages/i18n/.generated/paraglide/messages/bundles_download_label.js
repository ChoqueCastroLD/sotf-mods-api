/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ kit: NonNullable<unknown> }} Bundles_Download_LabelInputs */

const en_bundles_download_label = /** @type {(inputs: Bundles_Download_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Download all files of ${i?.kit} as one zip`)
};

const es_bundles_download_label = /** @type {(inputs: Bundles_Download_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Descargar todos los archivos de ${i?.kit} en un zip`)
};

const de_bundles_download_label = /** @type {(inputs: Bundles_Download_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Alle Dateien von ${i?.kit} als eine Zip-Datei herunterladen`)
};

const fr_bundles_download_label = /** @type {(inputs: Bundles_Download_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Télécharger tous les fichiers de ${i?.kit} dans un zip`)
};

const it_bundles_download_label = /** @type {(inputs: Bundles_Download_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Scarica tutti i file di ${i?.kit} in un unico zip`)
};

const nl_bundles_download_label = /** @type {(inputs: Bundles_Download_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Download alle bestanden van ${i?.kit} als één zip`)
};

const pl_bundles_download_label = /** @type {(inputs: Bundles_Download_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Pobierz wszystkie pliki z ${i?.kit} jako jeden zip`)
};

const pt_bundles_download_label = /** @type {(inputs: Bundles_Download_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Transferir todos os ficheiros de ${i?.kit} num zip`)
};

const ru_bundles_download_label = /** @type {(inputs: Bundles_Download_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Скачать все файлы набора ${i?.kit} одним zip`)
};

const sv_bundles_download_label = /** @type {(inputs: Bundles_Download_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ladda ner alla filer i ${i?.kit} som en zip`)
};

const tr_bundles_download_label = /** @type {(inputs: Bundles_Download_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.kit} içindeki tüm dosyaları tek zip olarak indir`)
};

const zh_bundles_download_label = /** @type {(inputs: Bundles_Download_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`将 ${i?.kit} 的所有文件下载为一个 zip`)
};

const ja_bundles_download_label = /** @type {(inputs: Bundles_Download_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.kit} のすべてのファイルを 1 つの zip でダウンロード`)
};

/**
* | output |
* | --- |
* | "Download all files of {kit} as one zip" |
*
* @param {Bundles_Download_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const bundles_download_label = /** @type {((inputs: Bundles_Download_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Bundles_Download_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_bundles_download_label(inputs)
	if (locale === "de") return de_bundles_download_label(inputs)
	if (locale === "fr") return fr_bundles_download_label(inputs)
	if (locale === "it") return it_bundles_download_label(inputs)
	if (locale === "nl") return nl_bundles_download_label(inputs)
	if (locale === "pl") return pl_bundles_download_label(inputs)
	if (locale === "pt") return pt_bundles_download_label(inputs)
	if (locale === "ru") return ru_bundles_download_label(inputs)
	if (locale === "sv") return sv_bundles_download_label(inputs)
	if (locale === "tr") return tr_bundles_download_label(inputs)
	if (locale === "zh") return zh_bundles_download_label(inputs)
	if (locale === "ja") return ja_bundles_download_label(inputs)
	return en_bundles_download_label(inputs)
});
