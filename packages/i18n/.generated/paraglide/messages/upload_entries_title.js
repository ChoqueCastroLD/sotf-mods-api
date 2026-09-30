/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Upload_Entries_TitleInputs */

const en_upload_entries_title = /** @type {(inputs: Upload_Entries_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} file in the zip`);
	return /** @type {LocalizedString} */ (`${count__number} files in the zip`)
	
};

const es_upload_entries_title = /** @type {(inputs: Upload_Entries_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} archivo en el zip`);
	return /** @type {LocalizedString} */ (`${count__number} archivos en el zip`)
	
};

const de_upload_entries_title = /** @type {(inputs: Upload_Entries_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Datei im Zip`);
	return /** @type {LocalizedString} */ (`${count__number} Dateien im Zip`)
	
};

const fr_upload_entries_title = /** @type {(inputs: Upload_Entries_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} fichier dans le zip`);
	return /** @type {LocalizedString} */ (`${count__number} fichiers dans le zip`)
	
};

const it_upload_entries_title = /** @type {(inputs: Upload_Entries_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} file nello zip`);
	return /** @type {LocalizedString} */ (`${count__number} file nello zip`)
	
};

const nl_upload_entries_title = /** @type {(inputs: Upload_Entries_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} bestand in de zip`);
	return /** @type {LocalizedString} */ (`${count__number} bestanden in de zip`)
	
};

const pl_upload_entries_title = /** @type {(inputs: Upload_Entries_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} plik w archiwum zip`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} pliki w archiwum zip`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} plików w archiwum zip`);
	return /** @type {LocalizedString} */ (`${count__number} pliku w archiwum zip`)
	
};

const pt_upload_entries_title = /** @type {(inputs: Upload_Entries_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} arquivo no zip`);
	return /** @type {LocalizedString} */ (`${count__number} arquivos no zip`)
	
};

const ru_upload_entries_title = /** @type {(inputs: Upload_Entries_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} файл в архиве`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} файла в архиве`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} файлов в архиве`);
	return /** @type {LocalizedString} */ (`${count__number} файла в архиве`)
	
};

const sv_upload_entries_title = /** @type {(inputs: Upload_Entries_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} fil i zip-filen`);
	return /** @type {LocalizedString} */ (`${count__number} filer i zip-filen`)
	
};

const tr_upload_entries_title = /** @type {(inputs: Upload_Entries_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Zip içinde ${count__number} dosya`);
	return /** @type {LocalizedString} */ (`Zip içinde ${count__number} dosya`)
	
};

const zh_upload_entries_title = /** @type {(inputs: Upload_Entries_TitleInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`zip 中共 ${count__number} 个文件`)
};

const ja_upload_entries_title = /** @type {(inputs: Upload_Entries_TitleInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`zip 内のファイル：${count__number} 件`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} file in the zip" |
* | * | "{count__number} files in the zip" |
*
* @param {Upload_Entries_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_entries_title = /** @type {((inputs: Upload_Entries_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Entries_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_entries_title(inputs)
	if (locale === "de") return de_upload_entries_title(inputs)
	if (locale === "fr") return fr_upload_entries_title(inputs)
	if (locale === "it") return it_upload_entries_title(inputs)
	if (locale === "nl") return nl_upload_entries_title(inputs)
	if (locale === "pl") return pl_upload_entries_title(inputs)
	if (locale === "pt") return pt_upload_entries_title(inputs)
	if (locale === "ru") return ru_upload_entries_title(inputs)
	if (locale === "sv") return sv_upload_entries_title(inputs)
	if (locale === "tr") return tr_upload_entries_title(inputs)
	if (locale === "zh") return zh_upload_entries_title(inputs)
	if (locale === "ja") return ja_upload_entries_title(inputs)
	return en_upload_entries_title(inputs)
});
