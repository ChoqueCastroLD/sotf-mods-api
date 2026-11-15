/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ size: NonNullable<unknown> }} Modpacks_Configs_DownloadInputs */

const en_modpacks_configs_download = /** @type {(inputs: Modpacks_Configs_DownloadInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Download the config files (${i?.size})`)
};

const es_modpacks_configs_download = /** @type {(inputs: Modpacks_Configs_DownloadInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Descargar los archivos de configuración (${i?.size})`)
};

const de_modpacks_configs_download = /** @type {(inputs: Modpacks_Configs_DownloadInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Konfigurationsdateien herunterladen (${i?.size})`)
};

const fr_modpacks_configs_download = /** @type {(inputs: Modpacks_Configs_DownloadInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Télécharger les fichiers de configuration (${i?.size})`)
};

const it_modpacks_configs_download = /** @type {(inputs: Modpacks_Configs_DownloadInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Scarica i file di configurazione (${i?.size})`)
};

const nl_modpacks_configs_download = /** @type {(inputs: Modpacks_Configs_DownloadInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Configuratiebestanden downloaden (${i?.size})`)
};

const pl_modpacks_configs_download = /** @type {(inputs: Modpacks_Configs_DownloadInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Pobierz pliki konfiguracyjne (${i?.size})`)
};

const pt_modpacks_configs_download = /** @type {(inputs: Modpacks_Configs_DownloadInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Baixar os arquivos de configuração (${i?.size})`)
};

const ru_modpacks_configs_download = /** @type {(inputs: Modpacks_Configs_DownloadInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Скачать файлы настроек (${i?.size})`)
};

const sv_modpacks_configs_download = /** @type {(inputs: Modpacks_Configs_DownloadInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ladda ner konfigurationsfilerna (${i?.size})`)
};

const tr_modpacks_configs_download = /** @type {(inputs: Modpacks_Configs_DownloadInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Yapılandırma dosyalarını indir (${i?.size})`)
};

const zh_modpacks_configs_download = /** @type {(inputs: Modpacks_Configs_DownloadInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`下载配置文件（${i?.size}）`)
};

const ja_modpacks_configs_download = /** @type {(inputs: Modpacks_Configs_DownloadInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`設定ファイルをダウンロード（${i?.size}）`)
};

/**
* | output |
* | --- |
* | "Download the config files ({size})" |
*
* @param {Modpacks_Configs_DownloadInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_configs_download = /** @type {((inputs: Modpacks_Configs_DownloadInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Configs_DownloadInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_configs_download(inputs)
	if (locale === "de") return de_modpacks_configs_download(inputs)
	if (locale === "fr") return fr_modpacks_configs_download(inputs)
	if (locale === "it") return it_modpacks_configs_download(inputs)
	if (locale === "nl") return nl_modpacks_configs_download(inputs)
	if (locale === "pl") return pl_modpacks_configs_download(inputs)
	if (locale === "pt") return pt_modpacks_configs_download(inputs)
	if (locale === "ru") return ru_modpacks_configs_download(inputs)
	if (locale === "sv") return sv_modpacks_configs_download(inputs)
	if (locale === "tr") return tr_modpacks_configs_download(inputs)
	if (locale === "zh") return zh_modpacks_configs_download(inputs)
	if (locale === "ja") return ja_modpacks_configs_download(inputs)
	return en_modpacks_configs_download(inputs)
});
