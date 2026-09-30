/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Kits_Download_AllInputs */

const en_kits_download_all = /** @type {(inputs: Kits_Download_AllInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Download ${count__number} file`);
	return /** @type {LocalizedString} */ (`Download all ${count__number} files`)
	
};

const es_kits_download_all = /** @type {(inputs: Kits_Download_AllInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Descargar ${count__number} archivo`);
	return /** @type {LocalizedString} */ (`Descargar los ${count__number} archivos`)
	
};

const de_kits_download_all = /** @type {(inputs: Kits_Download_AllInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Datei herunterladen`);
	return /** @type {LocalizedString} */ (`Alle ${count__number} Dateien herunterladen`)
	
};

const fr_kits_download_all = /** @type {(inputs: Kits_Download_AllInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Télécharger ${count__number} fichier`);
	return /** @type {LocalizedString} */ (`Télécharger les ${count__number} fichiers`)
	
};

const it_kits_download_all = /** @type {(inputs: Kits_Download_AllInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Scarica ${count__number} file`);
	return /** @type {LocalizedString} */ (`Scarica tutti i ${count__number} file`)
	
};

const nl_kits_download_all = /** @type {(inputs: Kits_Download_AllInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} bestand downloaden`);
	return /** @type {LocalizedString} */ (`Alle ${count__number} bestanden downloaden`)
	
};

const pl_kits_download_all = /** @type {(inputs: Kits_Download_AllInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Pobierz ${count__number} plik`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Pobierz ${count__number} pliki`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Pobierz ${count__number} plików`);
	return /** @type {LocalizedString} */ (`Pobierz ${count__number} pliku`)
	
};

const pt_kits_download_all = /** @type {(inputs: Kits_Download_AllInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Baixar ${count__number} arquivo`);
	return /** @type {LocalizedString} */ (`Baixar os ${count__number} arquivos`)
	
};

const ru_kits_download_all = /** @type {(inputs: Kits_Download_AllInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Скачать ${count__number} файл`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Скачать ${count__number} файла`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Скачать ${count__number} файлов`);
	return /** @type {LocalizedString} */ (`Скачать ${count__number} файла`)
	
};

const sv_kits_download_all = /** @type {(inputs: Kits_Download_AllInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Ladda ner ${count__number} fil`);
	return /** @type {LocalizedString} */ (`Ladda ner alla ${count__number} filer`)
	
};

const tr_kits_download_all = /** @type {(inputs: Kits_Download_AllInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} dosyayı indir`);
	return /** @type {LocalizedString} */ (`${count__number} dosyanın hepsini indir`)
	
};

const zh_kits_download_all = /** @type {(inputs: Kits_Download_AllInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`下载全部 ${count__number} 个文件`)
};

const ja_kits_download_all = /** @type {(inputs: Kits_Download_AllInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 件のファイルをすべてダウンロード`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "Download {count__number} file" |
* | * | "Download all {count__number} files" |
*
* @param {Kits_Download_AllInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_download_all = /** @type {((inputs: Kits_Download_AllInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Download_AllInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_download_all(inputs)
	if (locale === "de") return de_kits_download_all(inputs)
	if (locale === "fr") return fr_kits_download_all(inputs)
	if (locale === "it") return it_kits_download_all(inputs)
	if (locale === "nl") return nl_kits_download_all(inputs)
	if (locale === "pl") return pl_kits_download_all(inputs)
	if (locale === "pt") return pt_kits_download_all(inputs)
	if (locale === "ru") return ru_kits_download_all(inputs)
	if (locale === "sv") return sv_kits_download_all(inputs)
	if (locale === "tr") return tr_kits_download_all(inputs)
	if (locale === "zh") return zh_kits_download_all(inputs)
	if (locale === "ja") return ja_kits_download_all(inputs)
	return en_kits_download_all(inputs)
});
