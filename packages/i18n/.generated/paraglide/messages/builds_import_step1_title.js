/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Import_Step1_TitleInputs */

const en_builds_import_step1_title = /** @type {(inputs: Builds_Import_Step1_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Install RedLoader and BuildShare`)
};

const es_builds_import_step1_title = /** @type {(inputs: Builds_Import_Step1_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instala RedLoader y BuildShare`)
};

const de_builds_import_step1_title = /** @type {(inputs: Builds_Import_Step1_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader und BuildShare installieren`)
};

const fr_builds_import_step1_title = /** @type {(inputs: Builds_Import_Step1_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installer RedLoader et BuildShare`)
};

const it_builds_import_step1_title = /** @type {(inputs: Builds_Import_Step1_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installa RedLoader e BuildShare`)
};

const nl_builds_import_step1_title = /** @type {(inputs: Builds_Import_Step1_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installeer RedLoader en BuildShare`)
};

const pl_builds_import_step1_title = /** @type {(inputs: Builds_Import_Step1_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zainstaluj RedLoader i BuildShare`)
};

const pt_builds_import_step1_title = /** @type {(inputs: Builds_Import_Step1_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instale o RedLoader e o BuildShare`)
};

const ru_builds_import_step1_title = /** @type {(inputs: Builds_Import_Step1_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Установите RedLoader и BuildShare`)
};

const sv_builds_import_step1_title = /** @type {(inputs: Builds_Import_Step1_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installera RedLoader och BuildShare`)
};

const tr_builds_import_step1_title = /** @type {(inputs: Builds_Import_Step1_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader ve BuildShare’i kur`)
};

const zh_builds_import_step1_title = /** @type {(inputs: Builds_Import_Step1_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`安装 RedLoader 和 BuildShare`)
};

const ja_builds_import_step1_title = /** @type {(inputs: Builds_Import_Step1_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader と BuildShare を導入する`)
};

/**
* | output |
* | --- |
* | "Install RedLoader and BuildShare" |
*
* @param {Builds_Import_Step1_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_import_step1_title = /** @type {((inputs?: Builds_Import_Step1_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Import_Step1_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_import_step1_title(inputs)
	if (locale === "de") return de_builds_import_step1_title(inputs)
	if (locale === "fr") return fr_builds_import_step1_title(inputs)
	if (locale === "it") return it_builds_import_step1_title(inputs)
	if (locale === "nl") return nl_builds_import_step1_title(inputs)
	if (locale === "pl") return pl_builds_import_step1_title(inputs)
	if (locale === "pt") return pt_builds_import_step1_title(inputs)
	if (locale === "ru") return ru_builds_import_step1_title(inputs)
	if (locale === "sv") return sv_builds_import_step1_title(inputs)
	if (locale === "tr") return tr_builds_import_step1_title(inputs)
	if (locale === "zh") return zh_builds_import_step1_title(inputs)
	if (locale === "ja") return ja_builds_import_step1_title(inputs)
	return en_builds_import_step1_title(inputs)
});
