/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Onboarding_Install_ActionInputs */

const en_me_onboarding_install_action = /** @type {(inputs: Me_Onboarding_Install_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open the install guide`)
};

const es_me_onboarding_install_action = /** @type {(inputs: Me_Onboarding_Install_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abrir la guía de instalación`)
};

const de_me_onboarding_install_action = /** @type {(inputs: Me_Onboarding_Install_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installationsanleitung öffnen`)
};

const fr_me_onboarding_install_action = /** @type {(inputs: Me_Onboarding_Install_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ouvrir le guide d’installation`)
};

const it_me_onboarding_install_action = /** @type {(inputs: Me_Onboarding_Install_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apri la guida all’installazione`)
};

const nl_me_onboarding_install_action = /** @type {(inputs: Me_Onboarding_Install_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installatiegids openen`)
};

const pl_me_onboarding_install_action = /** @type {(inputs: Me_Onboarding_Install_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otwórz poradnik instalacji`)
};

const pt_me_onboarding_install_action = /** @type {(inputs: Me_Onboarding_Install_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abrir o guia de instalação`)
};

const ru_me_onboarding_install_action = /** @type {(inputs: Me_Onboarding_Install_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Открыть руководство по установке`)
};

const sv_me_onboarding_install_action = /** @type {(inputs: Me_Onboarding_Install_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öppna installationsguiden`)
};

const tr_me_onboarding_install_action = /** @type {(inputs: Me_Onboarding_Install_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kurulum rehberini aç`)
};

const zh_me_onboarding_install_action = /** @type {(inputs: Me_Onboarding_Install_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`打开安装指南`)
};

const ja_me_onboarding_install_action = /** @type {(inputs: Me_Onboarding_Install_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`インストールガイドを開く`)
};

/**
* | output |
* | --- |
* | "Open the install guide" |
*
* @param {Me_Onboarding_Install_ActionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_onboarding_install_action = /** @type {((inputs?: Me_Onboarding_Install_ActionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Onboarding_Install_ActionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_onboarding_install_action(inputs)
	if (locale === "de") return de_me_onboarding_install_action(inputs)
	if (locale === "fr") return fr_me_onboarding_install_action(inputs)
	if (locale === "it") return it_me_onboarding_install_action(inputs)
	if (locale === "nl") return nl_me_onboarding_install_action(inputs)
	if (locale === "pl") return pl_me_onboarding_install_action(inputs)
	if (locale === "pt") return pt_me_onboarding_install_action(inputs)
	if (locale === "ru") return ru_me_onboarding_install_action(inputs)
	if (locale === "sv") return sv_me_onboarding_install_action(inputs)
	if (locale === "tr") return tr_me_onboarding_install_action(inputs)
	if (locale === "zh") return zh_me_onboarding_install_action(inputs)
	if (locale === "ja") return ja_me_onboarding_install_action(inputs)
	return en_me_onboarding_install_action(inputs)
});
