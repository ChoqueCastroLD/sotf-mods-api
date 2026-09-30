/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Download_Install_GuideInputs */

const en_kits_download_install_guide = /** @type {(inputs: Kits_Download_Install_GuideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How to install mods`)
};

const es_kits_download_install_guide = /** @type {(inputs: Kits_Download_Install_GuideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cómo instalar mods`)
};

const de_kits_download_install_guide = /** @type {(inputs: Kits_Download_Install_GuideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`So installierst du Mods`)
};

const fr_kits_download_install_guide = /** @type {(inputs: Kits_Download_Install_GuideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comment installer des mods`)
};

const it_kits_download_install_guide = /** @type {(inputs: Kits_Download_Install_GuideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Come installare le mod`)
};

const nl_kits_download_install_guide = /** @type {(inputs: Kits_Download_Install_GuideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods installeren`)
};

const pl_kits_download_install_guide = /** @type {(inputs: Kits_Download_Install_GuideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jak instalować mody`)
};

const pt_kits_download_install_guide = /** @type {(inputs: Kits_Download_Install_GuideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Como instalar mods`)
};

const ru_kits_download_install_guide = /** @type {(inputs: Kits_Download_Install_GuideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Как устанавливать моды`)
};

const sv_kits_download_install_guide = /** @type {(inputs: Kits_Download_Install_GuideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Så installerar du moddar`)
};

const tr_kits_download_install_guide = /** @type {(inputs: Kits_Download_Install_GuideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod nasıl kurulur`)
};

const zh_kits_download_install_guide = /** @type {(inputs: Kits_Download_Install_GuideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`如何安装模组`)
};

const ja_kits_download_install_guide = /** @type {(inputs: Kits_Download_Install_GuideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD のインストール方法`)
};

/**
* | output |
* | --- |
* | "How to install mods" |
*
* @param {Kits_Download_Install_GuideInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_download_install_guide = /** @type {((inputs?: Kits_Download_Install_GuideInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Download_Install_GuideInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_download_install_guide(inputs)
	if (locale === "de") return de_kits_download_install_guide(inputs)
	if (locale === "fr") return fr_kits_download_install_guide(inputs)
	if (locale === "it") return it_kits_download_install_guide(inputs)
	if (locale === "nl") return nl_kits_download_install_guide(inputs)
	if (locale === "pl") return pl_kits_download_install_guide(inputs)
	if (locale === "pt") return pt_kits_download_install_guide(inputs)
	if (locale === "ru") return ru_kits_download_install_guide(inputs)
	if (locale === "sv") return sv_kits_download_install_guide(inputs)
	if (locale === "tr") return tr_kits_download_install_guide(inputs)
	if (locale === "zh") return zh_kits_download_install_guide(inputs)
	if (locale === "ja") return ja_kits_download_install_guide(inputs)
	return en_kits_download_install_guide(inputs)
});
