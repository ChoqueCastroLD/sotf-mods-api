/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Install_EyebrowInputs */

const en_content_install_eyebrow = /** @type {(inputs: Content_Install_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Setup guide`)
};

const es_content_install_eyebrow = /** @type {(inputs: Content_Install_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guía de preparación`)
};

const de_content_install_eyebrow = /** @type {(inputs: Content_Install_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Einrichtungsanleitung`)
};

const fr_content_install_eyebrow = /** @type {(inputs: Content_Install_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guide d’installation`)
};

const it_content_install_eyebrow = /** @type {(inputs: Content_Install_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guida all’installazione`)
};

const nl_content_install_eyebrow = /** @type {(inputs: Content_Install_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installatiegids`)
};

const pl_content_install_eyebrow = /** @type {(inputs: Content_Install_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Poradnik instalacji`)
};

const pt_content_install_eyebrow = /** @type {(inputs: Content_Install_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guia de instalação`)
};

const ru_content_install_eyebrow = /** @type {(inputs: Content_Install_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Руководство по установке`)
};

const sv_content_install_eyebrow = /** @type {(inputs: Content_Install_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installationsguide`)
};

const tr_content_install_eyebrow = /** @type {(inputs: Content_Install_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kurulum rehberi`)
};

const zh_content_install_eyebrow = /** @type {(inputs: Content_Install_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`安装指南`)
};

const ja_content_install_eyebrow = /** @type {(inputs: Content_Install_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`導入ガイド`)
};

/**
* | output |
* | --- |
* | "Setup guide" |
*
* @param {Content_Install_EyebrowInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_install_eyebrow = /** @type {((inputs?: Content_Install_EyebrowInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Install_EyebrowInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_install_eyebrow(inputs)
	if (locale === "de") return de_content_install_eyebrow(inputs)
	if (locale === "fr") return fr_content_install_eyebrow(inputs)
	if (locale === "it") return it_content_install_eyebrow(inputs)
	if (locale === "nl") return nl_content_install_eyebrow(inputs)
	if (locale === "pl") return pl_content_install_eyebrow(inputs)
	if (locale === "pt") return pt_content_install_eyebrow(inputs)
	if (locale === "ru") return ru_content_install_eyebrow(inputs)
	if (locale === "sv") return sv_content_install_eyebrow(inputs)
	if (locale === "tr") return tr_content_install_eyebrow(inputs)
	if (locale === "zh") return zh_content_install_eyebrow(inputs)
	if (locale === "ja") return ja_content_install_eyebrow(inputs)
	return en_content_install_eyebrow(inputs)
});
