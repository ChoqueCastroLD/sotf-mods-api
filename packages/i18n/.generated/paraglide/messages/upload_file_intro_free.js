/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_File_Intro_FreeInputs */

const en_upload_file_intro_free = /** @type {(inputs: Upload_File_Intro_FreeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upload the file players install: a .zip, a .dll, a .mod or anything else your loader uses.`)
};

const es_upload_file_intro_free = /** @type {(inputs: Upload_File_Intro_FreeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sube el archivo que instalan los jugadores: un .zip, un .dll, un .mod o lo que use tu cargador.`)
};

const de_upload_file_intro_free = /** @type {(inputs: Upload_File_Intro_FreeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lade die Datei hoch, die Spieler installieren: eine .zip, .dll, .mod oder was dein Loader sonst nutzt.`)
};

const fr_upload_file_intro_free = /** @type {(inputs: Upload_File_Intro_FreeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Envoyez le fichier que les joueurs installent : un .zip, un .dll, un .mod ou tout autre format de votre chargeur.`)
};

const it_upload_file_intro_free = /** @type {(inputs: Upload_File_Intro_FreeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Carica il file che i giocatori installano: uno .zip, un .dll, un .mod o qualsiasi altro formato del tuo loader.`)
};

const nl_upload_file_intro_free = /** @type {(inputs: Upload_File_Intro_FreeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upload het bestand dat spelers installeren: een .zip, .dll, .mod of wat je loader ook gebruikt.`)
};

const pl_upload_file_intro_free = /** @type {(inputs: Upload_File_Intro_FreeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prześlij plik, który instalują gracze: .zip, .dll, .mod albo inny format twojego loadera.`)
};

const pt_upload_file_intro_free = /** @type {(inputs: Upload_File_Intro_FreeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Envie o arquivo que os jogadores instalam: um .zip, um .dll, um .mod ou o que o seu carregador usar.`)
};

const ru_upload_file_intro_free = /** @type {(inputs: Upload_File_Intro_FreeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загрузите файл, который устанавливают игроки: .zip, .dll, .mod или любой другой формат вашего загрузчика.`)
};

const sv_upload_file_intro_free = /** @type {(inputs: Upload_File_Intro_FreeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ladda upp filen som spelarna installerar: en .zip, .dll, .mod eller vad din laddare använder.`)
};

const tr_upload_file_intro_free = /** @type {(inputs: Upload_File_Intro_FreeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oyuncuların kurduğu dosyayı yükle: .zip, .dll, .mod ya da yükleyicinin kullandığı başka bir dosya.`)
};

const zh_upload_file_intro_free = /** @type {(inputs: Upload_File_Intro_FreeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上传玩家安装的文件：.zip、.dll、.mod 或你的加载器使用的任何格式。`)
};

const ja_upload_file_intro_free = /** @type {(inputs: Upload_File_Intro_FreeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プレイヤーがインストールするファイルをアップロードします（.zip、.dll、.mod など、ローダーが使う形式）。`)
};

/**
* | output |
* | --- |
* | "Upload the file players install: a .zip, a .dll, a .mod or anything else your loader uses." |
*
* @param {Upload_File_Intro_FreeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_file_intro_free = /** @type {((inputs?: Upload_File_Intro_FreeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_File_Intro_FreeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_file_intro_free(inputs)
	if (locale === "de") return de_upload_file_intro_free(inputs)
	if (locale === "fr") return fr_upload_file_intro_free(inputs)
	if (locale === "it") return it_upload_file_intro_free(inputs)
	if (locale === "nl") return nl_upload_file_intro_free(inputs)
	if (locale === "pl") return pl_upload_file_intro_free(inputs)
	if (locale === "pt") return pt_upload_file_intro_free(inputs)
	if (locale === "ru") return ru_upload_file_intro_free(inputs)
	if (locale === "sv") return sv_upload_file_intro_free(inputs)
	if (locale === "tr") return tr_upload_file_intro_free(inputs)
	if (locale === "zh") return zh_upload_file_intro_free(inputs)
	if (locale === "ja") return ja_upload_file_intro_free(inputs)
	return en_upload_file_intro_free(inputs)
});
