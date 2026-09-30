/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown>, size: NonNullable<unknown> }} Kits_Download_All_Description_SizeInputs */

const en_kits_download_all_description_size = /** @type {(inputs: Kits_Download_All_Description_SizeInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} file · ${i?.size} in total`);
	return /** @type {LocalizedString} */ (`${count__number} files · ${i?.size} in total`)
	
};

const es_kits_download_all_description_size = /** @type {(inputs: Kits_Download_All_Description_SizeInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} archivo · ${i?.size} en total`);
	return /** @type {LocalizedString} */ (`${count__number} archivos · ${i?.size} en total`)
	
};

const de_kits_download_all_description_size = /** @type {(inputs: Kits_Download_All_Description_SizeInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Datei · insgesamt ${i?.size}`);
	return /** @type {LocalizedString} */ (`${count__number} Dateien · insgesamt ${i?.size}`)
	
};

const fr_kits_download_all_description_size = /** @type {(inputs: Kits_Download_All_Description_SizeInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} fichier · ${i?.size} au total`);
	return /** @type {LocalizedString} */ (`${count__number} fichiers · ${i?.size} au total`)
	
};

const it_kits_download_all_description_size = /** @type {(inputs: Kits_Download_All_Description_SizeInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} file · ${i?.size} in totale`);
	return /** @type {LocalizedString} */ (`${count__number} file · ${i?.size} in totale`)
	
};

const nl_kits_download_all_description_size = /** @type {(inputs: Kits_Download_All_Description_SizeInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} bestand · ${i?.size} in totaal`);
	return /** @type {LocalizedString} */ (`${count__number} bestanden · ${i?.size} in totaal`)
	
};

const pl_kits_download_all_description_size = /** @type {(inputs: Kits_Download_All_Description_SizeInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} plik · łącznie ${i?.size}`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} pliki · łącznie ${i?.size}`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} plików · łącznie ${i?.size}`);
	return /** @type {LocalizedString} */ (`${count__number} pliku · łącznie ${i?.size}`)
	
};

const pt_kits_download_all_description_size = /** @type {(inputs: Kits_Download_All_Description_SizeInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} arquivo · ${i?.size} no total`);
	return /** @type {LocalizedString} */ (`${count__number} arquivos · ${i?.size} no total`)
	
};

const ru_kits_download_all_description_size = /** @type {(inputs: Kits_Download_All_Description_SizeInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} файл · всего ${i?.size}`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} файла · всего ${i?.size}`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} файлов · всего ${i?.size}`);
	return /** @type {LocalizedString} */ (`${count__number} файла · всего ${i?.size}`)
	
};

const sv_kits_download_all_description_size = /** @type {(inputs: Kits_Download_All_Description_SizeInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} fil · ${i?.size} totalt`);
	return /** @type {LocalizedString} */ (`${count__number} filer · ${i?.size} totalt`)
	
};

const tr_kits_download_all_description_size = /** @type {(inputs: Kits_Download_All_Description_SizeInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} dosya · toplam ${i?.size}`);
	return /** @type {LocalizedString} */ (`${count__number} dosya · toplam ${i?.size}`)
	
};

const zh_kits_download_all_description_size = /** @type {(inputs: Kits_Download_All_Description_SizeInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 个文件 · 共 ${i?.size}`)
};

const ja_kits_download_all_description_size = /** @type {(inputs: Kits_Download_All_Description_SizeInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 件のファイル · 合計 ${i?.size}`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} file · {size} in total" |
* | * | "{count__number} files · {size} in total" |
*
* @param {Kits_Download_All_Description_SizeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_download_all_description_size = /** @type {((inputs: Kits_Download_All_Description_SizeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Download_All_Description_SizeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_download_all_description_size(inputs)
	if (locale === "de") return de_kits_download_all_description_size(inputs)
	if (locale === "fr") return fr_kits_download_all_description_size(inputs)
	if (locale === "it") return it_kits_download_all_description_size(inputs)
	if (locale === "nl") return nl_kits_download_all_description_size(inputs)
	if (locale === "pl") return pl_kits_download_all_description_size(inputs)
	if (locale === "pt") return pt_kits_download_all_description_size(inputs)
	if (locale === "ru") return ru_kits_download_all_description_size(inputs)
	if (locale === "sv") return sv_kits_download_all_description_size(inputs)
	if (locale === "tr") return tr_kits_download_all_description_size(inputs)
	if (locale === "zh") return zh_kits_download_all_description_size(inputs)
	if (locale === "ja") return ja_kits_download_all_description_size(inputs)
	return en_kits_download_all_description_size(inputs)
});
