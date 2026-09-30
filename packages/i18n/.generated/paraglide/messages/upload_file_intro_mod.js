/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_File_Intro_ModInputs */

const en_upload_file_intro_mod = /** @type {(inputs: Upload_File_Intro_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Drop the .zip you’d give to players. We open it in your browser first and show what’s inside before anything is uploaded.`)
};

const es_upload_file_intro_mod = /** @type {(inputs: Upload_File_Intro_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suelta el .zip que darías a los jugadores. Primero lo abrimos en tu navegador y te enseñamos su contenido antes de subir nada.`)
};

const de_upload_file_intro_mod = /** @type {(inputs: Upload_File_Intro_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zieh das .zip hierher, das Spieler bekommen sollen. Wir öffnen es zuerst in deinem Browser und zeigen dir den Inhalt, bevor etwas hochgeladen wird.`)
};

const fr_upload_file_intro_mod = /** @type {(inputs: Upload_File_Intro_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Déposez le .zip que vous donneriez aux joueurs. Nous l’ouvrons d’abord dans votre navigateur et vous montrons son contenu avant tout envoi.`)
};

const it_upload_file_intro_mod = /** @type {(inputs: Upload_File_Intro_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trascina lo .zip che daresti ai giocatori. Prima lo apriamo nel tuo browser e ti mostriamo il contenuto, senza caricare nulla.`)
};

const nl_upload_file_intro_mod = /** @type {(inputs: Upload_File_Intro_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sleep de .zip die je aan spelers zou geven. We openen hem eerst in je browser en tonen de inhoud voordat er iets wordt geüpload.`)
};

const pl_upload_file_intro_mod = /** @type {(inputs: Upload_File_Intro_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upuść plik .zip, który dałbyś graczom. Najpierw otwieramy go w przeglądarce i pokazujemy zawartość, zanim cokolwiek zostanie wysłane.`)
};

const pt_upload_file_intro_mod = /** @type {(inputs: Upload_File_Intro_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solte o .zip que você daria aos jogadores. Primeiro o abrimos no seu navegador e mostramos o conteúdo antes de enviar qualquer coisa.`)
};

const ru_upload_file_intro_mod = /** @type {(inputs: Upload_File_Intro_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Перетащите .zip, который вы отдали бы игрокам. Сначала мы откроем его в браузере и покажем содержимое — ещё до загрузки.`)
};

const sv_upload_file_intro_mod = /** @type {(inputs: Upload_File_Intro_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Släpp den .zip du skulle ge spelarna. Vi öppnar den först i din webbläsare och visar innehållet innan något laddas upp.`)
};

const tr_upload_file_intro_mod = /** @type {(inputs: Upload_File_Intro_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oyunculara vereceğin .zip dosyasını bırak. Önce tarayıcında açıp içeriğini gösteriyoruz, hiçbir şey yüklenmeden önce.`)
};

const zh_upload_file_intro_mod = /** @type {(inputs: Upload_File_Intro_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`拖入你会发给玩家的 .zip。我们会先在浏览器中打开它并展示内容，上传前不会发送任何东西。`)
};

const ja_upload_file_intro_mod = /** @type {(inputs: Upload_File_Intro_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プレイヤーに配る .zip をドロップしてください。アップロード前にブラウザで開き、中身を表示します。`)
};

/**
* | output |
* | --- |
* | "Drop the .zip you’d give to players. We open it in your browser first and show what’s inside before anything is uploaded." |
*
* @param {Upload_File_Intro_ModInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_file_intro_mod = /** @type {((inputs?: Upload_File_Intro_ModInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_File_Intro_ModInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_file_intro_mod(inputs)
	if (locale === "de") return de_upload_file_intro_mod(inputs)
	if (locale === "fr") return fr_upload_file_intro_mod(inputs)
	if (locale === "it") return it_upload_file_intro_mod(inputs)
	if (locale === "nl") return nl_upload_file_intro_mod(inputs)
	if (locale === "pl") return pl_upload_file_intro_mod(inputs)
	if (locale === "pt") return pt_upload_file_intro_mod(inputs)
	if (locale === "ru") return ru_upload_file_intro_mod(inputs)
	if (locale === "sv") return sv_upload_file_intro_mod(inputs)
	if (locale === "tr") return tr_upload_file_intro_mod(inputs)
	if (locale === "zh") return zh_upload_file_intro_mod(inputs)
	if (locale === "ja") return ja_upload_file_intro_mod(inputs)
	return en_upload_file_intro_mod(inputs)
});
