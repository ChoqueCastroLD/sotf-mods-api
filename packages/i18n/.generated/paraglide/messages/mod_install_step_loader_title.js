/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Install_Step_Loader_TitleInputs */

const en_mod_install_step_loader_title = /** @type {(inputs: Mod_Install_Step_Loader_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Install RedLoader`)
};

const es_mod_install_step_loader_title = /** @type {(inputs: Mod_Install_Step_Loader_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instala RedLoader`)
};

const de_mod_install_step_loader_title = /** @type {(inputs: Mod_Install_Step_Loader_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader installieren`)
};

const fr_mod_install_step_loader_title = /** @type {(inputs: Mod_Install_Step_Loader_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installer RedLoader`)
};

const it_mod_install_step_loader_title = /** @type {(inputs: Mod_Install_Step_Loader_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installa RedLoader`)
};

const nl_mod_install_step_loader_title = /** @type {(inputs: Mod_Install_Step_Loader_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installeer RedLoader`)
};

const pl_mod_install_step_loader_title = /** @type {(inputs: Mod_Install_Step_Loader_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zainstaluj RedLoader`)
};

const pt_mod_install_step_loader_title = /** @type {(inputs: Mod_Install_Step_Loader_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instale o RedLoader`)
};

const ru_mod_install_step_loader_title = /** @type {(inputs: Mod_Install_Step_Loader_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Установите RedLoader`)
};

const sv_mod_install_step_loader_title = /** @type {(inputs: Mod_Install_Step_Loader_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installera RedLoader`)
};

const tr_mod_install_step_loader_title = /** @type {(inputs: Mod_Install_Step_Loader_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader’ı kur`)
};

const zh_mod_install_step_loader_title = /** @type {(inputs: Mod_Install_Step_Loader_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`安装 RedLoader`)
};

const ja_mod_install_step_loader_title = /** @type {(inputs: Mod_Install_Step_Loader_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader を導入する`)
};

/**
* | output |
* | --- |
* | "Install RedLoader" |
*
* @param {Mod_Install_Step_Loader_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_install_step_loader_title = /** @type {((inputs?: Mod_Install_Step_Loader_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Install_Step_Loader_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_install_step_loader_title(inputs)
	if (locale === "de") return de_mod_install_step_loader_title(inputs)
	if (locale === "fr") return fr_mod_install_step_loader_title(inputs)
	if (locale === "it") return it_mod_install_step_loader_title(inputs)
	if (locale === "nl") return nl_mod_install_step_loader_title(inputs)
	if (locale === "pl") return pl_mod_install_step_loader_title(inputs)
	if (locale === "pt") return pt_mod_install_step_loader_title(inputs)
	if (locale === "ru") return ru_mod_install_step_loader_title(inputs)
	if (locale === "sv") return sv_mod_install_step_loader_title(inputs)
	if (locale === "tr") return tr_mod_install_step_loader_title(inputs)
	if (locale === "zh") return zh_mod_install_step_loader_title(inputs)
	if (locale === "ja") return ja_mod_install_step_loader_title(inputs)
	return en_mod_install_step_loader_title(inputs)
});
