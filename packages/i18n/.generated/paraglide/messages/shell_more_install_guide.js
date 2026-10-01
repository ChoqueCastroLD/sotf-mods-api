/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Shell_More_Install_GuideInputs */

const en_shell_more_install_guide = /** @type {(inputs: Shell_More_Install_GuideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Install guide`)
};

const es_shell_more_install_guide = /** @type {(inputs: Shell_More_Install_GuideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guía de instalación`)
};

const de_shell_more_install_guide = /** @type {(inputs: Shell_More_Install_GuideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installationsanleitung`)
};

const fr_shell_more_install_guide = /** @type {(inputs: Shell_More_Install_GuideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guide d’installation`)
};

const it_shell_more_install_guide = /** @type {(inputs: Shell_More_Install_GuideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guida all’installazione`)
};

const nl_shell_more_install_guide = /** @type {(inputs: Shell_More_Install_GuideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installatiegids`)
};

const pl_shell_more_install_guide = /** @type {(inputs: Shell_More_Install_GuideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instrukcja instalacji`)
};

const pt_shell_more_install_guide = /** @type {(inputs: Shell_More_Install_GuideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guia de instalação`)
};

const ru_shell_more_install_guide = /** @type {(inputs: Shell_More_Install_GuideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Руководство по установке`)
};

const sv_shell_more_install_guide = /** @type {(inputs: Shell_More_Install_GuideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installationsguide`)
};

const tr_shell_more_install_guide = /** @type {(inputs: Shell_More_Install_GuideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kurulum rehberi`)
};

const zh_shell_more_install_guide = /** @type {(inputs: Shell_More_Install_GuideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`安装指南`)
};

const ja_shell_more_install_guide = /** @type {(inputs: Shell_More_Install_GuideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`インストールガイド`)
};

/**
* | output |
* | --- |
* | "Install guide" |
*
* @param {Shell_More_Install_GuideInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const shell_more_install_guide = /** @type {((inputs?: Shell_More_Install_GuideInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Shell_More_Install_GuideInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_shell_more_install_guide(inputs)
	if (locale === "de") return de_shell_more_install_guide(inputs)
	if (locale === "fr") return fr_shell_more_install_guide(inputs)
	if (locale === "it") return it_shell_more_install_guide(inputs)
	if (locale === "nl") return nl_shell_more_install_guide(inputs)
	if (locale === "pl") return pl_shell_more_install_guide(inputs)
	if (locale === "pt") return pt_shell_more_install_guide(inputs)
	if (locale === "ru") return ru_shell_more_install_guide(inputs)
	if (locale === "sv") return sv_shell_more_install_guide(inputs)
	if (locale === "tr") return tr_shell_more_install_guide(inputs)
	if (locale === "zh") return zh_shell_more_install_guide(inputs)
	if (locale === "ja") return ja_shell_more_install_guide(inputs)
	return en_shell_more_install_guide(inputs)
});
