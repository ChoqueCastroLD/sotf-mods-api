/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Kits_Download_All_DescriptionInputs */

const en_kits_download_all_description = /** @type {(inputs: Kits_Download_All_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} file, one at a time`);
	return /** @type {LocalizedString} */ (`${count__number} files, one at a time`)
	
};

const es_kits_download_all_description = /** @type {(inputs: Kits_Download_All_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} archivo, uno a uno`);
	return /** @type {LocalizedString} */ (`${count__number} archivos, uno a uno`)
	
};

const de_kits_download_all_description = /** @type {(inputs: Kits_Download_All_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Datei, eine nach der anderen`);
	return /** @type {LocalizedString} */ (`${count__number} Dateien, eine nach der anderen`)
	
};

const fr_kits_download_all_description = /** @type {(inputs: Kits_Download_All_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} fichier, un par un`);
	return /** @type {LocalizedString} */ (`${count__number} fichiers, un par un`)
	
};

const it_kits_download_all_description = /** @type {(inputs: Kits_Download_All_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} file, uno alla volta`);
	return /** @type {LocalizedString} */ (`${count__number} file, uno alla volta`)
	
};

const nl_kits_download_all_description = /** @type {(inputs: Kits_Download_All_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} bestand, één voor één`);
	return /** @type {LocalizedString} */ (`${count__number} bestanden, één voor één`)
	
};

const pl_kits_download_all_description = /** @type {(inputs: Kits_Download_All_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} plik, jeden po drugim`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} pliki, jeden po drugim`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} plików, jeden po drugim`);
	return /** @type {LocalizedString} */ (`${count__number} pliku, jeden po drugim`)
	
};

const pt_kits_download_all_description = /** @type {(inputs: Kits_Download_All_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} arquivo, um por vez`);
	return /** @type {LocalizedString} */ (`${count__number} arquivos, um por vez`)
	
};

const ru_kits_download_all_description = /** @type {(inputs: Kits_Download_All_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} файл, по одному`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} файла, по одному`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} файлов, по одному`);
	return /** @type {LocalizedString} */ (`${count__number} файла, по одному`)
	
};

const sv_kits_download_all_description = /** @type {(inputs: Kits_Download_All_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} fil, en i taget`);
	return /** @type {LocalizedString} */ (`${count__number} filer, en i taget`)
	
};

const tr_kits_download_all_description = /** @type {(inputs: Kits_Download_All_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} dosya, tek tek`);
	return /** @type {LocalizedString} */ (`${count__number} dosya, tek tek`)
	
};

const zh_kits_download_all_description = /** @type {(inputs: Kits_Download_All_DescriptionInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 个文件，逐个下载`)
};

const ja_kits_download_all_description = /** @type {(inputs: Kits_Download_All_DescriptionInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 件のファイルを 1 件ずつ`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} file, one at a time" |
* | * | "{count__number} files, one at a time" |
*
* @param {Kits_Download_All_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_download_all_description = /** @type {((inputs: Kits_Download_All_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Download_All_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_download_all_description(inputs)
	if (locale === "de") return de_kits_download_all_description(inputs)
	if (locale === "fr") return fr_kits_download_all_description(inputs)
	if (locale === "it") return it_kits_download_all_description(inputs)
	if (locale === "nl") return nl_kits_download_all_description(inputs)
	if (locale === "pl") return pl_kits_download_all_description(inputs)
	if (locale === "pt") return pt_kits_download_all_description(inputs)
	if (locale === "ru") return ru_kits_download_all_description(inputs)
	if (locale === "sv") return sv_kits_download_all_description(inputs)
	if (locale === "tr") return tr_kits_download_all_description(inputs)
	if (locale === "zh") return zh_kits_download_all_description(inputs)
	if (locale === "ja") return ja_kits_download_all_description(inputs)
	return en_kits_download_all_description(inputs)
});
