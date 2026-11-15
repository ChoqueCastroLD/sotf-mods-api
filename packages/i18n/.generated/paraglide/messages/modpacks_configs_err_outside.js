/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Configs_Err_OutsideInputs */

const en_modpacks_configs_err_outside = /** @type {(inputs: Modpacks_Configs_Err_OutsideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Every file must be inside the UserData or Mods folder.`)
};

const es_modpacks_configs_err_outside = /** @type {(inputs: Modpacks_Configs_Err_OutsideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cada archivo debe estar dentro de la carpeta UserData o Mods.`)
};

const de_modpacks_configs_err_outside = /** @type {(inputs: Modpacks_Configs_Err_OutsideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jede Datei muss im Ordner UserData oder Mods liegen.`)
};

const fr_modpacks_configs_err_outside = /** @type {(inputs: Modpacks_Configs_Err_OutsideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chaque fichier doit se trouver dans le dossier UserData ou Mods.`)
};

const it_modpacks_configs_err_outside = /** @type {(inputs: Modpacks_Configs_Err_OutsideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ogni file deve stare nella cartella UserData o Mods.`)
};

const nl_modpacks_configs_err_outside = /** @type {(inputs: Modpacks_Configs_Err_OutsideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elk bestand moet in de map UserData of Mods staan.`)
};

const pl_modpacks_configs_err_outside = /** @type {(inputs: Modpacks_Configs_Err_OutsideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Każdy plik musi być w folderze UserData lub Mods.`)
};

const pt_modpacks_configs_err_outside = /** @type {(inputs: Modpacks_Configs_Err_OutsideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cada arquivo precisa estar na pasta UserData ou Mods.`)
};

const ru_modpacks_configs_err_outside = /** @type {(inputs: Modpacks_Configs_Err_OutsideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Каждый файл должен лежать в папке UserData или Mods.`)
};

const sv_modpacks_configs_err_outside = /** @type {(inputs: Modpacks_Configs_Err_OutsideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Varje fil måste ligga i mappen UserData eller Mods.`)
};

const tr_modpacks_configs_err_outside = /** @type {(inputs: Modpacks_Configs_Err_OutsideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Her dosya UserData ya da Mods klasöründe olmalı.`)
};

const zh_modpacks_configs_err_outside = /** @type {(inputs: Modpacks_Configs_Err_OutsideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`每个文件都必须位于 UserData 或 Mods 文件夹中。`)
};

const ja_modpacks_configs_err_outside = /** @type {(inputs: Modpacks_Configs_Err_OutsideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべてのファイルは UserData か Mods フォルダ内にある必要があります。`)
};

/**
* | output |
* | --- |
* | "Every file must be inside the UserData or Mods folder." |
*
* @param {Modpacks_Configs_Err_OutsideInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_configs_err_outside = /** @type {((inputs?: Modpacks_Configs_Err_OutsideInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Configs_Err_OutsideInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_configs_err_outside(inputs)
	if (locale === "de") return de_modpacks_configs_err_outside(inputs)
	if (locale === "fr") return fr_modpacks_configs_err_outside(inputs)
	if (locale === "it") return it_modpacks_configs_err_outside(inputs)
	if (locale === "nl") return nl_modpacks_configs_err_outside(inputs)
	if (locale === "pl") return pl_modpacks_configs_err_outside(inputs)
	if (locale === "pt") return pt_modpacks_configs_err_outside(inputs)
	if (locale === "ru") return ru_modpacks_configs_err_outside(inputs)
	if (locale === "sv") return sv_modpacks_configs_err_outside(inputs)
	if (locale === "tr") return tr_modpacks_configs_err_outside(inputs)
	if (locale === "zh") return zh_modpacks_configs_err_outside(inputs)
	if (locale === "ja") return ja_modpacks_configs_err_outside(inputs)
	return en_modpacks_configs_err_outside(inputs)
});
