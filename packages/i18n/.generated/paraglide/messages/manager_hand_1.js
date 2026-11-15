/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_Hand_1Inputs */

const en_manager_hand_1 = /** @type {(inputs: Manager_Hand_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download RedLoader from GitHub and extract it into the game folder.`)
};

const es_manager_hand_1 = /** @type {(inputs: Manager_Hand_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descargar RedLoader desde GitHub y extraerlo en la carpeta del juego.`)
};

const de_manager_hand_1 = /** @type {(inputs: Manager_Hand_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader von GitHub herunterladen und in den Spielordner entpacken.`)
};

const fr_manager_hand_1 = /** @type {(inputs: Manager_Hand_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Télécharger RedLoader sur GitHub et l’extraire dans le dossier du jeu.`)
};

const it_manager_hand_1 = /** @type {(inputs: Manager_Hand_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scaricare RedLoader da GitHub ed estrarlo nella cartella del gioco.`)
};

const nl_manager_hand_1 = /** @type {(inputs: Manager_Hand_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader downloaden van GitHub en uitpakken in de gamemap.`)
};

const pl_manager_hand_1 = /** @type {(inputs: Manager_Hand_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pobrać RedLoader z GitHuba i rozpakować go do folderu gry.`)
};

const pt_manager_hand_1 = /** @type {(inputs: Manager_Hand_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Baixar o RedLoader no GitHub e extrair na pasta do jogo.`)
};

const ru_manager_hand_1 = /** @type {(inputs: Manager_Hand_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скачать RedLoader с GitHub и распаковать его в папку игры.`)
};

const sv_manager_hand_1 = /** @type {(inputs: Manager_Hand_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ladda ner RedLoader från GitHub och packa upp den i spelmappen.`)
};

const tr_manager_hand_1 = /** @type {(inputs: Manager_Hand_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader'ı GitHub'dan indirip oyun klasörüne çıkarmak.`)
};

const zh_manager_hand_1 = /** @type {(inputs: Manager_Hand_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`从 GitHub 下载 RedLoader 并解压到游戏文件夹。`)
};

const ja_manager_hand_1 = /** @type {(inputs: Manager_Hand_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GitHub から RedLoader をダウンロードし、ゲームフォルダに展開する。`)
};

/**
* | output |
* | --- |
* | "Download RedLoader from GitHub and extract it into the game folder." |
*
* @param {Manager_Hand_1Inputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_hand_1 = /** @type {((inputs?: Manager_Hand_1Inputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Hand_1Inputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_hand_1(inputs)
	if (locale === "de") return de_manager_hand_1(inputs)
	if (locale === "fr") return fr_manager_hand_1(inputs)
	if (locale === "it") return it_manager_hand_1(inputs)
	if (locale === "nl") return nl_manager_hand_1(inputs)
	if (locale === "pl") return pl_manager_hand_1(inputs)
	if (locale === "pt") return pt_manager_hand_1(inputs)
	if (locale === "ru") return ru_manager_hand_1(inputs)
	if (locale === "sv") return sv_manager_hand_1(inputs)
	if (locale === "tr") return tr_manager_hand_1(inputs)
	if (locale === "zh") return zh_manager_hand_1(inputs)
	if (locale === "ja") return ja_manager_hand_1(inputs)
	return en_manager_hand_1(inputs)
});
