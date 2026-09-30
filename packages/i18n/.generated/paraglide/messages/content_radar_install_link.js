/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Radar_Install_LinkInputs */

const en_content_radar_install_link = /** @type {(inputs: Content_Radar_Install_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How to install RedLoader`)
};

const es_content_radar_install_link = /** @type {(inputs: Content_Radar_Install_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cómo instalar RedLoader`)
};

const de_content_radar_install_link = /** @type {(inputs: Content_Radar_Install_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`So installierst du RedLoader`)
};

const fr_content_radar_install_link = /** @type {(inputs: Content_Radar_Install_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comment installer RedLoader`)
};

const it_content_radar_install_link = /** @type {(inputs: Content_Radar_Install_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Come installare RedLoader`)
};

const nl_content_radar_install_link = /** @type {(inputs: Content_Radar_Install_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zo installeer je RedLoader`)
};

const pl_content_radar_install_link = /** @type {(inputs: Content_Radar_Install_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jak zainstalować RedLoader`)
};

const pt_content_radar_install_link = /** @type {(inputs: Content_Radar_Install_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Como instalar o RedLoader`)
};

const ru_content_radar_install_link = /** @type {(inputs: Content_Radar_Install_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Как установить RedLoader`)
};

const sv_content_radar_install_link = /** @type {(inputs: Content_Radar_Install_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Så installerar du RedLoader`)
};

const tr_content_radar_install_link = /** @type {(inputs: Content_Radar_Install_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader nasıl kurulur`)
};

const zh_content_radar_install_link = /** @type {(inputs: Content_Radar_Install_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`如何安装 RedLoader`)
};

const ja_content_radar_install_link = /** @type {(inputs: Content_Radar_Install_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader のインストール方法`)
};

/**
* | output |
* | --- |
* | "How to install RedLoader" |
*
* @param {Content_Radar_Install_LinkInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_radar_install_link = /** @type {((inputs?: Content_Radar_Install_LinkInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_Install_LinkInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_radar_install_link(inputs)
	if (locale === "de") return de_content_radar_install_link(inputs)
	if (locale === "fr") return fr_content_radar_install_link(inputs)
	if (locale === "it") return it_content_radar_install_link(inputs)
	if (locale === "nl") return nl_content_radar_install_link(inputs)
	if (locale === "pl") return pl_content_radar_install_link(inputs)
	if (locale === "pt") return pt_content_radar_install_link(inputs)
	if (locale === "ru") return ru_content_radar_install_link(inputs)
	if (locale === "sv") return sv_content_radar_install_link(inputs)
	if (locale === "tr") return tr_content_radar_install_link(inputs)
	if (locale === "zh") return zh_content_radar_install_link(inputs)
	if (locale === "ja") return ja_content_radar_install_link(inputs)
	return en_content_radar_install_link(inputs)
});
