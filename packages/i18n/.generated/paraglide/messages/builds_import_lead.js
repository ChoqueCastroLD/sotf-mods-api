/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Import_LeadInputs */

const en_builds_import_lead = /** @type {(inputs: Builds_Import_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A build is a single .json file for the BuildShare mod. Copy it into your game folder and place it in the game.`)
};

const es_builds_import_lead = /** @type {(inputs: Builds_Import_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Una build es un único archivo .json para el mod BuildShare. Lo copias en la carpeta del juego y lo colocas dentro del juego.`)
};

const de_builds_import_lead = /** @type {(inputs: Builds_Import_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ein Build ist eine einzelne .json-Datei für den Mod BuildShare. Du kopierst sie in deinen Spielordner und platzierst sie im Spiel.`)
};

const fr_builds_import_lead = /** @type {(inputs: Builds_Import_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Une build est un seul fichier .json pour le mod BuildShare. Vous le copiez dans le dossier du jeu, puis vous la placez en jeu.`)
};

const it_builds_import_lead = /** @type {(inputs: Builds_Import_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Una build è un singolo file .json per la mod BuildShare. Lo copi nella cartella del gioco e lo piazzi nel gioco.`)
};

const nl_builds_import_lead = /** @type {(inputs: Builds_Import_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een build is één .json-bestand voor de mod BuildShare. Je kopieert het naar je gamemap en plaatst het in de game.`)
};

const pl_builds_import_lead = /** @type {(inputs: Builds_Import_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build to pojedynczy plik .json dla moda BuildShare. Kopiujesz go do folderu gry i stawiasz w grze.`)
};

const pt_builds_import_lead = /** @type {(inputs: Builds_Import_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uma build é um único arquivo .json para o mod BuildShare. Você o copia para a pasta do jogo e o posiciona dentro do jogo.`)
};

const ru_builds_import_lead = /** @type {(inputs: Builds_Import_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Постройка представляет собой один файл .json для мода BuildShare. Скопируйте его в папку игры и поставьте в игре.`)
};

const sv_builds_import_lead = /** @type {(inputs: Builds_Import_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ett bygge är en enda .json-fil för modden BuildShare. Du kopierar den till spelmappen och placerar den i spelet.`)
};

const tr_builds_import_lead = /** @type {(inputs: Builds_Import_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir yapı, BuildShare modu için tek bir .json dosyasıdır. Dosyayı oyun klasörüne kopyalarsın ve oyunda yerleştirirsin.`)
};

const zh_builds_import_lead = /** @type {(inputs: Builds_Import_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`建筑是供 BuildShare 模组使用的单个 .json 文件。把它复制到游戏文件夹，然后在游戏中放置。`)
};

const ja_builds_import_lead = /** @type {(inputs: Builds_Import_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`建築は BuildShare 用の .json ファイル 1 つです。ゲームのフォルダーにコピーして、ゲーム内で配置します。`)
};

/**
* | output |
* | --- |
* | "A build is a single .json file for the BuildShare mod. Copy it into your game folder and place it in the game." |
*
* @param {Builds_Import_LeadInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_import_lead = /** @type {((inputs?: Builds_Import_LeadInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Import_LeadInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_import_lead(inputs)
	if (locale === "de") return de_builds_import_lead(inputs)
	if (locale === "fr") return fr_builds_import_lead(inputs)
	if (locale === "it") return it_builds_import_lead(inputs)
	if (locale === "nl") return nl_builds_import_lead(inputs)
	if (locale === "pl") return pl_builds_import_lead(inputs)
	if (locale === "pt") return pt_builds_import_lead(inputs)
	if (locale === "ru") return ru_builds_import_lead(inputs)
	if (locale === "sv") return sv_builds_import_lead(inputs)
	if (locale === "tr") return tr_builds_import_lead(inputs)
	if (locale === "zh") return zh_builds_import_lead(inputs)
	if (locale === "ja") return ja_builds_import_lead(inputs)
	return en_builds_import_lead(inputs)
});
