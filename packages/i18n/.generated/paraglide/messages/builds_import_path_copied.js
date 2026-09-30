/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Import_Path_CopiedInputs */

const en_builds_import_path_copied = /** @type {(inputs: Builds_Import_Path_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Folder path copied.`)
};

const es_builds_import_path_copied = /** @type {(inputs: Builds_Import_Path_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ruta de la carpeta copiada.`)
};

const de_builds_import_path_copied = /** @type {(inputs: Builds_Import_Path_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ordnerpfad kopiert.`)
};

const fr_builds_import_path_copied = /** @type {(inputs: Builds_Import_Path_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chemin du dossier copié.`)
};

const it_builds_import_path_copied = /** @type {(inputs: Builds_Import_Path_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Percorso della cartella copiato.`)
};

const nl_builds_import_path_copied = /** @type {(inputs: Builds_Import_Path_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mappad gekopieerd.`)
};

const pl_builds_import_path_copied = /** @type {(inputs: Builds_Import_Path_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skopiowano ścieżkę folderu.`)
};

const pt_builds_import_path_copied = /** @type {(inputs: Builds_Import_Path_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Caminho da pasta copiado.`)
};

const ru_builds_import_path_copied = /** @type {(inputs: Builds_Import_Path_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Путь к папке скопирован.`)
};

const sv_builds_import_path_copied = /** @type {(inputs: Builds_Import_Path_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mappens sökväg kopierad.`)
};

const tr_builds_import_path_copied = /** @type {(inputs: Builds_Import_Path_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Klasör yolu kopyalandı.`)
};

const zh_builds_import_path_copied = /** @type {(inputs: Builds_Import_Path_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`文件夹路径已复制。`)
};

const ja_builds_import_path_copied = /** @type {(inputs: Builds_Import_Path_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フォルダーのパスをコピーしました。`)
};

/**
* | output |
* | --- |
* | "Folder path copied." |
*
* @param {Builds_Import_Path_CopiedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_import_path_copied = /** @type {((inputs?: Builds_Import_Path_CopiedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Import_Path_CopiedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_import_path_copied(inputs)
	if (locale === "de") return de_builds_import_path_copied(inputs)
	if (locale === "fr") return fr_builds_import_path_copied(inputs)
	if (locale === "it") return it_builds_import_path_copied(inputs)
	if (locale === "nl") return nl_builds_import_path_copied(inputs)
	if (locale === "pl") return pl_builds_import_path_copied(inputs)
	if (locale === "pt") return pt_builds_import_path_copied(inputs)
	if (locale === "ru") return ru_builds_import_path_copied(inputs)
	if (locale === "sv") return sv_builds_import_path_copied(inputs)
	if (locale === "tr") return tr_builds_import_path_copied(inputs)
	if (locale === "zh") return zh_builds_import_path_copied(inputs)
	if (locale === "ja") return ja_builds_import_path_copied(inputs)
	return en_builds_import_path_copied(inputs)
});
