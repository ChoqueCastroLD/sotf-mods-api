/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Modpacks_Configs_CountInputs */

const en_modpacks_configs_count = /** @type {(inputs: Modpacks_Configs_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} file`);
	return /** @type {LocalizedString} */ (`${count__number} files`)
	
};

const es_modpacks_configs_count = /** @type {(inputs: Modpacks_Configs_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} archivo`);
	return /** @type {LocalizedString} */ (`${count__number} archivos`)
	
};

const de_modpacks_configs_count = /** @type {(inputs: Modpacks_Configs_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Datei`);
	return /** @type {LocalizedString} */ (`${count__number} Dateien`)
	
};

const fr_modpacks_configs_count = /** @type {(inputs: Modpacks_Configs_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} fichier`);
	return /** @type {LocalizedString} */ (`${count__number} fichiers`)
	
};

const it_modpacks_configs_count = /** @type {(inputs: Modpacks_Configs_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} file`);
	return /** @type {LocalizedString} */ (`${count__number} file`)
	
};

const nl_modpacks_configs_count = /** @type {(inputs: Modpacks_Configs_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} bestand`);
	return /** @type {LocalizedString} */ (`${count__number} bestanden`)
	
};

const pl_modpacks_configs_count = /** @type {(inputs: Modpacks_Configs_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} plik`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} pliki`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} plików`);
	return /** @type {LocalizedString} */ (`${count__number} pliku`)
	
};

const pt_modpacks_configs_count = /** @type {(inputs: Modpacks_Configs_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} arquivo`);
	return /** @type {LocalizedString} */ (`${count__number} arquivos`)
	
};

const ru_modpacks_configs_count = /** @type {(inputs: Modpacks_Configs_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} файл`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} файла`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} файлов`);
	return /** @type {LocalizedString} */ (`${count__number} файла`)
	
};

const sv_modpacks_configs_count = /** @type {(inputs: Modpacks_Configs_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} fil`);
	return /** @type {LocalizedString} */ (`${count__number} filer`)
	
};

const tr_modpacks_configs_count = /** @type {(inputs: Modpacks_Configs_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} dosya`);
	return /** @type {LocalizedString} */ (`${count__number} dosya`)
	
};

const zh_modpacks_configs_count = /** @type {(inputs: Modpacks_Configs_CountInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 个文件`)
};

const ja_modpacks_configs_count = /** @type {(inputs: Modpacks_Configs_CountInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 件のファイル`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} file" |
* | * | "{count__number} files" |
*
* @param {Modpacks_Configs_CountInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_configs_count = /** @type {((inputs: Modpacks_Configs_CountInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Configs_CountInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_configs_count(inputs)
	if (locale === "de") return de_modpacks_configs_count(inputs)
	if (locale === "fr") return fr_modpacks_configs_count(inputs)
	if (locale === "it") return it_modpacks_configs_count(inputs)
	if (locale === "nl") return nl_modpacks_configs_count(inputs)
	if (locale === "pl") return pl_modpacks_configs_count(inputs)
	if (locale === "pt") return pt_modpacks_configs_count(inputs)
	if (locale === "ru") return ru_modpacks_configs_count(inputs)
	if (locale === "sv") return sv_modpacks_configs_count(inputs)
	if (locale === "tr") return tr_modpacks_configs_count(inputs)
	if (locale === "zh") return zh_modpacks_configs_count(inputs)
	if (locale === "ja") return ja_modpacks_configs_count(inputs)
	return en_modpacks_configs_count(inputs)
});
