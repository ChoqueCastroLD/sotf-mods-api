/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Download_Done_HintInputs */

const en_ui_domain_download_done_hint = /** @type {(inputs: Ui_Domain_Download_Done_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Place it in your game’s Mods folder and start the game.`)
};

const es_ui_domain_download_done_hint = /** @type {(inputs: Ui_Domain_Download_Done_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Coloca el archivo en la carpeta Mods del juego e inicia el juego.`)
};

const de_ui_domain_download_done_hint = /** @type {(inputs: Ui_Domain_Download_Done_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lege die Datei in den Mods-Ordner des Spiels und starte das Spiel.`)
};

const fr_ui_domain_download_done_hint = /** @type {(inputs: Ui_Domain_Download_Done_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Placez le fichier dans le dossier Mods du jeu, puis lancez le jeu.`)
};

const it_ui_domain_download_done_hint = /** @type {(inputs: Ui_Domain_Download_Done_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Metti il file nella cartella Mods del gioco e avvia il gioco.`)
};

const nl_ui_domain_download_done_hint = /** @type {(inputs: Ui_Domain_Download_Done_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plaats het bestand in de map Mods van het spel en start het spel.`)
};

const pl_ui_domain_download_done_hint = /** @type {(inputs: Ui_Domain_Download_Done_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Umieść plik w folderze Mods w katalogu gry i uruchom grę.`)
};

const pt_ui_domain_download_done_hint = /** @type {(inputs: Ui_Domain_Download_Done_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Coloque o arquivo na pasta Mods do jogo e inicie o jogo.`)
};

const ru_ui_domain_download_done_hint = /** @type {(inputs: Ui_Domain_Download_Done_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Поместите файл в папку Mods игры и запустите игру.`)
};

const sv_ui_domain_download_done_hint = /** @type {(inputs: Ui_Domain_Download_Done_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lägg filen i spelets Mods-mapp och starta spelet.`)
};

const tr_ui_domain_download_done_hint = /** @type {(inputs: Ui_Domain_Download_Done_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dosyayı oyunun Mods klasörüne koy ve oyunu başlat.`)
};

const zh_ui_domain_download_done_hint = /** @type {(inputs: Ui_Domain_Download_Done_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`把文件放进游戏的 Mods 文件夹，然后启动游戏。`)
};

const ja_ui_domain_download_done_hint = /** @type {(inputs: Ui_Domain_Download_Done_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ファイルをゲームの Mods フォルダーに入れて、ゲームを起動してください。`)
};

/**
* | output |
* | --- |
* | "Place it in your game’s Mods folder and start the game." |
*
* @param {Ui_Domain_Download_Done_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_download_done_hint = /** @type {((inputs?: Ui_Domain_Download_Done_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Download_Done_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_download_done_hint(inputs)
	if (locale === "de") return de_ui_domain_download_done_hint(inputs)
	if (locale === "fr") return fr_ui_domain_download_done_hint(inputs)
	if (locale === "it") return it_ui_domain_download_done_hint(inputs)
	if (locale === "nl") return nl_ui_domain_download_done_hint(inputs)
	if (locale === "pl") return pl_ui_domain_download_done_hint(inputs)
	if (locale === "pt") return pt_ui_domain_download_done_hint(inputs)
	if (locale === "ru") return ru_ui_domain_download_done_hint(inputs)
	if (locale === "sv") return sv_ui_domain_download_done_hint(inputs)
	if (locale === "tr") return tr_ui_domain_download_done_hint(inputs)
	if (locale === "zh") return zh_ui_domain_download_done_hint(inputs)
	if (locale === "ja") return ja_ui_domain_download_done_hint(inputs)
	return en_ui_domain_download_done_hint(inputs)
});
