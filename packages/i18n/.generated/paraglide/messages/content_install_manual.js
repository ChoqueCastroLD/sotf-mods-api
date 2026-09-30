/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Install_ManualInputs */

const en_content_install_manual = /** @type {(inputs: Content_Install_ManualInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Install manually`)
};

const es_content_install_manual = /** @type {(inputs: Content_Install_ManualInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instalar a mano`)
};

const de_content_install_manual = /** @type {(inputs: Content_Install_ManualInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Manuell installieren`)
};

const fr_content_install_manual = /** @type {(inputs: Content_Install_ManualInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installer à la main`)
};

const it_content_install_manual = /** @type {(inputs: Content_Install_ManualInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installa a mano`)
};

const nl_content_install_manual = /** @type {(inputs: Content_Install_ManualInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Handmatig installeren`)
};

const pl_content_install_manual = /** @type {(inputs: Content_Install_ManualInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zainstaluj ręcznie`)
};

const pt_content_install_manual = /** @type {(inputs: Content_Install_ManualInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instalar manualmente`)
};

const ru_content_install_manual = /** @type {(inputs: Content_Install_ManualInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Установить вручную`)
};

const sv_content_install_manual = /** @type {(inputs: Content_Install_ManualInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installera manuellt`)
};

const tr_content_install_manual = /** @type {(inputs: Content_Install_ManualInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elle kur`)
};

const zh_content_install_manual = /** @type {(inputs: Content_Install_ManualInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`手动安装`)
};

const ja_content_install_manual = /** @type {(inputs: Content_Install_ManualInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`手動でインストール`)
};

/**
* | output |
* | --- |
* | "Install manually" |
*
* @param {Content_Install_ManualInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_install_manual = /** @type {((inputs?: Content_Install_ManualInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Install_ManualInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_install_manual(inputs)
	if (locale === "de") return de_content_install_manual(inputs)
	if (locale === "fr") return fr_content_install_manual(inputs)
	if (locale === "it") return it_content_install_manual(inputs)
	if (locale === "nl") return nl_content_install_manual(inputs)
	if (locale === "pl") return pl_content_install_manual(inputs)
	if (locale === "pt") return pt_content_install_manual(inputs)
	if (locale === "ru") return ru_content_install_manual(inputs)
	if (locale === "sv") return sv_content_install_manual(inputs)
	if (locale === "tr") return tr_content_install_manual(inputs)
	if (locale === "zh") return zh_content_install_manual(inputs)
	if (locale === "ja") return ja_content_install_manual(inputs)
	return en_content_install_manual(inputs)
});
