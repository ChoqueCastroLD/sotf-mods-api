/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Modpacks_Configs_SavedInputs */

const en_modpacks_configs_saved = /** @type {(inputs: Modpacks_Configs_SavedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Config files saved: ${count__number} file`);
	return /** @type {LocalizedString} */ (`Config files saved: ${count__number} files`)
	
};

const es_modpacks_configs_saved = /** @type {(inputs: Modpacks_Configs_SavedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Archivos de configuración guardados: ${count__number} archivo`);
	return /** @type {LocalizedString} */ (`Archivos de configuración guardados: ${count__number} archivos`)
	
};

const de_modpacks_configs_saved = /** @type {(inputs: Modpacks_Configs_SavedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Konfigurationsdateien gespeichert: ${count__number} Datei`);
	return /** @type {LocalizedString} */ (`Konfigurationsdateien gespeichert: ${count__number} Dateien`)
	
};

const fr_modpacks_configs_saved = /** @type {(inputs: Modpacks_Configs_SavedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Fichiers de configuration enregistrés : ${count__number} fichier`);
	return /** @type {LocalizedString} */ (`Fichiers de configuration enregistrés : ${count__number} fichiers`)
	
};

const it_modpacks_configs_saved = /** @type {(inputs: Modpacks_Configs_SavedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`File di configurazione salvati: ${count__number} file`);
	return /** @type {LocalizedString} */ (`File di configurazione salvati: ${count__number} file`)
	
};

const nl_modpacks_configs_saved = /** @type {(inputs: Modpacks_Configs_SavedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Configuratiebestanden opgeslagen: ${count__number} bestand`);
	return /** @type {LocalizedString} */ (`Configuratiebestanden opgeslagen: ${count__number} bestanden`)
	
};

const pl_modpacks_configs_saved = /** @type {(inputs: Modpacks_Configs_SavedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Zapisano pliki konfiguracyjne: ${count__number} plik`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Zapisano pliki konfiguracyjne: ${count__number} pliki`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Zapisano pliki konfiguracyjne: ${count__number} plików`);
	return /** @type {LocalizedString} */ (`Zapisano pliki konfiguracyjne: ${count__number} pliku`)
	
};

const pt_modpacks_configs_saved = /** @type {(inputs: Modpacks_Configs_SavedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Arquivos de configuração salvos: ${count__number} arquivo`);
	return /** @type {LocalizedString} */ (`Arquivos de configuração salvos: ${count__number} arquivos`)
	
};

const ru_modpacks_configs_saved = /** @type {(inputs: Modpacks_Configs_SavedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Файлы настроек сохранены: ${count__number} файл`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Файлы настроек сохранены: ${count__number} файла`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Файлы настроек сохранены: ${count__number} файлов`);
	return /** @type {LocalizedString} */ (`Файлы настроек сохранены: ${count__number} файла`)
	
};

const sv_modpacks_configs_saved = /** @type {(inputs: Modpacks_Configs_SavedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Konfigurationsfiler sparade: ${count__number} fil`);
	return /** @type {LocalizedString} */ (`Konfigurationsfiler sparade: ${count__number} filer`)
	
};

const tr_modpacks_configs_saved = /** @type {(inputs: Modpacks_Configs_SavedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Yapılandırma dosyaları kaydedildi: ${count__number} dosya`);
	return /** @type {LocalizedString} */ (`Yapılandırma dosyaları kaydedildi: ${count__number} dosya`)
	
};

const zh_modpacks_configs_saved = /** @type {(inputs: Modpacks_Configs_SavedInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`配置文件已保存：${count__number} 个文件`)
};

const ja_modpacks_configs_saved = /** @type {(inputs: Modpacks_Configs_SavedInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`設定ファイルを保存しました：${count__number} 件`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "Config files saved: {count__number} file" |
* | * | "Config files saved: {count__number} files" |
*
* @param {Modpacks_Configs_SavedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_configs_saved = /** @type {((inputs: Modpacks_Configs_SavedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Configs_SavedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_configs_saved(inputs)
	if (locale === "de") return de_modpacks_configs_saved(inputs)
	if (locale === "fr") return fr_modpacks_configs_saved(inputs)
	if (locale === "it") return it_modpacks_configs_saved(inputs)
	if (locale === "nl") return nl_modpacks_configs_saved(inputs)
	if (locale === "pl") return pl_modpacks_configs_saved(inputs)
	if (locale === "pt") return pt_modpacks_configs_saved(inputs)
	if (locale === "ru") return ru_modpacks_configs_saved(inputs)
	if (locale === "sv") return sv_modpacks_configs_saved(inputs)
	if (locale === "tr") return tr_modpacks_configs_saved(inputs)
	if (locale === "zh") return zh_modpacks_configs_saved(inputs)
	if (locale === "ja") return ja_modpacks_configs_saved(inputs)
	return en_modpacks_configs_saved(inputs)
});
