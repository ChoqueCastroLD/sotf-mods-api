/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_Feature_Oneclick_TitleInputs */

const en_manager_feature_oneclick_title = /** @type {(inputs: Manager_Feature_Oneclick_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`One-click install`)
};

const es_manager_feature_oneclick_title = /** @type {(inputs: Manager_Feature_Oneclick_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instalación con un clic`)
};

const de_manager_feature_oneclick_title = /** @type {(inputs: Manager_Feature_Oneclick_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installation mit einem Klick`)
};

const fr_manager_feature_oneclick_title = /** @type {(inputs: Manager_Feature_Oneclick_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installation en un clic`)
};

const it_manager_feature_oneclick_title = /** @type {(inputs: Manager_Feature_Oneclick_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installazione con un clic`)
};

const nl_manager_feature_oneclick_title = /** @type {(inputs: Manager_Feature_Oneclick_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installeren met één klik`)
};

const pl_manager_feature_oneclick_title = /** @type {(inputs: Manager_Feature_Oneclick_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instalacja jednym kliknięciem`)
};

const pt_manager_feature_oneclick_title = /** @type {(inputs: Manager_Feature_Oneclick_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instalação com um clique`)
};

const ru_manager_feature_oneclick_title = /** @type {(inputs: Manager_Feature_Oneclick_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Установка в один клик`)
};

const sv_manager_feature_oneclick_title = /** @type {(inputs: Manager_Feature_Oneclick_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installation med ett klick`)
};

const tr_manager_feature_oneclick_title = /** @type {(inputs: Manager_Feature_Oneclick_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tek tıkla kurulum`)
};

const zh_manager_feature_oneclick_title = /** @type {(inputs: Manager_Feature_Oneclick_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`一键安装`)
};

const ja_manager_feature_oneclick_title = /** @type {(inputs: Manager_Feature_Oneclick_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ワンクリックでインストール`)
};

/**
* | output |
* | --- |
* | "One-click install" |
*
* @param {Manager_Feature_Oneclick_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_feature_oneclick_title = /** @type {((inputs?: Manager_Feature_Oneclick_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Feature_Oneclick_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_feature_oneclick_title(inputs)
	if (locale === "de") return de_manager_feature_oneclick_title(inputs)
	if (locale === "fr") return fr_manager_feature_oneclick_title(inputs)
	if (locale === "it") return it_manager_feature_oneclick_title(inputs)
	if (locale === "nl") return nl_manager_feature_oneclick_title(inputs)
	if (locale === "pl") return pl_manager_feature_oneclick_title(inputs)
	if (locale === "pt") return pt_manager_feature_oneclick_title(inputs)
	if (locale === "ru") return ru_manager_feature_oneclick_title(inputs)
	if (locale === "sv") return sv_manager_feature_oneclick_title(inputs)
	if (locale === "tr") return tr_manager_feature_oneclick_title(inputs)
	if (locale === "zh") return zh_manager_feature_oneclick_title(inputs)
	if (locale === "ja") return ja_manager_feature_oneclick_title(inputs)
	return en_manager_feature_oneclick_title(inputs)
});
