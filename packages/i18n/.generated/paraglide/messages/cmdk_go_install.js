/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Go_InstallInputs */

const en_cmdk_go_install = /** @type {(inputs: Cmdk_Go_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Install guide`)
};

const es_cmdk_go_install = /** @type {(inputs: Cmdk_Go_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guía de instalación`)
};

const de_cmdk_go_install = /** @type {(inputs: Cmdk_Go_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installationsanleitung`)
};

const fr_cmdk_go_install = /** @type {(inputs: Cmdk_Go_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guide d’installation`)
};

const it_cmdk_go_install = /** @type {(inputs: Cmdk_Go_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guida all’installazione`)
};

const nl_cmdk_go_install = /** @type {(inputs: Cmdk_Go_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installatiegids`)
};

const pl_cmdk_go_install = /** @type {(inputs: Cmdk_Go_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instrukcja instalacji`)
};

const pt_cmdk_go_install = /** @type {(inputs: Cmdk_Go_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guia de instalação`)
};

const ru_cmdk_go_install = /** @type {(inputs: Cmdk_Go_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Руководство по установке`)
};

const sv_cmdk_go_install = /** @type {(inputs: Cmdk_Go_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installationsguide`)
};

const tr_cmdk_go_install = /** @type {(inputs: Cmdk_Go_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kurulum rehberi`)
};

const zh_cmdk_go_install = /** @type {(inputs: Cmdk_Go_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`安装指南`)
};

const ja_cmdk_go_install = /** @type {(inputs: Cmdk_Go_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`インストールガイド`)
};

/**
* | output |
* | --- |
* | "Install guide" |
*
* @param {Cmdk_Go_InstallInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_go_install = /** @type {((inputs?: Cmdk_Go_InstallInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Go_InstallInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_go_install(inputs)
	if (locale === "de") return de_cmdk_go_install(inputs)
	if (locale === "fr") return fr_cmdk_go_install(inputs)
	if (locale === "it") return it_cmdk_go_install(inputs)
	if (locale === "nl") return nl_cmdk_go_install(inputs)
	if (locale === "pl") return pl_cmdk_go_install(inputs)
	if (locale === "pt") return pt_cmdk_go_install(inputs)
	if (locale === "ru") return ru_cmdk_go_install(inputs)
	if (locale === "sv") return sv_cmdk_go_install(inputs)
	if (locale === "tr") return tr_cmdk_go_install(inputs)
	if (locale === "zh") return zh_cmdk_go_install(inputs)
	if (locale === "ja") return ja_cmdk_go_install(inputs)
	return en_cmdk_go_install(inputs)
});
