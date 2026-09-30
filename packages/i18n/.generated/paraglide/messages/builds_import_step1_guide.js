/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Import_Step1_GuideInputs */

const en_builds_import_step1_guide = /** @type {(inputs: Builds_Import_Step1_GuideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Install guide`)
};

const es_builds_import_step1_guide = /** @type {(inputs: Builds_Import_Step1_GuideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guía de instalación`)
};

const de_builds_import_step1_guide = /** @type {(inputs: Builds_Import_Step1_GuideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installationsanleitung`)
};

const fr_builds_import_step1_guide = /** @type {(inputs: Builds_Import_Step1_GuideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guide d’installation`)
};

const it_builds_import_step1_guide = /** @type {(inputs: Builds_Import_Step1_GuideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guida all’installazione`)
};

const nl_builds_import_step1_guide = /** @type {(inputs: Builds_Import_Step1_GuideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installatiegids`)
};

const pl_builds_import_step1_guide = /** @type {(inputs: Builds_Import_Step1_GuideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Poradnik instalacji`)
};

const pt_builds_import_step1_guide = /** @type {(inputs: Builds_Import_Step1_GuideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guia de instalação`)
};

const ru_builds_import_step1_guide = /** @type {(inputs: Builds_Import_Step1_GuideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Руководство по установке`)
};

const sv_builds_import_step1_guide = /** @type {(inputs: Builds_Import_Step1_GuideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installationsguide`)
};

const tr_builds_import_step1_guide = /** @type {(inputs: Builds_Import_Step1_GuideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kurulum rehberi`)
};

const zh_builds_import_step1_guide = /** @type {(inputs: Builds_Import_Step1_GuideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`安装指南`)
};

const ja_builds_import_step1_guide = /** @type {(inputs: Builds_Import_Step1_GuideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`インストールガイド`)
};

/**
* | output |
* | --- |
* | "Install guide" |
*
* @param {Builds_Import_Step1_GuideInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_import_step1_guide = /** @type {((inputs?: Builds_Import_Step1_GuideInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Import_Step1_GuideInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_import_step1_guide(inputs)
	if (locale === "de") return de_builds_import_step1_guide(inputs)
	if (locale === "fr") return fr_builds_import_step1_guide(inputs)
	if (locale === "it") return it_builds_import_step1_guide(inputs)
	if (locale === "nl") return nl_builds_import_step1_guide(inputs)
	if (locale === "pl") return pl_builds_import_step1_guide(inputs)
	if (locale === "pt") return pt_builds_import_step1_guide(inputs)
	if (locale === "ru") return ru_builds_import_step1_guide(inputs)
	if (locale === "sv") return sv_builds_import_step1_guide(inputs)
	if (locale === "tr") return tr_builds_import_step1_guide(inputs)
	if (locale === "zh") return zh_builds_import_step1_guide(inputs)
	if (locale === "ja") return ja_builds_import_step1_guide(inputs)
	return en_builds_import_step1_guide(inputs)
});
