/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Ranger_Diff_First_VersionInputs */

const en_ranger_diff_first_version = /** @type {(inputs: Ranger_Diff_First_VersionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`First version: nothing to compare with. The zip holds ${count__number} file.`);
	return /** @type {LocalizedString} */ (`First version: nothing to compare with. The zip holds ${count__number} files.`)
	
};

const es_ranger_diff_first_version = /** @type {(inputs: Ranger_Diff_First_VersionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Primera versión: no hay con qué comparar. El zip contiene ${count__number} archivo.`);
	return /** @type {LocalizedString} */ (`Primera versión: no hay con qué comparar. El zip contiene ${count__number} archivos.`)
	
};

const de_ranger_diff_first_version = /** @type {(inputs: Ranger_Diff_First_VersionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Erste Version: nichts zum Vergleichen. Das Zip enthält ${count__number} Datei.`);
	return /** @type {LocalizedString} */ (`Erste Version: nichts zum Vergleichen. Das Zip enthält ${count__number} Dateien.`)
	
};

const fr_ranger_diff_first_version = /** @type {(inputs: Ranger_Diff_First_VersionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Première version : rien à comparer. Le zip contient ${count__number} fichier.`);
	return /** @type {LocalizedString} */ (`Première version : rien à comparer. Le zip contient ${count__number} fichiers.`)
	
};

const it_ranger_diff_first_version = /** @type {(inputs: Ranger_Diff_First_VersionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Prima versione: niente da confrontare. Lo zip contiene ${count__number} file.`);
	return /** @type {LocalizedString} */ (`Prima versione: niente da confrontare. Lo zip contiene ${count__number} file.`)
	
};

const nl_ranger_diff_first_version = /** @type {(inputs: Ranger_Diff_First_VersionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Eerste versie: niets om mee te vergelijken. De zip bevat ${count__number} bestand.`);
	return /** @type {LocalizedString} */ (`Eerste versie: niets om mee te vergelijken. De zip bevat ${count__number} bestanden.`)
	
};

const pl_ranger_diff_first_version = /** @type {(inputs: Ranger_Diff_First_VersionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Pierwsza wersja: nie ma z czym porównać. Zip zawiera ${count__number} plik.`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Pierwsza wersja: nie ma z czym porównać. Zip zawiera ${count__number} pliki.`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Pierwsza wersja: nie ma z czym porównać. Zip zawiera ${count__number} plików.`);
	return /** @type {LocalizedString} */ (`Pierwsza wersja: nie ma z czym porównać. Zip zawiera ${count__number} pliku.`)
	
};

const pt_ranger_diff_first_version = /** @type {(inputs: Ranger_Diff_First_VersionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Primeira versão: nada para comparar. O zip contém ${count__number} arquivo.`);
	return /** @type {LocalizedString} */ (`Primeira versão: nada para comparar. O zip contém ${count__number} arquivos.`)
	
};

const ru_ranger_diff_first_version = /** @type {(inputs: Ranger_Diff_First_VersionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Первая версия: сравнивать не с чем. В zip ${count__number} файл.`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Первая версия: сравнивать не с чем. В zip ${count__number} файла.`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Первая версия: сравнивать не с чем. В zip ${count__number} файлов.`);
	return /** @type {LocalizedString} */ (`Первая версия: сравнивать не с чем. В zip ${count__number} файла.`)
	
};

const sv_ranger_diff_first_version = /** @type {(inputs: Ranger_Diff_First_VersionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Första versionen: inget att jämföra med. Zip-filen innehåller ${count__number} fil.`);
	return /** @type {LocalizedString} */ (`Första versionen: inget att jämföra med. Zip-filen innehåller ${count__number} filer.`)
	
};

const tr_ranger_diff_first_version = /** @type {(inputs: Ranger_Diff_First_VersionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`İlk sürüm: karşılaştıracak bir şey yok. Zip ${count__number} dosya içeriyor.`);
	return /** @type {LocalizedString} */ (`İlk sürüm: karşılaştıracak bir şey yok. Zip ${count__number} dosya içeriyor.`)
	
};

const zh_ranger_diff_first_version = /** @type {(inputs: Ranger_Diff_First_VersionInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`首个版本：没有可比较的对象。zip 中有 ${count__number} 个文件。`)
};

const ja_ranger_diff_first_version = /** @type {(inputs: Ranger_Diff_First_VersionInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`最初のバージョン：比較対象がありません。zip には ${count__number} ファイルが含まれています。`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "First version: nothing to compare with. The zip holds {count__number} file." |
* | * | "First version: nothing to compare with. The zip holds {count__number} files." |
*
* @param {Ranger_Diff_First_VersionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_diff_first_version = /** @type {((inputs: Ranger_Diff_First_VersionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Diff_First_VersionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_diff_first_version(inputs)
	if (locale === "de") return de_ranger_diff_first_version(inputs)
	if (locale === "fr") return fr_ranger_diff_first_version(inputs)
	if (locale === "it") return it_ranger_diff_first_version(inputs)
	if (locale === "nl") return nl_ranger_diff_first_version(inputs)
	if (locale === "pl") return pl_ranger_diff_first_version(inputs)
	if (locale === "pt") return pt_ranger_diff_first_version(inputs)
	if (locale === "ru") return ru_ranger_diff_first_version(inputs)
	if (locale === "sv") return sv_ranger_diff_first_version(inputs)
	if (locale === "tr") return tr_ranger_diff_first_version(inputs)
	if (locale === "zh") return zh_ranger_diff_first_version(inputs)
	if (locale === "ja") return ja_ranger_diff_first_version(inputs)
	return en_ranger_diff_first_version(inputs)
});
