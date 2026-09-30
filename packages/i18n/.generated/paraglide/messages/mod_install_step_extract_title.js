/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Install_Step_Extract_TitleInputs */

const en_mod_install_step_extract_title = /** @type {(inputs: Mod_Install_Step_Extract_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Extract the ZIP into the Mods folder`)
};

const es_mod_install_step_extract_title = /** @type {(inputs: Mod_Install_Step_Extract_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Extrae el ZIP en la carpeta Mods`)
};

const de_mod_install_step_extract_title = /** @type {(inputs: Mod_Install_Step_Extract_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ZIP in den Mods-Ordner entpacken`)
};

const fr_mod_install_step_extract_title = /** @type {(inputs: Mod_Install_Step_Extract_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Extrayez le ZIP dans le dossier Mods`)
};

const it_mod_install_step_extract_title = /** @type {(inputs: Mod_Install_Step_Extract_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Estrai lo ZIP nella cartella Mods`)
};

const nl_mod_install_step_extract_title = /** @type {(inputs: Mod_Install_Step_Extract_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pak de ZIP uit in de map Mods`)
};

const pl_mod_install_step_extract_title = /** @type {(inputs: Mod_Install_Step_Extract_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rozpakuj ZIP do folderu Mods`)
};

const pt_mod_install_step_extract_title = /** @type {(inputs: Mod_Install_Step_Extract_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Extraia o ZIP na pasta Mods`)
};

const ru_mod_install_step_extract_title = /** @type {(inputs: Mod_Install_Step_Extract_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Распакуйте ZIP в папку Mods`)
};

const sv_mod_install_step_extract_title = /** @type {(inputs: Mod_Install_Step_Extract_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Packa upp ZIP-filen i mappen Mods`)
};

const tr_mod_install_step_extract_title = /** @type {(inputs: Mod_Install_Step_Extract_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ZIP’i Mods klasörüne çıkar`)
};

const zh_mod_install_step_extract_title = /** @type {(inputs: Mod_Install_Step_Extract_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`把 ZIP 解压到 Mods 文件夹`)
};

const ja_mod_install_step_extract_title = /** @type {(inputs: Mod_Install_Step_Extract_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ZIP を Mods フォルダーに展開する`)
};

/**
* | output |
* | --- |
* | "Extract the ZIP into the Mods folder" |
*
* @param {Mod_Install_Step_Extract_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_install_step_extract_title = /** @type {((inputs?: Mod_Install_Step_Extract_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Install_Step_Extract_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_install_step_extract_title(inputs)
	if (locale === "de") return de_mod_install_step_extract_title(inputs)
	if (locale === "fr") return fr_mod_install_step_extract_title(inputs)
	if (locale === "it") return it_mod_install_step_extract_title(inputs)
	if (locale === "nl") return nl_mod_install_step_extract_title(inputs)
	if (locale === "pl") return pl_mod_install_step_extract_title(inputs)
	if (locale === "pt") return pt_mod_install_step_extract_title(inputs)
	if (locale === "ru") return ru_mod_install_step_extract_title(inputs)
	if (locale === "sv") return sv_mod_install_step_extract_title(inputs)
	if (locale === "tr") return tr_mod_install_step_extract_title(inputs)
	if (locale === "zh") return zh_mod_install_step_extract_title(inputs)
	if (locale === "ja") return ja_mod_install_step_extract_title(inputs)
	return en_mod_install_step_extract_title(inputs)
});
