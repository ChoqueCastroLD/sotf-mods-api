/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Import_Step1_BuildshareInputs */

const en_builds_import_step1_buildshare = /** @type {(inputs: Builds_Import_Step1_BuildshareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Get BuildShare`)
};

const es_builds_import_step1_buildshare = /** @type {(inputs: Builds_Import_Step1_BuildshareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conseguir BuildShare`)
};

const de_builds_import_step1_buildshare = /** @type {(inputs: Builds_Import_Step1_BuildshareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`BuildShare holen`)
};

const fr_builds_import_step1_buildshare = /** @type {(inputs: Builds_Import_Step1_BuildshareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obtenir BuildShare`)
};

const it_builds_import_step1_buildshare = /** @type {(inputs: Builds_Import_Step1_BuildshareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scarica BuildShare`)
};

const nl_builds_import_step1_buildshare = /** @type {(inputs: Builds_Import_Step1_BuildshareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`BuildShare downloaden`)
};

const pl_builds_import_step1_buildshare = /** @type {(inputs: Builds_Import_Step1_BuildshareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pobierz BuildShare`)
};

const pt_builds_import_step1_buildshare = /** @type {(inputs: Builds_Import_Step1_BuildshareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Baixar o BuildShare`)
};

const ru_builds_import_step1_buildshare = /** @type {(inputs: Builds_Import_Step1_BuildshareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скачать BuildShare`)
};

const sv_builds_import_step1_buildshare = /** @type {(inputs: Builds_Import_Step1_BuildshareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hämta BuildShare`)
};

const tr_builds_import_step1_buildshare = /** @type {(inputs: Builds_Import_Step1_BuildshareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`BuildShare’i edin`)
};

const zh_builds_import_step1_buildshare = /** @type {(inputs: Builds_Import_Step1_BuildshareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`获取 BuildShare`)
};

const ja_builds_import_step1_buildshare = /** @type {(inputs: Builds_Import_Step1_BuildshareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`BuildShare を入手`)
};

/**
* | output |
* | --- |
* | "Get BuildShare" |
*
* @param {Builds_Import_Step1_BuildshareInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_import_step1_buildshare = /** @type {((inputs?: Builds_Import_Step1_BuildshareInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Import_Step1_BuildshareInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_import_step1_buildshare(inputs)
	if (locale === "de") return de_builds_import_step1_buildshare(inputs)
	if (locale === "fr") return fr_builds_import_step1_buildshare(inputs)
	if (locale === "it") return it_builds_import_step1_buildshare(inputs)
	if (locale === "nl") return nl_builds_import_step1_buildshare(inputs)
	if (locale === "pl") return pl_builds_import_step1_buildshare(inputs)
	if (locale === "pt") return pt_builds_import_step1_buildshare(inputs)
	if (locale === "ru") return ru_builds_import_step1_buildshare(inputs)
	if (locale === "sv") return sv_builds_import_step1_buildshare(inputs)
	if (locale === "tr") return tr_builds_import_step1_buildshare(inputs)
	if (locale === "zh") return zh_builds_import_step1_buildshare(inputs)
	if (locale === "ja") return ja_builds_import_step1_buildshare(inputs)
	return en_builds_import_step1_buildshare(inputs)
});
