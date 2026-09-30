/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Install_Step_Dependencies_TitleInputs */

const en_mod_install_step_dependencies_title = /** @type {(inputs: Mod_Install_Step_Dependencies_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Install its dependencies first`)
};

const es_mod_install_step_dependencies_title = /** @type {(inputs: Mod_Install_Step_Dependencies_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instala antes sus dependencias`)
};

const de_mod_install_step_dependencies_title = /** @type {(inputs: Mod_Install_Step_Dependencies_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zuerst die Abhängigkeiten installieren`)
};

const fr_mod_install_step_dependencies_title = /** @type {(inputs: Mod_Install_Step_Dependencies_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installez d’abord ses dépendances`)
};

const it_mod_install_step_dependencies_title = /** @type {(inputs: Mod_Install_Step_Dependencies_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installa prima le dipendenze`)
};

const nl_mod_install_step_dependencies_title = /** @type {(inputs: Mod_Install_Step_Dependencies_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installeer eerst de afhankelijkheden`)
};

const pl_mod_install_step_dependencies_title = /** @type {(inputs: Mod_Install_Step_Dependencies_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najpierw zainstaluj zależności`)
};

const pt_mod_install_step_dependencies_title = /** @type {(inputs: Mod_Install_Step_Dependencies_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instale as dependências primeiro`)
};

const ru_mod_install_step_dependencies_title = /** @type {(inputs: Mod_Install_Step_Dependencies_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сначала установите зависимости`)
};

const sv_mod_install_step_dependencies_title = /** @type {(inputs: Mod_Install_Step_Dependencies_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installera beroendena först`)
};

const tr_mod_install_step_dependencies_title = /** @type {(inputs: Mod_Install_Step_Dependencies_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Önce bağımlılıklarını kur`)
};

const zh_mod_install_step_dependencies_title = /** @type {(inputs: Mod_Install_Step_Dependencies_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`先安装它的前置`)
};

const ja_mod_install_step_dependencies_title = /** @type {(inputs: Mod_Install_Step_Dependencies_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`先に前提 MOD を導入する`)
};

/**
* | output |
* | --- |
* | "Install its dependencies first" |
*
* @param {Mod_Install_Step_Dependencies_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_install_step_dependencies_title = /** @type {((inputs?: Mod_Install_Step_Dependencies_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Install_Step_Dependencies_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_install_step_dependencies_title(inputs)
	if (locale === "de") return de_mod_install_step_dependencies_title(inputs)
	if (locale === "fr") return fr_mod_install_step_dependencies_title(inputs)
	if (locale === "it") return it_mod_install_step_dependencies_title(inputs)
	if (locale === "nl") return nl_mod_install_step_dependencies_title(inputs)
	if (locale === "pl") return pl_mod_install_step_dependencies_title(inputs)
	if (locale === "pt") return pt_mod_install_step_dependencies_title(inputs)
	if (locale === "ru") return ru_mod_install_step_dependencies_title(inputs)
	if (locale === "sv") return sv_mod_install_step_dependencies_title(inputs)
	if (locale === "tr") return tr_mod_install_step_dependencies_title(inputs)
	if (locale === "zh") return zh_mod_install_step_dependencies_title(inputs)
	if (locale === "ja") return ja_mod_install_step_dependencies_title(inputs)
	return en_mod_install_step_dependencies_title(inputs)
});
