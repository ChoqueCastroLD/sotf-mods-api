/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Import_TitleInputs */

const en_builds_import_title = /** @type {(inputs: Builds_Import_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How to import (3 steps)`)
};

const es_builds_import_title = /** @type {(inputs: Builds_Import_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cómo importar (3 pasos)`)
};

const de_builds_import_title = /** @type {(inputs: Builds_Import_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`So importierst du (3 Schritte)`)
};

const fr_builds_import_title = /** @type {(inputs: Builds_Import_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comment l’importer (3 étapes)`)
};

const it_builds_import_title = /** @type {(inputs: Builds_Import_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Come importarla (3 passaggi)`)
};

const nl_builds_import_title = /** @type {(inputs: Builds_Import_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zo importeer je (3 stappen)`)
};

const pl_builds_import_title = /** @type {(inputs: Builds_Import_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jak zaimportować (3 kroki)`)
};

const pt_builds_import_title = /** @type {(inputs: Builds_Import_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Como importar (3 passos)`)
};

const ru_builds_import_title = /** @type {(inputs: Builds_Import_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Как импортировать (3 шага)`)
};

const sv_builds_import_title = /** @type {(inputs: Builds_Import_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Så importerar du (3 steg)`)
};

const tr_builds_import_title = /** @type {(inputs: Builds_Import_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nasıl içe aktarılır (3 adım)`)
};

const zh_builds_import_title = /** @type {(inputs: Builds_Import_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`如何导入（3 步）`)
};

const ja_builds_import_title = /** @type {(inputs: Builds_Import_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`インポート方法（3 ステップ）`)
};

/**
* | output |
* | --- |
* | "How to import (3 steps)" |
*
* @param {Builds_Import_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_import_title = /** @type {((inputs?: Builds_Import_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Import_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_import_title(inputs)
	if (locale === "de") return de_builds_import_title(inputs)
	if (locale === "fr") return fr_builds_import_title(inputs)
	if (locale === "it") return it_builds_import_title(inputs)
	if (locale === "nl") return nl_builds_import_title(inputs)
	if (locale === "pl") return pl_builds_import_title(inputs)
	if (locale === "pt") return pt_builds_import_title(inputs)
	if (locale === "ru") return ru_builds_import_title(inputs)
	if (locale === "sv") return sv_builds_import_title(inputs)
	if (locale === "tr") return tr_builds_import_title(inputs)
	if (locale === "zh") return zh_builds_import_title(inputs)
	if (locale === "ja") return ja_builds_import_title(inputs)
	return en_builds_import_title(inputs)
});
