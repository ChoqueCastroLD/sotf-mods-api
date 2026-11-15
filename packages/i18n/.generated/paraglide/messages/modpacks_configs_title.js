/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Configs_TitleInputs */

const en_modpacks_configs_title = /** @type {(inputs: Modpacks_Configs_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Config files`)
};

const es_modpacks_configs_title = /** @type {(inputs: Modpacks_Configs_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archivos de configuración`)
};

const de_modpacks_configs_title = /** @type {(inputs: Modpacks_Configs_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Konfigurationsdateien`)
};

const fr_modpacks_configs_title = /** @type {(inputs: Modpacks_Configs_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fichiers de configuration`)
};

const it_modpacks_configs_title = /** @type {(inputs: Modpacks_Configs_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`File di configurazione`)
};

const nl_modpacks_configs_title = /** @type {(inputs: Modpacks_Configs_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configuratiebestanden`)
};

const pl_modpacks_configs_title = /** @type {(inputs: Modpacks_Configs_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pliki konfiguracyjne`)
};

const pt_modpacks_configs_title = /** @type {(inputs: Modpacks_Configs_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arquivos de configuração`)
};

const ru_modpacks_configs_title = /** @type {(inputs: Modpacks_Configs_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Файлы настроек`)
};

const sv_modpacks_configs_title = /** @type {(inputs: Modpacks_Configs_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Konfigurationsfiler`)
};

const tr_modpacks_configs_title = /** @type {(inputs: Modpacks_Configs_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yapılandırma dosyaları`)
};

const zh_modpacks_configs_title = /** @type {(inputs: Modpacks_Configs_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`配置文件`)
};

const ja_modpacks_configs_title = /** @type {(inputs: Modpacks_Configs_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`設定ファイル`)
};

/**
* | output |
* | --- |
* | "Config files" |
*
* @param {Modpacks_Configs_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_configs_title = /** @type {((inputs?: Modpacks_Configs_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Configs_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_configs_title(inputs)
	if (locale === "de") return de_modpacks_configs_title(inputs)
	if (locale === "fr") return fr_modpacks_configs_title(inputs)
	if (locale === "it") return it_modpacks_configs_title(inputs)
	if (locale === "nl") return nl_modpacks_configs_title(inputs)
	if (locale === "pl") return pl_modpacks_configs_title(inputs)
	if (locale === "pt") return pt_modpacks_configs_title(inputs)
	if (locale === "ru") return ru_modpacks_configs_title(inputs)
	if (locale === "sv") return sv_modpacks_configs_title(inputs)
	if (locale === "tr") return tr_modpacks_configs_title(inputs)
	if (locale === "zh") return zh_modpacks_configs_title(inputs)
	if (locale === "ja") return ja_modpacks_configs_title(inputs)
	return en_modpacks_configs_title(inputs)
});
