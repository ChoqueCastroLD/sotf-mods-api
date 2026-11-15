/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Configs_RemovedInputs */

const en_modpacks_configs_removed = /** @type {(inputs: Modpacks_Configs_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Config files removed`)
};

const es_modpacks_configs_removed = /** @type {(inputs: Modpacks_Configs_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archivos de configuración quitados`)
};

const de_modpacks_configs_removed = /** @type {(inputs: Modpacks_Configs_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Konfigurationsdateien entfernt`)
};

const fr_modpacks_configs_removed = /** @type {(inputs: Modpacks_Configs_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fichiers de configuration retirés`)
};

const it_modpacks_configs_removed = /** @type {(inputs: Modpacks_Configs_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`File di configurazione rimossi`)
};

const nl_modpacks_configs_removed = /** @type {(inputs: Modpacks_Configs_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configuratiebestanden verwijderd`)
};

const pl_modpacks_configs_removed = /** @type {(inputs: Modpacks_Configs_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usunięto pliki konfiguracyjne`)
};

const pt_modpacks_configs_removed = /** @type {(inputs: Modpacks_Configs_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arquivos de configuração removidos`)
};

const ru_modpacks_configs_removed = /** @type {(inputs: Modpacks_Configs_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Файлы настроек убраны`)
};

const sv_modpacks_configs_removed = /** @type {(inputs: Modpacks_Configs_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Konfigurationsfiler borttagna`)
};

const tr_modpacks_configs_removed = /** @type {(inputs: Modpacks_Configs_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yapılandırma dosyaları kaldırıldı`)
};

const zh_modpacks_configs_removed = /** @type {(inputs: Modpacks_Configs_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`配置文件已移除`)
};

const ja_modpacks_configs_removed = /** @type {(inputs: Modpacks_Configs_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`設定ファイルを削除しました`)
};

/**
* | output |
* | --- |
* | "Config files removed" |
*
* @param {Modpacks_Configs_RemovedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_configs_removed = /** @type {((inputs?: Modpacks_Configs_RemovedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Configs_RemovedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_configs_removed(inputs)
	if (locale === "de") return de_modpacks_configs_removed(inputs)
	if (locale === "fr") return fr_modpacks_configs_removed(inputs)
	if (locale === "it") return it_modpacks_configs_removed(inputs)
	if (locale === "nl") return nl_modpacks_configs_removed(inputs)
	if (locale === "pl") return pl_modpacks_configs_removed(inputs)
	if (locale === "pt") return pt_modpacks_configs_removed(inputs)
	if (locale === "ru") return ru_modpacks_configs_removed(inputs)
	if (locale === "sv") return sv_modpacks_configs_removed(inputs)
	if (locale === "tr") return tr_modpacks_configs_removed(inputs)
	if (locale === "zh") return zh_modpacks_configs_removed(inputs)
	if (locale === "ja") return ja_modpacks_configs_removed(inputs)
	return en_modpacks_configs_removed(inputs)
});
