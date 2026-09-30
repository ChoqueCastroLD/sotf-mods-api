/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Import_Copy_PathInputs */

const en_builds_import_copy_path = /** @type {(inputs: Builds_Import_Copy_PathInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copy folder path`)
};

const es_builds_import_copy_path = /** @type {(inputs: Builds_Import_Copy_PathInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copiar la ruta de la carpeta`)
};

const de_builds_import_copy_path = /** @type {(inputs: Builds_Import_Copy_PathInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ordnerpfad kopieren`)
};

const fr_builds_import_copy_path = /** @type {(inputs: Builds_Import_Copy_PathInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copier le chemin du dossier`)
};

const it_builds_import_copy_path = /** @type {(inputs: Builds_Import_Copy_PathInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copia il percorso della cartella`)
};

const nl_builds_import_copy_path = /** @type {(inputs: Builds_Import_Copy_PathInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mappad kopiëren`)
};

const pl_builds_import_copy_path = /** @type {(inputs: Builds_Import_Copy_PathInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopiuj ścieżkę folderu`)
};

const pt_builds_import_copy_path = /** @type {(inputs: Builds_Import_Copy_PathInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copiar o caminho da pasta`)
};

const ru_builds_import_copy_path = /** @type {(inputs: Builds_Import_Copy_PathInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скопировать путь к папке`)
};

const sv_builds_import_copy_path = /** @type {(inputs: Builds_Import_Copy_PathInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopiera mappens sökväg`)
};

const tr_builds_import_copy_path = /** @type {(inputs: Builds_Import_Copy_PathInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Klasör yolunu kopyala`)
};

const zh_builds_import_copy_path = /** @type {(inputs: Builds_Import_Copy_PathInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`复制文件夹路径`)
};

const ja_builds_import_copy_path = /** @type {(inputs: Builds_Import_Copy_PathInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フォルダーのパスをコピー`)
};

/**
* | output |
* | --- |
* | "Copy folder path" |
*
* @param {Builds_Import_Copy_PathInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_import_copy_path = /** @type {((inputs?: Builds_Import_Copy_PathInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Import_Copy_PathInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_import_copy_path(inputs)
	if (locale === "de") return de_builds_import_copy_path(inputs)
	if (locale === "fr") return fr_builds_import_copy_path(inputs)
	if (locale === "it") return it_builds_import_copy_path(inputs)
	if (locale === "nl") return nl_builds_import_copy_path(inputs)
	if (locale === "pl") return pl_builds_import_copy_path(inputs)
	if (locale === "pt") return pt_builds_import_copy_path(inputs)
	if (locale === "ru") return ru_builds_import_copy_path(inputs)
	if (locale === "sv") return sv_builds_import_copy_path(inputs)
	if (locale === "tr") return tr_builds_import_copy_path(inputs)
	if (locale === "zh") return zh_builds_import_copy_path(inputs)
	if (locale === "ja") return ja_builds_import_copy_path(inputs)
	return en_builds_import_copy_path(inputs)
});
