/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Configs_Err_EmptyInputs */

const en_modpacks_configs_err_empty = /** @type {(inputs: Modpacks_Configs_Err_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The zip has no config files.`)
};

const es_modpacks_configs_err_empty = /** @type {(inputs: Modpacks_Configs_Err_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El zip no tiene archivos de configuración.`)
};

const de_modpacks_configs_err_empty = /** @type {(inputs: Modpacks_Configs_Err_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das Zip enthält keine Konfigurationsdateien.`)
};

const fr_modpacks_configs_err_empty = /** @type {(inputs: Modpacks_Configs_Err_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le zip ne contient aucun fichier de configuration.`)
};

const it_modpacks_configs_err_empty = /** @type {(inputs: Modpacks_Configs_Err_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lo zip non contiene file di configurazione.`)
};

const nl_modpacks_configs_err_empty = /** @type {(inputs: Modpacks_Configs_Err_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De zip bevat geen configuratiebestanden.`)
};

const pl_modpacks_configs_err_empty = /** @type {(inputs: Modpacks_Configs_Err_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zip nie zawiera plików konfiguracyjnych.`)
};

const pt_modpacks_configs_err_empty = /** @type {(inputs: Modpacks_Configs_Err_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O zip não tem arquivos de configuração.`)
};

const ru_modpacks_configs_err_empty = /** @type {(inputs: Modpacks_Configs_Err_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`В zip нет файлов настроек.`)
};

const sv_modpacks_configs_err_empty = /** @type {(inputs: Modpacks_Configs_Err_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zip-filen har inga konfigurationsfiler.`)
};

const tr_modpacks_configs_err_empty = /** @type {(inputs: Modpacks_Configs_Err_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zip'te yapılandırma dosyası yok.`)
};

const zh_modpacks_configs_err_empty = /** @type {(inputs: Modpacks_Configs_Err_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`zip 中没有配置文件。`)
};

const ja_modpacks_configs_err_empty = /** @type {(inputs: Modpacks_Configs_Err_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`zip に設定ファイルがありません。`)
};

/**
* | output |
* | --- |
* | "The zip has no config files." |
*
* @param {Modpacks_Configs_Err_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_configs_err_empty = /** @type {((inputs?: Modpacks_Configs_Err_EmptyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Configs_Err_EmptyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_configs_err_empty(inputs)
	if (locale === "de") return de_modpacks_configs_err_empty(inputs)
	if (locale === "fr") return fr_modpacks_configs_err_empty(inputs)
	if (locale === "it") return it_modpacks_configs_err_empty(inputs)
	if (locale === "nl") return nl_modpacks_configs_err_empty(inputs)
	if (locale === "pl") return pl_modpacks_configs_err_empty(inputs)
	if (locale === "pt") return pt_modpacks_configs_err_empty(inputs)
	if (locale === "ru") return ru_modpacks_configs_err_empty(inputs)
	if (locale === "sv") return sv_modpacks_configs_err_empty(inputs)
	if (locale === "tr") return tr_modpacks_configs_err_empty(inputs)
	if (locale === "zh") return zh_modpacks_configs_err_empty(inputs)
	if (locale === "ja") return ja_modpacks_configs_err_empty(inputs)
	return en_modpacks_configs_err_empty(inputs)
});
