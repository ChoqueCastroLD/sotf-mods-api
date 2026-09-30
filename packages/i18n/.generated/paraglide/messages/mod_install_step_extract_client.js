/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Install_Step_Extract_ClientInputs */

const en_mod_install_step_extract_client = /** @type {(inputs: Mod_Install_Step_Extract_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`On your PC, extract it into the game’s Mods folder:`)
};

const es_mod_install_step_extract_client = /** @type {(inputs: Mod_Install_Step_Extract_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En tu PC, extráelo en la carpeta Mods del juego:`)
};

const de_mod_install_step_extract_client = /** @type {(inputs: Mod_Install_Step_Extract_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Auf deinem PC in den Mods-Ordner des Spiels entpacken:`)
};

const fr_mod_install_step_extract_client = /** @type {(inputs: Mod_Install_Step_Extract_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sur votre PC, extrayez-le dans le dossier Mods du jeu :`)
};

const it_mod_install_step_extract_client = /** @type {(inputs: Mod_Install_Step_Extract_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sul tuo PC, estrailo nella cartella Mods del gioco:`)
};

const nl_mod_install_step_extract_client = /** @type {(inputs: Mod_Install_Step_Extract_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pak hem op je pc uit in de map Mods van de game:`)
};

const pl_mod_install_step_extract_client = /** @type {(inputs: Mod_Install_Step_Extract_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Na komputerze rozpakuj go do folderu Mods gry:`)
};

const pt_mod_install_step_extract_client = /** @type {(inputs: Mod_Install_Step_Extract_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No seu PC, extraia na pasta Mods do jogo:`)
};

const ru_mod_install_step_extract_client = /** @type {(inputs: Mod_Install_Step_Extract_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`На ПК распакуйте в папку Mods игры:`)
};

const sv_mod_install_step_extract_client = /** @type {(inputs: Mod_Install_Step_Extract_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`På din dator, packa upp den i spelets Mods-mapp:`)
};

const tr_mod_install_step_extract_client = /** @type {(inputs: Mod_Install_Step_Extract_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bilgisayarında oyunun Mods klasörüne çıkar:`)
};

const zh_mod_install_step_extract_client = /** @type {(inputs: Mod_Install_Step_Extract_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在电脑上，解压到游戏的 Mods 文件夹：`)
};

const ja_mod_install_step_extract_client = /** @type {(inputs: Mod_Install_Step_Extract_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`PC では、ゲームの Mods フォルダーに展開します：`)
};

/**
* | output |
* | --- |
* | "On your PC, extract it into the game’s Mods folder:" |
*
* @param {Mod_Install_Step_Extract_ClientInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_install_step_extract_client = /** @type {((inputs?: Mod_Install_Step_Extract_ClientInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Install_Step_Extract_ClientInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_install_step_extract_client(inputs)
	if (locale === "de") return de_mod_install_step_extract_client(inputs)
	if (locale === "fr") return fr_mod_install_step_extract_client(inputs)
	if (locale === "it") return it_mod_install_step_extract_client(inputs)
	if (locale === "nl") return nl_mod_install_step_extract_client(inputs)
	if (locale === "pl") return pl_mod_install_step_extract_client(inputs)
	if (locale === "pt") return pt_mod_install_step_extract_client(inputs)
	if (locale === "ru") return ru_mod_install_step_extract_client(inputs)
	if (locale === "sv") return sv_mod_install_step_extract_client(inputs)
	if (locale === "tr") return tr_mod_install_step_extract_client(inputs)
	if (locale === "zh") return zh_mod_install_step_extract_client(inputs)
	if (locale === "ja") return ja_mod_install_step_extract_client(inputs)
	return en_mod_install_step_extract_client(inputs)
});
