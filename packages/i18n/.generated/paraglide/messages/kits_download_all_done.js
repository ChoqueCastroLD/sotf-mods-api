/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Download_All_DoneInputs */

const en_kits_download_all_done = /** @type {(inputs: Kits_Download_All_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All files downloaded. Time to install.`)
};

const es_kits_download_all_done = /** @type {(inputs: Kits_Download_All_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todos los archivos descargados. Hora de instalar.`)
};

const de_kits_download_all_done = /** @type {(inputs: Kits_Download_All_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle Dateien heruntergeladen. Zeit zum Installieren.`)
};

const fr_kits_download_all_done = /** @type {(inputs: Kits_Download_All_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tous les fichiers sont téléchargés. Place à l’installation.`)
};

const it_kits_download_all_done = /** @type {(inputs: Kits_Download_All_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tutti i file scaricati. Ora installali.`)
};

const nl_kits_download_all_done = /** @type {(inputs: Kits_Download_All_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle bestanden gedownload. Tijd om te installeren.`)
};

const pl_kits_download_all_done = /** @type {(inputs: Kits_Download_All_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wszystkie pliki pobrane. Czas na instalację.`)
};

const pt_kits_download_all_done = /** @type {(inputs: Kits_Download_All_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todos os arquivos baixados. Hora de instalar.`)
};

const ru_kits_download_all_done = /** @type {(inputs: Kits_Download_All_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Все файлы скачаны. Пора устанавливать.`)
};

const sv_kits_download_all_done = /** @type {(inputs: Kits_Download_All_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alla filer nedladdade. Dags att installera.`)
};

const tr_kits_download_all_done = /** @type {(inputs: Kits_Download_All_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tüm dosyalar indirildi. Kurulum zamanı.`)
};

const zh_kits_download_all_done = /** @type {(inputs: Kits_Download_All_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`文件已全部下载，可以开始安装了。`)
};

const ja_kits_download_all_done = /** @type {(inputs: Kits_Download_All_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべてダウンロードしました。インストールしましょう。`)
};

/**
* | output |
* | --- |
* | "All files downloaded. Time to install." |
*
* @param {Kits_Download_All_DoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_download_all_done = /** @type {((inputs?: Kits_Download_All_DoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Download_All_DoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_download_all_done(inputs)
	if (locale === "de") return de_kits_download_all_done(inputs)
	if (locale === "fr") return fr_kits_download_all_done(inputs)
	if (locale === "it") return it_kits_download_all_done(inputs)
	if (locale === "nl") return nl_kits_download_all_done(inputs)
	if (locale === "pl") return pl_kits_download_all_done(inputs)
	if (locale === "pt") return pt_kits_download_all_done(inputs)
	if (locale === "ru") return ru_kits_download_all_done(inputs)
	if (locale === "sv") return sv_kits_download_all_done(inputs)
	if (locale === "tr") return tr_kits_download_all_done(inputs)
	if (locale === "zh") return zh_kits_download_all_done(inputs)
	if (locale === "ja") return ja_kits_download_all_done(inputs)
	return en_kits_download_all_done(inputs)
});
