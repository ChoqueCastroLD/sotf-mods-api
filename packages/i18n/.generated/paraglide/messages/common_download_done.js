/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Download_DoneInputs */

const en_common_download_done = /** @type {(inputs: Common_Download_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloaded. Drop it in your game’s Mods folder and launch the game.`)
};

const es_common_download_done = /** @type {(inputs: Common_Download_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descargado. Suéltalo en la carpeta Mods del juego y ábrelo.`)
};

const de_common_download_done = /** @type {(inputs: Common_Download_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Heruntergeladen. Leg die Datei in den Mods-Ordner des Spiels und starte das Spiel.`)
};

const fr_common_download_done = /** @type {(inputs: Common_Download_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Téléchargé. Déposez-le dans le dossier Mods du jeu et lancez la partie.`)
};

const it_common_download_done = /** @type {(inputs: Common_Download_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scaricata. Mettila nella cartella Mods del gioco e avvia la partita.`)
};

const nl_common_download_done = /** @type {(inputs: Common_Download_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gedownload. Zet het in de map Mods van het spel en start het spel.`)
};

const pl_common_download_done = /** @type {(inputs: Common_Download_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pobrano. Wrzuć plik do folderu Mods w katalogu gry i uruchom grę.`)
};

const pt_common_download_done = /** @type {(inputs: Common_Download_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Baixado. Coloque o arquivo na pasta Mods do jogo e abra o jogo.`)
};

const ru_common_download_done = /** @type {(inputs: Common_Download_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скачано. Положите файл в папку Mods игры и запустите её.`)
};

const sv_common_download_done = /** @type {(inputs: Common_Download_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nedladdad. Lägg den i spelets Mods-mapp och starta spelet.`)
};

const tr_common_download_done = /** @type {(inputs: Common_Download_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İndirildi. Oyunun Mods klasörüne bırak ve oyunu başlat.`)
};

const zh_common_download_done = /** @type {(inputs: Common_Download_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下载完成。把它放进游戏的 Mods 文件夹，然后启动游戏。`)
};

const ja_common_download_done = /** @type {(inputs: Common_Download_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダウンロードしました。ゲームの Mods フォルダーに入れてから起動してください。`)
};

/**
* | output |
* | --- |
* | "Downloaded. Drop it in your game’s Mods folder and launch the game." |
*
* @param {Common_Download_DoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_download_done = /** @type {((inputs?: Common_Download_DoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Download_DoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_download_done(inputs)
	if (locale === "de") return de_common_download_done(inputs)
	if (locale === "fr") return fr_common_download_done(inputs)
	if (locale === "it") return it_common_download_done(inputs)
	if (locale === "nl") return nl_common_download_done(inputs)
	if (locale === "pl") return pl_common_download_done(inputs)
	if (locale === "pt") return pt_common_download_done(inputs)
	if (locale === "ru") return ru_common_download_done(inputs)
	if (locale === "sv") return sv_common_download_done(inputs)
	if (locale === "tr") return tr_common_download_done(inputs)
	if (locale === "zh") return zh_common_download_done(inputs)
	if (locale === "ja") return ja_common_download_done(inputs)
	return en_common_download_done(inputs)
});
