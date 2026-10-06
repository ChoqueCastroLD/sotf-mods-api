/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Import_Step2_TitleInputs */

const en_builds_import_step2_title = /** @type {(inputs: Builds_Import_Step2_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Put the file in LocalBuildings`)
};

const es_builds_import_step2_title = /** @type {(inputs: Builds_Import_Step2_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pon el archivo en LocalBuildings`)
};

const de_builds_import_step2_title = /** @type {(inputs: Builds_Import_Step2_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Datei in LocalBuildings ablegen`)
};

const fr_builds_import_step2_title = /** @type {(inputs: Builds_Import_Step2_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mettre le fichier dans LocalBuildings`)
};

const it_builds_import_step2_title = /** @type {(inputs: Builds_Import_Step2_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Metti il file in LocalBuildings`)
};

const nl_builds_import_step2_title = /** @type {(inputs: Builds_Import_Step2_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zet het bestand in LocalBuildings`)
};

const pl_builds_import_step2_title = /** @type {(inputs: Builds_Import_Step2_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wrzuć plik do LocalBuildings`)
};

const pt_builds_import_step2_title = /** @type {(inputs: Builds_Import_Step2_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Coloque o arquivo em LocalBuildings`)
};

const ru_builds_import_step2_title = /** @type {(inputs: Builds_Import_Step2_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Положите файл в LocalBuildings`)
};

const sv_builds_import_step2_title = /** @type {(inputs: Builds_Import_Step2_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lägg filen i LocalBuildings`)
};

const tr_builds_import_step2_title = /** @type {(inputs: Builds_Import_Step2_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dosyayı LocalBuildings klasörüne koy`)
};

const zh_builds_import_step2_title = /** @type {(inputs: Builds_Import_Step2_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`把文件放进 LocalBuildings`)
};

const ja_builds_import_step2_title = /** @type {(inputs: Builds_Import_Step2_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ファイルを LocalBuildings に入れる`)
};

/**
* | output |
* | --- |
* | "Put the file in LocalBuildings" |
*
* @param {Builds_Import_Step2_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_import_step2_title = /** @type {((inputs?: Builds_Import_Step2_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Import_Step2_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_import_step2_title(inputs)
	if (locale === "de") return de_builds_import_step2_title(inputs)
	if (locale === "fr") return fr_builds_import_step2_title(inputs)
	if (locale === "it") return it_builds_import_step2_title(inputs)
	if (locale === "nl") return nl_builds_import_step2_title(inputs)
	if (locale === "pl") return pl_builds_import_step2_title(inputs)
	if (locale === "pt") return pt_builds_import_step2_title(inputs)
	if (locale === "ru") return ru_builds_import_step2_title(inputs)
	if (locale === "sv") return sv_builds_import_step2_title(inputs)
	if (locale === "tr") return tr_builds_import_step2_title(inputs)
	if (locale === "zh") return zh_builds_import_step2_title(inputs)
	if (locale === "ja") return ja_builds_import_step2_title(inputs)
	return en_builds_import_step2_title(inputs)
});
