/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Import_Step2_TextInputs */

const en_builds_import_step2_text = /** @type {(inputs: Builds_Import_Step2_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download the .json above and copy it into this folder of your game:`)
};

const es_builds_import_step2_text = /** @type {(inputs: Builds_Import_Step2_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descarga el .json de arriba y cópialo en esta carpeta del juego:`)
};

const de_builds_import_step2_text = /** @type {(inputs: Builds_Import_Step2_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lade die .json oben herunter und kopiere sie in diesen Ordner deines Spiels:`)
};

const fr_builds_import_step2_text = /** @type {(inputs: Builds_Import_Step2_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Téléchargez le .json ci-dessus et copiez-le dans ce dossier du jeu :`)
};

const it_builds_import_step2_text = /** @type {(inputs: Builds_Import_Step2_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scarica il .json qui sopra e copialo in questa cartella del gioco:`)
};

const nl_builds_import_step2_text = /** @type {(inputs: Builds_Import_Step2_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download de .json hierboven en kopieer hem naar deze map van je game:`)
};

const pl_builds_import_step2_text = /** @type {(inputs: Builds_Import_Step2_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pobierz plik .json powyżej i skopiuj go do tego folderu gry:`)
};

const pt_builds_import_step2_text = /** @type {(inputs: Builds_Import_Step2_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Baixe o .json acima e copie-o para esta pasta do jogo:`)
};

const ru_builds_import_step2_text = /** @type {(inputs: Builds_Import_Step2_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скачайте .json выше и скопируйте его в эту папку игры:`)
};

const sv_builds_import_step2_text = /** @type {(inputs: Builds_Import_Step2_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ladda ner .json-filen ovan och kopiera den till den här mappen i spelet:`)
};

const tr_builds_import_step2_text = /** @type {(inputs: Builds_Import_Step2_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yukarıdaki .json dosyasını indir ve oyunun şu klasörüne kopyala:`)
};

const zh_builds_import_step2_text = /** @type {(inputs: Builds_Import_Step2_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下载上方的 .json，并复制到游戏的这个文件夹：`)
};

const ja_builds_import_step2_text = /** @type {(inputs: Builds_Import_Step2_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上の .json をダウンロードし、ゲームの次のフォルダーにコピーします：`)
};

/**
* | output |
* | --- |
* | "Download the .json above and copy it into this folder of your game:" |
*
* @param {Builds_Import_Step2_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_import_step2_text = /** @type {((inputs?: Builds_Import_Step2_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Import_Step2_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_import_step2_text(inputs)
	if (locale === "de") return de_builds_import_step2_text(inputs)
	if (locale === "fr") return fr_builds_import_step2_text(inputs)
	if (locale === "it") return it_builds_import_step2_text(inputs)
	if (locale === "nl") return nl_builds_import_step2_text(inputs)
	if (locale === "pl") return pl_builds_import_step2_text(inputs)
	if (locale === "pt") return pt_builds_import_step2_text(inputs)
	if (locale === "ru") return ru_builds_import_step2_text(inputs)
	if (locale === "sv") return sv_builds_import_step2_text(inputs)
	if (locale === "tr") return tr_builds_import_step2_text(inputs)
	if (locale === "zh") return zh_builds_import_step2_text(inputs)
	if (locale === "ja") return ja_builds_import_step2_text(inputs)
	return en_builds_import_step2_text(inputs)
});
