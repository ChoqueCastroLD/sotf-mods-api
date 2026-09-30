/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Upload_Gallery_SkippedInputs */

const en_upload_gallery_skipped = /** @type {(inputs: Upload_Gallery_SkippedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} file skipped (wrong type, over 10 MB or gallery full)`);
	return /** @type {LocalizedString} */ (`${count__number} files skipped (wrong type, over 10 MB or gallery full)`)
	
};

const es_upload_gallery_skipped = /** @type {(inputs: Upload_Gallery_SkippedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} archivo omitido (tipo incorrecto, más de 10 MB o galería llena)`);
	return /** @type {LocalizedString} */ (`${count__number} archivos omitidos (tipo incorrecto, más de 10 MB o galería llena)`)
	
};

const de_upload_gallery_skipped = /** @type {(inputs: Upload_Gallery_SkippedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Datei übersprungen (falscher Typ, über 10 MB oder Galerie voll)`);
	return /** @type {LocalizedString} */ (`${count__number} Dateien übersprungen (falscher Typ, über 10 MB oder Galerie voll)`)
	
};

const fr_upload_gallery_skipped = /** @type {(inputs: Upload_Gallery_SkippedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} fichier ignoré (mauvais type, plus de 10 Mo ou galerie pleine)`);
	return /** @type {LocalizedString} */ (`${count__number} fichiers ignorés (mauvais type, plus de 10 Mo ou galerie pleine)`)
	
};

const it_upload_gallery_skipped = /** @type {(inputs: Upload_Gallery_SkippedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} file saltato (tipo errato, oltre 10 MB o galleria piena)`);
	return /** @type {LocalizedString} */ (`${count__number} file saltati (tipo errato, oltre 10 MB o galleria piena)`)
	
};

const nl_upload_gallery_skipped = /** @type {(inputs: Upload_Gallery_SkippedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} bestand overgeslagen (verkeerd type, groter dan 10 MB of galerij vol)`);
	return /** @type {LocalizedString} */ (`${count__number} bestanden overgeslagen (verkeerd type, groter dan 10 MB of galerij vol)`)
	
};

const pl_upload_gallery_skipped = /** @type {(inputs: Upload_Gallery_SkippedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Pominięto ${count__number} plik (zły typ, ponad 10 MB lub pełna galeria)`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Pominięto ${count__number} pliki (zły typ, ponad 10 MB lub pełna galeria)`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Pominięto ${count__number} plików (zły typ, ponad 10 MB lub pełna galeria)`);
	return /** @type {LocalizedString} */ (`Pominięto ${count__number} pliku (zły typ, ponad 10 MB lub pełna galeria)`)
	
};

const pt_upload_gallery_skipped = /** @type {(inputs: Upload_Gallery_SkippedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} arquivo ignorado (tipo errado, mais de 10 MB ou galeria cheia)`);
	return /** @type {LocalizedString} */ (`${count__number} arquivos ignorados (tipo errado, mais de 10 MB ou galeria cheia)`)
	
};

const ru_upload_gallery_skipped = /** @type {(inputs: Upload_Gallery_SkippedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Пропущен ${count__number} файл (неверный тип, больше 10 МБ или галерея заполнена)`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Пропущено ${count__number} файла (неверный тип, больше 10 МБ или галерея заполнена)`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Пропущено ${count__number} файлов (неверный тип, больше 10 МБ или галерея заполнена)`);
	return /** @type {LocalizedString} */ (`Пропущено ${count__number} файла (неверный тип, больше 10 МБ или галерея заполнена)`)
	
};

const sv_upload_gallery_skipped = /** @type {(inputs: Upload_Gallery_SkippedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} fil hoppades över (fel typ, över 10 MB eller fullt galleri)`);
	return /** @type {LocalizedString} */ (`${count__number} filer hoppades över (fel typ, över 10 MB eller fullt galleri)`)
	
};

const tr_upload_gallery_skipped = /** @type {(inputs: Upload_Gallery_SkippedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} dosya atlandı (yanlış tür, 10 MB üstü ya da galeri dolu)`);
	return /** @type {LocalizedString} */ (`${count__number} dosya atlandı (yanlış tür, 10 MB üstü ya da galeri dolu)`)
	
};

const zh_upload_gallery_skipped = /** @type {(inputs: Upload_Gallery_SkippedInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`已跳过 ${count__number} 个文件（类型不对、超过 10 MB 或图库已满）`)
};

const ja_upload_gallery_skipped = /** @type {(inputs: Upload_Gallery_SkippedInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 件のファイルをスキップしました（形式違い、10 MB 超過、またはギャラリー満杯）`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} file skipped (wrong type, over 10 MB or gallery full)" |
* | * | "{count__number} files skipped (wrong type, over 10 MB or gallery full)" |
*
* @param {Upload_Gallery_SkippedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_gallery_skipped = /** @type {((inputs: Upload_Gallery_SkippedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Gallery_SkippedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_gallery_skipped(inputs)
	if (locale === "de") return de_upload_gallery_skipped(inputs)
	if (locale === "fr") return fr_upload_gallery_skipped(inputs)
	if (locale === "it") return it_upload_gallery_skipped(inputs)
	if (locale === "nl") return nl_upload_gallery_skipped(inputs)
	if (locale === "pl") return pl_upload_gallery_skipped(inputs)
	if (locale === "pt") return pt_upload_gallery_skipped(inputs)
	if (locale === "ru") return ru_upload_gallery_skipped(inputs)
	if (locale === "sv") return sv_upload_gallery_skipped(inputs)
	if (locale === "tr") return tr_upload_gallery_skipped(inputs)
	if (locale === "zh") return zh_upload_gallery_skipped(inputs)
	if (locale === "ja") return ja_upload_gallery_skipped(inputs)
	return en_upload_gallery_skipped(inputs)
});
