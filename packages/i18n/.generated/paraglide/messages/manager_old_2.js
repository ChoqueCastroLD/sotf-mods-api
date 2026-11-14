/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_Old_2Inputs */

const en_manager_old_2 = /** @type {(inputs: Manager_Old_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Extract it into the right game folder`)
};

const es_manager_old_2 = /** @type {(inputs: Manager_Old_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Extraerlo en la carpeta correcta del juego`)
};

const de_manager_old_2 = /** @type {(inputs: Manager_Old_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Es in den richtigen Spielordner entpacken`)
};

const fr_manager_old_2 = /** @type {(inputs: Manager_Old_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’extraire dans le bon dossier du jeu`)
};

const it_manager_old_2 = /** @type {(inputs: Manager_Old_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Estrarla nella cartella giusta del gioco`)
};

const nl_manager_old_2 = /** @type {(inputs: Manager_Old_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die uitpakken in de juiste gamemap`)
};

const pl_manager_old_2 = /** @type {(inputs: Manager_Old_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rozpakować go do właściwego folderu gry`)
};

const pt_manager_old_2 = /** @type {(inputs: Manager_Old_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Extrair na pasta certa do jogo`)
};

const ru_manager_old_2 = /** @type {(inputs: Manager_Old_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Распаковать его в нужную папку игры`)
};

const sv_manager_old_2 = /** @type {(inputs: Manager_Old_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Packa upp den i rätt spelmapp`)
};

const tr_manager_old_2 = /** @type {(inputs: Manager_Old_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Doğru oyun klasörüne çıkar`)
};

const zh_manager_old_2 = /** @type {(inputs: Manager_Old_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`解压到正确的游戏文件夹`)
};

const ja_manager_old_2 = /** @type {(inputs: Manager_Old_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正しいゲームフォルダに展開`)
};

/**
* | output |
* | --- |
* | "Extract it into the right game folder" |
*
* @param {Manager_Old_2Inputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_old_2 = /** @type {((inputs?: Manager_Old_2Inputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Old_2Inputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_old_2(inputs)
	if (locale === "de") return de_manager_old_2(inputs)
	if (locale === "fr") return fr_manager_old_2(inputs)
	if (locale === "it") return it_manager_old_2(inputs)
	if (locale === "nl") return nl_manager_old_2(inputs)
	if (locale === "pl") return pl_manager_old_2(inputs)
	if (locale === "pt") return pt_manager_old_2(inputs)
	if (locale === "ru") return ru_manager_old_2(inputs)
	if (locale === "sv") return sv_manager_old_2(inputs)
	if (locale === "tr") return tr_manager_old_2(inputs)
	if (locale === "zh") return zh_manager_old_2(inputs)
	if (locale === "ja") return ja_manager_old_2(inputs)
	return en_manager_old_2(inputs)
});
