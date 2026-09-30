/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Tab_FilesInputs */

const en_ranger_tab_files = /** @type {(inputs: Ranger_Tab_FilesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Files diff`)
};

const es_ranger_tab_files = /** @type {(inputs: Ranger_Tab_FilesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diff de archivos`)
};

const de_ranger_tab_files = /** @type {(inputs: Ranger_Tab_FilesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Datei-Diff`)
};

const fr_ranger_tab_files = /** @type {(inputs: Ranger_Tab_FilesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diff des fichiers`)
};

const it_ranger_tab_files = /** @type {(inputs: Ranger_Tab_FilesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Differenze dei file`)
};

const nl_ranger_tab_files = /** @type {(inputs: Ranger_Tab_FilesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bestandsverschillen`)
};

const pl_ranger_tab_files = /** @type {(inputs: Ranger_Tab_FilesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Różnice plików`)
};

const pt_ranger_tab_files = /** @type {(inputs: Ranger_Tab_FilesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diferenças de arquivos`)
};

const ru_ranger_tab_files = /** @type {(inputs: Ranger_Tab_FilesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сравнение файлов`)
};

const sv_ranger_tab_files = /** @type {(inputs: Ranger_Tab_FilesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filskillnader`)
};

const tr_ranger_tab_files = /** @type {(inputs: Ranger_Tab_FilesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dosya farkları`)
};

const zh_ranger_tab_files = /** @type {(inputs: Ranger_Tab_FilesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`文件差异`)
};

const ja_ranger_tab_files = /** @type {(inputs: Ranger_Tab_FilesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ファイル差分`)
};

/**
* | output |
* | --- |
* | "Files diff" |
*
* @param {Ranger_Tab_FilesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_tab_files = /** @type {((inputs?: Ranger_Tab_FilesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Tab_FilesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_tab_files(inputs)
	if (locale === "de") return de_ranger_tab_files(inputs)
	if (locale === "fr") return fr_ranger_tab_files(inputs)
	if (locale === "it") return it_ranger_tab_files(inputs)
	if (locale === "nl") return nl_ranger_tab_files(inputs)
	if (locale === "pl") return pl_ranger_tab_files(inputs)
	if (locale === "pt") return pt_ranger_tab_files(inputs)
	if (locale === "ru") return ru_ranger_tab_files(inputs)
	if (locale === "sv") return sv_ranger_tab_files(inputs)
	if (locale === "tr") return tr_ranger_tab_files(inputs)
	if (locale === "zh") return zh_ranger_tab_files(inputs)
	if (locale === "ja") return ja_ranger_tab_files(inputs)
	return en_ranger_tab_files(inputs)
});
