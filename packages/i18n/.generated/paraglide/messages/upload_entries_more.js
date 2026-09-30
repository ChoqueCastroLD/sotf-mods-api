/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Upload_Entries_MoreInputs */

const en_upload_entries_more = /** @type {(inputs: Upload_Entries_MoreInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`And ${count__number} more file`);
	return /** @type {LocalizedString} */ (`And ${count__number} more files`)
	
};

const es_upload_entries_more = /** @type {(inputs: Upload_Entries_MoreInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Y ${count__number} archivo más`);
	return /** @type {LocalizedString} */ (`Y ${count__number} archivos más`)
	
};

const de_upload_entries_more = /** @type {(inputs: Upload_Entries_MoreInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Und ${count__number} weitere Datei`);
	return /** @type {LocalizedString} */ (`Und ${count__number} weitere Dateien`)
	
};

const fr_upload_entries_more = /** @type {(inputs: Upload_Entries_MoreInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Et ${count__number} fichier de plus`);
	return /** @type {LocalizedString} */ (`Et ${count__number} fichiers de plus`)
	
};

const it_upload_entries_more = /** @type {(inputs: Upload_Entries_MoreInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`E ${count__number} altro file`);
	return /** @type {LocalizedString} */ (`E altri ${count__number} file`)
	
};

const nl_upload_entries_more = /** @type {(inputs: Upload_Entries_MoreInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`En nog ${count__number} bestand`);
	return /** @type {LocalizedString} */ (`En nog ${count__number} bestanden`)
	
};

const pl_upload_entries_more = /** @type {(inputs: Upload_Entries_MoreInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`I jeszcze ${count__number} plik`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`I jeszcze ${count__number} pliki`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`I jeszcze ${count__number} plików`);
	return /** @type {LocalizedString} */ (`I jeszcze ${count__number} pliku`)
	
};

const pt_upload_entries_more = /** @type {(inputs: Upload_Entries_MoreInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`E mais ${count__number} arquivo`);
	return /** @type {LocalizedString} */ (`E mais ${count__number} arquivos`)
	
};

const ru_upload_entries_more = /** @type {(inputs: Upload_Entries_MoreInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`И ещё ${count__number} файл`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`И ещё ${count__number} файла`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`И ещё ${count__number} файлов`);
	return /** @type {LocalizedString} */ (`И ещё ${count__number} файла`)
	
};

const sv_upload_entries_more = /** @type {(inputs: Upload_Entries_MoreInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Och ${count__number} fil till`);
	return /** @type {LocalizedString} */ (`Och ${count__number} filer till`)
	
};

const tr_upload_entries_more = /** @type {(inputs: Upload_Entries_MoreInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Ve ${count__number} dosya daha`);
	return /** @type {LocalizedString} */ (`Ve ${count__number} dosya daha`)
	
};

const zh_upload_entries_more = /** @type {(inputs: Upload_Entries_MoreInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`还有 ${count__number} 个文件`)
};

const ja_upload_entries_more = /** @type {(inputs: Upload_Entries_MoreInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`ほか ${count__number} 件のファイル`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "And {count__number} more file" |
* | * | "And {count__number} more files" |
*
* @param {Upload_Entries_MoreInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_entries_more = /** @type {((inputs: Upload_Entries_MoreInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Entries_MoreInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_entries_more(inputs)
	if (locale === "de") return de_upload_entries_more(inputs)
	if (locale === "fr") return fr_upload_entries_more(inputs)
	if (locale === "it") return it_upload_entries_more(inputs)
	if (locale === "nl") return nl_upload_entries_more(inputs)
	if (locale === "pl") return pl_upload_entries_more(inputs)
	if (locale === "pt") return pt_upload_entries_more(inputs)
	if (locale === "ru") return ru_upload_entries_more(inputs)
	if (locale === "sv") return sv_upload_entries_more(inputs)
	if (locale === "tr") return tr_upload_entries_more(inputs)
	if (locale === "zh") return zh_upload_entries_more(inputs)
	if (locale === "ja") return ja_upload_entries_more(inputs)
	return en_upload_entries_more(inputs)
});
