/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Download_All_HintInputs */

const en_kits_download_all_hint = /** @type {(inputs: Kits_Download_All_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download the files in order, then install them with RedLoader. Dependencies are already in the list.`)
};

const es_kits_download_all_hint = /** @type {(inputs: Kits_Download_All_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descarga los archivos en orden y luego instálalos con RedLoader. Las dependencias ya están en la lista.`)
};

const de_kits_download_all_hint = /** @type {(inputs: Kits_Download_All_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lade die Dateien der Reihe nach herunter und installiere sie dann mit RedLoader. Die Abhängigkeiten stehen schon auf der Liste.`)
};

const fr_kits_download_all_hint = /** @type {(inputs: Kits_Download_All_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Téléchargez les fichiers dans l’ordre, puis installez-les avec RedLoader. Les dépendances sont déjà dans la liste.`)
};

const it_kits_download_all_hint = /** @type {(inputs: Kits_Download_All_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scarica i file in ordine, poi installali con RedLoader. Le dipendenze sono già nell’elenco.`)
};

const nl_kits_download_all_hint = /** @type {(inputs: Kits_Download_All_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download de bestanden op volgorde en installeer ze daarna met RedLoader. Afhankelijkheden staan al in de lijst.`)
};

const pl_kits_download_all_hint = /** @type {(inputs: Kits_Download_All_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pobierz pliki po kolei, a potem zainstaluj je przez RedLoader. Zależności są już na liście.`)
};

const pt_kits_download_all_hint = /** @type {(inputs: Kits_Download_All_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Baixe os arquivos em ordem e depois instale-os com o RedLoader. As dependências já estão na lista.`)
};

const ru_kits_download_all_hint = /** @type {(inputs: Kits_Download_All_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скачайте файлы по порядку, затем установите их через RedLoader. Зависимости уже в списке.`)
};

const sv_kits_download_all_hint = /** @type {(inputs: Kits_Download_All_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ladda ner filerna i ordning och installera dem sedan med RedLoader. Beroendena finns redan i listan.`)
};

const tr_kits_download_all_hint = /** @type {(inputs: Kits_Download_All_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dosyaları sırayla indir, sonra RedLoader ile kur. Bağımlılıklar listede zaten var.`)
};

const zh_kits_download_all_hint = /** @type {(inputs: Kits_Download_All_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`按顺序下载文件，然后用 RedLoader 安装。依赖项已经在列表里了。`)
};

const ja_kits_download_all_hint = /** @type {(inputs: Kits_Download_All_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ファイルを順番にダウンロードし、RedLoader でインストールしてください。依存 MOD はリストに含まれています。`)
};

/**
* | output |
* | --- |
* | "Download the files in order, then install them with RedLoader. Dependencies are already in the list." |
*
* @param {Kits_Download_All_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_download_all_hint = /** @type {((inputs?: Kits_Download_All_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Download_All_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_download_all_hint(inputs)
	if (locale === "de") return de_kits_download_all_hint(inputs)
	if (locale === "fr") return fr_kits_download_all_hint(inputs)
	if (locale === "it") return it_kits_download_all_hint(inputs)
	if (locale === "nl") return nl_kits_download_all_hint(inputs)
	if (locale === "pl") return pl_kits_download_all_hint(inputs)
	if (locale === "pt") return pt_kits_download_all_hint(inputs)
	if (locale === "ru") return ru_kits_download_all_hint(inputs)
	if (locale === "sv") return sv_kits_download_all_hint(inputs)
	if (locale === "tr") return tr_kits_download_all_hint(inputs)
	if (locale === "zh") return zh_kits_download_all_hint(inputs)
	if (locale === "ja") return ja_kits_download_all_hint(inputs)
	return en_kits_download_all_hint(inputs)
});
