/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Configs_Err_ExtensionInputs */

const en_modpacks_configs_err_extension = /** @type {(inputs: Modpacks_Configs_Err_ExtensionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Only config files are allowed: cfg, toml, json, ini, txt, xml and yml.`)
};

const es_modpacks_configs_err_extension = /** @type {(inputs: Modpacks_Configs_Err_ExtensionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo se permiten archivos de configuración: cfg, toml, json, ini, txt, xml y yml.`)
};

const de_modpacks_configs_err_extension = /** @type {(inputs: Modpacks_Configs_Err_ExtensionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nur Konfigurationsdateien sind erlaubt: cfg, toml, json, ini, txt, xml und yml.`)
};

const fr_modpacks_configs_err_extension = /** @type {(inputs: Modpacks_Configs_Err_ExtensionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seuls les fichiers de configuration sont acceptés : cfg, toml, json, ini, txt, xml et yml.`)
};

const it_modpacks_configs_err_extension = /** @type {(inputs: Modpacks_Configs_Err_ExtensionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sono ammessi solo file di configurazione: cfg, toml, json, ini, txt, xml e yml.`)
};

const nl_modpacks_configs_err_extension = /** @type {(inputs: Modpacks_Configs_Err_ExtensionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alleen configuratiebestanden zijn toegestaan: cfg, toml, json, ini, txt, xml en yml.`)
};

const pl_modpacks_configs_err_extension = /** @type {(inputs: Modpacks_Configs_Err_ExtensionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dozwolone są tylko pliki konfiguracyjne: cfg, toml, json, ini, txt, xml i yml.`)
};

const pt_modpacks_configs_err_extension = /** @type {(inputs: Modpacks_Configs_Err_ExtensionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Só são aceitos arquivos de configuração: cfg, toml, json, ini, txt, xml e yml.`)
};

const ru_modpacks_configs_err_extension = /** @type {(inputs: Modpacks_Configs_Err_ExtensionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Разрешены только файлы настроек: cfg, toml, json, ini, txt, xml и yml.`)
};

const sv_modpacks_configs_err_extension = /** @type {(inputs: Modpacks_Configs_Err_ExtensionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bara konfigurationsfiler är tillåtna: cfg, toml, json, ini, txt, xml och yml.`)
};

const tr_modpacks_configs_err_extension = /** @type {(inputs: Modpacks_Configs_Err_ExtensionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yalnızca yapılandırma dosyalarına izin verilir: cfg, toml, json, ini, txt, xml ve yml.`)
};

const zh_modpacks_configs_err_extension = /** @type {(inputs: Modpacks_Configs_Err_ExtensionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`只允许配置文件：cfg、toml、json、ini、txt、xml 和 yml。`)
};

const ja_modpacks_configs_err_extension = /** @type {(inputs: Modpacks_Configs_Err_ExtensionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`使えるのは設定ファイル（cfg、toml、json、ini、txt、xml、yml）だけです。`)
};

/**
* | output |
* | --- |
* | "Only config files are allowed: cfg, toml, json, ini, txt, xml and yml." |
*
* @param {Modpacks_Configs_Err_ExtensionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_configs_err_extension = /** @type {((inputs?: Modpacks_Configs_Err_ExtensionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Configs_Err_ExtensionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_configs_err_extension(inputs)
	if (locale === "de") return de_modpacks_configs_err_extension(inputs)
	if (locale === "fr") return fr_modpacks_configs_err_extension(inputs)
	if (locale === "it") return it_modpacks_configs_err_extension(inputs)
	if (locale === "nl") return nl_modpacks_configs_err_extension(inputs)
	if (locale === "pl") return pl_modpacks_configs_err_extension(inputs)
	if (locale === "pt") return pt_modpacks_configs_err_extension(inputs)
	if (locale === "ru") return ru_modpacks_configs_err_extension(inputs)
	if (locale === "sv") return sv_modpacks_configs_err_extension(inputs)
	if (locale === "tr") return tr_modpacks_configs_err_extension(inputs)
	if (locale === "zh") return zh_modpacks_configs_err_extension(inputs)
	if (locale === "ja") return ja_modpacks_configs_err_extension(inputs)
	return en_modpacks_configs_err_extension(inputs)
});
